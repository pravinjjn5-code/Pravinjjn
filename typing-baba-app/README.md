# Typing Baba Mobile App

A mobile typing practice application built with React Native and Expo, similar to Typing Baba. Practice your typing skills, improve your WPM (Words Per Minute), and track your progress.

## Features

- **Multiple Difficulty Levels**: Beginner, Intermediate, and Advanced lessons
- **Real-time Feedback**: See your typing accuracy with color-coded characters
  - Green: Correct characters
  - Red: Incorrect characters
  - Gray: Pending characters
- **Performance Metrics**:
  - Words Per Minute (WPM) calculation
  - Accuracy percentage
  - Real-time timer
- **Progress Tracking**: View your statistics and performance history
- **9 Built-in Lessons**: Practice with various texts from simple to complex
- **Clean UI**: Modern, dark-themed interface

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (optional, but recommended)

### Setup

1. Navigate to the project directory:
```bash
cd typing-baba-app
```

2. Install dependencies:
```bash
npm install
```

## Running the App

### Option 1: Using Expo Go (Easiest)

1. Start the development server:
```bash
npm start
```

2. Install Expo Go app on your phone:
   - [iOS App Store](https://apps.apple.com/app/expo-go/id982107779)
   - [Google Play Store](https://play.google.com/store/apps/details?id=host.exp.exponent)

3. Scan the QR code from the terminal with your phone camera (iOS) or Expo Go app (Android)

### Option 2: Run on Android Emulator

```bash
npm run android
```

### Option 3: Run on iOS Simulator (macOS only)

```bash
npm run ios
```

### Option 4: Run in Web Browser

```bash
npm run web
```

## Project Structure

```
typing-baba-app/
├── src/
│   ├── components/        # Reusable components (future expansion)
│   ├── screens/
│   │   ├── HomeScreen.js      # Lesson selection screen
│   │   ├── TypingScreen.js    # Main typing practice screen
│   │   └── StatsScreen.js     # Statistics and progress screen
│   ├── data/
│   │   └── lessons.js         # Typing lessons data
│   └── utils/
│       └── typingUtils.js     # Utility functions for calculations
├── App.js                 # Main application component
└── package.json
```

## How to Use

1. **Select Difficulty**: Choose between Beginner, Intermediate, or Advanced
2. **Pick a Lesson**: Tap on any lesson card to start practicing
3. **Start Typing**: Begin typing in the input field
4. **Track Performance**: Watch your WPM, accuracy, and time in real-time
5. **Complete & Progress**: Finish the lesson to see your results and move to the next
6. **View Statistics**: Check your overall performance and history

## Key Components

### HomeScreen
- Displays all available lessons
- Filter by difficulty level
- Shows lesson previews and character counts

### TypingScreen
- Real-time typing practice interface
- Color-coded character feedback
- Live WPM and accuracy calculation
- Timer and performance metrics
- Reset and next lesson options

### StatsScreen
- Overall performance summary
- Average WPM and accuracy
- Best WPM score
- Detailed history of completed lessons

## Customization

### Adding New Lessons

Edit `src/data/lessons.js` and add new lesson objects:

```javascript
{
  id: 10,
  title: "Your Lesson Title",
  text: "Your practice text here...",
  difficulty: "beginner" // or "intermediate" or "advanced"
}
```

### Modifying Styles

Each screen component has its own StyleSheet that you can customize:
- Colors, fonts, and spacing in each screen file
- Dark theme by default (#1a1a1a background, #2a2a2a cards)

## Technologies Used

- **React Native**: Cross-platform mobile framework
- **Expo**: Development platform for React Native
- **JavaScript (ES6+)**: Programming language
- **React Hooks**: State management

## Performance Calculations

- **WPM (Words Per Minute)**: `(correctCharacters / 5) / (timeInSeconds / 60)`
- **Accuracy**: `(correctCharacters / totalTypedCharacters) * 100`

## Future Enhancements

- Persistent storage with AsyncStorage
- User profiles and accounts
- Leaderboards
- Custom lesson creation
- Sound effects and haptic feedback
- Dark/Light theme toggle
- More lesson categories (code, quotes, etc.)
- Multiplayer typing races

## License

MIT License - Feel free to use and modify as needed.

## Support

For issues or questions, please check the Expo documentation:
- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
