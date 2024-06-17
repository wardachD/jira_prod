import React, { useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import * as Icon from 'react-bootstrap-icons';
import './DashboardTasksList.css';
import DashboardTasksBoxEmpty from '../dashboard_task_box_empty/DashboardTaskBoxEmpty.jsx';
import DashboardTasksBox from '../dashboard_task_box/DashboardTaskBox.jsx';

function DashboardTasksList() {
    const [isAddingElement, setIsAddingElement] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState([
        { taskTitle: "PROJEKT JIRA", taskImage: "https://www.lifewire.com/thmb/dKv1O-eJztmSgQDWmto5OUEgclI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/terminal-command-prompt-windows-11-5b5ff2747dbe46f985d98b2d60b3ddb2.png", taskDescription: "Opis projektu", buttonTitle: "Dodaj zgłoszenie" },
        { taskTitle: "DO ZROBIENIA", buttonTitle: "Dodaj zgłoszenie" },
        { taskTitle: "BACKLOG", buttonTitle: "Dodaj zgłoszenie" },
        { taskTitle: "WYMAGAJĄCE UWAGI", buttonTitle: "Dodaj zgłoszenie" },
    ]);

    const handleAddElementClick = () => {
        setIsAddingElement(true);
    };

    const handleConfirmClick = () => {
        const newTask = { taskTitle: inputValue, buttonTitle: "Dodaj zgłoszenie" };
        setTasks([...tasks, newTask]);
        setInputValue('');
        setIsAddingElement(false);
    };

    const handleCancelClick = () => {
        setInputValue('');
        setIsAddingElement(false);
    };

    return (
        <div className="">
            <div className="row project-dashboard-content d-flex">
                {tasks.map((task, index) => (
                    task.taskImage ? (
                        <DashboardTasksBox
                            key={index}
                            taskTitle={task.taskTitle}
                            taskImage={task.taskImage}
                            taskDescription={task.taskDescription}
                            buttonTitle={task.buttonTitle}
                        />
                    ) : (
                        <DashboardTasksBoxEmpty
                            key={index}
                            taskTitle={task.taskTitle}
                            buttonTitle={task.buttonTitle}
                        />
                    )
                ))}
                <div className="add-element-container">
                    {isAddingElement ? (
                        <>
                            <TextField
                                id="outlined-basic"
                                label="Dodaj element"
                                variant="outlined"
                                size="small"
                                className="add-element-input"
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                            />
                            <div className="confirmation-buttons">
                            <IconButton onClick={handleConfirmClick}>
                                <Icon.Check />
                            </IconButton>
                            <IconButton onClick={handleCancelClick}>
                                <Icon.X />
                                </IconButton>
                            </div>
                        </>
                    ) : (
                            <div id="button-4" data-toggle="tooltip" data-placement="bottom" title="Dodaj kolumnę" onClick={handleAddElementClick} className="CustomButtonWithIcon"><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M13 11V3.993A.997.997 0 0012 3c-.556 0-1 .445-1 .993V11H3.993A.997.997 0 003 12c0 .557.445 1 .993 1H11v7.007c0 .548.448.993 1 .993.556 0 1-.445 1-.993V13h7.007A.997.997 0 0021 12c0-.556-.445-1-.993-1H13z" fill="currentColor" fill-rule="evenodd"></path></svg></div>
                        
                    )}
                </div>
            </div>

            
        </div>
    );
}

export default DashboardTasksList;
