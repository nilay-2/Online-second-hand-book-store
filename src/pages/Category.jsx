import React from 'react'
import './fonts/icomoon/style.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.theme.default.min.css';
import './css/aos.css';
import './css/style.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom'

export default function Category() {
    var category = '';
  var {key} = useParams();
  const [products,setProducts] = useState('');

  useEffect(()=>{
    getProducts();
  },[])

  async function getProducts(){
    const res = await fetch(`http://localhost:5000/category/${key}`,{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const data = await res.json();
    category = data.category;
    setProducts(data.products);
  }

    function togglesearch(){
        console.log('toggle  called');
        document.getElementById('searchToggle').classList.toggle('active');
        console.log(document.getElementById('searchToggle').classList);
    }

    function search(e){
      e.preventDefault();
      const key = document.getElementById("searchinp").value;
      window.location.href = `/search/${key}`
    }
if(products){
  return (
    <div className="site-wrap">


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
          <li className="active"><a href="/home">Home</a></li>
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

    {/* <div className="site-blocks-cover"  style={{backgroundImage: "url('images/hero_1.jpg')"}} >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
            <div className="site-block-cover-content text-center">
              <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
              <h1>Welcome To Pharma</h1>
              <p>
                <a href="/shop" className="btn btn-primary px-5 py-3">Shop Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div className="site-section">
      <div className="container">
        <div className="row align-items-stretch section-overlap" style={{justifyContent: "space-evenly"}}>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="banner-wrap bg-primary h-100">
              <a href="#" className="h-100">
                <h5>Free <br/> Shipping</h5>
                <p>
                  Amet sit amet dolor
                  <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="banner-wrap h-100">
              <a href="#" className="h-100">
                <h5>Season <br/> Get upto 50% Off</h5>
                <p>
                  Amet sit amet dolor
                  <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                </p>
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
            <div className="banner-wrap bg-warning h-100">
              <a href="#" className="h-100">
                <h5>Buy <br/> A Gift Card</h5>
                <p>
                  Amet sit amet dolor
                  <strong>Lorem, ipsum dolor sit amet consectetur adipisicing.</strong>
                </p>
              </a>
            </div>
          </div>

        </div>
      </div>
    </div> */}

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="title-section text-center col-12">
            <h2 className="text-uppercase">{category}</h2>
          </div>
        </div>

        <div className="row" style={{justifyContent: "space-evenly"}}>
          {/* <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
            <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
            <p className="price"><del>95.00</del> &mdash; $55.00</p>
          </div> */}
          {products.map((prod)=>
          <div className="col-sm-5 col-lg-4 text-center item mb-4 my-2 mx-2" style={{boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius: "10px"}}>
            <a href={`/details/${prod._id}`}> <img src={prod.image} alt="Image" height="300" width="300" style={{marginTop: "2em",boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}} /></a>
            <h3 className="text-dark"><a href={`/details/${prod._id}`}>{prod.title}</a></h3>
            <p className="price">₹ {prod.price}</p>
          </div>
          )
          }
          {/* <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
            <p className="price">$120.00</p>
          </div>

          <div className="col-sm-6 col-lg-4 text-center item mb-4">

            <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Cetyl Pure</a></h3>
            <p className="price"><del>45.00</del> &mdash; $20.00</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src="images/product_05.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">CLA Core</a></h3>
            <p className="price">$38.00</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
            <a href="shop-single.html"> <img src="images/product_06.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Poo Pourri</a></h3>
            <p className="price"><del>$89</del> &mdash; $38.00</p>
          </div> */}
        </div>
        {/* <div className="row mt-5">
          <div className="col-12 text-center">
            <a href="shop.html" className="btn btn-primary px-4 py-3">View All Products</a>
          </div>
        </div> */}
      </div>
    </div>

    
    {/* <div className="site-section bg-light">
      <div className="container">
        <div className="row">
          <div className="title-section text-center col-12">
            <h2 className="text-uppercase">New Products</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 block-3 products-wrap">
            <div className="nonloop-block-3 owl-carousel">

              <div className="text-center item mb-4">
                <a href="shop-single.html"> <img src="images/product_03.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                <p className="price">$120.00</p>
              </div>

              <div className="text-center item mb-4">
                <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                <p className="price">$120.00</p>
              </div>

              <div className="text-center item mb-4">
                <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                <p className="price">$120.00</p>
              </div>

              <div className="text-center item mb-4">
                <a href="shop-single.html"> <img src="images/product_04.png" alt="Image" /></a>
                <h3 className="text-dark"><a href="shop-single.html">Umcka Cold Care</a></h3>
                <p className="price">$120.00</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="title-section text-center col-12">
            <h2 className="text-uppercase">Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 block-3 products-wrap">
            <div className="nonloop-block-3 no-direction owl-carousel">
        
              <div className="testimony">
                <blockquote>
                  <img src="images/person_1.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                  <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat unde.&rdquo;</p>
                </blockquote>

                <p>&mdash; Kelly Holmes</p>
              </div>
        
              <div className="testimony">
                <blockquote>
                  <img src="images/person_2.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                  <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                    obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                    unde.&rdquo;</p>
                </blockquote>
              
                <p>&mdash; Rebecca Morando</p>
              </div>
        
              <div className="testimony">
                <blockquote>
                  <img src="images/person_3.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                  <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                    obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                    unde.&rdquo;</p>
                </blockquote>
              
                <p>&mdash; Lucas Gallone</p>
              </div>
        
              <div className="testimony">
                <blockquote>
                  <img src="images/person_4.jpg" alt="Image" className="img-fluid w-25 mb-4 rounded-circle" />
                  <p>&ldquo;Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo omnis voluptatem consectetur quam tempore
                    obcaecati maiores voluptate aspernatur iusto eveniet, placeat ab quod tenetur ducimus. Minus ratione sit quaerat
                    unde.&rdquo;</p>
                </blockquote>
              
                <p>&mdash; Andrew Neel</p>
              </div>
        
            </div>
          </div>
        </div>
      </div>
    </div> */}

    {/* <div className="site-section bg-secondary bg-image" style={{backgroundImage: "url('./images/bg_2.jpg')"}}>
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: "url('./images/bg_1.jpg')"}}>
              <div className="banner-1-inner align-self-center">
                <h2>Pharma Products</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                </p>
              </div>
            </a>
          </div>
          <div className="col-lg-6 mb-5 mb-lg-0">
            <a href="#" className="banner-1 h-100 d-flex" style={{backgroundImage: "url('./images/bg_2.jpg')"}}>
              <div className="banner-1-inner ml-auto  align-self-center">
                <h2>Rated by Experts</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae ex ad minus rem odio voluptatem.
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div> */}

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
