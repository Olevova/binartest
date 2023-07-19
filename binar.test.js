const indexFinder = require('./binar');
// add 7 tests, but if you add more functionality to a function,
// such as checking if the array is sorted ..., the number of tests can indeed increase

describe('test of indexFinder function ', () => {
    test('finds indexe of number if it one in the array', () => {
        expect(indexFinder(10, [1, 2, 3, 5, 10])).toEqual([4]);
    });
    test('finds indexes of number if it more then one in the right part of array', () => {
        expect(indexFinder(10, [1, 2, 3, 5, 10, 10, 10])).toEqual([4, 5, 6]);
    });
    test('finds indexes of number if it more then one in the left part of array', () => {
        expect(indexFinder(2, [1, 2, 2, 3, 5, 10, 10, 10])).toEqual([1, 2]);
    });
    test('return -1 if in array does not have seeking number', () => {
        expect(indexFinder(6, [1, 2, 3, 5, 10, 10, 10])).toEqual(-1)
    });
    test('exit from function if first function argument is not a number', () => {
        console.log = jest.fn();
        indexFinder('15', [1, 2, 3, 5, 10, 10, 10]);
        expect(console.log).toHaveBeenCalledWith('Please enter integer number');
    });
    test('exit from function if second function argument is not an array', () => {
        console.log = jest.fn();
        indexFinder(15, { 'number': 5 });
        expect(console.log).toHaveBeenCalledWith('Please enter an array where you want to search');
  
    });
    test('returns -1 if the array is empty', () => {
        expect(indexFinder(10, [])).toEqual(-1);
    });
});