import React, { useState } from 'react';
import './CustomTable.css';
import * as Icon from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';

const CustomTable = () => {
    const fixedData = [
        { id: 1, name: 'Nazwa projektu', buttonType: 'item'},
        { id: 2, name: 'Utwórz Epik', buttonType: 'new'},
       
    ];

    const renderButton = (buttonType, name) => {
        switch (buttonType) {
            case 'item':
                return <div className="existing-project-button d-flex">
                    <img className="d-flex m-1" src="https://damianw1995-1713649900776.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10307?size=medium" width="16px" height="16px" alt="Epik" />
                    <div className="d-flex">{name}</div>
                </div>;
            case 'new':
                return <div className="new-project-button d-flex">
                    <Icon.Plus size={22} />
                    {name}
                </div>;
            default:
                return null;
        }
    };

    const scrollableData = [
        { id: 1, sty: '', lut: '', mar: '', kwi: '', maj: '', cze: '', lip: '', sie: '', wrz: '', lis: '', gru: '', },
        { id: 2, sty: '', lut: '', mar: '', kwi: '', maj: '', cze: '', lip: '', sie: '', wrz: '', lis: '', gru: '', },
    ];


    const [hoveredRow, setHoveredRow] = useState(null);

    
    const handleRowHover = (index) => {
        setHoveredRow(index);
    };

    const numColumns = 18; 

    
    const additionalHeaderCells = Array.from(Array(numColumns - 1).keys()).map((index) => (
        <tr key={index} className="scrollable-rows-fill d-flex text-transparent">
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    ));

    return (
        <div className="container timeline">
            <div className="row h-100">
                <div className="col-3 m-0 p-0 h-100">
                    <table className="table table-bordered fixed-table h-100">
                        <thead>
                            <tr>
                                <th className="text-transparent">.</th>
                            </tr>
                        </thead>
                        <tbody>
                            {fixedData.map((item, index) => (
                                <tr key={item.name} className={`col-12 fixed-rows d-flex ${index === hoveredRow ? 'hovered-row' : ''}`}>
                                    <td>
                                        <a href="#" className='new-projects-link new-project-button'>
                                        <div className="d-flex align-items-center new-project-button">
                                                {renderButton(item.buttonType, item.name)}
                                            
                                            </div>
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="col-9 m-0 p-0 h-100">
                    <div className="table-responsive overflow-x-scroll h-100">
                        <table className="table table-bordered scrollable-table">
                            <thead>
                                <tr className="d-flex border-none">
                                    <th>STY</th>
                                    <th>LUT</th>
                                    <th>MAR</th>
                                    <th>CZE</th>
                                    <th>LIP</th>
                                    <th>SIE</th>
                                    <th>WRZ</th>
                                    <th>PAŹ</th>
                                    <th>LIS</th>
                                    <th>GRU</th>
                                </tr>
                            </thead>
                            <tbody>
                                {scrollableData.map((item, index) => (
                                    <tr
                                        key={item.id}
                                        className={`scrollable-rows d-flex ${index === hoveredRow ? 'hovered-row' : ''}`}
                                        onMouseEnter={() => handleRowHover(index)}
                                        onMouseLeave={() => handleRowHover(null)}
                                    >
                                        <td>{item.sty}</td>
                                        <td>{item.lut}</td>
                                        <td>{item.mar}</td>
                                        <td>{item.cze}</td>
                                        <td>{item.lip}</td>
                                        <td>{item.sie}</td>
                                        <td>{item.wrz}</td>
                                        <td>{item.paz}</td>
                                        <td>{item.lis}</td>
                                        <td>{item.gru}</td>
                                    </tr>
                                ))}
                                {additionalHeaderCells}
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomTable;
