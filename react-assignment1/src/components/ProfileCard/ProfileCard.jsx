import './ProfileCard.css' 
import React from 'react';

export default function ProfileCard({name, title, imageURL}){
    return <div className="card">
        <img src={imageURL} alt={name} className='img'/>
        <div className="describtion">
            <p>{name}</p>
            <p>{title}</p>
        </div>
    </div>
}