import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';

const WorkTab = ({ activeKey, onSelect }) => {
    return (
        <div className="tabbar-view-header">
            <Tabs
                id="controlled-tab-example2"
                activeKey={activeKey}
                onSelect={onSelect}
                className="mb-3 no-left-padding tab-bottom-border fs-small"
            >
                <Tab eventKey="mytasks" title="Przypisane do mnie">
                    <p className="fw-normal p-header">Brak otwartych zgłoszeń przypisanych do bieżącego użytkownika</p>
                    <div className="row border-top divider-header"></div>
                    <a href="/" className="header-tab-button">
                        <div className="your-work">
                            <p className="fw-normal p-button">Przejdź na stronę Twoja praca</p>
                        </div>
                    </a>
                </Tab>
                <Tab eventKey="latest" title="Ostatnie">
                    <p className="fw-normal p-header">Brak otwartych zgłoszeń przypisanych do bieżącego użytkownika</p>
                    <div className="row border-top divider-header"></div>
                    <a href="/" className="header-tab-button">
                        <div className="your-work">
                            <p className="fw-normal p-button">Przejdź na stronę Twoja praca</p>
                        </div>
                    </a>
                </Tab>
                <Tab eventKey="favorite" title="Tablice">
                    <p className="fw-normal p-header">Brak otwartych zgłoszeń przypisanych do bieżącego użytkownika</p>
                    <div className="row border-top divider-header"></div>
                    <a href="/" className="header-tab-button">
                        <div className="your-work">
                            <p className="fw-normal p-button">Przejdź na stronę Twoja praca</p>
                        </div>
                    </a>
                </Tab>
            </Tabs>
        </div>
    );
};

export default WorkTab;
