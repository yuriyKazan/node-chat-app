const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;

    beforeEach(() => {
        users = new Users();
        users.users = [{
            id: '1',
            name: 'Mike',
            room: 'Node Course'
        }, {
            id: '2',
            name: 'Jen',
            room: 'React Course'
        }, {
            id: '3',
            name: 'Julie',
            room: 'Node Course'
        }];
    });

    it('Should add new user.', () => {
        var users = new Users();
        var user = {
            id: '123',
            name: 'Me',
            room: 'Fans'
        };
        var resUser = users.addUser(user.id , user.name, user.room);

        expect(users.users).toEqual([user]);
    });

    it('Should remove a user.', () => {
        var targetUser = users.removeUser('3');

        expect(targetUser.id).toBe('3');
        expect(users.users.length).toBe(2);
    });

    it('Should not remove a user.', () => {
        var targetUser = users.removeUser('4');

        expect(targetUser).toNotExist();
        expect(users.users.length).toBe(3);
    });

    it('Should find user.', () => {
        var targetUser = users.getUser('3');

        expect(targetUser).toBe(users.users[2]);
    });

    it('Should not find user.', () => {
        var targetUser = users.getUser('4');

        expect(targetUser).toNotExist();
    });

    it('Should return names for node course.', () => {
        var userList = users.getUserList('Node Course');

        expect(userList).toEqual(['Mike', 'Julie']);
    });

    it('Should return names for react course.', () => {
        var userList = users.getUserList('React Course');

        expect(userList).toEqual(['Jen']);
    });
});