import { observable, action } from 'mobx';

export default class TodoStore {
  // TODO: とりあえずデータを入れておく
  @observable list = [
    { id: 1, message: 'todo!', isComplete: false, },
    { id: 2, message: 'complete todo!', isComplete: true, },
    { id: 3, message: 'complete todo!', isComplete: true, },
  ];
  @observable inputText = '';

  // テキストフォームに変更があればの文字列を保持する
  @action onChangeText(message) {
    this.inputText = message;
  }
}
