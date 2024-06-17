import React from 'react';
import avatar from '../../assets/avatar.png';

const ApplicationsTab = () => {
    return (
        <>
            <div className="tabbar-view-header-plans">
                <h6>POLECANE DLA TWOJEGO ZESPOŁU</h6>
                <p className="header-plans-description">Szybciej wydawaj oprogramowanie dzięki aplikacjom ze sklepu Marketplace, które integrują narzędzia Twojego zespołu z systemem Jira.</p>
                <a className="tabbar-view-a" href="/projekty">
                    <div id="header-navbar-apps" className="task-card d-flex">
                        <div className="task-info d-flex align-items-center">
                            <div id="header-navbar-apps" className="task-card d-flex justify-content-between">
                                <div className="task-info d-flex align-items-center">
                                    <img src={avatar} href="#" className="apps-icon" />
                                    <div className="align-items-center">
                                        <p className="taskbar-title fw-normal">Insight Discovery (Śledzenie zasobów)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
                <div id="header-navbar-apps" className="task-card d-flex">
                    <div className="task-info d-flex align-items-center">
                        <div id="header-navbar-apps" className="task-card d-flex justify-content-between">
                            <div className="task-info d-flex align-items-center">
                                <img src={avatar} href="#" className="apps-icon" />
                                <div className="align-items-center">
                                    <p className="taskbar-title fw-normal">Slack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="header-navbar-apps" className="task-card d-flex">
                    <div className="task-info d-flex align-items-center">
                        <div id="header-navbar-apps" className="task-card d-flex justify-content-between">
                            <div className="task-info d-flex align-items-center">
                                <img src={avatar} href="#" className="apps-icon" />
                                <div className="align-items-center">
                                    <p className="taskbar-title fw-normal">Zendesk (Wsparcie)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row border-top divider-header"></div>
            <a href="#" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Poznaj więcej aplikacji</p>
                </div>
            </a>
            <a href="#" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Zarządzaj aplikacjami</p>
                </div>
            </a>
            <a href="#" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Wyświetl wnioski dotyczące aplikacji</p>
                </div>
            </a>
        </>

    );
};

export default ApplicationsTab;


