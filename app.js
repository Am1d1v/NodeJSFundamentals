// Events

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const logDBConnection = () => {
    console.log('Connected');
};

myEmitter.addListener('connected', logDBConnection);

setInterval(() => {
    myEmitter.emit('connected');
    myEmitter.removeListener('connected', logDBConnection);
    myEmitter.emit('connected');
}, 2000)



