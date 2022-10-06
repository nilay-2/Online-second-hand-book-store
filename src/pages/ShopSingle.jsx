import React from 'react'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom'
import {useCookies} from 'react-cookie';
var CryptoJS = require('crypto-js');
export default function ShopSingle() {
    const [cookies] = useCookies('user');
    var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    const user = decryptedData.email;
    const {id} = useParams();
    const [details,setDetails] = useState('');
    useEffect(()=>{
        getDetails();
    },[])

    function search(e){
        e.preventDefault();
        const key = document.getElementById("searchinp").value;
        window.location.href = `/search/${key}`
      }

    async function addToCart(){
        const res = await fetch('http://localhost:5000/cart/add',{
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                id,
                user,
              })
        })
        const data = await res.json();
        if(data.status==='ok'){
            alert("Added To Cart");
            window.location.href = "/cart";
        }
    }

    function min(){
        const v = document.getElementById("quantity");
        if(v.value==0){
            return;
        }
        v.value = v.value - 1;
    }

    function add(){
        const v = document.getElementById("quantity");
        v.value = parseInt(v.value) + 1;
    }

    async function getDetails(){
        const res = await fetch(`http://localhost:5000/product/details`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id
      })
    })
    const data = await res.json();
    console.log(data);
    setDetails(data.details);
    }
    if(details){
    return (
        <div class="site-wrap">


            <div class="site-navbar py-2">

                <div class="search-wrap">
                    <div class="container">
                        <a href="#" class="search-close js-search-close"><span class="icon-close2"></span></a>
                        <form onSubmit={search}>
            <input type="text" id='searchinp' className="form-control" placeholder="Search keyword and hit enter..." />
          </form>
                    </div>
                </div>

                <div class="container">
                    <div class="d-flex align-items-center justify-content-between">
                        <div class="logo">
                            <div class="site-logo">
                                <a href="index.html" class="js-logo-clone">Pharma</a>
                            </div>
                        </div>
                        <div class="main-nav d-none d-lg-block">
                            <nav class="site-navigation text-right text-md-center" role="navigation">
                                <ul class="site-menu js-clone-nav d-none d-lg-block">
                                    <li class="active"><a href="index.html">Home</a></li>
                                    <li><a href="shop.html">Store</a></li>
                                    <li class="has-children">
                                        <a href="#">Dropdown</a>
                                        <ul class="dropdown">
                                            <li><a href="#">Supplements</a></li>
                                            <li class="has-children">
                                                <a href="#">Vitamins</a>
                                                <ul class="dropdown">
                                                    <li><a href="#">Supplements</a></li>
                                                    <li><a href="#">Vitamins</a></li>
                                                    <li><a href="#">Diet &amp; Nutrition</a></li>
                                                    <li><a href="#">Tea &amp; Coffee</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="#">Diet &amp; Nutrition</a></li>
                                            <li><a href="#">Tea &amp; Coffee</a></li>

                                        </ul>
                                    </li>
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                        <div class="icons">
                            <a href="#" class="icons-btn d-inline-block js-search-open"><span class="icon-search"></span></a>
                            <a href="cart.html" class="icons-btn d-inline-block bag">
                                <span class="icon-shopping-bag"></span>
                                <span class="number">2</span>
                            </a>
                            <a href="#" class="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                                class="icon-menu"></span></a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-light py-3">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 mb-0"><a href="/home">Home</a> <span class="mx-2 mb-0">/</span> <a
                            href="/store">Store</a> <span class="mx-2 mb-0">/</span> <strong class="text-black">{details.title}</strong></div>
                    </div>
                </div>
            </div>

            <div class="site-section">
                <div class="container">
                    {
                    <div class="row">
                        <div class="col-md-5 mr-auto" >
                            <div class="text-center">
                                <img src={details.image} alt="Pic" class="img-fluid p-5" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius: "10px"}}/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <h2 class="text-black">{details.title}</h2>
                            <p>{details.description}</p>


                            <p>  <strong class="text-primary h4">₹ {details.price}</strong></p>



                            {/* <div class="mb-5">
                                <div class="input-group mb-3" style={{maxWidth: "220px"}}>
                                    <div class="input-group-prepend">
                                        <button class="btn btn-outline-primary js-btn-minus" onClick={min} type="button">&minus;</button>
                                    </div>
                                    <input type="text" id='quantity' class="form-control text-center" value="1" placeholder=""
                                        aria-label="Example text with button addon" aria-describedby="button-addon1" />
                                    <div class="input-group-append">
                                        <button class="btn btn-outline-primary js-btn-plus" onClick={add} type="button">+</button>
                                    </div>
                                </div>

                            </div> */}
                            <p><a href="#" class="buy-now btn btn-sm height-auto px-4 py-3 btn-primary" onClick={addToCart}>Add To Cart</a></p>

                            <div class="mt-5">
                                <ul class="nav nav-pills mb-3 custom-pill" id="pills-tab" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab"
                                            aria-controls="pills-profile" aria-selected="false">Specifications</a>
                                    </li>

                                </ul>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane fade show active" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

                                        <table class="table custom-table">

                                            <tbody>
                                                <tr>
                                                    <td>Condition</td>
                                                    <td class="bg-light">{details.condition}</td>
                                                </tr>
                                                <tr>
                                                    <td>Author</td>
                                                    <td class="bg-light">{details.author}</td>
                                                </tr>
                                                <tr>
                                                    <td>Pages</td>
                                                    <td class="bg-light">{details.pages}</td>
                                                </tr>
                                                <tr>
                                                    <td>Publication Year</td>
                                                    <td class="bg-light">{details.pyear}</td>
                                                </tr>
                                                <tr>
                                                    <td>Category</td>
                                                    <td class="bg-light">{details.category.name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Seller</td>
                                                    <td class="bg-light">{details.seller.name}</td>
                                                </tr>
                                            </tbody>
                                        </table>

                                    </div>

                                </div>
                            </div>


                        </div>
                    </div>
                    }
                </div>
            </div>

            {/* <div class="site-section bg-secondary bg-image" style={{backgroundImage: "url('images/bg_2.jpg')"}}>
                <div class="container">
                    <div class="row align-items-stretch">
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <a href="#" class="banner-1 h-100 d-flex" style={{backgroundImage: "url('images/bg_1.jpg')"}}>
                                <div class="banner-1-inner align-self-center">
                                    <h2>Pharma Products</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div class="col-lg-6 mb-5 mb-lg-0">
                            <a href="#" class="banner-1 h-100 d-flex" style={{backgroundImage: "url('images/bg_2.jpg')"}}>
                                <div class="banner-1-inner ml-auto  align-self-center">
                                    <h2>Rated by Experts</h2>
                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div> */}

            <hr style={{border: "2px solid black"}}/>
            <footer class="site-footer">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-3 mb-4 mb-lg-0">

                            <div class="block-7">
                                <h3 class="footer-heading mb-4">About Us</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates
                                    sed dolorum excepturi iure eaque, aut unde.</p>
                            </div>

                        </div>
                        <div class="col-lg-3 mx-auto mb-5 mb-lg-0">
                            <h3 class="footer-heading mb-4">Quick Links</h3>
                            <ul class="list-unstyled">
                                <li><a href="#">Supplements</a></li>
                                <li><a href="#">Vitamins</a></li>
                                <li><a href="#">Diet &amp; Nutrition</a></li>
                                <li><a href="#">Tea &amp; Coffee</a></li>
                            </ul>
                        </div>

                        <div class="col-md-6 col-lg-3">
                            <div class="block-5 mb-5">
                                <h3 class="footer-heading mb-4">Contact Info</h3>
                                <ul class="list-unstyled">
                                    <li class="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                                    <li class="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                                    <li class="email">emailaddress@domain.com</li>
                                </ul>
                            </div>


                        </div>
                    </div>
                    <div class="row pt-5 mt-5 text-center">
                        <div class="col-md-12">
                            <p>
                                Copyright &copy;
                                 <script>document.write(new Date().getFullYear());</script> All rights reserved {/*| This template is made
                                with <i class="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noreferrer"
                                    class="text-primary">Colorlib</a> */}
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