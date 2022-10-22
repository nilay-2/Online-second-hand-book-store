import './css/prodinp.css'
import React from 'react';
import { useState} from 'react';
import { useParams } from 'react-router-dom';
export default function Couponform() {
    const [ to,setTo] = useState('');
    const [ nprice,setNprice] = useState('');
    const [ name,setName] = useState('');
    const {product} = useParams();

    async function submitData(){
        const res = await fetch('http://localhost:5000/coupon/new',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            product,
            to,
            nprice,
            name
          })
        })
    
        const data = await res.json();
        if(data.status === 'ok'){
            alert("Created Coupon: "+data.details.name)
        }
        else{
            console.log(data.error)
        }
      }

  return (
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4 my-3 p-5 border border-body rounded">
                <div class="row mb-3 text-center">
                    <h4 style={{alignItems: "center",color:"black"}}>Coupon Details</h4> 
                </div>
                <form>
                <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Email Of User</label>
                        <input type="text" id="form2Example2" value={to} onChange = {(e)=>{setTo(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Discount</label>
                        <input type="number" id="form2Example2" value={nprice} onChange = {(e)=>{setNprice(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Coupon Name</label>
                        <input type="text" id="form2Example2" value={name} onChange = {(e)=>{setName(e.target.value)}} class="form-control" />
                    </div>
                    <div class="row justify-content-center">

                        <button type="button" onClick={submitData} class="btn btn-primary btn-block mb-4 col-11 shadow-sm">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
