import React from 'react';
import { useState } from 'react';
import { storage } from '../firebase';
import {ref,uploadBytes,getDownloadURL} from 'firebase/storage'
export default function ProductFrom() {

    var image;
    const [imagefire,setImagefire] = useState(null);
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [condition,setCondition] = useState("");
    const [author,setAuthor] = useState("");
    const [pages,setPages] = useState("");
    const [pyear,setPyear] = useState("");
    const [edition,setEdition] = useState("");
    const [publication,setPublication] = useState("");
    const [description,setDescription] = useState("");

    async function uploadImage(id){
      if(imagefire==null) return ;
        const imgref = ref(storage, `images/${id}`);
        uploadBytes(imgref,imagefire).then(()=>{
            getDownloadURL(imgref).then((url)=>{
                image = url;
                console.log(image);
                console.log('image uploaded');
                updateImg(id);
            })
        })
    }

    async function updateImg(id){
        const res = await fetch('http://localhost:5000/product/update',{
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
        if(data.status==='ok'){
            console.log('created')
      alert('Product Created')
      window.location.href = '/productform';
        }
    }

    async function submitData(){
        const res = await fetch('http://localhost:5000/product/new',{
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
            description
          })
        })
    
        const data = await res.json();
        console.log(data.status)
        if(data.status === 'ok'){
            console.log('dummy');
            uploadImage(data.id)
        }
      }

  return (
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-4 my-3 p-5 border border-body rounded">
                <div class="row mb-3 text-center">
                    <h4 style={{alignItems: "center",color:"black"}}>Book Details</h4>
                </div>
                <form>
                <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Title</label>
                        <input type="text" id="form2Example2" value={title} onChange = {(e)=>{setTitle(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Price</label>
                        <input type="number" id="form2Example2" value={price} onChange = {(e)=>{setPrice(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Image</label>
                        <input type="file" id="form2Example2" onChange = {(e)=>{setImagefire(e.target.files[0])}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Condition</label>
                        <input type="text" id="form2Example2" value={condition} onChange = {(e)=>{setCondition(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Author</label>
                        <input type="text" id="form2Example2" value={author} onChange = {(e)=>{setAuthor(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Pages</label>
                        <input type="number" id="form2Example2" value={pages} onChange = {(e)=>{setPages(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Print Year</label>
                        <input type="number" id="form2Example2" value={pyear} onChange = {(e)=>{setPyear(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Edition</label>
                        <input type="text" id="form2Example2" value={edition} onChange = {(e)=>{setEdition(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Publication</label>
                        <input type="text" id="form2Example2" value={publication} onChange = {(e)=>{setPublication(e.target.value)}} class="form-control" />
                    </div>
                    <div class="form-outline mb-4">
                        <label class="form-label" for="form2Example2">Description</label>
                        <input type="text" id="form2Example2" value={description} onChange = {(e)=>{setDescription(e.target.value)}} class="form-control" />
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
