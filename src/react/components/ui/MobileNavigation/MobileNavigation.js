/* Packages */
import React from 'react';
import {connect} from 'react-redux';


/* Actions */
import {navMenu_Mobile__Toggle} from '../../../redux/actions/ui';


/* Components */
import MobileNavigationLink from './MobileNavigationLink';


/* Component */
export class MobileNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navMenu_Mobile: false
        };
    };

    
    navMenu_Mobile__Toggle = () => {
        /* Disable/enable scrolling */
        const html = document.getElementsByTagName('HTML')[0];
        if (this.props.navMenu_Mobile) {
            html.setAttribute('data-Mobile_Nav', 'false');
        } else {
            html.setAttribute('data-Mobile_Nav', 'true');
        }
        
        /* Set state */
        this.props.navMenu_Mobile__Toggle();
        this.setState({
            navMenu_Mobile: !this.state.navMenu_Mobile
        });
    };


    render() {
        return (
            <section id="MobileNavigation">
                <div 
                    className="MobileNavigation__button"
                    onClick={this.navMenu_Mobile__Toggle}
                    data-navMenu_Mobile={this.props.navMenu_Mobile}  
                >
                    {this.props.navMenu_Mobile ? "✕" : "☰"}
                </div>

                <nav 
                    data-active={this.props.navMenu_Mobile}
                    className="MobileNavigation__menu"
                >
                    <ul 
                        className="MobileNavigation__list"
                        data-active={this.props.navMenu_Mobile}
                    >
                        {/* Links */}
                        {this.props.links &&
                            this.props.links.map((link) => (
                                <MobileNavigationLink 
                                    key={link.text}
                                    {...link}
                                />
                            ))
                        }
                    </ul>
                </nav>
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


export default connect(mapStateToProps, mapDispatchToProps)(MobileNavigation);