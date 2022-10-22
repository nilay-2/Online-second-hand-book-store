import './css/prodinp.css'
import React from 'react';
import { useState, useEffect } from 'react';
import { storage } from '../firebase';
import { useCookies } from 'react-cookie';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
var CryptoJS = require('crypto-js');
export default function ProductFrom() {
  const [cookies] = useCookies('user');
  var bytes = CryptoJS.AES.decrypt(cookies.user, 'my-secret-key@123');
  var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
  const seller = decryptedData.email;
  var image;
  const [categories, setCategories] = useState('');
  const [ctg, setCtg] = useState('');
  const [imagefire, setImagefire] = useState(null);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [condition, setCondition] = useState("");
  const [author, setAuthor] = useState("");
  const [pages, setPages] = useState("");
  const [pyear, setPyear] = useState("");
  const [edition, setEdition] = useState("");
  const [publication, setPublication] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    getCategories();
  }, []);

  async function getCategories() {
    const c = await fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    const d = await c.json();
    setCategories(d.categories);
  }

  function show() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

  function filterFunction() {
    var input, filter, ul, li, a, i;
    var input = document.getElementById("myInput");
    var filter = input.value.toUpperCase();
    var div = document.getElementById("myDropdown");
    var a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
      var txtValue = a[i].textContent || a[i].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        a[i].style.display = "";
      } else {
        a[i].style.display = "none";
      }
    }
  }

  async function uploadImage(id) {
    if (imagefire == null) return;
    const imgref = ref(storage, `images/${id}`);
    uploadBytes(imgref, imagefire).then(() => {
      getDownloadURL(imgref).then((url) => {
        image = url;
        console.log(image);
        console.log('image uploaded');
        updateImg(id);
      })
    })
  }

  async function updateImg(id) {
    const res = await fetch('http://localhost:5000/product/update', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        image
      })
    })
    const data = await res.json();
    console.log(data);
    if (data.status === 'ok') {
      console.log('created')
      alert('Product Created')
      window.location.href = '/productform';
    }
  }

  async function submitData() {
    const res = await fetch('http://localhost:5000/product/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        price,
        image,
        condition,
        author,
        pages,
        pyear,
        edition,
        publication,
        description,
        seller,
        category: ctg
      })
    })

    const data = await res.json();
    console.log(data.status)
    if (data.status === 'ok') {
      console.log('dummy');
      uploadImage(data.id)
    }
  }

  function search(e){
    e.preventDefault();
    const key = document.getElementById("searchinp").value;
    window.location.href = `/search/${key}`
  }
  
  function togglesearch() {
    console.log('toggle  called');
    document.getElementById('searchToggle').classList.toggle('active');
    console.log(document.getElementById('searchToggle').classList);
  }
  if (categories) {
    console.log(categories)
    return (

      <div class="container">
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
                    <li className="active"><a href="/productform">Sell</a></li>
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
        <div class="row justify-content-center">
          <div class="col-4 my-3 p-5 border border-body rounded">
            <div class="row mb-3 text-center">
              <h4 style={{ alignItems: "center", color: "black" }}>Book Details</h4>
            </div>
            <form>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Title</label>
                <input type="text" id="form2Example2" value={title} onChange={(e) => { setTitle(e.target.value) }} class="form-control" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Price</label>
                <input type="number" id="form2Example2" value={price} onChange={(e) => { setPrice(e.target.value) }} class="form-control" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Image</label>
                <input type="file" id="form2Example2" onChange={(e) => { setImagefire(e.target.files[0]) }} class="form-control" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Condition</label>
                <input type="text" id="form2Example2" value={condition} onChange={(e) => { setCondition(e.target.value) }} class="form-control" />
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="myInput">Category</label>
                {/* <input type="text" placeholder="Search.." id="myInput" onFocus={show} onBlur={show} onKeyUp={filterFunction} /> */}
                <input type="text" id="myInput" value={ctg} onFocus={show} onKeyUp={filterFunction} onChange={(e) => { setCtg(e.target.value) }} class="form-control" />
                <div id="myDropdown" class="dropdown-content">
                  {categories.map((c) =>
                    <a onClick={() => { setCtg(c.name); show() }} href="#">{c.name}</a>
                  )}
                </div>
              </div>

              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Author</label>
                <input type="text" id="form2Example2" value={author} onChange={(e) => { setAuthor(e.target.value) }} class="form-control" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Pages</label>
                <input type="number" id="form2Example2" value={pages} onChange={(e) => { setPages(e.target.value) }} class="form-control" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Print Year</label>
                <input type="number" id="form2Example2" value={pyear} onChange={(e) => { setPyear(e.target.value) }} class="form-control" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Edition</label>
                <input type="text" id="form2Example2" value={edition} onChange={(e) => { setEdition(e.target.value) }} class="form-control" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Publication</label>
                <input type="text" id="form2Example2" value={publication} onChange={(e) => { setPublication(e.target.value) }} class="form-control" />
              </div>
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example2">Description</label>
                <input type="text" id="form2Example2" value={description} onChange={(e) => { setDescription(e.target.value) }} class="form-control" />
              </div>


              <div class="row justify-content-center">

                <button type="button" onClick={submitData} class="btn btn-primary btn-block mb-4 col-11 shadow-sm">Submit</button>
              </div>
            </form>
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
  else {
    return (
      <div>
        Loading
      </div>
    )
  }
}
