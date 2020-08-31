/* Packages */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';


/* Actions */
import {navMenu_Mobile__Toggle} from '../../../redux/actions/ui';


/* Component */
export class MobileNavigationLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sublink_Menu: false
        };
    };


    sublink_Menu__Toggle = () => {
        this.setState({
            sublink_Menu: !this.state.sublink_Menu
        });
    };


    navMenu_Mobile__Toggle = () => {
        /* Disable scrolling */
        const html = document.getElementsByTagName('HTML')[0];
        html.setAttribute('data-Mobile_Nav', 'false');

        /* Dispatch */
        this.props.navMenu_Mobile__Toggle();
    };


    render() {
        return (
            <li className="MobileNavigationLink">
                {this.props.internal == true ?
                    /* Internal link */
                    <NavLink 
                        className="MobileNavigationLink__link"
                        to={this.props.href}
                        onClick={this.navMenu_Mobile__Toggle}
                    >
                        {this.props.text}
                    </NavLink>
                    :

                    /* External link */
                    <a
                        className="MobileNavigationLink__link"
                        href={this.props.href}
                        onClick={this.navMenu_Mobile__Toggle}
                        target="_blank"
                        rel="noopener"
                    >
                        {this.props.text}
                    </a>
                }

                {/* Sublink button */}
                {this.props.sublinks &&
                    <button
                        className="MobileNavigationLink__sublink_button"
                        onClick={this.sublink_Menu__Toggle}
                        data-active={this.state.sublink_Menu}
                    >
                        ▼
                    </button>
                }

                {/* Sublink menu */}
                {this.props.sublinks &&
                    <ul
                        className="MobileNavigationLink__sublink_list"
                        onClick={this.sublink_Menu__Toggle}
                        data-active={this.state.sublink_Menu}
                    >
                        {this.props.sublinks.map((sublink) => (
                            <li
                                className="MobileNavigationLink__sublink"
                                key={sublink.text}
                            >
                                {sublink.internal == true ?
                                    /* Internal sublink */
                                    <NavLink
                                        className="MobileNavigationLink__sublink_link"
                                        to={sublink.href}
                                        onClick={
                                            this.sublink_Menu__Toggle &
                                            this.navMenu_Mobile__Toggle
                                        }
                                    >
                                        {sublink.text}
                                    </NavLink>
                                    :

                                    /* External sublink */
                                    <a
                                        className="MobileNavigationLink__sublink_link"
                                        href={sublink.href}
                                        onClick={
                                            this.sublink_Menu__Toggle &
                                            this.navMenu_Mobile__Toggle
                                        }
                                    >
                                        {sublink.text}
                                    </a>
                                }
                            </li>
                        ))}
                    </ul>
                }
            </li>
        );
    };
};


/* Connect to store */
const mapDispatchToProps = (dispatch) => ({
    navMenu_Mobile__Toggle: () => {
        dispatch(navMenu_Mobile__Toggle());
    }
});


export default connect(undefined, mapDispatchToProps)(MobileNavigationLink);