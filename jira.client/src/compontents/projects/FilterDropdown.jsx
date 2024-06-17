import React from 'react';
import CustomDropdown from '../../utils/CustomDropdown';
import Form from 'react-bootstrap/Form';

const FilterDropdown = () => {
    return (
        <>
            <div className="tabbar-view-header-plans">
                    <h6 className="font-header-small">ZAKRES WYŚWIETLANIA ZGŁOSEŃ</h6>
                <div id="header-navbar-teams" className="d-flex pb-2 justify-content-between">
                        <div className=" d-flex align-items-center">
                            <p className="taskbar-title fw-normal">Pokaż ukończone zgłoszenia</p>
                    </div>
                    <Form className="d-flex">
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                        />
                    </Form>
                    </div>
                    
                
                <CustomDropdown />
                <p className="font-small pt-2">Ukończone zgłosenia typu Epik z terminami spoza tego zakresu nie będą wyświetlane na osi czasu</p>
            </div>
            <div className="row border-top divider-header"></div>
            <a href="/plany" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Rozwiń wszystkie zgłoszenia Epik</p>
                </div>
            </a>
            <a href="/plany" className="header-tab-button">
                <div className="your-work">
                    <p className="fw-normal p-button">Zwiń wszystkie zgłoszenia Epik</p>
                </div>
            </a>
            <div className="row border-top divider-header"></div>
            <div className="filter-settings p-2">
                <h6 className="font-header-small">SZCZEGÓŁY WIZUALNE</h6>
                <div id="header-navbar-teams" className="d-flex pb-2 justify-content-between">
                    <div className=" d-flex align-items-center">
                        <p className="taskbar-title fw-normal">Zależności</p>
                    </div>
                    <Form className="d-flex">
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                        />
                    </Form>
                </div>
                <div id="header-navbar-teams" className="d-flex pb-2 justify-content-between">
                    <div className=" d-flex align-items-center">
                        <p className="taskbar-title fw-normal">Postęp</p>
                    </div>
                    <Form className="d-flex">
                        <Form.Check 
                            type="switch"
                            id="custom-switch"
                        />
                    </Form>
                </div>
                <div id="header-navbar-teams" className="d-flex pb-2 justify-content-between">
                    <div className=" d-flex align-items-center">
                        <p className="taskbar-title fw-normal">Ostrzeżenia</p>
                    </div>
                    <Form className="d-flex">
                        <Form.Check
                            type="switch"
                            id="custom-switch"
                            enabled="true"
                        />
                    </Form>
                </div>
                <a href="/" className="font-header-small link fw-bold" >Dowiedz się więcej o ustawieniach widoku osi czasu</a>
            </div>
          </>
    );
};

export default FilterDropdown;


