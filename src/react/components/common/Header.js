/* Packages */
import React from 'react';


/* Components */
import Navigation from '../ui/Navigation';


/* Component */
export class Header extends React.Component {
    render() {
        return (
            <header id="Header">
                <Navigation />
            </header>
        );
    };
};


export default Header;