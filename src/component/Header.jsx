import React, {useState} from 'react';
import Home from './Home';
import './header.css'
import logo from '../img/SearPic-logo.png';

const Header = () => {

    const [toggleTabs, setToggleTabs] = useState(1);

    const toggleTab = (i) =>{
        setToggleTabs(i);
    };

    return (
        <header className="head">
            <img className="logo" src={logo} alt="logo"></img>
            <nav>
                <ul className="navBar">
                    <li className={toggleTabs === 1 ? 'tabs activeTabs' : 'tabs'} onClick={() => toggleTab(1)}><p>Home</p></li>
                    <li className={toggleTabs === 2 ? 'tabs activeTabs' : 'tabs'} onClick={() => toggleTab(2)}><p>Discover</p></li>
                    <li className={toggleTabs === 3 ? 'tabs activeTabs' : 'tabs'} onClick={() => toggleTab(3)}><p>Photographer</p></li>
                </ul>
            </nav>

            <div className="contenuOnglets">
                <div className={toggleTabs === 1 ? 'contenu activeContenu' : 'contenu'}>
                    <Home />
                </div>
                <div className={toggleTabs === 2 ? 'contenu activeContenu' : 'contenu'}>
                    <h2>Test2</h2>
                </div>
                <div className={toggleTabs === 3 ? 'contenu activeContenu' : 'contenu'}>
                    <h2>Test3</h2>
                </div>
            </div>
        </header>
    )
};

export default Header;