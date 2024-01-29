// Events

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// const logDBConnection = () => {
//     console.log('DB connected');
// };

// myEmitter.addListener('connected', logDBConnection);

// setInterval(() => {
//     myEmitter.emit('connected');
//     myEmitter.removeListener('connected', logDBConnection);
//     myEmitter.emit('connected');
// }, 2000)


myEmitter.on('msg', (data) => {
    console.log(`${data} Received`);
})

myEmitter.emit('msg', 'Some data');


// once
myEmitter.once('off', () => {
    console.log('Once');
});
myEmitter.emit('off');
myEmitter.emit('off');
