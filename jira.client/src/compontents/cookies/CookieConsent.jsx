import React, { useState, useEffect } from 'react';
import Toggle from 'react-toggle';
import 'react-toggle/style.css'; 
import LoginLogo from '../../utils/LoginLogo';
import './CookieConsent.css';

const CookieConsent = () => {
    const [visible, setVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('consent');
    const [cheeseIsReady, setCheeseIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(true);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        setVisible(false);
    };

    const handleCheeseChange = () => {
        setCheeseIsReady(prevCheeseIsReady => !prevCheeseIsReady);
    };

    if (!visible) return null;

    return (
        <div className="cookie-consent-overlay">
            <div className="cookie-consent-modal">
                <div className="cookie-consent-header">
                    <LoginLogo />
                    <div className="divider"></div>
                </div>
                <div className="tabs">
                    <div
                        className={`tab ${activeTab === 'consent' ? 'active1' : ''}`}
                        onClick={() => setActiveTab('consent')}
                    >
                        <p className="cookie-tab">Consent</p>
                    </div>
                    <div
                        className={`tab ${activeTab === 'details' ? 'active1' : ''}`}
                        onClick={() => setActiveTab('details')}
                    >
                        <p className="cookie-tab">Details</p>
                    </div>
                    <div
                        className={`tab ${activeTab === 'about' ? 'active1' : ''}`}
                        onClick={() => setActiveTab('about')}
                    >
                        <p className="cookie-tab">About</p>
                    </div>
                </div>
                <div className="cookie-consent-body">
                    {activeTab === 'consent' && (
                        <>
                            <p className="cookie-consent-title">This website uses cookies</p>
                            <p className="cookie-consent-desc">
                                We use cookies to personalise content and ads, to provide social media features and to
                                analyse our traffic. We also share information about your use of our site with our social
                                media, advertising and analytics partners who may combine it with other information that
                                you've provided to them or that they've collected from your use of their services.
                            </p>
                            <div className="cookie-consent-toggles">
                                <div className="toggle-group">
                                    <p>Necessary</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                                <div className="toggle-group">
                                    <p>Preferences</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                                <div className="toggle-group">
                                    <p>Statistics</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                                <div className="toggle-group">
                                    <p>Marketing</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                            </div>
                        </>
                    )}
                    {activeTab === 'details' && (
                        <>
                            <p className="cookie-consent-title">This website uses cookies</p>
                            <p className="cookie-consent-desc">
                                We use cookies to personalise content and ads, to provide social media features and to
                                analyse our traffic. We also share information.
                            </p>
                            <div className="cookie-consent-toggles">
                                <div className="toggle-group">
                                    <p>Necessary</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                                <div className="toggle-group">
                                    <p>Preferences</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                                <div className="toggle-group">
                                    <p>Statistics</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                                <div className="toggle-group">
                                    <p>Marketing</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                            </div>
                        </>
                    )}
                    {activeTab === 'about' && (
                        <>
                            <p className="cookie-consent-title">We use cookies to personalise</p>
                            <p className="cookie-consent-desc">
                                We use cookies to personalise content and ads, to provide social media features and to
                                analyse our traffic. We also share information about your use of our site with our social
                                media, advertising and analytics partners who may combine it with other information that
                                you've provided to them or that they've collected from your use of their services. We use cookies to personalise content and ads, to provide social media features and to
                                analyse our traffic. We also share information about your use of our site with our social
                                media, advertising and analytics partners who may combine it with other information that
                                you've provided to them or that they've collected from your use of their services.
                            </p>
                            <div className="cookie-consent-toggles">
                                <div className="toggle-group">
                                    <p>Necessary</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                                <div className="toggle-group">
                                    <p>Preferences</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                                <div className="toggle-group">
                                    <p>Statistics</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                                <div className="toggle-group">
                                    <p>Marketing</p>
                                    <Toggle
                                        id='cheese-status'
                                        defaultChecked={cheeseIsReady}
                                        onChange={handleCheeseChange} />
                                </div>
                            </div>
                        </>
                    )}
                    <div className="cookie-consent-buttons d-flex">
                    <button className="deny" onClick={handleAccept}>Deny</button>
                    <button className="allow-selection" onClick={handleAccept}>Allow Selection</button>
                    <button className="allow-all" onClick={handleAccept}>Allow All</button>
                     </div>
                    
                </div>
            </div>
        </div>
    );
};

export default CookieConsent;
