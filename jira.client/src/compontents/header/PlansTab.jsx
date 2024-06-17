import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const PlansTab = () => {
    return (
        <>
            <div className="tabbar-view-header-plans">
                <a className="tabbar-view-a" href="/plany">
                    <h6>WCZORAJ</h6>
                    <div id="header-navbar-teams" className="task-card d-flex">
                        <div className="task-info d-flex align-items-center">
                            <Icon.FileEarmark className="navbar-icon-header" />
                            <div className="align-items-center">
                                <p className="taskbar-title fw-normal">Nowy element - plan</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="row border-top divider-header"></div>
            <a href="/plany" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Wyświetl wszystkie plany</p>
                </div>
            </a>
            <a href="/plany" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Utwórz plan</p>
                </div>
            </a>
            <a href="/plany" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Utwórz przykładowy plan</p>
                </div>
            </a>
            <div className="row border-top divider-header"></div>
            <a href="/plany" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Ustawienia</p>
                </div>
            </a></>
    );
};

export default PlansTab;


