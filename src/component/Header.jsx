import React, {useState} from 'react';
import './header.css'
import logo from '../img/SearPic-logo.png';
import Home from './Home';
import Discover from './Discover';
import { Link } from 'react-router-dom';




const Header = () => {

    const [toggleTabs, setToggleTabs] = useState(1);

    const toggleTab = (i) =>{
        setToggleTabs(i);
    };
      
    return (
        <>
        <header className="head">
            <img className="logo" src={logo} alt="logo"></img>
            <nav>
                <ul className="navBar">
                    <Link to="/" className="link">
                        <li className={toggleTabs === 1 ? 'tabs activeTabs' : 'tabs'} onClick={() => toggleTab(1)}><p>Home</p></li>
                    </Link>
                    <Link to="/Discover" className="link">
                        <li className={toggleTabs === 2 ? 'tabs activeTabs' : 'tabs'} onClick={() => toggleTab(2)}><p>Discover</p></li>
                    </Link>
                </ul>
            </nav>
        </header>
        <main>
            <div className="contenuOnglets">
                <article>
                <div className={toggleTabs === 1 ? 'contenu activeContenu' : 'contenu'}>
                    <Home />
                </div>
                </article>
                <article>
                    <div className={toggleTabs === 2 ? 'contenu activeContenu' : 'contenu'}>
                        <Discover />
                    </div>
                </article>
            </div>
        </main>
        </>
    )
};

export default Header;
