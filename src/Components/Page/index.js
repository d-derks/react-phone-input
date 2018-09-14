import React from 'react';
import MyPhoneInput from '../MyPhoneInput/index';
import Provider from '../../Context/index';
import Intro from '../Intro/index';
import './page.css';

export default class Page extends React.PureComponent {

    constructor() {
        super(...arguments)
    }

    render() {
        return(
            <Provider>
                <div className='l-page'>
                    <div className="page-inner">
                        <header className="page-header">
                            <div className="page-header-inner">
                                <Intro />
                            </div>
                        </header>
                        <main className="page-main">
                            <div className="page-section">
                                <div className="page-section-inner">
                                    <MyPhoneInput
                                        placeholder="Enter phone number"
                                    />
                                </div>
                            </div>
                        </main>
                        <footer className="page-footer">
                            <div className="page-footer-inner">
                                <small className='page-footer-text'>
                                    React phone input, made by Debbie Derks 2018
                                </small>
                            </div>

                        </footer>
                    </div>
                </div>
            </Provider>
        )
    }

}