import React from 'react'
import { useState } from 'react';
import {useCookies} from 'react-cookie';
var CryptoJS = require('crypto-js');
export default function HomeSignup() {
    function signuptoggle(){
        document.getElementById('container').classList.add("right-panel-active");
    }
    function signintoggle(){
        document.getElementById('container').classList.remove("right-panel-active");
    }

  return (
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4 my-3 p-5 border border-body rounded">
                <div class="row mb-3">
                    <h4>LOGIN</h4>
                </div>
                <form>
                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" class="form-control" />
                    </div>

                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" class="form-control" />
                    </div>

                    
                    <div class="row mb-4">
                        {/* <div class="col d-flex justify-content-center">
                            
                            <div class="form-check">
                                <label class="form-check-label" for="form2Example31"> Remember me </label>
                                <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            </div>
                        </div> */}

                        <div class="col">
                            
                            <a href="#!">Forgot password?</a>
                        </div>
                    </div>

                    
                    <div class="row justify-content-center">

                        <button type="button" class="btn btn-primary btn-block mb-4 col-11 shadow-sm">Login</button>
                    </div>

                    
                    <div class="text-center">
                        <p>Need an account? <a href="register.html">Register</a></p>
                        {/* <p>or sign up with:</p>
                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <a href="#"><i class="fab fa-facebook-f"></i></a>
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <a href="#"><i class="fab fa-google"></i></a>
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <a href="#"><i class="fab fa-twitter"></i></a>
                        </button>

                        <button type="button" class="btn btn-link btn-floating mx-1">
                            <a href="#"><i class="fab fa-github"></i></a>
                        </button> */}
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
