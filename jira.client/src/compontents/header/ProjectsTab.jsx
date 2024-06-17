import React from 'react';

const ProjectsTab = ({ avatar }) => {
    return (
        <>
            <div className="tabbar-view-header-projects">
                <a className="tabbar-view-a" href="/projekty/ProjectView">
                    <h6>WCZORAJ</h6>
                    <div className="task-card d-flex justify-content-between">
                        <div className="task-info d-flex align-items-center">
                            <img src={avatar} alt="Avatar" className="task-avatar" />
                            <div className="align-items-center">
                                <p className="taskbar-title fw-normal">Aplikacja Jira</p>
                                <p className="taskbar-description">Najważniejszy element</p>
                            </div>
                        </div>
                    </div>
                    <div className="task-card d-flex justify-content-between">
                        <div className="task-info d-flex align-items-center">
                            <img src={avatar} alt="Avatar" className="task-avatar" />
                            <div className="align-items-center">
                                <p className="taskbar-title fw-normal">Wdrożenie na rynek - przykład</p>
                                <p className="taskbar-description">Najważniejszy element</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="row border-top divider-header"></div>
            <div className="tabbar-view-header-projects">
                <a className="tabbar-view-a" href="/projekty/ProjectView">
                    <h6>POLECANE</h6>
                    <div className="task-card d-flex justify-content-between">
                        <div className="task-info d-flex align-items-center">
                            <img src={avatar} alt="Avatar" className="task-avatar" />
                            <div className="align-items-center">
                                <div className="align-items-center d-flex justify-content-start">
                                    <p className="taskbar-title fw-normal">Nowy projekt odkrywania</p>
                                    <p className="taskbar-button">WYPRÓBUJ</p>
                                </div>
                                <p className="taskbar-description">Rejestruj pomysły dzięki Jira Product Discovery</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            <div className="row border-top divider-header"></div>
            <a href="/projekty/przegladaj" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Wyświetl wszystkie projekty</p>
                </div>
            </a>
            <a href="/projekty/ProjectView" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Utwórz projekt</p>
                </div>
            </a>
        </>
    );
};

export default ProjectsTab;
