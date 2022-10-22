import React from 'react'
import { useState } from 'react'
export default function Register() {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [contact,setContact] = useState('')
  
    async function registerUser(){
  
      const res = await fetch('http://localhost:5000/register',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          password,
          contact
        })
      })
  
      const data = await res.json();
      if(data.status === 'ok'){
        alert('Verification Link Sent To Registered Email');
        window.location.href = '/';
      }
      else if(data.status ==='error' && data.error === 'Email Not Valid'){
        alert('Please Enter Valid Email');
      }
      console.log(data)
    }

  return (
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4 my-3 p-5 border border-body rounded">
                <div class="row mb-3 text-center">
                    <h4 style={{alignItems: "center",color:"black"}}>SIGN UP</h4>
                </div>
                <form>

                <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Name</label>
                        <input type="text" id="form2Example1" value={name}
       onChange = {(e)=>{setName(e.target.value)}} class="form-control" />
                    </div>
                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" value={email}
       onChange = {(e)=>{setEmail(e.target.value)}} class="form-control" />
                    </div>

                    
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" value={password}
       onChange = {(e)=>{setPassword(e.target.value)}} class="form-control" />
                    </div>

                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Contact Number</label>
                        <input type="number" id="form2Example2" value={contact}
       onChange = {(e)=>{setContact(e.target.value)}} class="form-control" />
                    </div>


                    
                    <div class="row justify-content-center">

                        <button type="button" onClick={registerUser} class="btn btn-primary btn-block mb-4 col-11 shadow-sm">Register</button>
                    </div>

                    
                    <div class="text-center">
                        <p>Already a user? <a href="/">Login</a></p>
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
