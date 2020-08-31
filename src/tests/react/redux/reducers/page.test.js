/* Reducer */
import Page_Reducer from '../../../../react/redux/reducers/page';


/* Tests */
test('Page_Reducer default state', () => {
    const state = Page_Reducer(undefined, {type: '@@init'});

    expect(state).toEqual({
        id: null
    });
})
