import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './DashboardTaskBoxEmpty.css'; 

function DashboardTasksBoxEmpty({ taskTitle, buttonTitle }) {
    return (
        <div className="dashboard-tasks-box">
            <div className="dashboard-tasks-content-title w-100">
                <div className="custom-button-container">
                    <div className="left-content" onClick={() => handleLeftButtonClick()} data-toggle="tooltip" data-placement="bottom" title="Do zrobienia">
                        {taskTitle}
                    </div>
                    <div className="right-content" onClick={() => handleRightButtonClick()}>
                        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
                    </div>
                </div>
            </div>
            <div className="dashboard-tasks-content-button d-flex">
                <div className="custom-button-container display-none" data-toggle="tooltip" data-placement="bottom" title="Przycisk akcji">
                    <div className="left-content">
                        <a href="#" className="link-no-styling">
                            <Icon.Plus size={26} />
                            <span className="text">{buttonTitle}</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

function handleLeftButtonClick() {
    console.log("Kliknięto na tekst przycisku");
}

function handleRightButtonClick() {
    console.log("Kliknięto na ikonę przycisku");
}

export default DashboardTasksBoxEmpty;
