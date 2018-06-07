import React, { Component } from 'react';
import { connect } from 'react-redux'
import GoogleLogin from 'react-google-login'
import { SignInUser, toggleClose, toggleOpen } from './../redux/actions/actions'
class SignInWith extends Component {

    signup(res, type) {
        let postData;
        if (type === 'google' && res.w3.U3) {
           postData = {
                name: res.w3.ig,
                provider: type,
                email: res.w3.U3,
                provider_id: res.El,
                token: res.Zi.access_token,
                provider_pic: res.w3.Paa
            };
        }

        // build our user data
           this.props.SignInUser(postData);
           this.props.toggleClose()
    }



    render() {
        const responseGoogle = (res) => {
            this.signup(res, 'google');
        };
        return (
            <div>
                <GoogleLogin clientId="205232504907-mt3p35m13aal1qekssqtiv0gjaicnk5j.apps.googleusercontent.com"
                             onClick={this.props.toggleClose}
                             onFailure={responseGoogle}
                             onSuccess={responseGoogle}>
                    <div className="social-links">
                        <a href="/" target="_blank" rel="noopener noreferer"><i className="fa fa-google-plus-square" aria-hidden="true"/>Log In with Google</a>
                    </div>
                </GoogleLogin>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        modalMode: state.common.modalMode
    }
}
export default connect(mapStateToProps, {
    toggleClose,
    toggleOpen,
    SignInUser
})(SignInWith);