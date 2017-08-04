import React from 'react';
import { Provider } from 'mobx-react/native';
import Todo from './components';
import TodoStore from './stores/todo';

const stores = {
  todo: new TodoStore(),
};

export default () => (
  <Provider {...stores}>
    <Todo />
  </Provider>
);
