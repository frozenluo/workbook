import {
    ADD_NOTE,
    ADD_URL,
    FILTER_BY
} from './actions';

const initialState = {
    urls: [{
        url: 'http://google.com',
        description: ''
    }, {
        url: 'http://baidu.com',
        description: ''
    }],
    notes: [{
        note: 'asdasda',
        description: ''
    }]
};

function add(state, action) {
    if (typeof state === 'undefined') {
        return initialState;
    }
    const newState = Object.assign({}, state);
    switch(action.type) {
        case FILTER_BY:
            const {keyword} = action;
            const f_urls = [];
            const f_notes = [];
            initialState.urls.forEach((node) => {
                if (node.url.indexOf(keyword) > -1) {
                    f_urls.push(node);
                }
            });
            initialState.notes.forEach((node) => {
                if (node.note.indexOf(keyword) > -1) {
                    f_urls.push(node);
                }
            });
            newState.urls = f_urls;
            newState.notes = f_notes;
            return newState;
        case ADD_NOTE:
        case ADD_URL:
        default:
            return newState;
    }
}

export default add;