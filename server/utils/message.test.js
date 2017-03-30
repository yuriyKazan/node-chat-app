var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('Should generate correct message object', () => {
        var from = 'me';
        var text = 'test message';
        var messageObj = generateMessage(from, text);

        expect(messageObj.createdAt).toBeA('number');
        expect(messageObj).toInclude({from, text});
    });

});

describe('generateLocationMessage', () => {
    it('Should generate correct location object', () => {
        var from = 'me';
        var latitude = 10;
        var longitude = 4;
        var url = 'https://www.google.com/maps?q=10,4';
        var messageObj = generateLocationMessage(from, latitude, longitude);

        expect(messageObj.createdAt).toBeA('number');        
        expect(messageObj).toInclude({from, url});
    });

});