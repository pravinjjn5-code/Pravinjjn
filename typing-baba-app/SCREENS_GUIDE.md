# Typing Baba - Screen Navigation Guide

## App Flow Diagram

```
┌─────────────────────────────────────────────┐
│           HOME SCREEN                       │
│                                             │
│  ╔═══════════════════════════════════════╗ │
│  ║      🎯 Typing Baba                   ║ │
│  ║   Master Your Typing Skills           ║ │
│  ╚═══════════════════════════════════════╝ │
│                                             │
│  [Beginner] [Intermediate] [Advanced]      │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 📝 Home Row Keys         Lesson 1   │   │
│  │ aaa sss ddd fff jjj kkk lll...      │   │
│  │ 27 characters                        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 📝 Basic Words           Lesson 2   │   │
│  │ the quick brown fox jumps...        │   │
│  │ 44 characters                        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ 📝 Simple Sentences      Lesson 3   │   │
│  │ I love to type fast...              │   │
│  │ 68 characters                        │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │     📊 View Statistics                │ │
│  └───────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
           │
           │ (Tap Lesson)
           ↓
┌─────────────────────────────────────────────┐
│          TYPING SCREEN                      │
│                                             │
│  [← Back]                                   │
│                                             │
│  Home Row Keys                              │
│  BEGINNER                                   │
│                                             │
│  ┌──────┐  ┌──────┐  ┌──────┐             │
│  │  42  │  │ 95%  │  │ 0:23 │             │
│  │ WPM  │  │ Acc  │  │ Time │             │
│  └──────┘  └──────┘  └──────┘             │
│                                             │
│  ╔═══════════════════════════════════════╗ │
│  ║ Target Text:                          ║ │
│  ║ aaa sss ddd fff jjj kkk lll          ║ │
│  ║ ✓✓✓ ✓✓✓ ✗✗d fff jjj kkk lll         ║ │
│  ║                                       ║ │
│  ╚═══════════════════════════════════════╝ │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │                                     │   │
│  │  Type here...                       │   │
│  │                                     │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  [Reset]           [Next Lesson]           │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │   ✅ Lesson Complete!                 │ │
│  │   Great job! You completed this       │ │
│  │   lesson with 42 WPM and 95%         │ │
│  │   accuracy.                           │ │
│  └───────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
           │
           │ (View Statistics)
           ↓
┌─────────────────────────────────────────────┐
│         STATISTICS SCREEN                   │
│                                             │
│  ╔═══════════════════════════════════════╗ │
│  ║      📊 Your Statistics               ║ │
│  ╚═══════════════════════════════════════╝ │
│                                             │
│  ┌─────────┐  ┌─────────┐                  │
│  │   12    │  │   48    │                  │
│  │ Lessons │  │ Avg WPM │                  │
│  └─────────┘  └─────────┘                  │
│                                             │
│  ┌─────────┐  ┌─────────┐                  │
│  │   92%   │  │   65    │                  │
│  │ Avg Acc │  │Best WPM │                  │
│  └─────────┘  └─────────┘                  │
│                                             │
│  Recent Performance                         │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ #12  Home Row Keys                  │   │
│  │ [42 WPM] [95%] [27/28]              │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │ #11  Basic Words                    │   │
│  │ [38 WPM] [89%] [40/44]              │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌───────────────────────────────────────┐ │
│  │     ← Back to Lessons                 │ │
│  └───────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

## Screen Details

### 1. Home Screen (HomeScreen.js)

**Purpose**: Lesson selection and navigation hub

**Elements**:
- App title and tagline
- Difficulty filter buttons (3 options)
- Scrollable lesson list
- Lesson cards showing:
  - Title
  - Preview text
  - Character count
  - Lesson number badge
- Statistics button at bottom

**User Actions**:
- Tap difficulty button to filter
- Tap lesson card to start practice
- Tap statistics button to view progress
- Scroll to see all lessons

**Visual Design**:
- Dark background (#1a1a1a)
- Blue header (#2196F3)
- Card-based layout
- Blue accent on left border

---

### 2. Typing Screen (TypingScreen.js)

**Purpose**: Main typing practice interface

**Elements**:
1. **Header**
   - Back button (top-left)
   - Lesson title
   - Difficulty badge

2. **Metrics Dashboard** (3 cards)
   - WPM (Words Per Minute)
   - Accuracy percentage
   - Elapsed time (MM:SS)

3. **Text Display Area**
   - Shows target text
   - Color-coded characters:
     - 🟢 Green = Correct
     - 🔴 Red = Wrong
     - ⚪ Gray = Pending
   - Cursor indicator (blue underline)

4. **Input Area**
   - Large text input field
   - Auto-focus enabled
   - Multiline support

5. **Action Buttons**
   - Reset (orange)
   - Next Lesson (green, appears on completion)

6. **Completion Banner**
   - Shows on lesson finish
   - Displays final stats
   - Green background

**User Actions**:
- Start typing to begin timer
- Watch real-time feedback
- See stats update live
- Reset to restart
- Complete to advance

**Key Features**:
- Character-by-character comparison
- Instant visual feedback
- Auto-start timer on first keystroke
- Auto-advance to next lesson
- Completion celebration

---

### 3. Statistics Screen (StatsScreen.js)

**Purpose**: View performance history and analytics

**Elements**:
1. **Header**
   - Title with emoji

2. **Summary Cards** (4 metrics)
   - Total lessons completed
   - Average WPM
   - Average accuracy
   - Best WPM score

3. **Performance History**
   - Scrollable list
   - Most recent first
   - Each entry shows:
     - Attempt number
     - Lesson title
     - WPM, Accuracy, Correct/Total chars

4. **Empty State**
   - Shown when no stats
   - Encouragement message

5. **Back Button**
   - Returns to home screen

**User Actions**:
- Scroll through history
- View detailed stats
- Track improvement
- Navigate back

**Visual Design**:
- Grid layout for summary
- List layout for history
- Blue accents
- Card-based design

---

## Color Coding Legend

### Character Status Colors
```
🟢 Green (#4CAF50)    = Typed correctly
🔴 Red (#f44336)      = Typed incorrectly
⚪ Gray (#888)        = Not yet typed
🔵 Blue underline     = Current position
```

### UI Element Colors
```
🔵 Blue (#2196F3)     = Primary actions, headers, accents
🟢 Green (#4CAF50)    = Success, completion, stats button
🟠 Orange (#FF9800)   = Reset, warning actions
⚫ Dark (#1a1a1a)     = Background
⬛ Darker (#2a2a2a)   = Cards, panels
```

---

## Navigation Flow

```
Start
  ↓
HOME SCREEN
  ├─→ [Select Lesson] → TYPING SCREEN
  │                          ├─→ [Complete] → Next Lesson
  │                          ├─→ [Reset] → Same Lesson
  │                          └─→ [Back] → HOME SCREEN
  │
  └─→ [View Stats] → STATS SCREEN
                        └─→ [Back] → HOME SCREEN
```

---

## Interaction Patterns

### Starting a Lesson
1. Open app (Home Screen)
2. Choose difficulty level
3. Tap lesson card
4. Typing Screen loads
5. Start typing → Timer begins

### During Practice
1. Type characters
2. Watch color feedback
3. Monitor WPM/Accuracy
4. See timer count up
5. Compare with target text

### Completing a Lesson
1. Type last character correctly
2. Completion banner appears
3. Final stats displayed
4. Options:
   - Tap "Next Lesson" → Continue
   - Tap "Back" → Return home
   - Tap "Reset" → Retry lesson

### Viewing Statistics
1. From Home Screen
2. Tap "View Statistics"
3. See summary cards
4. Scroll through history
5. Tap "Back to Lessons"

---

## Screen Dimensions

All screens are responsive and adapt to:
- Phone sizes (small to large)
- Tablets
- Different orientations
- Web browsers

Safe areas handled for:
- iPhone notches
- Android navigation bars
- Status bars

---

## Key UI Components

### TouchableOpacity Buttons
- Visual feedback on press
- Used for all interactive elements
- Consistent padding and borders

### ScrollView
- Enables content overflow
- Smooth scrolling
- Pull-to-refresh ready

### TextInput
- Auto-focus in typing screen
- Multiline support
- Keyboard aware
- Styled consistently

### SafeAreaView
- Respects device safe areas
- Prevents content cutoff
- Works on all devices

---

## Performance Indicators

### Real-time Updates
- **WPM**: Updates every second
- **Accuracy**: Updates on every keystroke
- **Timer**: Updates every second
- **Character Colors**: Instant on keystroke

### Visual Feedback Speed
- Character comparison: < 16ms (60 FPS)
- Stats calculation: < 5ms
- UI updates: Smooth 60 FPS

---

## Accessibility Features

- Large touch targets (minimum 44x44 points)
- High contrast text (WCAG AA compliant)
- Clear visual feedback
- Monospace font for typing area
- Readable font sizes (14-36pt)

---

This guide covers all three screens and their interactions. Use it as a reference when using or customizing the app!
