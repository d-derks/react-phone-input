import React from 'react';
import { Context } from '../Context';
import './intro.css';

export default function Intro() {
    return(
        <Context.Consumer>
            {
                ({ phone }) => (
                    <div className="b-intro">
                        <div className="intro-media">
                            <svg className='b-icon' viewBox="0 0 18 22">
                                <path className='icon-inner' d="M9 0C4 0 0 4 0 9v7c0 1.7 1.633 3 3.333 3H6v-8H2V9c0-3.9 3.1-7 7-7s7 3.1 7 7v2h-4v8h4v1H9v2h6.334C17.033 22 18 20.7 18 19V9c0-5-4-9-9-9z"/>
                            </svg>
                        </div>
                        {
                            phone ?
                                (
                                    <p className="intro-text">
                                        {
                                            phone
                                        }
                                    </p>
                                ):
                                (
                                    <h1 className='intro-title'>
                                        Talon.one
                                    </h1>
                                )
                        }

                    </div>
                )
            }
        </Context.Consumer>
    )
}