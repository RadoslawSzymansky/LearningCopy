import React from 'react';
import {connect} from 'react-redux'
import {signIn, signOut} from '../actions'
class GoogleAuth extends React.Component{
  componentDidMount() {
    // pobieranie bliblioteki auth2 
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: "884054055260-q0aq1t9nas6sderq1bmph23h049sc9tl.apps.googleusercontent.com",
        scope: "email"
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }
  onAuthChange = isSignedIn => {
    console.log(this.auth.currentUser.get().getId())
   if (isSignedIn) {
     this.props.signIn(this.auth.currentUser.get().getId());
   } else {
     this.props.signOut();
   }
  };
  onSignInClick = () => {
    this.auth.signIn()
  }
  onSignOutClick = () => {
    this.auth.signOut()
  }
  rendeAuthButton() {
    if(this.props.isSignedIn === null ) {
      return null;
    } else if ( this.props.isSignedIn){
      return (
        <button 
        onClick={this.onSignOutClick}
        className="ui red google button">
        <i className="google icon"/>
         Sign Out with Google
        </button>
      )

    } else {
      return <button  
      onClick={this.onSignInClick}
      className="ui red google button"><i className="google icon" />
         Sign In with Google</button>
    }
  }
  render() {
    return (
      <div>{this.rendeAuthButton()}</div>
    );
  };
};

const mapStateToProps = state => ({
  isSignedIn: state.auth.isSignedIn
})

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);