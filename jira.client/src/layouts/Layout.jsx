import Header from '../compontents/header/Header.jsx';
import LeftMenu from '../compontents/left_menu/LeftMenu.jsx';
import './Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div>
            <Header />
                <div className="d-flex layout-container">
                <LeftMenu /> 
                <div className="content-container">
                    <Outlet />
                </div>
                </div>
        </div>
    );
};

export default Layout;
