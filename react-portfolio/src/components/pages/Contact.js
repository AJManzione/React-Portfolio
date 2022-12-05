import React from 'react';

export default function Contact() {
  return (
    <div className='container'>
      <div className=' m-3 row d-flex justify-content-center'>
        <h1 className='text-center'>Contact Me</h1>
      </div>
      <form>
        <div class="row d-flex justify-content-center">
          <div class="col-md-5 custom-form">
            <input type="text" className="form-control m-2" placeholder="First name"></input>
            <input type="text" className="form-control m-2" placeholder="Email Address"></input>
            <input type="text" className="form-control m-2" placeholder="Message"></input>
            <div className='d-flex justify-content-center mt-5'>
              <button className='btn btn-primary'>Send</button>
            </div>
          </div>
        </div>
      </form>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
