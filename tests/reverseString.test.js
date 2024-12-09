const reverseString = require('../src/reverseString');

describe('reverseString', () => {
    test('reverses a normal string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });

    test('handles an empty string', () => {
        expect(reverseString('')).toBe('');
    });

    test('handles a single character string', () => {
        expect(reverseString('a')).toBe('a');
    });

    test('reverses a string with spaces', () => {
        expect(reverseString('hello world')).toBe('dlrow olleh');
    });

    test('returns an empty string if the input is not a string', () => {
        expect(reverseString(123)).toBe('');
        expect(reverseString(null)).toBe('');
        expect(reverseString(undefined)).toBe('');
        expect(reverseString({})).toBe('');
    });

})
