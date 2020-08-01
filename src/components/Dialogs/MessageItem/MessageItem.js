import React from 'react'
import s from './MessageItem.module.css'


function MessageItem(props){
    
    return(
        <div className={s.message}>
            {props.message}
        </div>
    );
}

export default MessageItem;