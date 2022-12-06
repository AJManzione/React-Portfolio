import React from 'react';


export default function Contact() {

  return (
    <div className='container mt-3'>
      <h1 className="text-center">Contact Me</h1>
      <hr></hr>
      <br></br>
      <form>
        <div class="row d-flex justify-content-center">
          <div class="col-md-5 custom-form">
            <input type="name" className="form-control m-2" placeholder="First name"></input>
            <div>
              <input
                className='form-control m-2'
                type="email"
                required
                placeholder="Email"
                pattern=".+@gmail\.com"
                title="Please provide a valid email address" />
            </div>
            <input type="text" className="form-control m-2" placeholder="Message"></input>
            <div className='d-flex justify-content-center mt-5'>
              <button className='btn btn-primary'>Send</button>
            </div>
          </div>
        </div>
      </form>
      <br></br> <br></br>
      <br></br> <br></br>
      <br></br> <br></br>
      <br></br> <br></br>
    </div>
  );
}

