
import './Dashboards.css';
import * as Icon from 'react-bootstrap-icons';
function Dashboards() {
    return (
        <div className="dashboardview w-100 p-4">
            <div className="dashboard-header d-flex">
                <h3>Domyślny Dashboard</h3>
                <div className="dashboard-action d-flex">
                    <div onClick="#"
                        className="add-to-favorites"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Dodaj do oznaczonych gwiazdką"><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M12 16.373l3.98 2.193-.76-4.655 3.276-3.347-4.524-.69L12 5.687l-1.972 4.189-4.524.689L8.78 13.91l-.762 4.655L12 16.373zm0 2.283l-3.016 1.662a2 2 0 01-2.939-2.075l.599-3.656-2.57-2.624a2 2 0 011.129-3.377l3.47-.528 1.518-3.224a2 2 0 013.618 0l1.519 3.224 3.47.528a2 2 0 011.127 3.377l-2.569 2.624.599 3.656a2 2 0 01-2.94 2.075L12 18.656z" fill="currentColor"></path></svg></div>
                    <div onClick="#"
                        className="dashboard-header-button d-flex bg-light">
                        <p>Odśwież</p>
                        <span><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"></path><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"></path><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path></g></svg></span>
                    </div>
                    <div onClick="#"
                        className="dashboard-header-button d-flex bg-light">
                        <p>Edytuj</p>
                        <span><svg className="button-icon" width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M4.02 19.23a1 1 0 001.18 1.18l3.81-.78-4.21-4.21-.78 3.81zM19.844 6.707l-2.12-2.122A1.997 1.997 0 0016.308 4c-.512 0-1.024.195-1.415.585l-9.757 9.758 4.95 4.95 9.757-9.758a2 2 0 000-2.828z" fill="currentColor" fill-rule="evenodd"></path></svg></span>
                    </div>
                    <div onClick="#"
                        className="add-to-favorites bg-light"
                        data-toggle="tooltip"
                        data-placement="bottom"
                        title="Dodaj do oznaczonych gwiazdką"><span><svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M12 14a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-4.5 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm9 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" fill="currentColor" fill-rule="evenodd"></path></svg></span>
                    </div>
                </div>
            </div>


            <div className="dashboard-tile-view">
                <div className="dashboard-tile">
                    <div className="dashboard-tile-stroke"></div>
                    <div className="dashboard-tile-header d-flex">
                        <h6>Wprowadzenie</h6>
                        <div className="dashboard-action d-flex">
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M16.413 8.997H18A1 1 0 0118 11h-3.9l-.047-.001a.975.975 0 01-.736-.285l-.032-.032A.977.977 0 0113 9.946a1.12 1.12 0 010-.048V6.002a1 1 0 112 0v1.587l3.309-3.308a.977.977 0 011.374.005l.032.032a.976.976 0 01.005 1.374l-3.307 3.305zm-8.826 6.006H6A1 1 0 016 13h3.9l.047.001a.975.975 0 01.736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 11-2 0v-1.587l-3.309 3.308a.977.977 0 01-1.374-.005l-.032-.032a.976.976 0 01-.005-1.374l3.307-3.305z" fill="currentColor" fill-rule="evenodd"></path></svg>
                            </div>
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M6 18h3a1 1 0 010 2H6a2 2 0 01-2-2v-3a1 1 0 012 0v3zm12 2h-3a1 1 0 010-2h3v-3a1 1 0 012 0v3a2 2 0 01-2 2zM6 4h3a1 1 0 110 2H6v3a1 1 0 11-2 0V6a2 2 0 012-2zm12 2h-3a1 1 0 010-2h3a2 2 0 012 2v3a1 1 0 01-2 0V6z" fill="currentColor" fill-rule="evenodd"></path></svg></div>
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"></path><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"></path><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path></g></svg>
                            </div>
                        </div>
                    </div>
                    <div id="content-welcome" className="dashboard-tile-content col d-flex">
                        <div className="jira-welcome">
                            <h5>Witamy w Jira</h5>
                            <img src="https://jira-frontend-bifrost.prod-east.frontend.public.atl-paas.net/assets/introduction.3b45522f.png" height="120" />
                        </div>
                        <div className="jira-text">
                            <p>Nie wiesz od czego zacząć? Zapoznaj się z dokumentacją <a href="#" >Podstawowy podręcznik systemu Jira</a> i <a href="#" >Szkolenie Atlassian.</a></p>
                            <p><a href="#" >Ten tekst można dostosować</a> w sekcji Administracja.</p>
                        </div>
                    </div>
                    <div className="jira-refresh">
                        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"></path><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"></path><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path></g></svg>
                        <span>9 godzin temu</span>
                    </div>
                </div>
                <div className="dashboard-tile">
                    <div className="dashboard-tile-stroke"></div>
                    <div className="dashboard-tile-header d-flex">
                        <h6>Przypisane do mnie</h6>
                        <div className="dashboard-action d-flex">
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M16.413 8.997H18A1 1 0 0118 11h-3.9l-.047-.001a.975.975 0 01-.736-.285l-.032-.032A.977.977 0 0113 9.946a1.12 1.12 0 010-.048V6.002a1 1 0 112 0v1.587l3.309-3.308a.977.977 0 011.374.005l.032.032a.976.976 0 01.005 1.374l-3.307 3.305zm-8.826 6.006H6A1 1 0 016 13h3.9l.047.001a.975.975 0 01.736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 11-2 0v-1.587l-3.309 3.308a.977.977 0 01-1.374-.005l-.032-.032a.976.976 0 01-.005-1.374l3.307-3.305z" fill="currentColor" fill-rule="evenodd"></path></svg>
                            </div>
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M6 18h3a1 1 0 010 2H6a2 2 0 01-2-2v-3a1 1 0 012 0v3zm12 2h-3a1 1 0 010-2h3v-3a1 1 0 012 0v3a2 2 0 01-2 2zM6 4h3a1 1 0 110 2H6v3a1 1 0 11-2 0V6a2 2 0 012-2zm12 2h-3a1 1 0 010-2h3a2 2 0 012 2v3a1 1 0 01-2 0V6z" fill="currentColor" fill-rule="evenodd"></path></svg></div>
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"></path><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"></path><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path></g></svg>
                            </div>
                        </div>
                    </div>
                    <div id="content-welcome" className="dashboard-tile-content col d-flex">
                        <table className="table border-bottom">
                            <thead className="border-bottom">
                                <tr className="bg-on-hover">
                                    <th scope="col" className="border-0">T</th>
                                    <th scope="col" className="border-0">Klucz</th>
                                    <th scope="col" className="border-0">Podsumowanie</th>
                                    <th scope="col" className="border-0">P</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-on-hover">
                                    <td className="border-0"><img src="https://damianw1995.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium" /></td>
                                    <td className="border-0">GTMS-10</td>
                                    <td className="border-0">Ilustracje do witryny internetowej i aplikacji mobilnej</td>
                                    <td className="border-0"><img src="https://damianw1995.atlassian.net/images/icons/priorities/medium.svg" /></td>
                                </tr>
                                <tr className="bg-on-hover">
                                    <td className="border-0"><img src="https://damianw1995.atlassian.net/rest/api/2/universal_avatar/view/type/issuetype/avatar/10318?size=medium" /></td>
                                    <td className="border-0">GTMS-11</td>
                                    <td className="border-0">Przeprowadzenie webinarium</td>
                                    <td className="border-0"><img src="https://damianw1995.atlassian.net/images/icons/priorities/medium.svg" /></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="jira-refresh">
                        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"></path><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"></path><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path></g></svg>
                        <span>9 godzin temu</span>
                    </div>
                </div>
                <div className="dashboard-tile streams-tile">
                    <div className="dashboard-tile-stroke"></div>
                    <div className="dashboard-tile-header d-flex">
                        <h6>Projekty</h6>
                        <div className="dashboard-action d-flex">
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M16.413 8.997H18A1 1 0 0118 11h-3.9l-.047-.001a.975.975 0 01-.736-.285l-.032-.032A.977.977 0 0113 9.946a1.12 1.12 0 010-.048V6.002a1 1 0 112 0v1.587l3.309-3.308a.977.977 0 011.374.005l.032.032a.976.976 0 01.005 1.374l-3.307 3.305zm-8.826 6.006H6A1 1 0 016 13h3.9l.047.001a.975.975 0 01.736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 11-2 0v-1.587l-3.309 3.308a.977.977 0 01-1.374-.005l-.032-.032a.976.976 0 01-.005-1.374l3.307-3.305z" fill="currentColor" fill-rule="evenodd"></path></svg>
                            </div>
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"></path><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"></path><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path></g></svg>
                            </div>
                        </div>
                    </div>
                    <div id="content-welcome" className="dashboard-tile-content row d-flex">
                        <div className="project-row-button">
                            <div className="row">
                                <div className="col-6">
                                    <div className="dashboard-project-element d-flex">
                                        <div className="left-content d-flex align-items-center">
                                            <img src="https://damianw1995.atlassian.net/secure/projectavatar?pid=10001&avatarId=10408&size=smallg" alt="Icon" className="icon" height="18" />
                                            <a href="#" className="link">Nazwa projektu</a>
                                            (testowa)
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="right-content d-flex justify-content-end align-items-center">
                                        <div className="projects-small-button">
                                            <Icon.FileBarGraph size={18} color={'gray'} />
                                            <Icon.CaretDownFill size={10} color={'black'} />
                                        </div>
                                        <div className="projects-small-button">
                                            <Icon.FunnelFill size={18} color={'gray'} />
                                            <Icon.CaretDownFill size={10} color={'black'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="projects-autor">
                                <div className="col-4 d-flex w-100 justify-content-between">
                                    <p>Lider zespołu</p>
                                    <a href="#" className="link">Autor</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-row-button">
                            <div className="row">
                                <div className="col-6">
                                    <div className="dashboard-project-element d-flex">
                                        <div className="left-content d-flex align-items-center">
                                            <img src="https://damianw1995.atlassian.net/secure/projectavatar?pid=10001&avatarId=10408&size=smallg" alt="Icon" className="icon" height="18" />
                                            <a href="#" className="link">Nazwa projektu</a>
                                            (testowa)
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="right-content d-flex justify-content-end align-items-center">
                                        <div className="projects-small-button">
                                            <Icon.FileBarGraph size={18} color={'gray'} />
                                            <Icon.CaretDownFill size={10} color={'black'} />
                                        </div>
                                        <div className="projects-small-button">
                                            <Icon.FunnelFill size={18} color={'gray'} />
                                            <Icon.CaretDownFill size={10} color={'black'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="projects-autor">
                                <div className="col-4 d-flex w-100 justify-content-between">
                                    <p>Lider zespołu</p>
                                    <a href="#" className="link">Autor</a>
                                </div>
                            </div>
                        </div>
                        <div className="project-row-button">
                            <div className="row">
                                <div className="col-6">
                                    <div className="dashboard-project-element d-flex">
                                        <div className="left-content d-flex align-items-center">
                                            <img src="https://damianw1995.atlassian.net/secure/projectavatar?pid=10001&avatarId=10408&size=smallg" alt="Icon" className="icon" height="18" />
                                            <a href="#" className="link">Nazwa projektu</a>
                                            (testowa)
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="right-content d-flex justify-content-end align-items-center">
                                        <div className="projects-small-button">
                                            <Icon.FileBarGraph size={18} color={'gray'} />
                                            <Icon.CaretDownFill size={10} color={'black'} />
                                        </div>
                                        <div className="projects-small-button">
                                            <Icon.FunnelFill size={18} color={'gray'} />
                                            <Icon.CaretDownFill size={10} color={'black'} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="projects-autor">
                                <div className="col-4 d-flex w-100 justify-content-between">
                                    <p>Lider zespołu</p>
                                    <a href="#" className="link">Autor</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="jira-refresh">
                        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"></path><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"></path><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path></g></svg>
                        <span>Przed chwilą</span>
                    </div>
                </div>
                <div className="dashboard-tile streams-tile">
                    <div className="dashboard-tile-stroke"></div>
                    <div className="dashboard-tile-header d-flex">
                        <h6>Strumienie</h6>
                        <div className="dashboard-action d-flex">
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M16.413 8.997H18A1 1 0 0118 11h-3.9l-.047-.001a.975.975 0 01-.736-.285l-.032-.032A.977.977 0 0113 9.946a1.12 1.12 0 010-.048V6.002a1 1 0 112 0v1.587l3.309-3.308a.977.977 0 011.374.005l.032.032a.976.976 0 01.005 1.374l-3.307 3.305zm-8.826 6.006H6A1 1 0 016 13h3.9l.047.001a.975.975 0 01.736.285l.032.032c.2.2.296.47.284.736l.001.048v3.896a1 1 0 11-2 0v-1.587l-3.309 3.308a.977.977 0 01-1.374-.005l-.032-.032a.976.976 0 01-.005-1.374l3.307-3.305z" fill="currentColor" fill-rule="evenodd"></path></svg>
                            </div>
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><path d="M6 18h3a1 1 0 010 2H6a2 2 0 01-2-2v-3a1 1 0 012 0v3zm12 2h-3a1 1 0 010-2h3v-3a1 1 0 012 0v3a2 2 0 01-2 2zM6 4h3a1 1 0 110 2H6v3a1 1 0 11-2 0V6a2 2 0 012-2zm12 2h-3a1 1 0 010-2h3a2 2 0 012 2v3a1 1 0 01-2 0V6z" fill="currentColor" fill-rule="evenodd"></path></svg></div>
                            <div onClick="#"
                                className="add-to-favorites"
                                data-toggle="tooltip"
                                data-placement="bottom"
                                title="Dodaj do oznaczonych gwiazdką">
                                <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"></path><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"></path><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path></g></svg>
                            </div>
                        </div>
                    </div>
                    <div id="content-welcome" className=" col d-flex">
                        <div className="streams d-flex justify-content-between">
                            <h5>Your Company JIRA</h5>
                            <div className="streams-icons">
                                <img height="16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Generic_Feed-icon.svg/256px-Generic_Feed-icon.svg.png?20120905025810" />
                                <img height="16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Generic_Feed-icon.svg/256px-Generic_Feed-icon.svg.png?20120905025810" />
                                <img height="16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Generic_Feed-icon.svg/256px-Generic_Feed-icon.svg.png?20120905025810" />
                            </div>
                        </div>
                    </div>
                    <p className="streams-p">Nie znaleziono aktywności</p>
                    <div className="jira-refresh">
                        <svg width="24" height="24" viewBox="0 0 24 24" role="presentation"><g fill="currentColor"><path d="M8 6.003v2.995a1 1 0 102 0V5.102C10 4.494 9.507 4 8.9 4H5a1 1 0 000 2.003h3z" fill-rule="nonzero"></path><path d="M9.428 18.018C7.351 16.989 6 14.807 6 12.37c0-2.266 1.167-4.319 3.02-5.425.48-.286.646-.922.371-1.421a.979.979 0 00-1.364-.386C5.557 6.611 4 9.35 4 12.37c0 3.248 1.802 6.158 4.57 7.529.498.247 1.095.026 1.332-.493.237-.52.025-1.141-.474-1.388z" fill-rule="nonzero"></path><path d="M14 15.002v3.896c0 .608.493 1.102 1.1 1.102H19a1 1 0 000-2.003h-3v-2.995a1 1 0 10-2 0z"></path><path d="M14.097 4.596c-.237.52-.025 1.14.474 1.387 2.077 1.029 3.428 3.21 3.428 5.647 0 2.266-1.167 4.32-3.021 5.425a1.063 1.063 0 00-.37 1.42c.274.5.885.673 1.364.387 2.47-1.473 4.027-4.212 4.027-7.232 0-3.248-1.802-6.158-4.57-7.528A.957.957 0 0015.002 4a1 1 0 00-.905.596z"></path></g></svg>
                        <span>9 godzin temu</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboards;
