import { createStore, combineReducers } from 'redux';

const item = (state = [],action) => {
    switch(action.type){
        case 'ADD_IMAGE' :
            return {
                id : action.id,
                url : action.url,
                caption : action.caption,
                toggle : false
            }

        case 'EDIT_CAPTION' :
           if( state.id === action.id){
            return {
                ...state,
                toggle: !state.toggle
            }}

        case 'SUBMIT_CAPTION' :
            if( state.id === action.id){
            return {
                ...state,
                id : action.id,
                caption : action.caption,
                toggle: !state.toggle
            }}
        default :
            return state;
    }
}

const items = (state = [],action) => {
    switch(action.type){
        case 'ADD_IMAGE' :
            return [
                ...state,
                item(undefined,action)
            ]
        case 'EDIT_CAPTION':
            return state.map(t => item(t,action));

        case 'SUBMIT_CAPTION':
            return state.map(w => item(w,action));

        default :
            return state;
    }
}

const imgApp = combineReducers({items});

const store = createStore(imgApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

console.log(store.getState());
export default store;

