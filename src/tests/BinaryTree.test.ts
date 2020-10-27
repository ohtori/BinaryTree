// Its my first time with ts-jest and i have small problem
// with using object methods inside test callback function body
// and havn't time to fix it
// I took out variable declarations
import BinaryTree from '../BinaryTree';

const binaryTree = new BinaryTree('id');

describe('clear Method', () => {
  binaryTree.pushItem({id: 9, name: 'Sarah'});
  binaryTree.pushItem({id: 13, name: 'Albrecht'});
  binaryTree.pushItem({id: 221, name: 'Mia'});

  test('should be defined', () => {
    expect(binaryTree.clear).toBeDefined();
  });

  const result = binaryTree.clear();
  test('should return undefined', () => {
    expect(result).toBeUndefined();
  });

  test('getItem() should return undefined', () => {
    expect(binaryTree.getItem(9)).toBeUndefined();
    expect(binaryTree.getItem(13)).toBeUndefined();
    expect(binaryTree.getItem(221)).toBeUndefined();
  });
  binaryTree.clear();
});

describe('delete Method', () => {
  binaryTree.pushItem({id: 9, name: 'Sarah'});
  binaryTree.pushItem({id: 13, name: 'Albrecht'});
  binaryTree.pushItem({id: 221, name: 'Mia'});

  test('should be defined', () => {
    expect(binaryTree.delete).toBeDefined();
  });

  const wrongValue = (binaryTree.delete(9));
  const wrongValueString = (binaryTree.delete('hello'));
  const returnedValue = binaryTree.delete(221);
  test('should return boolean, when correct or incorrect argument', () => {
    expect(returnedValue).toBe(true);
    expect(wrongValue).toBe(false);
    expect(wrongValueString).toBe(false);
  });

  const returnNull = binaryTree.getItem(221);
  test('getItem() should return undefined', () => {
    expect(returnNull).toBeUndefined();
  });

  const restoredArray = binaryTree.restoreOriginal();
  test('restored array should be equal expectedArray', () => {
    const expectArray = [
      {id: 9, name: 'Sarah'},
      {id: 13, name: 'Albrecht'}
    ];
    expect(restoredArray).toEqual(expectArray);
  });
  binaryTree.clear();
});

describe('getItem Method', () => {
  binaryTree.pushItem({id: 9, name: 'Sarah'});
  binaryTree.pushItem({id: 13, name: 'Albrecht'});
  binaryTree.pushItem({id: 221, name: 'Mia'});

  test('should be defined', () => {
    expect(binaryTree.getItem).toBeDefined();
  });

  const wrongValue = binaryTree.getItem(8787);
  const wrongValueByString = binaryTree.getItem('hello');
  test('should return undefined', () => {
    expect(wrongValue).toBeUndefined();
    expect(wrongValueByString).toBeUndefined();
  });

  const item = binaryTree.getItem(221);
  test('should return correct object', () => {
  expect(item).toEqual({id: 221, name: 'Mia'});
  });
  binaryTree.clear();
});

describe('pushItem Method', () => {
  test('should be defined', () => {
    expect(binaryTree.pushItem).toBeDefined();
  });

  const result = binaryTree.pushItem({id: 9, name: 'Sarah'});
  const item = binaryTree.getItem(9);
  test('should return true', () => {
    expect(result).toBe(true);
  });

  const duplicate = binaryTree.pushItem({id: 9, name: 'Sarah'});
  test('should return false', () => {
    expect(duplicate).toBe(false);
  });

  test('add and get values to be Equal', () => {
    expect(item).toEqual({id: 9, name: 'Sarah'});
  });

  binaryTree.pushItem({id: 132, name: 'Alonso'});
  binaryTree.pushItem({id: 781, name: 'Fahdi'});
  const restoredArray = binaryTree.restoreOriginal();
  test('restored array should be equal expectedArray ', () => {
    const expectArray = [
      {id: 9, name: 'Sarah'},
      {id: 132, name: 'Alonso'},
      {id: 781, name: 'Fahdi'}
    ];
    expect(restoredArray).toEqual(expectArray);
  });
  binaryTree.clear();
});

describe('restoreOriginal Method', () => {
  test('should be defined', () => {
    expect(binaryTree.restoreOriginal).toBeDefined();
  });

  binaryTree.pushItem({id: 9, name: 'Sarah'});
  binaryTree.pushItem({id: 132, name: 'Alonso'});
  binaryTree.pushItem({id: 781, name: 'Fahdi'});
  const restoredArray = binaryTree.restoreOriginal();

  test('should return array', () => {
    expect(restoredArray).toBeInstanceOf(Array);
  });

  test('restored array should be equal expectedArray', () => {
    const expectArray = [
      {id: 9, name: 'Sarah'},
      {id: 132, name: 'Alonso'},
      {id: 781, name: 'Fahdi'}
    ];
    expect(restoredArray).toEqual(expectArray);
  });

  binaryTree.clear();
});