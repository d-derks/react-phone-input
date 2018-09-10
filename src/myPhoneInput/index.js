import React from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';


export default class MyPhoneInput extends React.PureComponent {
    constructor() {
        super(...arguments)

        this.state = {
            phone: '',
        }
    }

    render() {
        return (
            <PhoneInput
                placeholder="Enter phone number"
                value={ this.state.phone }
                onChange={ phone => this.setState({ phone }) }
            />
        )
    }
}