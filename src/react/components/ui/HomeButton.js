/* Packages */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


/* Actions */
import {navMenu_Mobile__Toggle} from '../../redux/actions/ui';


/* Component */
export class HomeButton extends React.Component {
    constructor(props) {
        super(props);
    };


    navMenu_Mobile__Toggle = () => {
        /* Enable scrolling */
        const html = document.getElementsByTagName('HTML')[0];
        html.setAttribute('data-Mobile_Nav', 'false');
        
        this.props.navMenu_Mobile__Toggle();
    };


    render() {
        return (
            <section 
                id="HomeButton"
                onClick={this.props.navMenu_Mobile ? this.navMenu_Mobile__Toggle : undefined}
            >
                <NavLink 
                    to="/"
                    className="HomeButton__logo"
                >
                    {this.props.navMenu_Mobile ?
                        /* Nav Menu HomeButton */
                        <img src="/dist/images/homeButton/HomeButtonMobileNav.png" alt="Home"/>
                        :

                        /* Default HomeButton */
                        <img src="/dist/images/homeButton/HomeButton.png" alt="Home"/>
                    }
                </NavLink>
            </section>
        );
    };
};


/* Connect to store */
const mapStateToProps = (state) => {
    return {
        navMenu_Mobile: state.ui.navMenu_Mobile
    };
};


const mapDispatchToProps = (dispatch) => ({
    navMenu_Mobile__Toggle: () => {
        dispatch(navMenu_Mobile__Toggle());
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeButton);