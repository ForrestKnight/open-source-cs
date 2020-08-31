/* Reducer */
import UI_Reducer from '../../../../react/redux/reducers/ui';


/* Tests */
test('UI_Reducer default state', () => {
    const state = UI_Reducer(undefined, {type: '@@init'});

    expect(state).toEqual({
        navMenu_Mobile: false
    });
});


test('Toggle mobile nav', () => {
    const state = UI_Reducer(undefined, {type: "MOBILE_NAV__TOGGLE"});

    expect(state.navMenu_Mobile).toBe(true);
});


test('Toggle mobile nav on', () => {
    const state = UI_Reducer(
        {navMenu_Mobile: false}, 
        {type: "MOBILE_NAV__ON"}
    );

    expect(state.navMenu_Mobile).toBe(true);
});


test('Toggle mobile nav off', () => {
    const state = UI_Reducer(
        {navMenu_Mobile: true},
        {type: "MOBILE_NAV__OFF"});

    expect(state.navMenu_Mobile).toBe(false);
});