"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var net = require("node:net");
// start a new server listening on port x
// handle new connections / multi connection at same time
// - need a clients array, and just add to array as we go
var clients = {};
var server = net.createServer(function (c) {
    var userName;
    c.write("< Welcome to my chat server! What is your nickname?\n> ");
    c.on('data', function (data) {
        var trimmedStringData = data.toString().trim();
        if (!userName && clients.hasOwnProperty(trimmedStringData)) {
            c.write("That username is already taken, please choose another:");
            c.write('> ');
        }
        if (!userName && !clients.hasOwnProperty(trimmedStringData)) {
            userName = trimmedStringData;
            var userNames = Object.keys(clients);
            var numOtherUsers = userNames.length;
            c.write("You are connected with ".concat(numOtherUsers, " other user").concat(numOtherUsers > 1 || numOtherUsers === 0 ? 's' : '', ": [").concat(userNames.join(', '), "]\n"));
            c.write('> ');
            clients[userName] = c;
        }
        if (trimmedStringData === 'disconnect') {
            c.end("you have disconnected!\n");
        }
        Object.entries(clients).forEach(function (_a) {
            var clientUserName = _a[0], client = _a[1];
            if (client.address() !== c.address()) {
                client.write("\n< <".concat(userName, "> ").concat(trimmedStringData, "\n"));
                client.write('> ');
            }
        });
    });
    c.on('end', function () {
        Object.entries(clients).forEach(function (_a) {
            var clientUserName = _a[0], client = _a[1];
            if (client !== c) {
                client.write("< *".concat(userName, "* has left the chat.\n"));
            }
            else {
                delete clients[userName];
            }
        });
    });
});
server.on('error', function (err) {
    console.log('err', err);
});
server.listen(8124, function () {
    console.log('server bound on port 8124');
});
// handle receive messages and send to all connected clients and not the sender
// handle disconnect in a "clean way"
