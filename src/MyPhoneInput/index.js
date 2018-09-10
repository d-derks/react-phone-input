import React, { Fragment } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Context } from '../Context';


export default function MyPhoneInput()  {

    return (
        <Context.Consumer>
            { ({ phone, updateChange }) => (
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