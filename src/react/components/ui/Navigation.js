/* Packages */
import React from 'react';


/* Components */
import HomeButton from './HomeButton';
import DesktopNavigation from './DesktopNavigation/DesktopNavigation';
import MobileNavigation from './MobileNavigation/MobileNavigation';


/* Config */
import links from '../../config/navigation';


/* Component */
export class Navigation extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <section id="Navigation">
                <HomeButton />

                <DesktopNavigation 
                    links={links}
                />
                
                <MobileNavigation 
                    links={links}                  
                />
            </section>
        );
    };
};


export default Navigation;