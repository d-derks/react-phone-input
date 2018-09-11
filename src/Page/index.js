import React from 'react';
import MyPhoneInput from '../MyPhoneInput';
import Provider, { Context } from '../Context';
import Intro from '../Intro';

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
                            <MyPhoneInput/>
                        </main>
                        <footer className="page-footer"></footer>
                    </div>
                </div>
            </Provider>
        )
    }

}