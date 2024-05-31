import React from 'react';
import { View, Text, ScrollView, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import CategoryCard from '../components/CategoryCard';
import TaskItem from '../components/TaskItem';

const categories = [
  { id: '1', title: 'Exercise', tasks: 12, image: require('../assets/images/exercise.png') },
  { id: '2', title: 'Study', tasks: 12, image: require('../assets/images/study.png') },
  
];

const tasks = [
  { id: '1', title: 'Mobile App Development' },
  { id: '2', title: 'Web Development' },
  
];

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Devs</Text>
        <Text style={styles.taskCount}>14 tasks today</Text>
      </View>
      <TextInput style={styles.search} placeholder="Search" />
      <Button title="Filter" onPress={() => {}} />
      <Text style={styles.sectionTitle}>Categories</Text>
      <ScrollView horizontal>
        {categories.map(category => (
          <CategoryCard key={category.id} title={category.title} tasks={category.tasks} image={category.image} />
        ))}
      </ScrollView>
      <Text style={styles.sectionTitle}>Ongoing Task</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem title={item.title} />}
        keyExtractor={item => item.id}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginBottom: 16,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskCount: {
    fontSize: 16,
    color: 'gray',
  },
  search: {
    padding: 8,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
  },
});

export default HomeScreen;
