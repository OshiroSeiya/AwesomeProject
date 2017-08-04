import React, { Component } from 'react';
import { CheckBox, FormInput } from 'react-native-elements';
import {
  Alert,
  Button,
  View,
  ScrollView,
} from 'react-native';

// TODO: モック用のデータ(後にMobXに沈む)
const todoList = [
  { id: 1, message: 'todo!', isComplete: false, },
  { id: 2, message: 'complete todo!', isComplete: true, },
  { id: 3, message: 'complete todo!', isComplete: true, },
];

export default class Todo extends Component {
  render() {
    // チェックボックス用のjsxを吐き出す
    const TodoCheckBox = (row) => (
      <CheckBox
        key={row.id}
        title={row.message}
        onPress={() => console.log('todoトグル')}
        onLongPress={() => {
          Alert.alert(
            '確認',
            `[${row.message}]を削除しますか？`,
            [
              { text: '削除しない', style: 'cancel' },
              { text: '削除', onPress: () => console.log('todo削除') },
            ],
          );
        }}
        checked={row.isComplete}
      />
    );

    return (
      <View style={{ flex: 1 }}>
        <View style={{ marginTop: 20, flexDirection: 'row'}}>
          <View style={{ flex: 5 }}>
            <FormInput
              autoCapitalize="none"
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={() => console.log('add')}
              title="ADD"
            />
          </View>
        </View>
        <ScrollView style={{ flex: 1 }}>
          {todoList.map(TodoCheckBox)}
        </ScrollView>
      </View>
    );
  }
}
