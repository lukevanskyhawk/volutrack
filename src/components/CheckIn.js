import React, { Component } from 'react';



class NameCheckIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            timeIn: '',
            classroom: '',
            visitType: ''
        }

        this.updateName = this.updateName.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    updateName(event) {
        this.setState({ name: event.target.value });

    }

    submitForm(event) {
        const { onSubmit } = this.props;
        onSubmit(this.state.name);
        event.preventDefault();
    }


    render() {

        return (
            <form onSubmit={this.submitForm} autoComplete="off">
                <input className="" type="text" placeholder="Full Name"
                    name={this.state.userName} onChange={this.updateName} />


                <button type="submit" name="submit" >Check In</button>
                <div>
                    <input type="radio" />
                </div>

            </form>
        )
    }

}


export default NameCheckIn;