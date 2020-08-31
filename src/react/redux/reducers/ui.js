const UIDefaultState = {
    navMenu_Mobile: false
};


export default (state = UIDefaultState, action) => {
    switch(action.type) {
        case 'MOBILE_NAV__TOGGLE':
            return {
                ...state,
                navMenu_Mobile: state.navMenu_Mobile ? false : true
            };

        case 'MOBILE_NAV__ON':
            return {
                ...state,
                navMenu_Mobile: true
            };
    

        case 'MOBILE_NAV__OFF':
            return {
                ...state,
                navMenu_Mobile: false
            };

        default:
            return state;
    };
};