// components/TodoList.js
import React from 'react';
import { FlatList } from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({ todos, onRemove, onToggle }) => (
    <FlatList
        data={todos}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
            <TodoItem todo={item} onRemove={onRemove} onToggle={onToggle} />
        )}
    />
);

export default TodoList;
