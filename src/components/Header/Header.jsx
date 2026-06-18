import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='header'>
            <div className="header-content">
                <h2>Delicious Food to Your Doorstep</h2>
                <p>
                    Enjoy fresh, tasty meals from your favorite restaurants with fast and reliable delivery. Order now and satisfy your cravings anytime.
                </p>
                <button>view menu</button>
            </div>
        </div>
    );
};

export default Header;