import React, { useState } from 'react';
import { View, Text, ScrollView, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import CategoryItem from '../components/CategoryItem';
import TaskItem from '../components/TaskItem';

const HomeScreen = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([
    // Exercise-related tasks
    'Morning Yoga',
    'Evening Jogging',
    'Weight Training',
    
    // Study-related tasks
    'Read Chapter 5 of History Book',
    'Complete Math Homework',
    'Review Chemistry Notes',
    
    // Code-related tasks
    'Finish React Native Assignment',
    'Debug JavaScript Project',
    'Attend Coding Workshop',
    
    // Cook-related tasks
    'Prepare Breakfast',
    'Cook Dinner',
    'Bake a Cake',
    
    // Other categories
    'Meditate for 20 minutes',
    'Travel to the Museum',
    'Go Grocery Shopping',
    'Read a Novel',
    'Practice Piano',
    'Water the Plants',
  ]);

  const categories = [
    { name: 'Exercise', icon: require('../components/assets/images/exercise.png') },
    { name: 'Study', icon: require('../components/assets/images/study.png') },
    { name: 'Code', icon: require('../components/assets/images/code.png') },
    { name: 'Cook', icon: require('../components/assets/images/cook.png') },
    { name: 'Read', icon: require('../components/assets/images/read.png') },
    { name: 'Meditate', icon: require('../components/assets/images/meditate.png') },
    { name: 'Travel', icon: require('../components/assets/images/travel.png') },
    { name: 'Shop', icon: require('../components/assets/images/shop.png') },
  ];

  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <ScrollView horizontal style={styles.categories}>
        {categories.map((category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </ScrollView>
      <Text style={styles.title}>Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <TaskItem task={item} />}
        keyExtractor={(item, index) => index.toString()}
      />
      <TextInput
        style={styles.input}
        value={task}
        onChangeText={setTask}
        placeholder="Add a new task"
      />
      <Button title="Add Task" onPress={addTask} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
});

export default HomeScreen;
