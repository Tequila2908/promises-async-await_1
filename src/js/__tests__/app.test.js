/* eslint-disable linebreak-style */
import Character from '../app';

test('correct data', () => {
  const sample = new Character('user123', 'Daemon');
  const result = {
    name: 'user123',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    protection: 40,
  };

  expect(sample).toEqual(result);
});

test('uncorrect name', () => {
  expect(() => new Character('user1231414141', 'Daemon')).toThrowError('Поле name должно содержать от 2 до 10 символов');
});

test('uncorrect type', () => {
  expect(() => new Character('user123', 'Damon')).toThrowError('Неверный тип персонажа');
});
