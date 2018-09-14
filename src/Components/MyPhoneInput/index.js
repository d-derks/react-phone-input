import React, { Fragment } from 'react';
import PhoneInput from 'react-phone-number-input';
import { Context } from '../../Context/index';
import './myphoneinput.css';


export default function MyPhoneInput()  {

    return (
        <Context.Consumer>
            {
                ({ phone, updateChange }) => (
                    <Fragment>
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={ phone }
                            onChange={ updateChange }
                        />
                    </Fragment>
                )
            }
        </Context.Consumer>
    )

}