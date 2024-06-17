import React, { useState } from 'react';
import { Menu, MenuItem, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AppsIcon from '@mui/icons-material/Apps';
import WorkIcon from '@mui/icons-material/Work';
import SettingsIcon from '@mui/icons-material/Settings';
import AddIcon from '@mui/icons-material/Add';

const AppMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Menu
                id="menu"
                open='true'
                MenuListProps={{
                    'aria-labelledby': 'menu-button',
                }}
            >
                <List>
                    <ListItem>
                        <ListItemText primary="Twoje aplikacje" />
                    </ListItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText primary="Strona główna Atlassian" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AppsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Jira" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <WorkIcon />
                        </ListItemIcon>
                        <ListItemText primary="Jira Work Management" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Confluence" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemIcon>
                            <AddIcon />
                        </ListItemIcon>
                        <ListItemText primary="Administracja" />
                    </MenuItem>
                    <ListItem>
                        <ListItemText primary="Odkrywaj" />
                    </ListItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemText primary="Jira Service Management" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemText primary="Opsgenie" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemText primary="Slack" />
                    </MenuItem>
                    <MenuItem onClick={handleClose}>
                        <ListItemText primary="Więcej produktów Atlassian" />
                    </MenuItem>
                </List>
            </Menu>
        </div>
    );
};

export default AppMenu;
