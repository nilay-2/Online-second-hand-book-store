import { useState } from 'react';
import { useEffect } from 'react';
import {useCookies} from 'react-cookie';
var CryptoJS = require('crypto-js');

export default function Myproducts() {

  const [items,setItems] = useState('');
  const [cookies] = useCookies('user');
    var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
    const user = decryptedData.email;

  useEffect(()=>{
    getProducts();
  },[])

  async function getProducts(){
    const res = await fetch(`http://localhost:5000/products/${user}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json();
    console.log(data.products)
    setItems(data.products);
  }

  async function remove(id){
    const res = await fetch('http://localhost:5000/product/remove',{
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify({
            id
        })
    })
    const data = await res.json();
    if(data.status=='ok'){
        alert("Removed");
        window.location.reload();
    }
  }

    function togglesearch(){
        console.log('toggle  called');
        document.getElementById('searchToggle').classList.toggle('active');
        console.log(document.getElementById('searchToggle').classList);
    }
if(items){
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
              <strong class="text-black">MyProducts</strong>
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
                      <th class="product-remove">Remove</th>
                      <th class="product-remove">Coupon</th>
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
                      </td>
                      <td>₹ {item.price}</td>
                      <td>
                        <a href="#" onClick={()=>{remove(item._id)}} class="btn btn-primary height-auto btn-sm">
                          X
                        </a>
                      </td>
                      <td>
                      
                <a href={`/couponform/${item._id}`} class="btn btn-primary height-auto btn-sm">
                Generate Coupon
                        </a>
                      </td>
                    </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </form>
          </div>

        </div>
      </div>
    <hr style={{border: "3px solid black"}} />
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

  )
}
else{
  return(
    <div>
      Loading
    </div>
  )
}
}
