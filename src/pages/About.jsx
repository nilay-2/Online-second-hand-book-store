import React from 'react'

export default function About() {
  function togglesearch() {
    console.log('toggle  called');
    document.getElementById('searchToggle').classList.toggle('active');
    console.log(document.getElementById('searchToggle').classList);
  }
  function search(e){
    e.preventDefault();
    const key = document.getElementById("searchinp").value;
    window.location.href = `/search/${key}`
  }
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
                  <li ><a href="/home">Home</a></li>
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
                  <li className="active"><a href="/about">About</a></li>
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

      <div class="site-blocks-cover inner-page" style={{ backgroundImage: "url('https://www.incimages.com/uploaded_files/image/1920x1080/getty_655998316_2000149920009280219_363765.jpg')" }}>
        <div class="container">
          <div class="row">
            <div class="col-lg-7 mx-auto align-self-center">
              <div class=" text-center">
                <h1>About Us</h1>
                <p>Know more about us.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="site-section bg-light custom-border-bottom" data-aos="fade">
        <div class="container">
          <div class="row mb-5">
            <div class="col-md-6">
              <div class="block-16">
                <figure>
                  <img src="https://cdn.carrot.com/uploads/sites/48363/2022/03/real-estate-books.jpg" alt="Loading" class="img-fluid rounded" />

                </figure>
              </div>
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-5">


              <div class="site-section-heading pt-3 mb-4">
                <h2 class="text-black">How We Started</h2>
              </div>
              <p class="text-black">We are students just like most of you. We also face the same problems of buying and selling books before the upcoming semester. We wanted to create one plaform for buying and selling of books where all people can connect.</p>
              <p class="text-black">So we created BookWorm with the aim to make sure that buyer and seller can transact with each other without any middleman.</p>

            </div>
          </div>
        </div>
      </div>
      <div class="site-section site-section-sm site-blocks-1 border-0" data-aos="fade">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
              <div class="icon mr-4 align-self-start">
                <span class="icon-truck text-primary"></span>
              </div>
              <div class="text">
                <h2>Free Shipping</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan
                  tincidunt fringilla.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
              <div class="icon mr-4 align-self-start">
                <span class="icon-refresh2 text-primary"></span>
              </div>
              <div class="text">
                <h2>Free Returns</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan
                  tincidunt fringilla.</p>
              </div>
            </div>
            <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
              <div class="icon mr-4 align-self-start">
                <span class="icon-help text-primary"></span>
              </div>
              <div class="text">
                <h2>Customer Support</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan
                  tincidunt fringilla.</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="site-section bg-light custom-border-bottom" data-aos="fade">
        <div class="container">
          <div class="row justify-content-center mb-5">
            <div class="col-md-7 site-section-heading text-center pt-4">
              <h2>The Team</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-lg-6 mb-5">

              <div class="block-38 text-center">
                <div class="block-38-img">
                  <div class="block-38-header">
                    <img src="images/person_1.jpg" alt="Loading" class="mb-4" />
                    <h3 class="block-38-heading h4">Sanskruti</h3>
                    <p class="block-38-subheading">CEO/Co-Founder</p>
                  </div>
                  <div class="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio
                      recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 mb-5">
              <div class="block-38 text-center">
                <div class="block-38-img">
                  <div class="block-38-header">
                    <img src="images/person_2.jpg" alt="Loading" class="mb-4" />
                    <h3 class="block-38-heading h4">Shree</h3>
                    <p class="block-38-subheading">Co-Founder</p>
                  </div>
                  <div class="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio
                      recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 mb-5">
              <div class="block-38 text-center">
                <div class="block-38-img">
                  <div class="block-38-header">
                    <img src="images/person_3.jpg" alt="Image placeholder" class="mb-4" />
                    <h3 class="block-38-heading h4">Nilay</h3>
                    <p class="block-38-subheading">Marketing</p>
                  </div>
                  <div class="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio
                      recusandae doloribus ut fugit officia voluptate soluta. </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6 mb-5">
              <div class="block-38 text-center">
                <div class="block-38-img">
                  <div class="block-38-header">
                    <img src="images/person_4.jpg" alt="Image placeholder" class="mb-4" />
                    <h3 class="block-38-heading h4">Mikil</h3>
                    <p class="block-38-subheading">Sales Manager</p>
                  </div>
                  <div class="block-38-body">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut minima nihil sit distinctio
                      recusandae doloribus ut fugit officia voluptate soluta. </p>
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
  )
}

