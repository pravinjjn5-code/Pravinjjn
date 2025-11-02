import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import TypingScreen from './src/screens/TypingScreen';
import StatsScreen from './src/screens/StatsScreen';
import { getAllLessons } from './src/data/lessons';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [completedStats, setCompletedStats] = useState([]);

  const allLessons = getAllLessons();

  const handleSelectLesson = (lesson) => {
    setSelectedLesson(lesson);
    setCurrentScreen('typing');
  };

  const handleLessonComplete = (stats) => {
    const newStats = {
      ...stats,
      lessonTitle: selectedLesson.title,
      timestamp: new Date().toISOString(),
    };
    setCompletedStats([...completedStats, newStats]);

    // Find next lesson
    const currentIndex = allLessons.findIndex(
      (lesson) => lesson.id === selectedLesson.id
    );
    if (currentIndex < allLessons.length - 1) {
      setSelectedLesson(allLessons[currentIndex + 1]);
    } else {
      // No more lessons, go back to home
      setCurrentScreen('home');
    }
  };

  const handleGoHome = () => {
    setCurrentScreen('home');
    setSelectedLesson(null);
  };

  const handleViewStats = () => {
    setCurrentScreen('stats');
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {currentScreen === 'home' && (
        <View style={styles.screenContainer}>
          <HomeScreen
            lessons={allLessons}
            onSelectLesson={handleSelectLesson}
          />
          <TouchableOpacity
            style={styles.statsButton}
            onPress={handleViewStats}
          >
            <Text style={styles.statsButtonText}>View Statistics</Text>
          </TouchableOpacity>
        </View>
      )}

      {currentScreen === 'typing' && selectedLesson && (
        <View style={styles.screenContainer}>
          <TouchableOpacity style={styles.homeButton} onPress={handleGoHome}>
            <Text style={styles.homeButtonText}>← Back</Text>
          </TouchableOpacity>
          <TypingScreen
            lesson={selectedLesson}
            onComplete={handleLessonComplete}
          />
        </View>
      )}

      {currentScreen === 'stats' && (
        <StatsScreen stats={completedStats} onGoBack={handleGoHome} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  screenContainer: {
    flex: 1,
  },
  statsButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  statsButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  homeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    margin: 15,
    borderRadius: 10,
    alignSelf: 'flex-start',
  },
  homeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
