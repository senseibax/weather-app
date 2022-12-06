import React from "react";
import "./comp.css";

export default function Head() {
    return (
        <header>
            <div className='header-inner'>
                <div className='logo'>REACT METEO</div>
                <nav>
                    <ul>
                        <li>
                            <a className="hede" href='/'>News</a>
                        </li>
                        <li>
                            <a className="hede" href='/'>About us</a>
                        </li>
                        <li>
                            <a className="hede" href='/'>MAP</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}