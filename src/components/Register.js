import React, { Component } from 'react'

class Register extends Component {
    render(){
        return (
            //add LOGIN JSX here
            <div className="container">
                <h2 className="text-center">Register</h2>
                <form className="mt-5">
                    <label>Email:</label>
                    <input type="email" placeholder="someone@example.com" /> <br/>
                    <label>Password:</label>
                    <input type="password" placeholder="someone@example.com" /><br/>
                    <input type="submit" className="btn-primary btn btn-md" value="Save"/>
                </form>
            </div>
        )
    }
}

export default Register