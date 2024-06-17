import React from 'react';
import filterempty from '../../assets/filterempty.svg';

const FiltersTab = () => {
    return (
        <>
            <div id="header-navbar-projects" className="tabbar-view-header-projects">
                <div className="centered-container favorites">
                    <img src={filterempty} alt="Obrazek" className="centered-image" />
                    <p className="sub-description-favorites centered-text">Wyszukuj zgłoszenia we wszystkich projektach i zapisuj je jako filtry.</p>
                    <p className="link">Dowiedz się więcej.</p>
                </div>
            </div>
            <div className="row border-top divider-header"></div>
            <a href="#" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Wyświetl wszystkie filtry</p>
                </div>
            </a>
            <a href="#" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Wyświetl wszystkie zgłoszenia</p>
                </div>
            </a>
        </>
    );
};

export default FiltersTab;
