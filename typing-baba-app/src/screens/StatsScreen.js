import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const StatsScreen = ({ stats, onGoBack }) => {
  const calculateAverageWPM = () => {
    if (stats.length === 0) return 0;
    const sum = stats.reduce((acc, stat) => acc + stat.wpm, 0);
    return Math.round(sum / stats.length);
  };

  const calculateAverageAccuracy = () => {
    if (stats.length === 0) return 0;
    const sum = stats.reduce((acc, stat) => acc + stat.accuracy, 0);
    return Math.round(sum / stats.length);
  };

  const getBestWPM = () => {
    if (stats.length === 0) return 0;
    return Math.max(...stats.map((stat) => stat.wpm));
  };

  const getTotalLessons = () => {
    return stats.length;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Your Statistics</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.summaryContainer}>
          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{getTotalLessons()}</Text>
            <Text style={styles.summaryLabel}>Lessons Completed</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{calculateAverageWPM()}</Text>
            <Text style={styles.summaryLabel}>Average WPM</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{calculateAverageAccuracy()}%</Text>
            <Text style={styles.summaryLabel}>Average Accuracy</Text>
          </View>

          <View style={styles.summaryCard}>
            <Text style={styles.summaryValue}>{getBestWPM()}</Text>
            <Text style={styles.summaryLabel}>Best WPM</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Recent Performance</Text>

        {stats.length === 0 ? (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
              No statistics yet. Complete some lessons to see your progress!
            </Text>
          </View>
        ) : (
          stats
            .slice()
            .reverse()
            .map((stat, index) => (
              <View key={index} style={styles.statCard}>
                <View style={styles.statHeader}>
                  <Text style={styles.statIndex}>#{stats.length - index}</Text>
                  {stat.lessonTitle && (
                    <Text style={styles.lessonTitle}>{stat.lessonTitle}</Text>
                  )}
                </View>
                <View style={styles.statDetails}>
                  <View style={styles.statItem}>
                    <Text style={styles.statItemValue}>{stat.wpm}</Text>
                    <Text style={styles.statItemLabel}>WPM</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statItemValue}>{stat.accuracy}%</Text>
                    <Text style={styles.statItemLabel}>Accuracy</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statItemValue}>
                      {stat.correctChars}/{stat.totalChars}
                    </Text>
                    <Text style={styles.statItemLabel}>Correct</Text>
                  </View>
                </View>
              </View>
            ))
        )}
      </ScrollView>

      <TouchableOpacity style={styles.backButton} onPress={onGoBack}>
        <Text style={styles.backButtonText}>Back to Lessons</Text>
      </TouchableOpacity>
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
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  scrollContent: {
    padding: 15,
  },
  summaryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  summaryCard: {
    width: '48%',
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#2196F3',
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#2196F3',
    marginBottom: 5,
  },
  summaryLabel: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
    marginTop: 10,
  },
  emptyContainer: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#999',
    textAlign: 'center',
  },
  statCard: {
    backgroundColor: '#2a2a2a',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statIndex: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2196F3',
    marginRight: 10,
  },
  lessonTitle: {
    fontSize: 16,
    color: '#fff',
    flex: 1,
  },
  statDetails: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    alignItems: 'center',
  },
  statItemValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  statItemLabel: {
    fontSize: 12,
    color: '#999',
    marginTop: 5,
  },
  backButton: {
    backgroundColor: '#2196F3',
    padding: 15,
    margin: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default StatsScreen;
