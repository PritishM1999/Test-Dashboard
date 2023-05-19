import React from 'react';
import '../Login/Login.css';


function Login() {
  return (
    <>
        <div className="login">
            <div className="logo">
                <img src="/assets/images/logo/logo.png" width="498" height="150" alt="logo"/>
            </div>
            <div className="login-box">
                <h1>Login</h1>
                <form action="#">
                    <div className="form-group">
                        <input type="text" name="email" placeholder="Email" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="password" name="pass" placeholder="Password" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="form-check">
                                    <input type="checkbox" id="remember-me" value="Remember me"/>
                                    <label for="remember-me">
                                        <span className="checkbox-check"></span> Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <a href="forgot-password.php" title="Forgot Password?" className="forgot-link">Forgot Password?</a>        
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary btn-block">Login</button>
                </form>
            </div>
        </div>


    </>
  )
}

export default Login;
