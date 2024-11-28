// App.js
import React from 'react';
import { SafeAreaView } from 'react-native';
import TodoScreen from './screens/TodoScreen';
import TodoController from './controllers/TodoController';

const App = () => {
    const todoController = new TodoController();

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TodoScreen controller={todoController} />
        </SafeAreaView>
    );
};

export default App;
