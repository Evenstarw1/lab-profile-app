import React from 'react';
import { Link } from 'react-router-dom';


const homePage = (props) => (
    <div>
        <button type="button"><Link to="/signup">Sign up</Link></button>
        <button type="button"><Link to="/login">Log in</Link></button>
    </div>
);

export default homePage;