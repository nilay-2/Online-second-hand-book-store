import React from "react";
import { useState } from 'react';
import { useEffect } from 'react';


export default function Shop() {
  const [fiction,setFiction] = useState('');
  const [engineering,setEngineering] = useState('');
  const [comics,setComics] = useState('');

  useEffect(()=>{
    getFiction();
    getEngineering();
    getComics();
  },[])
  function search(e){
    e.preventDefault();
    const key = document.getElementById("searchinp").value;
    window.location.href = `/search/${key}`
  }
  async function getFiction(){
    const res = await fetch('http://localhost:5000/category/Fiction',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json();
    setFiction(data.products);
  }

  async function getEngineering(){
    const res = await fetch('http://localhost:5000/category/Engineering and Technology',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json();
    setEngineering(data.products);
  }

  async function getComics(){
    const res = await fetch('http://localhost:5000/category/Comics',{
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
    const data = await res.json();
    setComics(data.products);
  }


  function togglesearch() {
    console.log("toggle  called");
    document.getElementById("searchToggle").classList.toggle("active");
    console.log(document.getElementById("searchToggle").classList);
  }
  if(fiction && engineering && comics){
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
          <li className="active"><a href="/shop">Store</a></li>
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
              <a href="index.html">Home</a> <span class="mx-2 mb-0">/</span>{" "}
              <strong class="text-black">Store</strong>
            </div>
          </div>
        </div>
      </div>

      {/* <div class="site-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">
                Filter by Price
              </h3>
              <div id="slider-range" class="border-primary"></div>
              <input
                type="text"
                name="text"
                id="amount"
                class="form-control border-0 pl-0 bg-white"
                disabled=""
              />
            </div>
            <div class="col-lg-6">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">
                Filter by Reference
              </h3>
              <button
                type="button"
                class="btn btn-secondary btn-md dropdown-toggle px-4"
                id="dropdownMenuReference"
                data-toggle="dropdown"
              >
                Reference
              </button>
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuReference"
              >
                <a class="dropdown-item" href="#">
                  Relevance
                </a>
                <a class="dropdown-item" href="#">
                  Name, A to Z
                </a>
                <a class="dropdown-item" href="#">
                  Name, Z to A
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Price, low to high
                </a>
                <a class="dropdown-item" href="#">
                  Price, high to low
                </a>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <span class="tag">Sale</span>
              <a href="shop-single.html">
                {" "}
                <img src="images/product_01.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Bioderma</a>
              </h3>
              <p class="price">
                <del>95.00</del> &mdash; $55.00
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {" "}
                <img src="images/product_02.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Chanca Piedra</a>
              </h3>
              <p class="price">$70.00</p>
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {" "}
                <img src="images/product_03.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Umcka Cold Care</a>
              </h3>
              <p class="price">$120.00</p>
            </div>

            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {" "}
                <img src="images/product_04.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Cetyl Pure</a>
              </h3>
              <p class="price">
                <del>45.00</del> &mdash; $20.00
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {" "}
                <img src="images/product_05.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">CLA Core</a>
              </h3>
              <p class="price">$38.00</p>
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <span class="tag">Sale</span>
              <a href="shop-single.html">
                {" "}
                <img src="images/product_06.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Poo Pourri</a>
              </h3>
              <p class="price">
                <del>$89</del> &mdash; $38.00
              </p>
            </div>

            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <span class="tag">Sale</span>
              <a href="shop-single.html">
                {" "}
                <img src="images/product_01.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Bioderma</a>
              </h3>
              <p class="price">
                <del>95.00</del> &mdash; $55.00
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {" "}
                <img src="images/product_02.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Chanca Piedra</a>
              </h3>
              <p class="price">$70.00</p>
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {" "}
                <img src="images/product_03.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Umcka Cold Care</a>
              </h3>
              <p class="price">$120.00</p>
            </div>

            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {" "}
                <img src="images/product_04.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Cetyl Pure</a>
              </h3>
              <p class="price">
                <del>45.00</del> &mdash; $20.00
              </p>
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <a href="shop-single.html">
                {" "}
                <img src="images/product_05.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">CLA Core</a>
              </h3>
              <p class="price">$38.00</p>
            </div>
            <div class="col-sm-6 col-lg-4 text-center item mb-4">
              <span class="tag">Sale</span>
              <a href="shop-single.html">
                {" "}
                <img src="images/product_06.png" alt="Image" />
              </a>
              <h3 class="text-dark">
                <a href="shop-single.html">Poo Pourri</a>
              </h3>
              <p class="price">
                <del>$89</del> &mdash; $38.00
              </p>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-md-12 text-center">
              <div class="site-block-27">
                <ul>
                  <li>
                    <a href="#">&lt;</a>
                  </li>
                  <li class="active">
                    <span>1</span>
                  </li>
                  <li>
                    <a href="#">2</a>
                  </li>
                  <li>
                    <a href="#">3</a>
                  </li>
                  <li>
                    <a href="#">4</a>
                  </li>
                  <li>
                    <a href="#">5</a>
                  </li>
                  <li>
                    <a href="#">&gt;</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
       <div className="site-section">
      <div className="container">
      {/* <div class="row">
            <div class="col-lg-6">
              <h3 class="mb-3 h6 text-uppercase text-black d-block">
                Filter by Reference
              </h3>
              <button
                type="button"
                class="btn btn-secondary btn-md dropdown-toggle px-4"
                id="dropdownMenuReference"
                data-toggle="dropdown"
              >
                Reference
              </button>
              <div
                class="dropdown-menu"
                aria-labelledby="dropdownMenuReference"
              >
                <a class="dropdown-item" href="#">
                  Relevance
                </a>
                <a class="dropdown-item" href="#">
                  Name, A to Z
                </a>
                <a class="dropdown-item" href="#">
                  Name, Z to A
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">
                  Price, low to high
                </a>
                <a class="dropdown-item" href="#">
                  Price, high to low
                </a>
              </div>
            </div>
          </div> */}
        <div className="row">
          <div className="title-section text-center col-12">
            <h2 className="text-uppercase">Fiction</h2>
          </div>
        </div>

        <div className="row" style={{justifyContent: "space-evenly"}}>
          {/* <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
            <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
            <p className="price"><del>95.00</del> &mdash; $55.00</p>
          </div> */}
          {fiction.map((prod)=>
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


        <div className="row mt-5" style={{marginBottom: "5em"}}>
          <div className="col-12 text-center">
            <a href="/category/Fiction" className="btn btn-primary px-4 py-3">View All</a>
          </div>
        </div>


        <div className="row">
          <div className="title-section text-center col-12">
            <h2 className="text-uppercase">Engineering</h2>
          </div>
        </div>

        <div className="row" style={{justifyContent: "space-evenly"}}>
          {/* <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
            <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
            <p className="price"><del>95.00</del> &mdash; $55.00</p>
          </div> */}
          {engineering.map((prod)=>
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
        <div className="row mt-5" style={{marginBottom: "5em"}}>
          <div className="col-12 text-center">
            <a href="/category/Engineering and Technology" className="btn btn-primary px-4 py-3">View All</a>
          </div>
        </div>


        <div className="row">
          <div className="title-section text-center col-12">
            <h2 className="text-uppercase">Comics</h2>
          </div>
        </div>

        <div className="row" style={{justifyContent: "space-evenly"}}>
          {/* <div className="col-sm-6 col-lg-4 text-center item mb-4">
            <span className="tag">Sale</span>
            <a href="shop-single.html"> <img src="images/product_01.png" alt="Image" /></a>
            <h3 className="text-dark"><a href="shop-single.html">Bioderma</a></h3>
            <p className="price"><del>95.00</del> &mdash; $55.00</p>
          </div> */}
          {comics.map((prod)=>
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
        <div className="row mt-5" style={{marginBottom: "5em"}}>
          <div className="col-12 text-center">
            <a href="/category/Comics" className="btn btn-primary px-4 py-3">View All</a>
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
  );
  }else{
    return(<div>Loading</div>)
  }
}
