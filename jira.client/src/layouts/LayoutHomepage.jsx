import Header from '../compontents/header/Header.jsx';
import { Outlet } from 'react-router-dom';

const LayoutHomepage = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    );
};

export default LayoutHomepage;
