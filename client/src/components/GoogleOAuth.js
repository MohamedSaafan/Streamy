import React from "react";
import { GoogleClientId } from "../apis/apisKeys";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";

class GooglOAuth extends React.Component {
  state = {
    isSignedIn: null,
  };
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client
        .init({
          clientId: GoogleClientId,
          scope: "email",
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();
          this.onAuthChange();
          // listen passes the isSignedIn.get() to its callback
          this.auth.isSignedIn.listen(this.onAuthChange);
          // listen is a great function you should always remember it
        });
    });
  }
  onAuthChange = () => {
    const isSignedIn = this.auth.isSignedIn.get();
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };
  onSingInClick = () => {
    this.auth.signIn(this.auth.currentUser.get().getId());
  };
  onSingOutClick = () => {
    this.auth.signOut();
  };
  renderAuthButton = () => {
    if (this.props.isSignedIn === null) {
      return <div></div>;
    }
    if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSingOutClick} className="btn rounded nav-link">
          Sign out
        </button>
      );
    }
    return (
      <button onClick={this.onSingInClick} className="btn nav-link rounded">
        <span className="fa fa-google fa-xl text-success "></span> Sign In With
        Google
      </button>
    );
  };
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}
const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
  };
};
export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GooglOAuth);
