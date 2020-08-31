/* Packages */
import React from 'react';
import {shallow} from 'enzyme';


/* Component */
import {Router} from '../../../react/routers/Router';


/* Test config */
let component, load;
beforeEach(() => {
    load = jest.fn();
    component = shallow(
        <Router
            load={load}
        />
    );
});


/* Tests */
test('Render Router', () => {
    expect(component).toMatchSnapshot();
});


test('Router initial state', () => {
    expect(component.state('loaded')).toBe(false);
    expect(component.state('loading')).toBe(false);
});


test('Router load function', () => {
    setTimeout(() => {
        expect(load).toHaveBeenCalled();
    }, 200);

    setTimeout(() => {
        expect(component.state('loaded')).toBe(true);
        expect(component.state('loading')).toBe(true);    
    }, 500);
});