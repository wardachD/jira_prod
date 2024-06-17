import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Dropdown from 'react-bootstrap/Dropdown';
import './Homepage.css';
import avatar from '../../assets/avatar.png';
import addToFavorites from '../../assets/addfavorite.svg';
function Homepage() {
    const [key, setKey] = useState('home');

    return (
        <div className="fullpage-screen-container">

            <div className="title-view">
                <h3>Twoja Praca</h3>
            </div>

            <div className="projects-view">

                <div className="d-flex justify-content-between">
                    <h4 className="projects-title-view">Ostatnie projekty</h4>
                    <a href="/projekty" className="link"><h4 className="projects-title-view fw-light link-projects fw-semibold">Wyświetl wszystkie projekty</h4></a>
                </div>

                <div className="grid-container">

                    <div className="grid-item-blue">

                        <div className="row project-header">
                            <div className="col-2">
                                <img src={avatar} alt="Avatar" className="avatar" />
                            </div>
                            <div className="col-9 project-text">
                                <h6 className="project-tile-title">Helpdesk</h6>
                                <p className="project-tile-description">
                                    Wsparcie procesu zarządzan...
                                </p>
                            </div>
                        </div>

                        <div className="quick-access">
                            <div className="row">
                                <div className="col">
                                    <p className="quick-access-title fw-bold">SZYBKIE ŁĄCZA</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay=
                                            <Tooltip id="button-tooltip-1">
                                                Moje otwarte zgłoszenia
                                            </Tooltip>
                                    >
                                        <a href="#zgloszenia" className="link-button">
                                        <div className="row align-items-center  quick-access-tooltip">
                                            <div className="col">
                                                Moje otwarte zgłoszenia
                                            </div>
                                            <div className="col-auto">
                                                <div className="gray-box">
                                                    2
                                                </div>
                                            </div>
                                            </div>
                                        </a>
                                        </OverlayTrigger>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay=
                                            <Tooltip id="button-tooltip-2">
                                                Moje otwarte zgłoszenia
                                            </Tooltip>
                                    >
                                        <a href="#zgloszenia" className="link-button">
                                        <div className="row align-items-center  quick-access-tooltip">
                                            <div className="col">
                                                Zgłoszenia gotowe
                                            </div>
                                            </div>
                                        </a>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="row border-top quick-access-bottom-bar">
                            <div className="quick-access-dropdown">
                                <Dropdown data-bs-theme="light">
                                    <Dropdown.Toggle id="dropdown-button-6" className="quick-access-dropdown" variant="secondary">
                                        2 Tablice
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-quick-projects">
                                        <Dropdown.Item href="#/quickcase">Stwórz QuickCase</Dropdown.Item>
                                        <Dropdown.Item href="#/reklamacja">Zrób reklamację</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                    <div className="grid-item">
                        <div className="row project-header">
                            <div className="col-2">
                                <img src={avatar} alt="Avatar" className="avatar" />
                            </div>
                            <div className="col-9 project-text">
                                <h6 className="project-tile-title">Aplikacja Jira</h6>
                                <p className="project-tile-description">
                                    Oprogramowanie zarządzane...
                                </p>
                            </div>
                        </div>
                        <div className="quick-access">
                            <div className="row">
                                <div className="col">
                                    <p className="quick-access-title fw-bold">SZYBKIE ŁĄCZA</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay=
                                            <Tooltip id="button-tooltip-3">
                                                Moje otwarte zgłoszenia
                                            </Tooltip>
                                    >
                                    <a href="#" className="link-button">
                                        <div className="row align-items-center  quick-access-tooltip">
                                            <div className="col">
                                                Moje otwarte zgłoszenia
                                            </div>
                                            <div className="col-auto">
                                                <div className="gray-box">
                                                    0
                                                </div>
                                            </div>
                                            </div>
                                        </a>
                                    </OverlayTrigger>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <OverlayTrigger
                                        placement="bottom"
                                        overlay=
                                            <Tooltip id="button-tooltip-4">
                                                Moje otwarte zgłoszenia
                                            </Tooltip>
                                        
                                    >
                                        <a href="#zgloszenia" className="link-button">
                                        <div className="row align-items-center  quick-access-tooltip">
                                            <div className="col">
                                                Zgłoszenia gotowe
                                            </div>
                                            </div>
                                        </a>
                                    </OverlayTrigger>
                                </div>
                            </div>
                        </div>
                        <div className="row border-top quick-access-bottom-bar">
                            <div className="quick-access-dropdown">
                                <Dropdown data-bs-theme="light" id="dropdown-quick-projects-second">
                                    <Dropdown.Toggle id="dropdown-button-1" className="quick-access-dropdown" variant="secondary">
                                        1 Tablica
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu className="dropdown-quick-projects">
                                        <Dropdown.Item href="#/action-2">Zrób Code Review</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="tabbar-view">
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    className="mb-3 no-left-padding tab-bottom-border">
                    <Tab eventKey="home" title="Ostatnio używano">
                        <div className="day-title fw-bold">
                            <h6 className="fs-6">DZISIAJ</h6>
                        </div>
                        <a className="tabbar-view-a" href="/projekty">
                            <div className="task-card d-flex justify-content-between">
                                <div className="task-info d-flex align-items-center">
                                    <img src={avatar} alt="Avatar" className="task-avatar" />
                                    <div className="align-items-center">
                                        <p className="taskbar-title">Utworzenie nowego projektu</p>
                                        <p className="taskbar-description">Projekt na Tworzenie interfejsów użytkownika</p>
                                    </div>
                                </div>
                                <div className="task-meta d-flex  align-items-center">
                                    <p className="task-meta-title">Zaktualizowano</p>
                                    <img src={avatar} alt="Creator Avatar" className="avatar" />
                                </div>
                            </div>
                        </a>
                        <a className="tabbar-view-a" href="/projekty">
                            <div className="task-card d-flex justify-content-between">
                                <div className="task-info d-flex align-items-center">
                                    <img src={avatar} alt="Avatar" className="task-avatar" />
                                    <div className="align-items-center">
                                        <p className="taskbar-title">Intensywna praca z zespołem programistycznym</p>
                                        <p className="taskbar-description">Cotygodniowe spotkanie na kawę</p>
                                    </div>
                                </div>
                                <div className="task-meta d-flex  align-items-center">
                                    <p className="task-meta-title">Utworzono</p>
                                    <img src={avatar} alt="Creator Avatar" className="avatar" />
                                </div>
                            </div>
                        </a>
                        <div className="day-title fw-bold">
                            <h6 className="fs-6">Wczoraj</h6>
                        </div>
                        <a className="tabbar-view-a" href="/projekty">
                            <div className="task-card d-flex justify-content-between">
                                <div className="task-info d-flex align-items-center">
                                    <img src={avatar} alt="Avatar" className="task-avatar" />
                                    <div className="align-items-center">
                                        <p className="taskbar-title">Drzemka w czasie pracy</p>
                                        <p className="taskbar-description">Najważniejszy element współczesnego świata</p>
                                    </div>
                                </div>
                                <div className="task-meta d-flex  align-items-center">
                                    <p className="task-meta-title">Usunięto</p>
                                    <img src={avatar} alt="Creator Avatar" className="avatar" />
                                </div>
                            </div>
                        </a>
                        <div className="centered-text">
                            Nie możesz znaleźć zgłoszenia?
                            <a href="/projekty" className="link"> Wyświetl wszystkie zgłoszenia</a>
                        </div>
                    </Tab>
                    <Tab eventKey="profile" title="Wyświetlane">
                        <div className="day-title fw-bold">
                            <h6 className="fs-6">Wczoraj</h6>
                        </div>
                        <a className="tabbar-view-a" href="/projekty">
                            <div className="task-card d-flex justify-content-between">
                                <div className="task-info d-flex align-items-center">
                                    <img src={avatar} alt="Avatar" className="task-avatar" />
                                    <div className="align-items-center">
                                        <p className="taskbar-title">Drzemka w czasie pracy</p>
                                        <p className="taskbar-description">Najważniejszy element współczesnego świata</p>
                                    </div>
                                </div>
                                <div className="task-meta d-flex  align-items-center">
                                    <p className="task-meta-title">Usunięto</p>
                                    <img src={avatar} alt="Creator Avatar" className="avatar" />
                                </div>
                            </div>
                        </a>  
                        <div className="centered-text">
                            Nie możesz znaleźć zgłoszenia?
                            <a href="#" className="link"> Wyświetl wszystkie zgłoszenia</a>
                        </div>
                    </Tab>
                    <Tab eventKey="contact" title="Przypisane do mnie">
                        <div className="day-title fw-bold">
                            <h6 className="fs-6">Wczoraj</h6>
                        </div>
                        <a className="tabbar-view-a" href="/projekty">
                            <div className="task-card d-flex justify-content-between">
                                <div className="task-info d-flex align-items-center">
                                    <img src={avatar} alt="Avatar" className="task-avatar" />
                                    <div className="align-items-center">
                                        <p className="taskbar-title">Intensywna praca z zespołem programistycznym</p>
                                        <p className="taskbar-description">Cotygodniowe spotkanie na kawę</p>
                                    </div>
                                </div>
                                <div className="task-meta d-flex  align-items-center">
                                    <p className="task-meta-title">Usunięto</p>
                                    <img src={avatar} alt="Creator Avatar" className="avatar" />
                                </div>
                            </div>
                        </a>
                        <div className="centered-text">
                            Nie możesz znaleźć zgłoszenia?
                            <a href="#" className="link"> Wyświetl wszystkie zgłoszenia</a>
                        </div>
                    </Tab>
                    <Tab eventKey="favorite" title="Oznaczone gwiazdką">
                        <div className="centered-container favorites">
                            <img src={addToFavorites} alt="Obrazek" className="centered-image"/>
                            <p className="description">Oznacz pracę gwiazdką, aby zyskać szybki dostęp.</p>
                            <p className="sub-description">Rozpocznij, wyszukując</p>
                            <div className="buttons">
                                <button className="button">projekt</button>
                                <button className="button">tablica</button>
                                <button className="button">filtr</button>
                                <button className="button">pulpit</button>
                                <button className="button">plan</button>
                                </div>
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </div>
    );
}

export default Homepage;
