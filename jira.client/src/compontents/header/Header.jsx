import React, { useState } from 'react';
import { Nav, NavDropdown, Dropdown } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import DropdownButton from 'react-bootstrap/DropdownButton';
import WorkTab from './worktab';
import TeamsTab from './TeamsTab';
import ProjectsTab from './ProjectsTab';
import FiltersTab from './FiltersTab';
import DashboardsTab from './DashboardsTab';
import PlansTab from './PlansTab';
import ApplicationsTab from './ApplicationsTab';
import logo from '../../assets/logo.svg';
import avatar from '../../assets/avatar.png';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    const [keyHeader, setKeyHeader] = useState('mytasks');
    const [keyHeaderHidden, setKeyHeaderHidden] = useState('mytaskshidden');
    const [showMenu, setShowMenu] = useState(false);
    const [activeTab, setActiveTab] = useState('home'); // Nowy stan do zarządzania aktywną zakładką

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <header className="header">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col">
                        <Nav className="tabs fw-bold">
                            <Nav.Item className="mr-3">
                                <Icon.Grid3x3GapFill className="navbar-icon" onClick={handleMenuToggle} />
                            </Nav.Item>
                            <Nav.Item className="mr-3">
                                <a href="/"><img src={logo} alt="Logo" className="logo" /></a>
                            </Nav.Item>

                            <NavDropdown title="Twoja praca" className="mr-3 hidden-below-870">
                                <WorkTab activeKey={keyHeader} onSelect={(h) => setKeyHeader(h)} />
                            </NavDropdown>
                            <NavDropdown title="Projekty" className="mr-3 hidden-below-960">
                                <ProjectsTab avatar={avatar} />
                            </NavDropdown>
                            <NavDropdown title="Filtry" className="mr-3 hidden-below-1035">
                                <FiltersTab />
                            </NavDropdown>
                            <NavDropdown title="Pulpity" className="mr-3 hidden-below-1220">
                                <DashboardsTab />
                            </NavDropdown>
                            <NavDropdown title="Zespoły" className="mr-3 hidden-below-1220">
                                <TeamsTab />
                            </NavDropdown>
                            <NavDropdown title="Plany" className="mr-3 hidden-below-1255">
                                <PlansTab />
                            </NavDropdown>
                            <NavDropdown title="Aplikacje" className="mr-3 hidden-below-1255">
                                <ApplicationsTab />
                            </NavDropdown>

                            <NavDropdown title="Więcej" id="dropdown-header" className="mr-3 visible-below-1220 hidden-above-1220 custom-navbar">
                                <DropdownButton
                                    key={'dropend-more'}
                                    id={`dropdown-button-drop-end-hidded`}
                                    drop={'end'}
                                    variant="secondary"
                                    title="Twoja praca"
                                    className="hidable-navbar visible-below-870 custom-dropdown-button w-100"
                                >
                                    <WorkTab activeKey={keyHeaderHidden} onSelect={(hiddenk) => setKeyHeaderHidden(hiddenk)} />
                                </DropdownButton>
                            </NavDropdown>
                        </Nav>
                    </div>
                    <div className="d-flex right-navbar">
                        <div className="d-flex flex-row-reverse align-items-center">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="header-logout">
                                    <img src={avatar} alt="Avatar" className="avatar" />
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="/login">Wyloguj</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <div className="profile-icons hidden-below-510">
                                <a href="#">
                                    <Icon.BellFill className="navbar-icon" />
                                </a>
                                <a href="#">
                                    <Icon.QuestionCircleFill className="navbar-icon" />
                                </a>
                                <a href="#">
                                    <Icon.GearWide className="navbar-icon" />
                                </a>
                            </div>
                            <form className="search-bar-width hidden-below-760">
                                <input
                                    type="search"
                                    className="form-control rounded"
                                    placeholder="Szukaj"
                                    aria-label="Search"
                                    aria-describedby="search-addon"
                                />
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            {showMenu && (
                <div className={`menu-overlay ${showMenu ? 'show' : ''}`} onClick={handleMenuToggle}>
                    <div className={`menu-container row ${showMenu ? 'show' : ''}`} onClick={(e) => e.stopPropagation()}>
                        <div className="col-2 left-side-app-menu">
                            <div className="square blue">Da</div>
                            <div className="square green">Am</div>
                        </div>
                        <div className="col-10 right-side-app-menu">
                            <div className="menu-header">johndoe</div>
                            <div className="menu-item email">johndoe@test.com</div>
                            <div className="menu-section">Twoje aplikacje</div>
                            <div className="menu-item d-flex">
                                <div className="square-logo-icon">
                                    <svg fill="none" height="26" viewBox="0 0 32 32" focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#FFFFFF" d="M27.545 24.378 16.96 3.208c-.208-.458-.417-.541-.667-.541-.208 0-.458.083-.708.5-1.5 2.375-2.167 5.125-2.167 8 0 4.001 2.042 7.752 5.042 13.795.334.666.584.791 1.167.791h7.335c.541 0 .833-.208.833-.625 0-.208-.042-.333-.25-.75M12.168 14.377c-.834-1.25-1.084-1.334-1.292-1.334s-.333.083-.708.834L4.875 24.46c-.167.334-.208.459-.208.625 0 .334.291.667.916.667h7.46c.5 0 .875-.416 1.083-1.208.25-1 .334-1.876.334-2.917 0-2.917-1.292-5.751-2.292-7.251"></path>
                                    </svg>
                                </div>
                                <span>Strona główna Atlassian</span>
                            </div>
                            <div className="menu-item d-flex">
                                <div className="square-logo-icon">
                                    <img src="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira/icons/white.svg" height="26px"></img>
                                </div>
                                <span>Jira</span>
                            </div>
                            <div className="menu-item d-flex">
                                <div className="square-logo-icon">
                                    <img src="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-work-management/icons/white.svg" height="26px"></img>
                                </div>
                                <span>Jira Work Management</span>
                            </div>
                            <div className="menu-item d-flex">
                                <div className="square-logo-icon">
                                    <img src="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/confluence/icons/white.svg" height="26px"></img>
                                </div>
                                <span>Confluence</span>
                            </div>
                            <div className="menu-item d-flex">
                                <div className="square-logo-icon-grey">
                                    <svg width="26" height="26"  viewBox="0 0 24 24" role="presentation" xmlns="http://www.w3.org/2000/svg"><path d="M11.701 16.7a5.002 5.002 0 110-10.003 5.002 5.002 0 010 10.004m8.368-3.117a1.995 1.995 0 01-1.346-1.885c0-.876.563-1.613 1.345-1.885a.48.48 0 00.315-.574 8.947 8.947 0 00-.836-1.993.477.477 0 00-.598-.195 2.04 2.04 0 01-1.29.08 1.988 1.988 0 01-1.404-1.395 2.04 2.04 0 01.076-1.297.478.478 0 00-.196-.597 8.98 8.98 0 00-1.975-.826.479.479 0 00-.574.314 1.995 1.995 0 01-1.885 1.346 1.994 1.994 0 01-1.884-1.345.482.482 0 00-.575-.315c-.708.2-1.379.485-2.004.842a.47.47 0 00-.198.582A2.002 2.002 0 014.445 7.06a.478.478 0 00-.595.196 8.946 8.946 0 00-.833 1.994.48.48 0 00.308.572 1.995 1.995 0 011.323 1.877c0 .867-.552 1.599-1.324 1.877a.479.479 0 00-.308.57 8.99 8.99 0 00.723 1.79.477.477 0 00.624.194c.595-.273 1.343-.264 2.104.238.117.077.225.185.302.3.527.8.512 1.58.198 2.188a.473.473 0 00.168.628 8.946 8.946 0 002.11.897.474.474 0 00.57-.313 1.995 1.995 0 011.886-1.353c.878 0 1.618.567 1.887 1.353a.475.475 0 00.57.313 8.964 8.964 0 002.084-.883.473.473 0 00.167-.631c-.318-.608-.337-1.393.191-2.195.077-.116.185-.225.302-.302.772-.511 1.527-.513 2.125-.23a.477.477 0 00.628-.19 8.925 8.925 0 00.728-1.793.478.478 0 00-.314-.573" fill="currentColor"></path></svg>
                                </div>
                                <span>Administracja</span>
                            </div>
                            <div className="menu-section">Odkrywaj</div>
                            <div className="menu-item d-flex">
                                <div className="square-logo-icon-light">
                                    <img src="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/jira-service-management/icons/blue.svg" height="26px"></img>
                                </div>
                                <span>Jira Service Management</span>
                            </div>
                            <div className="menu-item d-flex">
                                <div className="square-logo-icon-light">
                                    <img src="https://flight-deck-assets-bifrost.prod-east.frontend.public.atl-paas.net/assets/image/logos/contrib/opsgenie/icons/blue.svg" height="26px"></img>
                                </div>
                                <span>Opsgenie</span>
                            </div>
                            <div className="menu-item d-flex">
                                <div className="square-logo-icon-light">
                                    <img src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cmask x='0' y='0' width='20' height='20' mask-type='alpha' maskUnits='userSpaceOnUse'%3E%3Crect width='20' height='20' rx='4' fill='%23fff'/%3E%3C/mask%3E%3Cpath d='m5.6711 13.88c0 1.2622-1.0311 2.2934-2.2933 2.2934-1.2622 0-2.2933-1.0312-2.2933-2.2934s1.0311-2.2933 2.2933-2.2933c1.2666 0 2.2933 1.0267 2.2933 2.2933z' fill='%2356637A'/%3E%3Cpath d='m6.8267 13.88c0-1.2622 1.0311-2.2933 2.2933-2.2933 1.2622 0 2.2934 1.0311 2.2934 2.2933v5.7422c0 1.2622-1.0311 2.2934-2.2934 2.2934-1.2622 0-2.2933-1.0312-2.2933-2.2934v-5.7422z' fill='%2356637A'/%3E%3Cpath d='m9.12 4.6711c-1.2622 0-2.2933-1.0311-2.2933-2.2933 0-1.2622 1.0311-2.2933 2.2933-2.2933 1.2622 0 2.2934 1.0311 2.2934 2.2933 0 1.2666-1.0268 2.2933-2.2934 2.2933z' fill='%2356637A'/%3E%3Cpath d='m9.12 5.8268c1.2623 0 2.2934 1.0311 2.2934 2.2933 0 1.2622-1.0311 2.2934-2.2934 2.2934h-5.7422c-1.2622 0-2.2933-1.0312-2.2933-2.2934 0-1.2622 1.0311-2.2933 2.2933-2.2933h5.7422z' fill='%2356637A'/%3E%3Cpath d='m18.329 8.1201c0-1.2622 1.0311-2.2933 2.2934-2.2933 1.2622 0 2.2933 1.0311 2.2933 2.2933 0 1.2622-1.0311 2.2934-2.2933 2.2934-1.2666 0-2.2934-1.0268-2.2934-2.2934z' fill='%2356637A'/%3E%3Cpath d='m17.173 8.12c0 1.2622-1.0311 2.2934-2.2933 2.2934s-2.2933-1.0311-2.2933-2.2934v-5.7422c0-1.2622 1.0311-2.2933 2.2933-2.2933s2.2933 1.0311 2.2933 2.2933v5.7422z' fill='%2356637A'/%3E%3Cpath d='m14.88 17.329c1.2622 0 2.2933 1.0311 2.2933 2.2933s-1.0311 2.2933-2.2933 2.2933-2.2933-1.0311-2.2933-2.2933c0-1.2666 1.0267-2.2933 2.2933-2.2933z' fill='%2356637A'/%3E%3Cpath d='m14.88 16.173c-1.2622 0-2.2933-1.0312-2.2933-2.2934s1.0311-2.2933 2.2933-2.2933h5.7422c1.2622 0 2.2934 1.0311 2.2934 2.2933s-1.0312 2.2934-2.2934 2.2934h-5.7422z' fill='%2356637A'/%3E%3C/svg%3E" alt=""></img>
                                </div>
                                <span>Slack</span>
                            </div>
                           <div className="menu-item d-flex">
                                <div className="square-logo-icon-light">
                                    <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M12 21a9 9 0 110-18 9 9 0 010 18zm-1.101-10.78c-.248.127-.55.427-.678.678L8.24 14.797c-.55 1.084-.118 1.514.965.963l3.898-1.98c.248-.127.55-.427.677-.678l1.981-3.899c.552-1.083.12-1.514-.964-.964L10.9 10.221zM12 13a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                                </div>
                                <span>Więcej produktów Atlassian</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
