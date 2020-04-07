import React from 'react';
import logo from '../images/logo.png'

const Header = () => {

    const firstMenu = [
        {
            content: (<><i className="fas-fa-search"/>Search</>)
        },
        {
            content: (<>Contact us</>)
        },
        {
            content: (<>Sign in</>)
        },
        {
            content: (<><i className="fas-fa-shopping-cart"/>(0)</>)
        },

    ];
    const secondMenu = [
        {
            content: 'Shop',
        },
        {
            content: 'Gift ideas',
            children: [
                'Under $25',
                '$25 - 50$',
                'Above $50',
            ]
        },
        {
            content: 'About us',
        },
        {
            content: 'Our Team',
        },
        {
            content: 'News',
        },

    ];
    return (
        <header className={'header'}>
            <div className="logo">
                <img src={logo} className={'logo-img'} alt=""/>
            </div>
            <nav className="first-nav">
                <ul className="first-nav-list">
                    {firstMenu.map(({content}, index) => (
                        <li key={index} className="first-nav-item">
                            <a href="#" className="first-nav-link"> {content}</a>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className="heading">
                <h1 className="heading-text">Clothes Store</h1>
            </div>
            <nav className="second-nav">
                <ul className="second-nav-list">
                    {secondMenu.map(({content, children}, index) => (
                        <li key={index} className="second-nav-item">
                            <a href="#" className="second-nav-link">{content}</a>
                            {children && (
                                <ul className="dropwown">
                                    {children.map(item => (
                                        <li className="dropdown-item">
                                            <a href="#" className="dropdown-link">{item}</a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            </nav>

        </header>
    );
}

export default Header;