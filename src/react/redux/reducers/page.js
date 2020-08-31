const PageDefaultState = {
    id: null
};


export default (state = PageDefaultState, action) => {
    switch(action.type) {
        case 'PAGE_ID__SET':
            return {
                ...state,
                id: action.id
            };

        default:
            return state; 
    };
};