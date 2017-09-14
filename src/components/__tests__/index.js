import 'react-native';
import React from 'react';
import { Provider } from 'mobx-react/native';
import renderer from 'react-test-renderer';
import Todo from '../index.js';
import TodoStore from '../../stores/todo';

describe('<Todo />', () => {
  it('renders correctly', () => {
    const stores = {
      todo: new TodoStore(),
    };
    const tree = renderer.create(
      <Provider {...stores}>
        <Todo />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('add todo renders correctly', () => {
    const stores = {
      todo: new TodoStore(),
    };

    // 一つのtodoを追加
    stores.todo.list = [
      {
        id: 'aaaaaaaa',
        message: 'test',
        isComplete: false,
      },
    ];

    const tree = renderer.create(
      <Provider {...stores}>
        <Todo />
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
