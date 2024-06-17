import heroHeader from '../../assets/hero-header.webp';
import './People.css';
import * as Icon from 'react-bootstrap-icons';
function People() {
    return (
        <div className="people-container">
            <div className="hero-header">
                <img src={heroHeader } height="250"/>
            </div>

            <div className="d-flex justify-content-center">
                <div className="col-4 p-3 left-side">
                    <div className="people-title">Nazwa zespołu</div>
                    <div className="people-description">Opisz czym się zajmuje TWój zespół</div>
                    <div className="people-title-buttons d-flex">
                        <div onClick="#"
                            className="people-header-button d-flex bg-light col-10">
                            <p>Dodaj osoby</p>
                            </div>
                        <div onClick="#"
                            className="add-to-favorites  bg-light"
                            data-toggle="tooltip"
                            data-placement="bottom"
                            title="Dodaj do oznaczonych gwiazdką">
                            <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><circle cx="5" cy="12" r="2"></circle><circle cx="12" cy="12" r="2"></circle><circle cx="19" cy="12" r="2"></circle></g></svg></div>
                    </div>
                    <div className="people-title-box">
                        <div className="col d-flex justify-content-between">
                            <div className="text">Członkowie</div>
                            <div className="icon">
                                <Icon.Exclamation />
                            </div>
                        </div>
                        <div className="subtext">1 członek</div>
                        <div className="col d-flex people-title-box-border">
                            <div className="circle">DW</div>
                            <div>
                                <div className="text">Nazwa Właściciela</div>
                                <div className="subtext border-none">IT SUPPORT MANAGER</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-7 p-3 right-side">
                    <div className="header-title fw-bold">
                        Aktywność zespołu
                    </div>
                    <div className="people-content-box w-100">
                        <div className="content-box w-100">
                            <div className="button-element d-flex">
                                <img height="22" src="https://damianw1995.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=xsmall" />
                                <div className="button-element-text row">
                                    <p className="button-element-title">Nazwa zadania</p>
                                    <p className="button-element-description">Opis projektu | Utworzyłeś to wczoraj</p>
                                </div>
                            </div>
                        </div>
                        <div className="content-box w-100">
                            <div className="button-element d-flex">
                                <img height="22" src="https://damianw1995.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=xsmall" />
                                <div className="button-element-text row">
                                    <p className="button-element-title">Nazwa zadania</p>
                                    <p className="button-element-description">Opis projektu | Utworzyłeś to wczoraj</p>
                                </div>
                            </div>
                        </div>
                        <div className="content-box w-100">
                            <div className="button-element d-flex">
                                <img height="22" src="https://damianw1995.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=xsmall" />
                                <div className="button-element-text row">
                                    <p className="button-element-title">Nazwa zadania</p>
                                    <p className="button-element-description">Opis projektu | Utworzyłeś to wczoraj</p>
                                </div>
                            </div>
                        </div>
                        <div className="content-box w-100">
                            <div className="button-element d-flex">
                                <img height="22" src="https://damianw1995.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=xsmall" />
                                <div className="button-element-text row">
                                    <p className="button-element-title">Nazwa zadania</p>
                                    <p className="button-element-description">Opis projektu | Utworzyłeś to wczoraj</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="software-title fw-bold">
                        Software components
                    </div>
                    <div className="software-content-box w-100">
                        <div className="content-box d-flex w-100">
                            <div className="col-5">
                                <img src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/SoftwareComponentsEmptyStateImage_ptc.9e9cb56a.svg"/>
                            </div>  
                            <div className="col-7">
                                <h5>Your team’s software components, in one place</h5>
                                <p>Catalog, track, and improve your team’s software components with Compass, a developer experience platform.</p>
                                <div onClick="#"
                                    className="people-header-button d-flex bg-light col-10">
                                    <p>Get Compass free</p>
                                </div>
                            </div> 
                        </div>
                        
                    </div>
                    <div className="software-title fw-bold">
                        Łącza
                    </div>
                    <div className="connections-content-box w-100">
                        <div className="content-box d-flex w-100">
                            <div className="col-5">
                                <img height="120" src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/TeamLinksEmpty_ptc.c30ff6c9.svg" />
                            </div>
                            <div className="col-7">
                                <h5>Podziel się wiedzą</h5>
                                <p>Dodał łącza, aby dać wszystkim znać, gdzie działa Twój zespół.</p>
                                <div onClick="#"
                                    className="people-header-button d-flex bg-light">
                                    <p>Dodaj łącze</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="people-feedback">
                    <p>Przekaż nam swoją opinię dotyczącą profili i wyszukiwania w obrębie tego katalogu.</p>
                    <div onClick="#"
                        className="people-header-button d-flex bg-light">
                        <p>Prześlij opinię firmie Atlassian</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default People;
