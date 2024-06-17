import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Homepage from './pages/homepage/Homepage.jsx';
import Projects from './pages/projects/Projects.jsx';
import ProjectView from './pages/projects/pages/project_view/ProjectView.jsx';
import Dashboards from './pages/dashboards/Dashboards.jsx';
import Filters from './pages/filters/Filters.jsx';
import Login from './pages/login/Login.jsx';
import People from './pages/people/People.jsx';
import Plans from './pages/plans/Plans.jsx';
import Layout from './layouts/Layout'
import LayoutHomepage from './layouts/LayoutHomepage'
import LayoutLogin from './layouts/LayoutLogin'
import ProjectDashboard from './pages/projects/pages/project_dashboard/ProjectDashboard';
import ProjectsBrowse from './pages/projects/pages/project_browse/ProjectsBrowse';


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutLogin />}>
                    <Route index element={<Login />} />
                </Route>
                <Route path="/home" element={<LayoutHomepage />}>
                    <Route index element={<Homepage />} />
                </Route>
                <Route path="/projekty" element={<Layout />}>
                    <Route index element={<Projects />} />
                    <Route path="/projekty/:nazwa" element={<ProjectView />} />
                    <Route path="/projekty/przegladaj" element={<ProjectsBrowse />} />
                </Route>
                <Route path="/filters" element={<Layout />}>
                    <Route index element={<Filters />} />
                </Route>
                <Route path="/zespoly" element={<LayoutHomepage />}>
                    <Route index element={<People />} />
                </Route>
                <Route path="/plany" element={<Layout />}>
                    <Route index element={<Plans />} />
                </Route>
                <Route path="/pulpit" element={<Layout />}>
                    <Route index element={<Dashboards />} />
                    <Route path="/pulpit/default" element={<ProjectDashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>

);

