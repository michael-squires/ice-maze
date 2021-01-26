import React from 'react';

const Header = (props) => {
    const { title } = props
    return (
        <header className="App-header">
            <h2 className="App-title">{title}</h2>
        </header>
    );
};

export default Header;