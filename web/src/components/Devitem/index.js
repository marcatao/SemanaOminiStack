import React from 'react';
import './style.css';

function DevItem({dev}){
    return(
             
        <li  className="dev-item">
        <header>
                <img src={dev.avatar_url} alt={dev.name}></img>
                <div className="user-info">
                    <strong>{dev.name}</strong>
                    <strong>{dev.techs.join(', ')}</strong>
                </div>
        </header>
        <p>{dev.bio}</p>
        <a href={`https://github.com/${dev.github_username}`}>Acessar perfil GitHub</a>
    </li>
    );
}

export default DevItem;