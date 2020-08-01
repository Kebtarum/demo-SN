import React, { useState, useEffect } from 'react';
import s from './ProfileInfo.module.css';



const ProfileStatusWithHooks = (props) => {
    
    ///////////////////// ВСЕ ЧТО НИЖЕ ХУКИ (hook React)

    let [editMode, setEditMode] = useState(false);   //тоже самое что и нижние три строки
    // let stateWithSetState = useState(true);
    // let editMode = stateWithSetState[0];
    // let setEditMode = stateWithSetState[1];
    let [status, setStatus] = useState(props.status); 

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }
    ///////////////////////////////////////////////////////////////////////////////// ВСЕ ЧТО ВЫШЕ ХУКИ (hook React)
        return (
            <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>

                </div>
            }
            {(editMode) && 
                <div>
            
                    <input autoFocus={true} value={status}
                    onChange={onStatusChange} onBlur={deactivateEditMode} ></input>

                </div>
            }
            </div>
            
        );
    
}

export default ProfileStatusWithHooks;