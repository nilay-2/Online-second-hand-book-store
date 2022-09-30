import React from 'react'
import './css/chat.css'
export default function Chat() {
    function scroll(){
        console.log('scroll')
        var objDiv = document.getElementById("chat-body");
objDiv.scrollTop = objDiv.scrollHeight;
    }

  return (
    <div className='container' onLoad={scroll}>
   <div className='container shadow p-3 mb-5 bg-white rounded overflow-auto' id='chat-body' style={{height: "40em",marginTop: "2em",width:"40em"}}>
    <div class="d-flex flex-row justify-content-end mb-4">
                <div>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Do you have pictures of Matley
                    Marriage?</p>
                  <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                </div>
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
    </div>
    <div class="d-flex flex-row justify-content-start mb-4">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
                <div>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Okay i will meet you on
                    Sandon Square</p>
                  <p class="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                </div>
              </div>

              <div class="d-flex flex-row justify-content-end mb-4">
                <div>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Do you have pictures of Matley
                    Marriage?</p>
                  <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                </div>
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
    </div>
    <div class="d-flex flex-row justify-content-start mb-4">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
                <div>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Okay i will meet you on
                    Sandon Square</p>
                  <p class="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-end mb-4">
                <div>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Do you have pictures of Matley
                    Marriage?</p>
                  <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                </div>
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
    </div>
    <div class="d-flex flex-row justify-content-start mb-4">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
                <div>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Okay i will meet you on
                    Sandon Square</p>
                  <p class="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-end mb-4">
                <div>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Do you have pictures of Matley
                    Marriage?</p>
                  <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                </div>
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
    </div>
    <div class="d-flex flex-row justify-content-start mb-4">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
                <div>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Okay i will meet you on
                    Sandon Square</p>
                  <p class="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-end mb-4">
                <div>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Do you have pictures of Matley
                    Marriage?</p>
                  <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                </div>
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
    </div>
    <div class="d-flex flex-row justify-content-start mb-4">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
                <div>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Okay i will meet you on
                    Sandon Square</p>
                  <p class="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-end mb-4">
                <div>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Do you have pictures of Matley
                    Marriage?</p>
                  <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                </div>
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
    </div>
    <div class="d-flex flex-row justify-content-start mb-4">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
                <div>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Okay i will meet you on
                    Sandon Square</p>
                  <p class="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                </div>
              </div>
              <div class="d-flex flex-row justify-content-end mb-4">
                <div>
                  <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">Do you have pictures of Matley
                    Marriage?</p>
                  <p class="small me-3 mb-3 rounded-3 text-muted d-flex justify-content-end">00:11</p>
                </div>
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
    </div>
    <div class="d-flex flex-row justify-content-start mb-4">
                {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp" alt="avatar 1" style={{width: "45px", height: "100%"}}/> */}
                <div>
                  <p class="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor: "#f5f6f7"}}>Okay i will meet you on
                    Sandon Square</p>
                  <p class="small ms-3 mb-3 rounded-3 text-muted">00:11</p>
                </div>
    </div>
    {/* <form class="form-inline">
    <div class="form-group mx-sm-3 mb-2">
    <label for="inputPassword2" class="sr-only">Message</label>
    <input type="text" class="form-control" id="inputPassword2" placeholder="Enter Message..."/>
    </div>
    <button type="button" class="btn btn-primary mb-2">Send</button>
    </form> */}
    <div class="card-footer text-muted d-flex justify-content-start align-items-center p-3">
              <input type="text" class="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Type message"/>
              <a class="ms-3" href="#!"><i class="fas fa-paper-plane"></i></a>
            </div>
   </div>
   </div>
  )
}
