var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        var messageObj = generateMessage('me', 'test message');
        expect(messageObj.from).toBe('me');
        expect(messageObj.text).toBe('test message');
        expect(messageObj.createdAt).toBeA('number');
    });

});