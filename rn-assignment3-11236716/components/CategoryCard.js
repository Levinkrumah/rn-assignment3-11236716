import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CategoryCard = ({ category }) => {
  return (
    <View style={styles.container}>
      <Image source={category.icon} style={styles.icon} />
      <Text style={styles.text}>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CategoryCard;
