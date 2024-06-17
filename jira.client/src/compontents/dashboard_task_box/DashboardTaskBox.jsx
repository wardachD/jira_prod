import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import './DashboardTaskBox.css'; 

function DashboardTasksBox({ taskTitle, taskImage, taskDescription, buttonTitle }) {
    return (
        <div className="dashboard-tasks-box d-flex">
            <div className="dashboard-tasks-content-title w-100">
                <div className="custom-button-container">
                    <div className="left-content" data-toggle="tooltip" data-placement="bottom" title="Do zrobienia">
                        {taskTitle}
                    </div>
                    <div className="right-content">
                        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fillRule="evenodd"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg>
                    </div>
                </div>
            </div>
            <div className="dashboard-tasks-content-body row d-flex" data-toggle="tooltip" data-placement="bottom" title={taskDescription}>
                <img src={taskImage} style={{ height: '65%', width: '100%' }} alt={taskDescription} />
                <p className="m-0">{taskDescription}</p>
                <div className="row">
                    <a href="#" className="custom-button d-flex">
                        <div className="left-content">
                            <img src="https://p7.hiclipart.com/preview/105/168/1003/check-mark-computer-icons-checkbox-hacker-news-others.jpg" alt="Icon" className="icon" />
                            <span>Test RESTApi</span>
                        </div>
                        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation" className="icon"><g fill="currentColor"><path d="M6 14c0-1.105.902-2 2.009-2h7.982c1.11 0 2.009.894 2.009 2.006v4.44c0 3.405-12 3.405-12 0V14z"></path><circle cx="12" cy="7" r="4"></circle></g></svg>
                    </a>
                </div>
            </div>
            <div className="dashboard-tasks-content-button d-flex">
                <div className="custom-button-container" data-toggle="tooltip" data-placement="bottom" title="Przycisk akcji">
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



export default DashboardTasksBox;
