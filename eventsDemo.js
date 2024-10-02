import { error } from 'console';
import {EventEmitter} from 'events'

//create an instance 
const myEmitter = new EventEmitter;

function helloHandler(name){
    console.log('Hello ' +  name)
}

function goodbyeHandler(name){
    console.log('Goodbye ' + name)
}

//register event 
myEmitter.on('greet', helloHandler)
myEmitter.on('goodbye', goodbyeHandler)

//emit event
myEmitter.emit('greet', 'john')
myEmitter.emit('goodbye', 'john')

//error handler
myEmitter.on('error', (err)=>{
    console.log('An error ocurred:', err)
})

//simulate error
myEmitter.emit('error', new Error('something went wrong'));