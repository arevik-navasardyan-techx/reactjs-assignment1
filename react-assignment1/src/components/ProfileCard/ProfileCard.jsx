import './ProfileCard.css' 
import React from 'react';

export default function ProfileCard({name, title, imageUrl}){
    return <div className="card-container">
        <img src={imageUrl} alt={name} className='img'/>
        <div className="describtion">
            <p>{name}</p>
            <p>{title}</p>
        </div>
    </div>
}