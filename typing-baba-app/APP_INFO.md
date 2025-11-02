# Typing Baba - App Information

## Overview
A complete mobile typing practice application built with React Native and Expo. This app helps users improve their typing speed and accuracy through structured lessons and real-time feedback.

## Technical Stack
- **Framework**: React Native 0.81.5
- **Platform**: Expo ~54.0.20
- **Language**: JavaScript (ES6+)
- **UI Library**: React Native Core Components
- **State Management**: React Hooks (useState, useEffect, useRef)

## App Architecture

```
typing-baba-app/
├── App.js                          # Main app entry with navigation logic
├── src/
│   ├── screens/                    # UI Screens
│   │   ├── HomeScreen.js          # Lesson selection
│   │   ├── TypingScreen.js        # Main typing interface
│   │   └── StatsScreen.js         # Performance statistics
│   ├── data/
│   │   └── lessons.js             # Lesson content and data
│   └── utils/
│       └── typingUtils.js         # Helper functions for calculations
├── assets/                         # Images and fonts
└── package.json                    # Dependencies and scripts
```

## Core Features

### 1. Typing Practice Interface (TypingScreen.js)
- Real-time character-by-character comparison
- Visual feedback with color coding
- Live WPM calculation
- Accuracy tracking
- Timer with auto-start on first keystroke
- Lesson completion detection

### 2. Lesson Management (HomeScreen.js)
- 3 difficulty levels (Beginner, Intermediate, Advanced)
- 9 pre-built lessons
- Filterable lesson list
- Lesson preview display
- Character count information

### 3. Progress Tracking (StatsScreen.js)
- Cumulative statistics
- Per-lesson performance records
- Average WPM calculation
- Best WPM tracking
- Accuracy history
- Lesson completion count

### 4. Utility Functions (typingUtils.js)
- WPM Calculation: `(correct chars / 5) / (time in minutes)`
- Accuracy: `(correct chars / total chars) × 100`
- Text comparison algorithm
- Time formatting

## Data Structure

### Lesson Object
```javascript
{
  id: Number,              // Unique identifier
  title: String,           // Lesson name
  text: String,            // Practice text
  difficulty: String       // 'beginner' | 'intermediate' | 'advanced'
}
```

### Stats Object
```javascript
{
  wpm: Number,             // Words per minute
  accuracy: Number,        // Percentage (0-100)
  correctChars: Number,    // Count of correct characters
  totalChars: Number,      // Total characters typed
  lessonTitle: String,     // Reference to lesson
  timestamp: String        // ISO date string
}
```

## Character Status Types
- **correct**: Typed correctly (green)
- **incorrect**: Typed wrong (red background)
- **pending**: Not yet typed (gray)
- **extra**: Extra characters beyond target text

## Color Scheme
```css
Primary Blue:    #2196F3
Success Green:   #4CAF50
Error Red:       #f44336
Warning Orange:  #FF9800
Background:      #1a1a1a
Card Background: #2a2a2a
Text Primary:    #ffffff
Text Secondary:  #999999
Text Disabled:   #666666
```

## Performance Metrics

### WPM (Words Per Minute)
Standard typing metric where 5 characters = 1 word
```javascript
WPM = (correctCharacters / 5) / (timeInSeconds / 60)
```

### Accuracy
Percentage of correctly typed characters
```javascript
Accuracy = (correctCharacters / totalTypedCharacters) × 100
```

### Timer
- Starts automatically on first keystroke
- Updates every second
- Stops when lesson is completed
- Format: MM:SS

## Screen Navigation Flow

```
HomeScreen
    ↓ (Select Lesson)
TypingScreen
    ↓ (Complete Lesson)
[Auto-advance to next lesson OR return to HomeScreen]

HomeScreen
    ↓ (View Statistics)
StatsScreen
    ↓ (Go Back)
HomeScreen
```

## State Management

### App.js (Global State)
- `currentScreen`: 'home' | 'typing' | 'stats'
- `selectedLesson`: Current lesson object or null
- `completedStats`: Array of completed lesson statistics

### TypingScreen (Local State)
- `typedText`: User's current input
- `startTime`: Timestamp when typing began
- `elapsedTime`: Seconds since start
- `isFinished`: Boolean for lesson completion
- `stats`: Current performance metrics

## Lesson Categories

### Beginner (3 lessons)
1. Home Row Keys - Basic key familiarization
2. Basic Words - Simple vocabulary
3. Simple Sentences - Short sentence practice

### Intermediate (3 lessons)
4. Common Phrases - Popular expressions
5. Numbers and Letters - Mixed alphanumeric
6. Mixed Content - Real-world text

### Advanced (3 lessons)
7. Complex Sentences - Long-form content
8. Technical Text - Programming/technical terms
9. Special Characters - Symbols and punctuation

## Key Components

### TextInput (React Native)
- `multiline`: Supports multiple lines
- `autoFocus`: Automatically focuses on mount
- `editable`: Can be disabled when lesson complete

### TouchableOpacity
- Used for all interactive buttons
- Provides visual feedback on press

### ScrollView
- Enables scrolling for long content
- Used in all screens for content overflow

### SafeAreaView
- Handles device notches and safe areas
- Ensures content is visible on all devices

## Performance Optimizations

1. **Memoization Ready**: Structure allows easy integration of React.memo
2. **Efficient Updates**: useRef for timer prevents unnecessary re-renders
3. **Conditional Rendering**: Only active screen is rendered
4. **Clean-up Effects**: Timer intervals properly cleared

## Testing the App

### Quick Test Checklist
- [ ] App launches without errors
- [ ] All three difficulty levels show lessons
- [ ] Typing starts timer on first keystroke
- [ ] Characters show correct colors
- [ ] WPM calculates correctly
- [ ] Accuracy updates in real-time
- [ ] Lesson completes when text matches
- [ ] Stats screen shows completed lessons
- [ ] Navigation works between screens
- [ ] Reset button clears typing state

## Extensibility

Easy to add:
- ✓ More lessons (edit lessons.js)
- ✓ Custom themes (modify StyleSheet)
- ✓ AsyncStorage for persistence
- ✓ Sound effects (expo-av)
- ✓ Animations (react-native-reanimated)
- ✓ Leaderboards (backend integration)

## Dependencies

### Core
- `expo`: Development platform
- `react`: UI library
- `react-native`: Mobile framework

### Expo Packages
- `expo-status-bar`: Status bar styling

### No External Libraries Required
All functionality is built with React Native core components!

## Build for Production

### Android APK
```bash
expo build:android
```

### iOS IPA
```bash
expo build:ios
```

### Web Build
```bash
expo build:web
```

## Environment Requirements
- Node.js 14+
- npm or yarn
- Expo CLI (installed automatically)
- iOS: macOS with Xcode (for simulator)
- Android: Android Studio (for emulator)
- Mobile: Expo Go app

## File Sizes
- Total project: ~300MB (with node_modules)
- Source code only: ~50KB
- Installed app size: ~30-50MB

## Browser Compatibility (Web Version)
- Chrome/Edge: ✓ Full support
- Firefox: ✓ Full support
- Safari: ✓ Full support
- Mobile browsers: ✓ Full support

---

Created with React Native & Expo
Built for learning and practice
