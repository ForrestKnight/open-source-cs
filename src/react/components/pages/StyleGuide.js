/* Packages */
import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';


/* Actions */
import {page_ID__Set} from '../../redux/actions/page';


/* Component */
export class StyleGuide extends React.Component {
    constructor(props) {
        super(props);
    };


    componentWillMount() {
        this.page_ID__Set('StyleGuide');
    };


    page_ID__Set = (id) => {
        this.props.page_ID__Set(id);
    };


    render() {
        return (
            <div id="StyleGuide">
                <section className="StyleGuide__headers">
                    <h1>This is an h1 tag</h1>
                    <h2>This is an h2 tag</h2>
                    <h3>This is an h3 tag</h3>
                    <h4>This is an h4 tag</h4>
                    <h5>This is an h5 tag</h5>
                    <h6>This is an h6 tag</h6>
                </section>

                <section className="StyleGuide__normalText">
                    <p>This is a normal p tag</p>
                    <p>This is a p tag <i>with an i tag</i></p>
                    <p>This is a p tag <em>with an em tag</em></p>
                    <p>This is a p tag <b>with a b tag</b></p>
                    <p>This is a p tag <mark>with a mark tag</mark></p>
                    <p>This is a p tag <span>with a span tag</span></p>
                    <p>This is a p tag <small>with a small tag</small></p>
                    <p>This is a p tag <strong>with a strong tag</strong></p>
                    <p>This is a p tag <u>with a u tag</u></p>
                    <p>This is a p tag <NavLink to="/StyleGuide">with an a/navlink tag</NavLink></p>
                    <p>This is a p tag <code>with a code tag</code></p>
                    <p>This is a p tag <cite>with a cite tag</cite></p>
                </section>

                <section className="StyleGuide__button">
                    <button onClick={(e) => e.preventDefault}>This is a button tag</button><br/>
                </section>

                <section className="StyleGuide__list">
                    <ol>
                        <li>This</li>
                        <li>is</li>
                        <li>an</li>
                        <li>ordered</li>
                        <li>list</li>
                    </ol>

                    <ul>
                        <li>This</li>
                        <li>is</li>
                        <li>an</li>
                        <li>unordered</li>
                        <li>list</li>
                    </ul>
                </section>
            </div>
        );
    };
};


/* Connect to store */
const mapDispatchToProps = (dispatch) => ({
    page_ID__Set: (id) => {
        dispatch(page_ID__Set(id));
    }
});


export default connect(undefined, mapDispatchToProps)(StyleGuide);