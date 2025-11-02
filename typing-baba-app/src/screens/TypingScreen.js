import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {
  calculateWPM,
  calculateAccuracy,
  compareText,
  countCorrectCharacters,
  formatTime,
} from '../utils/typingUtils';

const TypingScreen = ({ lesson, onComplete }) => {
  const [typedText, setTypedText] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [stats, setStats] = useState({
    wpm: 0,
    accuracy: 100,
    correctChars: 0,
    totalChars: 0,
  });

  const inputRef = useRef(null);
  const timerRef = useRef(null);

  useEffect(() => {
    if (startTime && !isFinished) {
      timerRef.current = setInterval(() => {
        const elapsed = Math.floor((Date.now() - startTime) / 1000);
        setElapsedTime(elapsed);
      }, 1000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTime, isFinished]);

  useEffect(() => {
    if (typedText.length > 0 && !startTime) {
      setStartTime(Date.now());
    }

    const correctChars = countCorrectCharacters(lesson.text, typedText);
    const wpm = calculateWPM(correctChars, elapsedTime || 1);
    const accuracy = calculateAccuracy(correctChars, typedText.length);

    setStats({
      wpm,
      accuracy,
      correctChars,
      totalChars: typedText.length,
    });

    if (typedText === lesson.text) {
      handleFinish();
    }
  }, [typedText, elapsedTime]);

  const handleFinish = () => {
    if (isFinished) return;

    setIsFinished(true);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleReset = () => {
    setTypedText('');
    setStartTime(null);
    setElapsedTime(0);
    setIsFinished(false);
    setStats({
      wpm: 0,
      accuracy: 100,
      correctChars: 0,
      totalChars: 0,
    });
    inputRef.current?.focus();
  };

  const renderText = () => {
    const comparison = compareText(lesson.text, typedText);

    return (
      <View style={styles.textContainer}>
        {comparison.map((item, index) => {
          let color = '#888';
          let backgroundColor = 'transparent';

          if (item.status === 'correct') {
            color = '#4CAF50';
          } else if (item.status === 'incorrect') {
            color = '#fff';
            backgroundColor = '#f44336';
          } else if (item.status === 'pending') {
            color = '#888';
          }

          return (
            <Text
              key={index}
              style={[
                styles.char,
                { color, backgroundColor },
                index === typedText.length && styles.currentChar,
              ]}
            >
              {item.char === ' ' ? '␣' : item.char}
            </Text>
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>{lesson.title}</Text>
          <Text style={styles.difficulty}>
            {lesson.difficulty.toUpperCase()}
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{stats.wpm}</Text>
            <Text style={styles.statLabel}>WPM</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{stats.accuracy}%</Text>
            <Text style={styles.statLabel}>Accuracy</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>{formatTime(elapsedTime)}</Text>
            <Text style={styles.statLabel}>Time</Text>
          </View>
        </View>

        <View style={styles.textDisplayContainer}>
          {renderText()}
        </View>

        <TextInput
          ref={inputRef}
          style={styles.input}
          value={typedText}
          onChangeText={setTypedText}
          multiline
          autoFocus
          editable={!isFinished}
          placeholder="Start typing here..."
          placeholderTextColor="#999"
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.resetButton]}
            onPress={handleReset}
          >
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>

          {isFinished && onComplete && (
            <TouchableOpacity
              style={[styles.button, styles.nextButton]}
              onPress={() => onComplete(stats)}
            >
              <Text style={styles.buttonText}>Next Lesson</Text>
            </TouchableOpacity>
          )}
        </View>

        {isFinished && (
          <View style={styles.completionContainer}>
            <Text style={styles.completionTitle}>Lesson Complete!</Text>
            <Text style={styles.completionText}>
              Great job! You completed this lesson with {stats.wpm} WPM and{' '}
              {stats.accuracy}% accuracy.
            </Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  difficulty: {
    fontSize: 12,
    color: '#2196F3',
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
  },
  statBox: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  statLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  textDisplayContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    minHeight: 150,
  },
  textContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  char: {
    fontSize: 18,
    fontFamily: 'monospace',
    padding: 2,
  },
  currentChar: {
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
  },
  input: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    color: '#fff',
    fontSize: 16,
    minHeight: 100,
    textAlignVertical: 'top',
    borderWidth: 2,
    borderColor: '#2196F3',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  resetButton: {
    backgroundColor: '#FF9800',
  },
  nextButton: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  completionContainer: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#4CAF50',
    borderRadius: 10,
  },
  completionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  completionText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default TypingScreen;
