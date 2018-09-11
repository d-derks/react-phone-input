import React from 'react';
import { Context } from '../Context';
import './intro.css';

export default function Intro() {
    return(
        <Context.Consumer>
            {
                ({ phone }) => (
                    <div className="b-intro">
                        <p className="intro-text">
                            {
                                phone
                            }
                        </p>
                    </div>
                )
            }
        </Context.Consumer>
    )
}