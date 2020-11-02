import React from "react";

export const AuthPage = () => {
  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h2>Short Linker</h2>
        <div className="card grey lighten-5">
          <div className="card-content">
            <span className="card-title">Login</span>
            <div>
              {/*<form className="col s12">*/}
              {/*    <div className="row">*/}
              {/*        <div className="input-field col s6">*/}
              {/*            <i className="material-icons prefix">account_circle</i>*/}
              {/*            <input id="icon_prefix" type="text" className="validate"/>*/}
              {/*            <label htmlFor="icon_prefix">First Name</label>*/}
              {/*        </div>*/}
              {/*        <div className="input-field col s6">*/}
              {/*            <i className="material-icons prefix">phone</i>*/}
              {/*            <input id="icon_telephone" type="tel" className="validate"/>*/}
              {/*            <label htmlFor="icon_telephone">Telephone</label>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</form>*/}
            </div>
          </div>
          <div className="card-action">
            <button
              className="waves-effect waves-light btn blue darken-5"
              style={{ marginRight: 10 }}
            >
              Login
            </button>
            <button className="waves-effect waves-light btn red lighten-1">
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
