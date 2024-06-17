import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const TeamsTab = () => {
    return (
        <>
        <div className="tabbar-view-header-teams">
                <a className="tabbar-view-a" href="/zespoly">
                <div id="header-navbar-teams" className="task-card d-flex justify-content-between">
                    <div className="task-info d-flex align-items-center">
                        <Icon.PlusLg className="navbar-icon-header" />
                        <div className="align-items-center">
                            <p className="taskbar-title fw-normal">Zaproś osoby do Jira</p>
                        </div>
                    </div>
                </div>
            </a>
            <a className="tabbar-view-a" href="/zespoly">
                <div id="header-navbar-teams" className="task-card d-flex">
                    <div className="task-info d-flex align-items-center">
                        <Icon.PeopleFill className="navbar-icon-header" />
                        <div className="align-items-center">
                            <p className="taskbar-title fw-normal">Zaproś osoby do Jira</p>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        <div className="row border-top divider-header"></div>
            <a href="/zespoly" className="header-tab-button">
            <div className="your-work">
                <p className="fw-normal p-button">Wyszukaj osoby i zespoły</p>
            </div>
        </a>
        
        </>
    );
};

export default TeamsTab;
 

