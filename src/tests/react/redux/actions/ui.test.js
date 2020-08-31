/* Actions */
import {
    navMenu_Mobile__Toggle, navMenu_Mobile__On, navMenu_Mobile__Off
} from '../../../../react/redux/actions/ui';


/* Tests */
test('navMenu_Mobile__Toggle action', () => {
    const action = navMenu_Mobile__Toggle();

    expect(action).toEqual({
        type: 'MOBILE_NAV__TOGGLE'
    });
});


test('navMenu_Mobile__On action', () => {
    const action = navMenu_Mobile__On();

    expect(action).toEqual({
        type: 'MOBILE_NAV__ON'
    });
});


test('navMenu_Mobile__Off action', () => {
    const action = navMenu_Mobile__Off();

    expect(action).toEqual({
        type: 'MOBILE_NAV__OFF'
    });
});