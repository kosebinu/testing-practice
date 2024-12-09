const capitalize = require('../src/capitalize');

describe('capitalize', () => {
    test('capitalizes the first character of a string', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test('returns an empty string if the input is an empty string', () => {
        expect(capitalize('')).toBe('');
    });

    test('handles a single character string', () => {
        expect(capitalize('a')).toBe('A');
    });
});