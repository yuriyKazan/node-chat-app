const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('Should reject non-string values.', () => {
        var name = 123;
        expect(isRealString(name)).toBe(false);
    });

    it('Should reject string with only spaces.', () => {
        var name = '   ';
        expect(isRealString(name)).toBe(false);
    });

    it('Should allow string with non-space chracters.', () => {
        var name = ' sd 67 *';
        expect(isRealString(name)).toBe(true);
    });
});