const _ = require('lodash');

class Users {
    constructor () {
        this.users = [];
    }
    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }
    removeUser(id) {
        var targetUser = this.getUser(id);

        if (targetUser) {
            _.remove(this.users, function(user) {
                return user.id === id;
            });
        }
        return targetUser;
    };
    getUser (id) {
        return this.users.filter((user) => user.id === id)[0];
    };
    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    };
}

module.exports = {Users};