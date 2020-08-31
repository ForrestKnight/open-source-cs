/* Packages */
import React from 'react';
import {NavLink} from 'react-router-dom';


/* Component */
export class DesktopNavigationLink extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <li className="DesktopNavigationLink">
                {this.props.internal == true ?
                    /* Internal link */
                    <NavLink className="DesktopNavigationLink__link"
                        to={this.props.href}
                    >
                        {this.props.text}
                    </NavLink>
                    :

                    /* External link */
                    <a className="DesktopNavigationLink__link"
                        href={this.props.href}
                    >
                        {this.props.text}
                    </a>
                }

                {/* Sublink menu */}
                {this.props.sublinks &&
                    <ul className="DesktopNavigationLink__sublink_list">
                        {this.props.sublinks.map((sublink) => (
                            <li className="DesktopNavigationLink__sublink"
                                key={sublink.text}
                            >
                                {sublink.internal == true ?
                                    /* Internal sublink */
                                    <NavLink className="DesktopNavigationLink__sublink_link"
                                        to={sublink.href}
                                    >
                                        {sublink.text}
                                    </NavLink>
                                    :

                                    /* External sublink */
                                    <a className="DesktopNavigationLink__sublink_link"
                                        href={sublink.href}
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


export default DesktopNavigationLink;