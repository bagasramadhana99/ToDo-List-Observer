// screens/TodoScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import TodoList from '../components/TodoList';

const TodoScreen = ({ controller }) => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');

    // Observer function to handle updates
    const update = (newTodos) => {
        setTodos([...newTodos]);
    };

    useEffect(() => {
        // Register as an observer
        controller.addObserver({ update });
        
        // Initialize todos
        setTodos(controller.getTodos());

        // Cleanup function to remove observer on unmount
        return () => controller.removeObserver({ update });
    }, [controller]);

    const handleAddTodo = () => {
        if (task) {
            controller.addTodo(task);
            setTask('');
        }
    };

    const handleRemoveTodo = (id) => {
        controller.removeTodo(id);
    };

    const handleToggleTodo = (id) => {
        controller.toggleTodo(id);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <TextInput
                style={styles.input}
                placeholder="Add new task"
                value={task}
                onChangeText={setTask}
            />
            <Button title="Add Todo" onPress={handleAddTodo} />
            <TodoList todos={todos} onRemove={handleRemoveTodo} onToggle={handleToggleTodo} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        marginTop: 20,
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
});

export default TodoScreen;
