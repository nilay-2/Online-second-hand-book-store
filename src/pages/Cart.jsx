import { uploadBytesResumable } from "firebase/storage";
import React from "react";
import { useState,useEffect } from 'react';
import {useCookies} from 'react-cookie';
var CryptoJS = require('crypto-js');
export default function Cart() {
  var total = 0;
  var sub = 0;
  const [items,setItems] = useState('');
  const [coupon,setCoupon] = useState('');
  const [cookies] = useCookies('user');
    var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    const user = decryptedData.email;

    useEffect(()=>{
      getItems();
    })



    function isDate(val) {
      // Cross realm comptatible
      return Object.prototype.toString.call(val) === '[object Date]'
    }
    
    function isObj(val) {
      return typeof val === 'object'
    }
    
     function stringifyValue(val) {
      if (isObj(val) && !isDate(val)) {
        return JSON.stringify(val)
      } else {
        return val
      }
    }
    
    function buildForm({ action, params }) {
      const form = document.createElement('form')
      form.setAttribute('method', 'post')
      form.setAttribute('action', action)
    
      Object.keys(params).forEach(key => {
        const input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', key)
        input.setAttribute('value', stringifyValue(params[key]))
        form.appendChild(input)
      })
    
      return form
    }
    
     function post(details) {
      const form = buildForm(details)
      document.body.appendChild(form)
      form.submit()
      form.remove()
    }
  
    
  
    async function getData(){
      const amount = document.getElementById("total").innerHTML;
      console.log(amount);
      const res = await fetch('http://localhost:5000/api/payment',{
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
          user,
          amount
        })
      })
      const data = await res.json();
      return data.params;
    }
  
    async function makePayment(){
      const response = await getData();
      var information={
        action:"https://securegw-stage.paytm.in/order/process",
        params:response
    }
    console.log(information);
      post(information)
    }



    async function remove(id){
        const res = await fetch('http://localhost:5000/cart/remove',{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            user,
            id
          })
        })
        const data = await res.json();
        if(data.status=='ok'){
          alert("Item Removed");
          window.location.reload();
        }
        else{
          alert("Error Occured");
        }
    }

    async function applyCoupon(id,i){
      var coupon = document.getElementById(`inputfld${i}`).value;
      console.log(coupon);
      const res = await fetch('http://localhost:5000/coupon/verify',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user,
          id,
          coupon
        })
      })
      const data = await res.json();
      if(data.status=='true'){
        document.getElementById("couponspan").classList.remove("hidden");
        document.getElementById("discount").innerHTML = data.coupon.nprice;
        alert("Applied Coupon");
        updateSub();
      }
      else{
        alert("Invalid Coupon");
      }
  }

    function min(i,price){
      const v = document.getElementById(`quantity${i}`);
      const it = document.getElementById(`itmprc${i}`);
      if(v.placeholder==1){
          return;
      }
      v.placeholder = parseInt(v.placeholder) - 1;
      it.innerText = parseInt(v.placeholder)*price;
      updateSub();
  }

  function add(i,price){
    console.log(i);
      const v = document.getElementById(`quantity${i}`);
      const it = document.getElementById(`itmprc${i}`); 
      v.placeholder = parseInt(v.placeholder) + 1;
      it.innerText = parseInt(v.placeholder)*price;
      updateSub();
  }

  function updateSub(){
    sub = 0;
    const s = document.getElementsByClassName('price');
    for(var i=0;i<s.length;i++){
      sub = sub+ parseInt(s[i].innerHTML);
    }
    document.getElementById("sub").innerHTML = sub;
    updateTotal(sub)
  }

  function updateTotal(sub){
    document.getElementById("total").innerHTML = sub - parseInt(document.getElementById("discount").innerHTML)
  }

    async function getItems(){
      const res = await fetch('http://localhost:5000/cart/get',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user
      })
    })
    const data = await res.json();
    setItems(data.items.cart);
    }

    function subtotal(){
      items.map((itm)=>{
        sub += itm.price
      })
      total = sub
      return true
    }

  function togglesearch() {
    console.log("toggle  called");
    document.getElementById("searchToggle").classList.toggle("active");
    console.log(document.getElementById("searchToggle").classList);
  }

  function search(e){
    e.preventDefault();
    const key = document.getElementById("searchinp").value;
    window.location.href = `/search/${key}`
  }

  if(items && subtotal()){
  return (
    <div class="site-wrap">
      <div className="site-navbar py-2">

<div className="search-wrap" id='searchToggle'>
  <div className="container">
    <a className="search-close js-search-close"><span onClick={togglesearch} className="icon-close2"></span></a>
    <form onSubmit={search}>
            <input type="text" id='searchinp' className="form-control" placeholder="Search keyword and hit enter..." />
          </form>
  </div>
</div>

<div className="container">
  <div className="d-flex align-items-center justify-content-between">
    <div className="logo">
      <div className="site-logo">
        <a href="/home" className="js-logo-clone">BookWorm</a>
      </div>
    </div>
    <div className="main-nav d-none d-lg-block">
      <nav className="site-navigation text-right text-md-center" role="navigation">
        <ul className="site-menu  d-none d-lg-block">
          <li><a href="/home">Home</a></li>
          <li><a href="/shop">Store</a></li>
          {/* <li className="has-children">
        <a href="#">Dropdown</a>
        <ul className="dropdown">
          <li><a href="#">Supplements</a></li>
          <li className="has-children">
            <a href="#">Vitamins</a>
            <ul className="dropdown">
              <li><a href="#">Supplements</a></li>
              <li><a href="#">Vitamins</a></li>
              <li><a href="#">Diet &amp; Nutrition</a></li>
              <li><a href="#">Tea &amp; Coffee</a></li>
            </ul>
          </li>
          <li><a href="#">Diet &amp; Nutrition</a></li>
          <li><a href="#">Tea &amp; Coffee</a></li>
          
        </ul>
      </li> */}
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/productform">Sell</a></li>
          <li><a href="/myproducts">My Products</a></li>
        </ul>
      </nav>
    </div>
    <div className="icons">
      <a href='#' className="icons-btn d-inline-block js-search-open"><span onClick={togglesearch} className="icon-search"></span></a>
      <a href="/cart" className="icons-btn d-inline-block bag">
        <span className="icon-shopping-bag"></span>
        {/* <span className="number">2</span>  */}
      </a>
      <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
        className="icon-menu"></span></a>
    </div>
  </div>
</div>
</div>

      <div class="bg-light py-3">
        <div class="container">
          <div class="row">
            <div class="col-md-12 mb-0">
              <a href="index.html">Home</a> <span class="mx-2 mb-0">/</span>
              <strong class="text-black">Cart</strong>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section">
        <div class="container">
          <div class="row mb-5">
            <form class="col-md-12" method="post">
              <div class="site-blocks-table">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th class="product-thumbnail">Image</th>
                      <th class="product-name">Product</th>
                      <th class="product-price">Price</th>
                      <th class="product-quantity">Quantity</th>
                      <th class="product-total">Total</th>
                      <th class="product-remove">Remove</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item,i)=>
                    <tr>
                      <td class="product-thumbnail">
                        <img
                          src={item.image}
                          alt="Image"
                          class="img-fluid"
                        />
                      </td>
                      <td class="product-name">
                        <h2 class="h5 text-black">{item.title}</h2>
                        <div class="row">
                {/* <div class="col-md-12">
                  <label class="text-black h4" for="coupon">
                    Coupon
                  </label>
                  <p>Enter your coupon code if you have one.</p>
                </div> */}
                <div class="col-md-5 mb-1 mb-md-0">
                  <input
                    type="text"
                    class="form-control py-3"
                    id={`inputfld${i}`}
                    // value={coupon}
                    // onChange={(e)=>{setCoupon(e.target.value)}}
                    placeholder="Coupon"
                  />
                </div>
                {/* <div class="col-md-4">
                  <button onClick={()=>{applyCoupon(item._id)}} class="btn btn-primary btn-md px-4">
                    Apply Coupon
                  </button>
                </div> */}
                 <div class="col-md-4">
                <a href="#" onClick={()=>{applyCoupon(item._id,i)}} class="btn btn-primary btn-md px-4">
                Apply Coupon
                        </a></div>
              </div>
                      </td>
                      <td>₹ {item.price}</td>
                      <td>
                        {/* <div
                          class="input-group mb-3"
                          style={{ maxWidth: "120px" }}
                        >
                          <div class="input-group-prepend">
                            <button
                              class="btn btn-outline-primary js-btn-minus"
                              type="button"
                              onClick={min}
                            >
                              &minus;
                            </button>
                          </div>
                          <input
                            type="text"
                            class="form-control text-center"
                            id={`quantity${i}`}
                            value="1"
                            placeholder=""
                            aria-label="Example text with button addon"
                            aria-describedby="button-addon1"
                          />
                          <div class="input-group-append">
                            <button class="btn btn-outline-primary js-btn-plus" onClick={()=>{add(`quantity${i}`)}} type="button">+</button>
                          </div>
                        </div> */}
                        <div class="mb-5">
                                <div class="input-group mb-3" style={{maxWidth: "220px"}}>
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-primary js-btn-minus" onClick={()=>{min(i,item.price)}} type="button">&minus;</button>
                                    </div>
                                    <input type="number" id={`quantity${i}`} class="form-control text-center" placeholder="1"
                                        aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-primary js-btn-plus" onClick={()=>{add(i,item.price)}} type="button">+</button>
                                    </div>
                                </div>

                            </div>
                      </td>
                      <td>₹ <span className="price" id={`itmprc${i}`}>{item.price}</span></td>
                      <td>
                        <a href="#" onClick={()=>{remove(item._id)}} class="btn btn-primary height-auto btn-sm">
                          X
                        </a>
                      </td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

          <div class="row">
            <div class="col-md-6">
              <div class="row mb-5">
                {/* <div class="col-md-6 mb-3 mb-md-0">
                  <button class="btn btn-primary btn-md btn-block">
                    Update Cart
                  </button>
                </div> */}
                <div class="col-md-6">
                  <a href="/shop"><button class="btn btn-outline-primary btn-md btn-block">
                    Continue Shopping
                  </button></a>
                </div>
              </div>
              {/* <div class="row">
                <div class="col-md-12">
                  <label class="text-black h4" for="coupon">
                    Coupon
                  </label>
                  <p>Enter your coupon code if you have one.</p>
                </div>
                <div class="col-md-8 mb-3 mb-md-0">
                  <input
                    type="text"
                    class="form-control py-3"
                    id="coupon"
                    placeholder="Coupon Code"
                  />
                </div>
                <div class="col-md-4">
                  <button class="btn btn-primary btn-md px-4">
                    Apply Coupon
                  </button>
                </div>
              </div> */}
            </div>
            <div class="col-md-6 pl-5">
              <div class="row justify-content-end">
                <div class="col-md-7">
                  <div class="row">
                    <div class="col-md-12 text-right border-bottom mb-5">
                      <h3 class="text-black h4 text-uppercase">Cart Totals</h3>
                    </div>
                  </div>
                  <div class="row mb-3">
                    <div class="col-md-6">
                      <span class="text-black">Subtotal</span>
                    </div>
                    <div class="col-md-6 text-right">
                      <strong class="text-black">₹<span id="sub">{sub}</span></strong>
                    </div>
                  </div>
                  <div id="couponspan" class="row mb-3 hidden">
                    <div class="col-md-6">
                      <span class="text-green"><span style={{color: "green"}}>Coupon</span></span>
                    </div>
                    <div class="col-md-6 text-right">
                      <strong class="text-green"><span style={{color: "green"}}>- ₹</span><span id="discount" style={{color: "green"}}>0</span></strong>
                    </div>
                  </div>
                  <div class="row mb-5">
                    <div class="col-md-6">
                      <span class="text-black">Total</span>
                    </div>
                    <div class="col-md-6 text-right">
                      <strong class="text-black">₹<span id="total">{total}</span></strong>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-md-12">
                      <button
                        class="btn btn-primary btn-lg btn-block"
                        onClick={makePayment}
                      >
                        Proceed To Pay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <hr style={{ border: "2px solid black" }} />
      <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">

                <div className="block-7">
                  <h3 className="footer-heading mb-4">About Us</h3>
                  <p>Made by students. For students. We are students just like you who have faced the same problem of buying books every semester. Rather than buying new books we found a better solution and are sharing it with you.</p>
                </div>

              </div>
              <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
                <h3 className="footer-heading mb-4">Quick Links</h3>
                <ul className="list-unstyled">
                  <li><a href="/shop">Store</a></li>
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/productform">Sell</a></li>
                </ul>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="block-5 mb-5">
                  <h3 className="footer-heading mb-4">Contact Info</h3>
                  <ul className="list-unstyled">
                    <li className="address">VESIT, Hashu Adwani Memorial Complex, Collector's Colony, Chembur, Mumbai, Maharashtra 400074</li>
                    <li className="phone"><a href="tel://999999999">9999999999</a></li>
                    <li className="email"><a href="bookworm@gmail.com">bookworm@gmail.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </div>
  )}
  else{
    return(
      <div>
        Loading
      </div>
    )
  }
}
