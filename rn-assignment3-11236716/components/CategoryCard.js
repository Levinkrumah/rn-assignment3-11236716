import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryCard = ({ title, tasks }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.tasks}>{tasks} Tasks</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    marginRight: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tasks: {
    fontSize: 14,
    color: 'gray',
  },
});

export default CategoryCard;