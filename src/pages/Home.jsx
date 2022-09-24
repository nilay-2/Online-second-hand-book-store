import React from 'react'
import './fonts/icomoon/style.css';
import './css/bootstrap.min.css';
import './css/magnific-popup.css';
import './css/owl.theme.default.min.css';
import './css/aos.css';
import './css/style.css';


export default function Home() {
  return (
    <div className="site-wrap">


    <div className="site-navbar py-2">

      <div className="search-wrap">
        <div className="container">
          <a href="#" className="search-close js-search-close"><span className="icon-close2"></span></a>
          <form action="#" method="post">
            <input type="text" className="form-control" placeholder="Search keyword and hit enter..." />
          </form>
        </div>
      </div>

      <div className="container">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo">
            <div className="site-logo">
              <a href="index.html" className="js-logo-clone">Pharma</a>
            </div>
          </div>
          <div className="main-nav d-none d-lg-block">
            <nav className="site-navigation text-right text-md-center" role="navigation">
              <ul className="site-menu  d-none d-lg-block">
                <li className="active"><a href="index.html">Home</a></li>
                <li><a href="shop.html">Store</a></li>
                <li className="has-children">
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
                </li>
                <li><a href="about.html">About</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </nav>
          </div>
          <div className="icons">
            {/* <a href="#" className="icons-btn d-inline-block js-search-open"><span className="icon-search"></span></a> */}
            <form class="form-inline">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
            {/* <a href="cart.html" className="icons-btn d-inline-block bag">
              <span className="icon-shopping-bag"></span>
              {/* <span className="number">2</span> 
            </a> */}
            <a href="#" className="site-menu-toggle js-menu-toggle ml-3 d-inline-block d-lg-none"><span
                className="icon-menu"></span></a>
          </div>
        </div>
      </div>
    </div>

    <div className="site-blocks-cover"  style={{backgroundImage: "url('images/hero_1.jpg')"}} >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 mx-auto order-lg-2 align-self-center">
            <div className="site-block-cover-content text-center">
              <h2 className="sub-title">Effective Medicine, New Medicine Everyday</h2>
              <h1>Welcome To Pharma</h1>
              <p>
                <a href="#" className="btn btn-primary px-5 py-3">Shop Now</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row align-items-stretch section-overlap">
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
                <h5>Season <br/> Sale 50% Off</h5>
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
    </div>

    <div className="site-section">
      <div className="container">
        <div className="row">
          <div className="title-section text-center col-12">
            <h2 className="text-uppercase">Popular Products</h2>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
            <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
            <p className="price"><del>95.00</del> &mdash; $55.00</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <a href="shop-single.html"> <img src="images/product_02.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Chanca Piedra</a></h3>
            <p className="price">$70.00</p>
          </div>
          <div className="col-sm-6 col-lg-4 text-center item mb-4">
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
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <a href="shop.html" className="btn btn-primary px-4 py-3">View All Products</a>
          </div>
        </div>
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

    <div className="site-section bg-secondary bg-image" style={{backgroundImage: "url('./images/bg_2.jpg')"}}>
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
    </div>


    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-3 mb-4 mb-lg-0">

            <div className="block-7">
              <h3 className="footer-heading mb-4">About Us</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius quae reiciendis distinctio voluptates
                sed dolorum excepturi iure eaque, aut unde.</p>
            </div>

          </div>
          <div className="col-lg-3 mx-auto mb-5 mb-lg-0">
            <h3 className="footer-heading mb-4">Quick Links</h3>
            <ul className="list-unstyled">
              <li><a href="#">Supplements</a></li>
              <li><a href="#">Vitamins</a></li>
              <li><a href="#">Diet &amp; Nutrition</a></li>
              <li><a href="#">Tea &amp; Coffee</a></li>
            </ul>
          </div>

          <div className="col-md-6 col-lg-3">
            <div className="block-5 mb-5">
              <h3 className="footer-heading mb-4">Contact Info</h3>
              <ul className="list-unstyled">
                <li className="address">203 Fake St. Mountain View, San Francisco, California, USA</li>
                <li className="phone"><a href="tel://23923929210">+2 392 3929 210</a></li>
                <li className="email">emailaddress@domain.com</li>
              </ul>
            </div>


          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <p>
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made
              with <i className="icon-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank"
                className="text-primary">Colorlib</a>
            </p>
          </div>

        </div>
      </div>
    </footer>
  </div>
  )
}
