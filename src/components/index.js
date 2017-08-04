import React, { Component } from 'react';
import { CheckBox, FormInput } from 'react-native-elements';
import { inject, observer } from 'mobx-react/native';
import {
  Alert,
  Button,
  View,
  ScrollView,
} from 'react-native';

@inject('todo')
@observer
export default class Todo extends Component {
  render() {
    const { todo } = this.props;
    // チェックボックス用のjsxを吐き出す
    const TodoCheckBox = (row) => (
      <CheckBox
        key={row.id}
        title={row.message}
        onPress={() => todo.toggleComplete(row.id)}
        onLongPress={() => {
          Alert.alert(
            '確認',
            `[${row.message}]を削除しますか？`,
            [
              { text: '削除しない', style: 'cancel' },
              { text: '削除', onPress: () => todo.del(row.id) },
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
              value={todo.inputText}
              onChangeText={(message) => todo.onChangeText(message)}
              onSubmitEditing={() => todo.add()}
            />
          </View>
          <View style={{ flex: 1 }}>
            <Button
              onPress={() => todo.add()}
              title="ADD"
            />
          </View>
        </View>
        <ScrollView style={{ flex: 1 }}>
          {todo.list.map(TodoCheckBox)}
        </ScrollView>
      </View>
    );
  }
}
