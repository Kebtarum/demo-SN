import React from 'react';
import s from './Navbar.module.css';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MessageIcon from '@material-ui/icons/Message';
import GroupIcon from '@material-ui/icons/Group';
import AnnouncementIcon from '@material-ui/icons/Announcement';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import SettingsEthernetIcon from '@material-ui/icons/SettingsEthernet';

function Navbar() {
    return (
        <nav className={cn(s.nav)}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>
                    <div className={s.itemInner}>
                        <AccountBoxIcon fontSize='medium'  />
                        <span>Profile</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>
                    <div className={s.itemInner}>
                        <MessageIcon fontSize='medium'  /><span>Messages</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/users' activeClassName={s.active}>
                    <div className={s.itemInner}>
                        <GroupIcon fontSize='medium'  /><span>Users</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.active}>
                    <div className={s.itemInner}>
                        <AnnouncementIcon fontSize='medium'  /><span>News</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.active}>
                    <div className={s.itemInner}>
                        <LibraryMusicIcon fontSize='medium'  /><span>Music</span>
                    </div>
                </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.active}>
                    <div className={s.itemInner}>
                        <SettingsEthernetIcon fontSize='medium'  /><span>Settings</span>
                    </div>
                </NavLink>
            </div>
        </nav>
    );
}

export default Navbar;