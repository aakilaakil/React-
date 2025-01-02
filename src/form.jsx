import React from 'react';
import './form.css';

const Form = () => {
  return (
    <>
    <div> 
    <h1 className='head'>
       <center >Slam Book </center>
      </h1>
    </div>

    <div className="form">
      <form>
        <div className="form-group"><label htmlFor="name">Name:</label><input type="text" name="name" id="name" /> </div>
        <div className="form-group"><label htmlFor="nick">Nick Name:</label><input type="text" name="nick" id="nick" /></div>
        <div className="form-group"><label htmlFor="add">Address:</label><input type="text" name="add" id="add" /></div>
        <div className="form-group"><label htmlFor="phn">Phone Number:</label><input type="text" name="phn" id="phn" /></div>
        <div className="form-group"><label htmlFor="dob">Date Of Birth : </label><input type="date" name="dob" id="dob" /></div>
        <div className="form-group">
          <label>Gender:</label>
          <input type="radio" name="gender" id="male" /> Male
          <input type="radio" name="gender" id="female" /> Female
        </div>
        <div>
          <label className='fav'>Favorite Actor:</label>
          <div className='actor'>
        <ol>  <input  type="radio" name="actress" id="thalapathi" /> Anil
          <input type="radio" name="actress" id="thala" /> Aamai
          <input type="radio" name="actress" id="thala" /> Thavalai 
          <input type="radio" name="actress" id="thala" /> Mentalan
          <input type="radio" name="actress" id="thala" /> UlagaNayagan</ol>

          </div>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div></>
  );
};

export default Form;
