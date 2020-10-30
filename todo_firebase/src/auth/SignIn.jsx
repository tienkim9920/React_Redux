import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signIn } from '../redux/action/authAction'

class SignIn extends Component {

    state = {
        email: "",
        password: "",
        isCheckEmail: true,
        isCheckPassword: true,
        redirect: false
    }

    handlderChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handlerSubmit = (e) => {
        e.preventDefault()

        var { users } = this.props

        console.log(users)

        var email = this.state.email
        var password = this.state.password

        var findUser = users.find((user) => {
            return user.email === email
        })


        if (findUser){
            if (findUser.password === password){
                this.setState({
                    redirect: true
                })

                this.props.signIn(findUser.id)

            }else{
                this.setState({
                    password: "",
                    isCheckEmail: true,
                    isCheckPassword: false
                })
            }
        }else{
            this.setState({
                email: "",
                password: "",
                isCheckEmail: false
            })
        }
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/' />
        }
    }

    componentDidMount(){
        var { users } = this.props

        console.log(users)
    }

    render() {
        return (
            <div className="container">
                <form className="col s12 m4 l8 z-detph-1 card" onSubmit={this.handlerSubmit}>
                    <h4 className="center-align">Sign In</h4>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="email" type="email" className="validate" onChange={this.handlderChange} />
                            <label htmlFor="email">Email</label>
                            {
                                !this.state.isCheckEmail &&
                                <span className="red-text">*Vui Lòng Kiểm Tra Lại Email!</span>
                            }
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            <input id="password" type="password" className="validate"onChange={this.handlderChange}  />
                            <label htmlFor="password">Password</label>
                            {
                                !this.state.isCheckPassword &&
                                <span className="red-text">*Vui Lòng Kiểm Tra Lại Password!</span>
                            }
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                    <div className="row">
                        <div className="col s12 m4 l2"></div>
                        <div className="input-field col s12 m4 l8">
                            {this.renderRedirect()}
                            <button className="btn btn-raised">Sign In</button>
                        </div>
                        <div className="col s12 m4 l2"></div>
                    </div>
                </form>
            </div>
        );
    }

}

const mapStateToProps = (state) => {

    return {
        users: state.auth.users
    }

}

const mapDispatchToProps = (dispatch) => {
    
    return {
        signIn: (data) => {
            dispatch(signIn(data))
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)