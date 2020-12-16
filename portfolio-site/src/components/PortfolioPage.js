import React, { useState } from "react";
import { NavLink } from 'react-router-dom'

const PortfolioPage = () => (
    <div>
        <h1>My Work</h1>
        <NavLink to="/portfolio/1">One</NavLink>
        <NavLink to="/portfolio/2">Two</NavLink>
        <NavLink to="/portfolio/3">Three</NavLink>
    </div>
)

export default PortfolioPage