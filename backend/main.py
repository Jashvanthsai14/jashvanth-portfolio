from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from database import get_db
from models import ContactMessage
from schemas import ContactMessageCreate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
    'http://localhost:5173',
    'http://127.0.0.1:5173',
    'http://localhost:5174',
    'http://127.0.0.1:5174',
    'https://jashvanthsaiachyuta.me',
    'https://www.jashvanthsaiachyuta.me',
],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)


@app.get("/")
def home():
    return {"message": "Portfolio Backend is Running!"}


@app.get("/db-test")
def database_test(db: Session = Depends(get_db)):
    return {"message": "Database connected successfully!"}


@app.post("/api/contact")
def create_contact(
    contact: ContactMessageCreate,
    db: Session = Depends(get_db)
):
    new_message = ContactMessage(
        name=contact.name,
        email=contact.email,
        message=contact.message
    )

    db.add(new_message)
    db.commit()
    db.refresh(new_message)

    return {
        "message": "Message sent successfully!",
        "id": new_message.id
    }