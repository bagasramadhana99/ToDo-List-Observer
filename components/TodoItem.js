// components/TodoItem.js
import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

const TodoItem = ({ todo, onRemove, onToggle }) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => onToggle(todo.id)}>
            <Text style={[styles.text, todo.isCompleted && styles.completed]}>
                {todo.task}
            </Text>
        </TouchableOpacity>
        <Button title="Delete" onPress={() => onRemove(todo.id)} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#ccc',
    },
    text: {
        fontSize: 16,
    },
    completed: {
        textDecorationLine: 'line-through',
        color: 'gray',
    },
});

export default TodoItem;
