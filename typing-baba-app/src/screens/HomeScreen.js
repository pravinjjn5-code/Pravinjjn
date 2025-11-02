import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

const HomeScreen = ({ onSelectLesson, lessons }) => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('beginner');

  const difficulties = ['beginner', 'intermediate', 'advanced'];

  const filteredLessons = lessons.filter(
    (lesson) => lesson.difficulty === selectedDifficulty
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.appTitle}>Typing Baba</Text>
        <Text style={styles.subtitle}>Master Your Typing Skills</Text>
      </View>

      <View style={styles.difficultyContainer}>
        {difficulties.map((difficulty) => (
          <TouchableOpacity
            key={difficulty}
            style={[
              styles.difficultyButton,
              selectedDifficulty === difficulty && styles.selectedDifficulty,
            ]}
            onPress={() => setSelectedDifficulty(difficulty)}
          >
            <Text
              style={[
                styles.difficultyText,
                selectedDifficulty === difficulty && styles.selectedDifficultyText,
              ]}
            >
              {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.lessonsContainer}>
        <Text style={styles.sectionTitle}>
          {selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)} Lessons
        </Text>
        {filteredLessons.map((lesson) => (
          <TouchableOpacity
            key={lesson.id}
            style={styles.lessonCard}
            onPress={() => onSelectLesson(lesson)}
          >
            <View style={styles.lessonHeader}>
              <Text style={styles.lessonTitle}>{lesson.title}</Text>
              <View style={styles.lessonBadge}>
                <Text style={styles.lessonBadgeText}>
                  Lesson {lesson.id}
                </Text>
              </View>
            </View>
            <Text style={styles.lessonPreview} numberOfLines={2}>
              {lesson.text}
            </Text>
            <View style={styles.lessonFooter}>
              <Text style={styles.lessonLength}>
                {lesson.text.length} characters
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
  },
  header: {
    padding: 20,
    backgroundColor: '#2196F3',
    alignItems: 'center',
  },
  appTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#E3F2FD',
  },
  difficultyContainer: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  difficultyButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: '#2a2a2a',
    borderWidth: 2,
    borderColor: '#2a2a2a',
  },
  selectedDifficulty: {
    backgroundColor: '#2196F3',
    borderColor: '#2196F3',
  },
  difficultyText: {
    color: '#999',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedDifficultyText: {
    color: '#fff',
  },
  lessonsContainer: {
    flex: 1,
    padding: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  lessonCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  lessonHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  lessonTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    flex: 1,
  },
  lessonBadge: {
    backgroundColor: '#2196F3',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  lessonBadgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  lessonPreview: {
    fontSize: 14,
    color: '#999',
    lineHeight: 20,
    marginBottom: 10,
  },
  lessonFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  lessonLength: {
    fontSize: 12,
    color: '#666',
  },
});

export default HomeScreen;
