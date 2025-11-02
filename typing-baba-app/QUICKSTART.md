# Quick Start Guide - Typing Baba App

## Get Started in 3 Steps

### 1. Start the Development Server

```bash
cd typing-baba-app
npm start
```

You'll see a QR code in the terminal.

### 2. Install Expo Go on Your Phone

- **iOS**: [Download from App Store](https://apps.apple.com/app/expo-go/id982107779)
- **Android**: [Download from Google Play](https://play.google.com/store/apps/details?id=host.exp.exponent)

### 3. Scan & Run

- **iOS**: Open Camera app and scan the QR code
- **Android**: Open Expo Go app and scan the QR code

Your app will load instantly!

---

## App Features Overview

### Home Screen
- Select difficulty level (Beginner/Intermediate/Advanced)
- Browse 9 different typing lessons
- View lesson previews and character counts
- Access statistics from bottom button

### Typing Practice Screen
- Real-time character-by-character feedback:
  - ✓ Green = Correct
  - ✗ Red = Wrong
  - Gray = Not typed yet
- Live metrics dashboard:
  - WPM (Words Per Minute)
  - Accuracy percentage
  - Timer
- Reset button to restart lesson
- Auto-progress to next lesson on completion

### Statistics Screen
- Total lessons completed
- Average WPM across all lessons
- Average accuracy percentage
- Best WPM score
- Detailed history of each attempt

---

## Keyboard Shortcuts (Web Version)

When running on web (`npm run web`):
- Type naturally - no special commands needed
- Focus stays on input automatically

---

## Troubleshooting

### App won't load?
1. Make sure you're on the same WiFi network as your computer
2. Try pressing 'r' in the terminal to reload
3. Restart the Expo server (Ctrl+C, then `npm start`)

### Typing feels laggy?
- Close other apps on your phone
- Try running on web version (`npm run web`) for better performance
- Restart the app

### Can't see lessons?
- Make sure all files in `src/data/lessons.js` are properly saved
- Check the terminal for any JavaScript errors

---

## Tips for Best Experience

1. **Practice Regularly**: Try to complete at least one lesson daily
2. **Start Easy**: Begin with beginner lessons to build muscle memory
3. **Focus on Accuracy First**: Speed will come naturally with practice
4. **Use Proper Posture**: Sit correctly and position your hands on home keys
5. **Track Progress**: Check your statistics regularly to see improvement

---

## Customization Ideas

Want to personalize your app? Here are some easy modifications:

### Add Your Own Lessons
Edit `src/data/lessons.js`:
```javascript
{
  id: 10,
  title: "My Custom Lesson",
  text: "Type whatever text you want to practice here!",
  difficulty: "beginner"
}
```

### Change Colors
Edit the `styles` object in any screen file:
- Blue theme: `#2196F3`
- Success green: `#4CAF50`
- Error red: `#f44336`
- Background: `#1a1a1a`

### Adjust WPM Calculation
Edit `src/utils/typingUtils.js` if you want different calculation methods

---

## Running on Different Platforms

### Web Browser (Instant, no phone needed)
```bash
npm run web
```
Opens in your default browser at `http://localhost:8081`

### Android Emulator (Requires Android Studio)
```bash
npm run android
```

### iOS Simulator (Requires macOS + Xcode)
```bash
npm run ios
```

---

## What's Next?

After you're comfortable with the app, consider adding:
- Persistent storage (save your stats locally)
- More lesson categories (coding, quotes, etc.)
- Sound effects for correct/incorrect typing
- Achievements and badges
- Multiplayer mode
- Custom themes

Check `README.md` for more detailed documentation!

---

Happy Typing! 🎯⌨️
