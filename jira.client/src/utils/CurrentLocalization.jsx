import React from 'react';

const CustomTable = () => {
    return (
        <div className="container w-100 d-flex">
            <div className="row w-100">
                <div className="col-2">
                    <h5>Kolumna 1</h5>
                    <p>Wiersz 1, Kolumna 1</p>
                    <p>Wiersz 2, Kolumna 1</p>
                </div>
                <div className="col-10">
                    <h5>Kolumna 2</h5>
                    <p>Wiersz 1, Kolumna 2</p>
                    <p>Wiersz 2, Kolumna 2</p>
                </div>
            </div>
        </div>
    );
};

export default CustomTable;
