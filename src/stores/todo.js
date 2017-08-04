import { observable, action } from 'mobx';

export default class TodoStore {
  @observable list = [];
  @observable inputText = '';

  // テキストフォームに変更があればの文字列を保持する
  @action onChangeText(message) {
    this.inputText = message;
  }

  // todo listにデータを追加
  @action add() {
    // 空文字の場合は登録しない
    if (this.inputText === '') return;

    this.list.push({
      id: Math.random().toString(36).slice(-8),  // 雑にランダム文字列を生成
      message: this.inputText,
      isComplete: false,
    });
    this.inputText = '';
  }

  // 指定したidのコンプリートフラグを反転する
  @action toggleComplete(id) {
    this.list = this.list.map(o => o.id === id ? { ...o, isComplete: !o.isComplete } : o);
  }

  // 指定したidのtodoを削除する
  @action del(id) {
    this.list = this.list.filter(o => o.id !== id);
  }
}
