import React from 'react';
import s from './Post.module.css';

function Post(props) {
    return(
        <div className = {s.item}>
           <img src = 'https://24smi.org/public/media/celebrity/2020/03/17/ndyuq11dpxep-rikardo-milos.jpg'></img>
           {props.message}
        </div>
    );
}

export default Post;