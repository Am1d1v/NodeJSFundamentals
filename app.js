
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

// prependListener
myEmitter.prependListener('msg', () => {
    console.log('Prepend Listener Data');
});

myEmitter.emit('msg', 'Some data');


// once
myEmitter.once('off', () => {
    console.log('Once');
});
myEmitter.emit('off');
myEmitter.emit('off');

// Get Max Listeners. Default Value of Max Listeners
console.log(myEmitter.getMaxListeners());

// Set Max Listeners
myEmitter.setMaxListeners(15);

// Get new value of Max Listeners
console.log(myEmitter.getMaxListeners());

// Count of Listeners
console.log(myEmitter.listenerCount('msg'));
console.log(myEmitter.listenerCount('off'));

console.log(myEmitter.listeners('msg'));
console.log(myEmitter.eventNames());
