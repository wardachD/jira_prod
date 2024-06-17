import React from 'react';
import dashboards from '../../assets/dashboards.svg';

const DashboardsTab = () => {
    return (
        <>
            <div id="header-navbar-projects" className="tabbar-view-header-projects">
                <div className="centered-container favorites">
                    <img src={dashboards} alt="Obrazek" className="centered-image" />
                    <p className="sub-description-favorites centered-text">Utwórz pulpit, aby śledzić status swoich projektów.</p>
                    <p className="link">Więcej informacji o pulpitach</p>
                </div>
            </div>
            <div className="row border-top divider-header"></div>
            <a href="/pulpit" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Wyświetl wszystkie pulpity</p>
                </div>
            </a>
            <a href="/pulpit/default" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Utwórz pulpit</p>
                </div>
            </a>
        </>
    );
};

export default DashboardsTab;
