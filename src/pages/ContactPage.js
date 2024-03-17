import React from 'react';
import '../styles/ContactPage.css';

class Contact extends React.Component {
    state = {
        text: '',
    }

    handleInput = e => {
        this.setState({
            text: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            text: '',
        })
    }


    render() {
        return (
            <div className='contact'>
                <form onSubmit={this.handleSubmit}>
                    <h2>Napisz do nas</h2>
                    <textarea placeholder='napisz wiadomość...' value={this.state.text} onChange={this.handleInput} />
                    <button type="submit" >Wyślij</button>
                </form>
            </div>
        );
    }
}

export default Contact;
