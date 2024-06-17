import { useState } from 'react';
import { Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './LeftMenu.css';
import logo from '../../assets/react.svg';

function LeftMenu() {
    const [menuVisible, setMenuVisible] = useState(true);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return ( 
        <div className={`left-menu-wrapper ${menuVisible ? '' : 'menu-hidden'}`}>
            <div className="left-menu">
                <Button variant="transparent" className="toggle-button" onClick={toggleMenu}>
                    {menuVisible ? <Icon.ChevronLeft /> : <Icon.ChevronRight />}
                </Button>
                <div className="menu-content">
                    {menuVisible && (
                        <>
                            <div className="logo-row">
                                <img src={logo} alt="Logo" className="logo-left-menu" />
                                <div className="info-content">
                                    <p className="project-name">Aplikacja Jira</p>
                                    <p>Projekt programowania</p>
                                </div>
                            </div>
                            <div className="button-row">
                                <Button href="#roadmap" variant="transparent" className="btn-icon">
                                    <Icon.Bricks /> Plan działania
                                </Button>
                                <Button href="#zaleglosci" variant="transparent" className="btn-icon">
                                    <Icon.Map /> Zaległości
                                </Button>
                                <Button href="#tablica" variant="transparent" className="btn-icon">
                                    <Icon.Motherboard /> Tablica
                                </Button>
                                <Button href="#raporty" variant="transparent" className="btn-icon">
                                    <Icon.Flag /> Raporty
                                </Button>
                                <Button href="#problemy" variant="transparent" className="btn-icon">
                                    <Icon.Bug /> Problemy
                                </Button>
                                <Button href="#wdrozenia" variant="transparent" className="btn-icon">
                                    <Icon.CloudUpload /> Wdrożenia
                                </Button>
                                <Button href="#strony" variant="transparent" className="btn-icon">
                                    <Icon.FileEarmark /> Strony
                                </Button>
                                <Button href="#dodaj" variant="transparent" className="btn-icon">
                                    <Icon.FileEarmarkPlus /> Dodaj
                                </Button>
                                <Button href="#ustawienia" variant="transparent" className="btn-icon">
                                    <Icon.GearWide /> Ustawienia projektu
                                </Button>
                            </div>
                            <div className="bottom-text">
                                <p>Uczestniczysz w projekcie zarządzanym przez zespół</p>
                                <p>Dowiedz się więcej</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LeftMenu;

