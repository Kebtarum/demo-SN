import React from 'react';
import s from './Preloader.module.css';

function Preloader(props) {
    return (
        <div className={s.preloader}>
            <div className={s.spinner}></div>
        </div>
    );
}

export default Preloader;