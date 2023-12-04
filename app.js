// Events

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const logDBConnection = () => {
    console.log('Connected');
};

myEmitter.addListener('connected', logDBConnection);
myEmitter.emit('connected');




