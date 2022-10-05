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

    async function applyCoupon(id){
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

  if(items && subtotal()){
  return (
    <div class="site-wrap">
      <div class="site-navbar py-2">
        <div class="search-wrap" id="searchToggle">
          <div class="container">
            <a href="#" class="search-close js-search-close">
              <span onClick={togglesearch} className="icon-close2"></span>
            </a>
            <form action="#" method="post">
              <input
                type="text"
                class="form-control"
                placeholder="Search keyword and hit enter..."
              />
            </form>
          </div>
        </div>

        <div class="container">
          <div class="d-flex align-items-center justify-content-between">
            <div class="logo">
              <div class="site-logo">
                <a href="index.html" class="js-logo-clone">
                  Pharma
                </a>
              </div>
            </div>
            <div class="main-nav d-none d-lg-block">
              <nav
                class="site-navigation text-right text-md-center"
                role="navigation"
              >
                <ul class="site-menu js-clone-nav d-none d-lg-block">
                  <li>
                    <a href="index.html">Home</a>
                  </li>
                  <li class="active">
                    <a href="shop.html">Store</a>
                  </li>
                  <li class="has-children">
                    <a href="#">Dropdown</a>
                    <ul class="dropdown">
                      <li>
                        <a href="#">Supplements</a>
                      </li>
                      <li class="has-children">
                        <a href="#">Vitamins</a>
                        <ul class="dropdown">
                          <li>
                            <a href="#">Supplements</a>
                          </li>
                          <li>
                            <a href="#">Vitamins</a>
                          </li>
                          <li>
                            <a href="#">Diet &amp; Nutrition</a>
                          </li>
                          <li>
                            <a href="#">Tea &amp; Coffee</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Diet &amp; Nutrition</a>
                      </li>
                      <li>
                        <a href="#">Tea &amp; Coffee</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">About</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="icons">
              <a href="#" class="icons-btn d-inline-block js-search-open">
                <span onClick={togglesearch} className="icon-search"></span>
              </a>
              <a href="cart.html" class="icons-btn d-inline-block bag">
                <span class="icon-shopping-bag"></span>
                <span class="number">2</span>
              </a>
              <a
                href="#"
                class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"
              >
                <span class="icon-menu"></span>
              </a>
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
                    value={coupon}
                    onChange={(e)=>{setCoupon(e.target.value)}}
                    placeholder="Coupon"
                  />
                </div>
                {/* <div class="col-md-4">
                  <button onClick={()=>{applyCoupon(item._id)}} class="btn btn-primary btn-md px-4">
                    Apply Coupon
                  </button>
                </div> */}
                 <div class="col-md-4">
                <a href="#" onClick={()=>{applyCoupon(item._id)}} class="btn btn-primary btn-md px-4">
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
                        Proceed To Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="site-section bg-secondary bg-image"
        style={{ backgroundImage: "url('images/bg_2.jpg')" }}
      >
        <div class="container">
          <div class="row align-items-stretch">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <a
                href="#"
                class="banner-1 h-100 d-flex"
                style={{ backgroundImage: "url('images/bg_1.jpg')" }}
              >
                <div class="banner-1-inner align-self-center">
                  <h2>Pharma Products</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae ex ad minus rem odio voluptatem.
                  </p>
                </div>
              </a>
            </div>
            <div class="col-lg-6 mb-5 mb-lg-0">
              <a
                href="#"
                class="banner-1 h-100 d-flex"
                style={{ backgroundImage: "url('images/bg_2.jpg')" }}
              >
                <div class="banner-1-inner ml-auto  align-self-center">
                  <h2>Rated by Experts</h2>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae ex ad minus rem odio voluptatem.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="block-7">
                <h3 class="footer-heading mb-4">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                  quae reiciendis distinctio voluptates sed dolorum excepturi
                  iure eaque, aut unde.
                </p>
              </div>
            </div>
            <div class="col-lg-3 mx-auto mb-5 mb-lg-0">
              <h3 class="footer-heading mb-4">Quick Links</h3>
              <ul class="list-unstyled">
                <li>
                  <a href="#">Supplements</a>
                </li>
                <li>
                  <a href="#">Vitamins</a>
                </li>
                <li>
                  <a href="#">Diet &amp; Nutrition</a>
                </li>
                <li>
                  <a href="#">Tea &amp; Coffee</a>
                </li>
              </ul>
            </div>

            <div class="col-md-6 col-lg-3">
              <div class="block-5 mb-5">
                <h3 class="footer-heading mb-4">Contact Info</h3>
                <ul class="list-unstyled">
                  <li class="address">
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </li>
                  <li class="phone">
                    <a href="tel://23923929210">+2 392 3929 210</a>
                  </li>
                  <li class="email">emailaddress@domain.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="row pt-5 mt-5 text-center">
            <div class="col-md-12">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This template is made with{" "}
                <i class="icon-heart" aria-hidden="true"></i> by{" "}
                <a
                  href="https://colorlib.com"
                  target="_blank"
                  class="text-primary"
                >
                  Colorlib
                </a>
              </p>
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
