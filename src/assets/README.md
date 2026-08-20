# Profile Image

Place your professional photo here as `profile.jpg`.

The hero section references `/profile.jpg` from the public root. To use a file
from this folder instead, import it in `src/sections/Hero.tsx`:

```tsx
import profileImg from '@/assets/profile.jpg';
// ...
<img src={profileImg} alt={profile.name} />
```

Recommended: a 4:5 portrait photo, at least 800x1000px.
