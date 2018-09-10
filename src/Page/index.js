import React from 'react';
import MyPhoneInput from '../MyPhoneInput';
import Provider, { Context } from '../Context';

export default class Page extends React.PureComponent {

    constructor() {
        super(...arguments)
    }

    render() {
        return(
            <Provider>
                <div className='l-page'>
                    <div className="page-inner">
                        <Context.Consumer>
                            {
                                ({ phone }) => (
                                        <header className="page-header">
                                            <h1>{ phone }</h1>
                                        </header>
                                )
                            }
                        </Context.Consumer>
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