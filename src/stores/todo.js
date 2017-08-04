import { observable } from 'mobx';

export default class TodoStore {
  // TODO: とりあえずデータを入れておく
  @observable list = [
    { id: 1, message: 'todo!', isComplete: false, },
    { id: 2, message: 'complete todo!', isComplete: true, },
    { id: 3, message: 'complete todo!', isComplete: true, },
  ];
}
