import { FETCH_WEATHER } from "../actions/index";

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
            // ES6 feature of concat array elements; make a new array and
            // and add the new element in payload.data to the front of the array
            // and take the old element in the state array and concat them after payload.data
            return [ action.payload.data, ...state ];
    }
    return state;
}