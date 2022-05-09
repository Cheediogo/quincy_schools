import React, { useEffect, useState } from 'react'
import { Container } from "react-bootstrap";
import Validation from './Validation';

const ContactForm = ({submitForm}) => {

  const [values, setValues] = useState({
    fullname: "",
    email:"",
    subject:"",
    description:"",
  });

  const [errors, setErrors] = useState({});
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit =(event) => {
    event.preventDefault();
    setErrors(Validation(values));
    setDataIsCorrect(true);
  };
  
  useEffect(() => {
    if(Object.keys(errors).length === 0 && dataIsCorrect){
      submitForm(true);
    }
  }, [errors]);

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              <div className='fw-bold'>Full Name</div>
              <input type="text" className='input' name='fullname' value={values.name} onChange={handleChange}/>
              {errors.fullname && <p className='error-text text-danger'>{errors.fullname}</p>}
            </label> 
          </div>
          <div>
            <label>
              <div className='fw-bold'>Email</div>
              <input type="text" className='input' name='email' value={values.email} onChange={handleChange}/>
              {errors.email && <p className='text-danger'>{errors.email}</p>}
            </label>
          </div>
          <div>
            <label>
              <div className='fw-bold'>Subject</div>
              <select name="subject" className='select' value={values.subject} onChange={handleChange}>
                <option value="location">Location Search</option>
                <option value="offender">Offender Not Listed</option>
                <option value="name removal">Name Removal</option>
                <option value="other">Other</option>
              </select>
              {errors.subject && <p className='text-danger'>{errors.subject}</p>}
            </label>
          </div>
          <div>
            <label>
              <div className='fw-bold mt-5'>Description</div>
              <textarea name="description" className='text-box' value={values.description} onChange={handleChange}></textarea>
              {errors.description && <p className='text-danger'>{errors.description}</p>} 
            </label>
          </div>
          <div>
            <p className='form-para-txt'>* You will receive a confirmation email upon 
              successful submission of the form.</p>
          </div>
          <button type='submit' className='border-0 nav-sec text-white my-4 py-2 px-5 form-btn'>Submit</button>
        </form>
      </Container>  
    </>
  )
}

export default ContactForm