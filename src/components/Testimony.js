import React from 'react';
import '../css/Testimony.css';

export function Testimony(props) {
    return (
        <div className='testimony-container'>
            <img className='testimony-image'
                 src={require(`../images/testimony-${props.image}.png`)}
                 alt={props.imageAlt}/>
            <div className='testimony-text-container'>
                <p className='testimony-name'><strong>{props.name}</strong> en {props.country}</p>
                <p className='testimony-job'>{props.job} en <strong>{props.company}</strong></p>
                <p className='testimony-text'>"{props.testimony}"</p>
            </div>
        </div>
    );
}