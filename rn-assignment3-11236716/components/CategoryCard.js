import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ title, tasks, image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
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
  image: {
    width: 50,
    height: 50,
    marginBottom: 8,
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
