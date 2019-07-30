import {DATA_UPDATE, NEW_EVENT, TOGGLE_RENDER} from '../actions'

const initialState = {
    events: [{date: new Date("2019-01-01"), text: "First appointment."}, {date: new Date("2019-01-16"), text: "Medicine given."}],
    emotions: [
        {worry: 54, happy: 9, love: 0, sad: 75, hate: 17, date: new Date("2019-01-01")},
        {worry: 48, happy: 13, love: 2, sad: 62, hate: 2, date: new Date("2019-01-06")},
        {worry: 30, happy: 33, love: 12, sad: 42, hate: 1, date: new Date("2019-01-11")},
        {worry: 21, happy: 42, love: 12, sad: 30, hate: 1, date: new Date("2019-01-16")},
        {worry: 17, happy: 49, love: 12, sad: 17, hate: 1, date: new Date("2019-01-21")},
        {worry: 12, happy: 56, love: 22, sad: 13, hate: 1, date: new Date("2019-01-26")},
        {worry: 8, happy: 78, love: 36, sad: 11, hate: 1, date: new Date("2019-01-31")},
    ],
    rerender: false
}

function sunriseApp(state = initialState, action) {
    switch(action.type){
        case DATA_UPDATE:
            return {
                ...state,
                events: action.events,
                emotions: action.emotions,
                rerender: true
            };
        case NEW_EVENT:
            return Object.assign({}, state, {
                events: [
                    ...state.events, 
                    action.event
                ],
                rerender: true
            });
        case TOGGLE_RENDER:
            return Object.assign({}, state, {
                rerender: false
            });
        default:
            return state;
    }
}

export default sunriseApp;