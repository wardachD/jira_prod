import { Outlet } from 'react-router-dom';
import CookieConsent from '../compontents/cookies/CookieConsent';


const LayoutLogin = () => {
    return (
        <div>
            <Outlet />
            <CookieConsent />
        </div>
    );
};

export default LayoutLogin;
