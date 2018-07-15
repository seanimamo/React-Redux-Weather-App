import {FETCH_WEATHER} from '../actions/action_fetchWeather.js';

//note we want the weather prop to be an array so we default it to []
export default function(state = [], action){
   
    switch(action.type){
        case FETCH_WEATHER:

            //console.log('Action Recieved', action);
            //notice we always return a new array for state and never directly modify the current state object. (you're supposed to use this.setState)
            return [action.payload.data];
    } 
    return state;
}