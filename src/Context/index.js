import React from 'react';

export const Context = React.createContext();

export default class Provider extends React.PureComponent {

    constructor() {
        super(...arguments);
        this.state = {
            phone: '',
        }
    }


    render() {

        return(
            <Context.Provider
                value={
                        {
                        state: this.state,
                        phone: this.state.phone,
                        updateChange: (value) => {
                            this.setState({
                                phone: value
                            })
                        }
                    }
             }>
                {this.props.children}
            </Context.Provider>
        )
    }

}