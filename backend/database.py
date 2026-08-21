import os
from pathlib import Path

from dotenv import load_dotenv
from sqlalchemy import URL, create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

load_dotenv(Path(__file__).resolve().parent / '.env')

DB_HOST = os.getenv("DB_HOST", "localhost").strip()
DB_PORT = int(os.getenv("DB_PORT", "3306").strip())
DB_USER = os.getenv("DB_USER", "root").strip()
DB_PASSWORD = os.getenv("DB_PASSWORD", "").strip()
DB_NAME = os.getenv("DB_NAME", "portfolio_db").strip()
DB_SSL_CA = os.getenv("DB_SSL_CA", "").strip()

if not DB_HOST:
    raise ValueError("DB_HOST must be a bare database hostname")
if any(character.isspace() for character in DB_HOST):
    raise ValueError("DB_HOST must not contain whitespace")
if "://" in DB_HOST or any(character in DB_HOST for character in ("/", "\\", ":", '"', "'")):
    raise ValueError("DB_HOST must be a bare hostname, not a database URL")
if DB_HOST.endswith('.') or '..' in DB_HOST:
    raise ValueError("DB_HOST must not contain an empty DNS label")

DATABASE_URL = URL.create(
    drivername="mysql+pymysql",
    username=DB_USER,
    password=DB_PASSWORD,
    host=DB_HOST,
    port=DB_PORT,
    database=DB_NAME,
)

ssl_options = {}
if DB_SSL_CA:
    ssl_options["ca"] = DB_SSL_CA

engine = create_engine(
    DATABASE_URL,
    connect_args={"ssl": ssl_options},
    pool_pre_ping=True,
)

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)

Base = declarative_base()


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()