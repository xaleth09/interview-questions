import * as net from "node:net";

// start a new server listening on port x
// handle new connections / multi connection at same time
// - need a clients array, and just add to array as we go
const clients: { [userName: string]: net.Socket } = {}

const server = net.createServer((c) => {
    let userName: string;
    c.write("< Welcome to my chat server! What is your nickname?\n> ")

    c.on('data', (data) => {
        const trimmedStringData = data.toString().trim()
        if (!userName && clients.hasOwnProperty(trimmedStringData)) {
            c.write("That username is already taken, please choose another:")
            c.write('> ')
        }

        if (!userName && !clients.hasOwnProperty(trimmedStringData)) {
            userName = trimmedStringData;
            const userNames = Object.keys(clients)
            const numOtherUsers = userNames.length;
            c.write(`You are connected with ${numOtherUsers} other user${numOtherUsers > 1 || numOtherUsers === 0 ? 's' : ''}: [${userNames.join(', ')}]\n`)
            c.write('> ')
            clients[userName] = c;
        }

        if (trimmedStringData === 'disconnect') {
            c.end("you have disconnected!\n")
        }

        Object.entries(clients).forEach(([clientUserName, client]: [string, net.Socket]) => {
            if (client.address() !== c.address()) {
                client.write(`\n< <${userName}> ${trimmedStringData}\n`)
                client.write('> ')
            }
        })
    })

    c.on('end', () => {
        Object.entries(clients).forEach(([clientUserName, client]: [string, net.Socket]) => {
            if (client !== c) {
                client.write(`< *${userName}* has left the chat.\n`)
            } else {
                delete clients[userName]
            }
        })
    });
})

server.on('error', (err) => {
    console.log('err', err)
})

server.listen(8124, () => {
    console.log('server bound on port 8124');
});


// handle receive messages and send to all connected clients and not the sender

// handle disconnect in a "clean way"

