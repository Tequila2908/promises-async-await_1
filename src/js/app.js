
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  static load() {
    return new Promise((resolve) => {
      const data = read();
      data.then((response) => {
        const obj = json(response);
        return obj;
      }).then((obj) => {
        resolve(obj);
      })
    })
  }
}

