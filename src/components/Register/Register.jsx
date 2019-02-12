import React from 'react';
import FacebookLogin from 'react-facebook-login'
const Register=(props)=>{
    return(  
            <div className="container">     
                <section className="section">
                <h2 className="text-center text-black">Register</h2>
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-5">
                        <div className="card bg-secondary shadow border-0">
                          <div className="card-header bg-white pb-5">
                            <div className="text-muted text-center mb-3">
                              <small>Sign up with</small>
                            </div>
                            <div className="text-center">
                                    <FacebookLogin
                                    appId="367351517400934" //APP ID NOT CREATED YET
                                    fields="name,email,picture"
                                    callback={props.responseFacebook}
                                    cssClass="btn btn-primary mr-2"
                                    textButton="Facebook"
                                  />
                                  <a href="#" className="btn btn-neutral btn-icon">
                                    <span className="btn-inner--icon">
                                    <i className="fab fa-2x fa-google"></i>
                                </span>
                                <span className="btn-inner--text">Google</span>
                              </a>
                              <a href="#" className="btn btn-neutral btn-icon mr-4 mt-2">
                                <span className="btn-inner--icon">
                                <i className="fab fa-2x fa-twitter"></i>
                                </span>
                                <span className="btn-inner--text">Twitter</span>
                              </a>
                            </div>
                          </div>
                          <div className="card-body px-lg-5 py-lg-5">
                            <div className="text-center text-muted mb-4">
                              <small>Or sign up with credentials</small>
                            </div>
                            <form role="form" onSubmit={props.Clicked}>
                              <div className={`form-group ${props.successOrError}`}>
                                <div className="input-group input-group-alternative mb-3">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-hat-3"></i></span>
                                  </div>
                                  <input className="form-control"name='username' type="text" placeholder="username" onChange={props.HandleChange} required  />
            
                                </div>
                              </div>
                              <div className={`form-group ${props.successOrError}`}>
                                <div className="input-group input-group-alternative mb-3">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-email-83"></i></span>
                                  </div>
                                  <input className="form-control" name="email" type="email" placeholder="email" onChange={props.HandleChange} required /> 
                                </div>
                              </div>
                              <div className={`form-group ${props.successOrError}`}>
                                <div className="input-group input-group-alternative">
                                  <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="ni ni-lock-circle-open"></i></span>
                                  </div>
                                  <input className="form-control" name="password" type="password" placeholder="password" onChange={props.HandleChange} required  />
            
                                </div>
                              </div>
                              <div className="text-muted font-italic">
                                <small>password strength:
                                  <span className="text-success font-weight-700">strong</span>
                                </small>
                              </div>
                              <div className="row my-4">
                                <div className="col-12">
                                  <div className="custom-control custom-control-alternative custom-checkbox">
                                    <input className="custom-control-input" id="customCheckRegister" type="checkbox"/>
                                    <label className="custom-control-label" htmlFor="customCheckRegister">
                                      <span>I agree with the
                                        <a href="#">Privacy Policy</a>
                                      </span>
                                    </label>
                                  </div>
                                </div>
                              </div>
                              <div className="text-center">
                              <input  type="submit" className="btn-primary btn btn-md" id="signup" value="Signup"/>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
            </div>
            
    )
}

export default Register;