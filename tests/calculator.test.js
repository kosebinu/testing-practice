const calculator = require('../src/calculator');

describe('calculator', () => {
    describe('add', () => {
        test('add two positive numbers', () => {
            expect(calculator.add(5, 3)).toBe(8);
        } );

        test('add a positive number and a negative number', () => {
            expect(calculator.add(5, -3)).toBe(2);
        } );

        test('add two negative numbers', () => {
            expect(calculator.add(-5, -3)).toBe(-8);
        } );

    });

    describe('subtract', () => {
        test('subtracts two positive numbers', () => {
            expect(calculator.subtract(5, 3)).toBe(2);
        } );

        test('subtracts a larger number from a smaller number', () => {
            expect(calculator.subtract(3, 5)).toBe(-2);
        } );

        test('subtracts with negative numbers', () => {
            expect(calculator.subtract(-5, -3)).toBe(-2);
        } );

    });

    describe('multiply', () => {
        test('multiplies two positive numbers', () => {
            expect(calculator.multiply(5, 3)).toBe(15);
        } );

        test('multiplies a positive number and a zero', () => {
            expect(calculator.multiply(3, 0)).toBe(0);
        } );

        test('multiplies two negative numbers', () => {
            expect(calculator.multiply(-5, -3)).toBe(15);
        } );

    });

    describe('divide', () => {
        test('divides two positive numbers', () => {
            expect(calculator.divide(6, 3)).toBe(2);
        } );

        test('throws an error when dividing by zero', () => {
            expect(() => calculator.divide(5, 0)).toThrow('Cannot divide by zero');
        });

        test('divides two negative numbers', () => {
            expect(calculator.divide(-6, -3)).toBe(2);
        } );

    });



});