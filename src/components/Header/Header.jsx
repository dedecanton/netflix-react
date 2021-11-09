import React from 'react';
import './Header.css'

export default ({black}) => {
    return(
        <header className={black ? 'black' : ''}>
            <div className="header--logo">
                <a href="/">
                    <img src="https://o.remove.bg/downloads/9618dca1-9aea-4735-9024-4344ea3389a0/image-removebg-preview.png" alt="Netflix" />
                </a>
            </div>

            <div className="header--user">
                <a href="/">
                    <img src="https://i.pinimg.com/originals/b6/77/cd/b677cd1cde292f261166533d6fe75872.png" alt="Usuário logado" />
                </a>
            </div>
        </header>
    )
}