import React, {useState} from 'react'
import ContactForm from './ContactForm';
import FormSubmitted from './FormSubmitted';

const FormPage = () => {
    const [formIsSubmitted, setFormIsSubmitted] = useState(false);

    const submitForm = () =>{
        setFormIsSubmitted(true);
    };
    return (
        <div>
            {!formIsSubmitted ? <ContactForm submitForm={submitForm}/> : <FormSubmitted/>}
        </div>
    )

//   return 
//     <>
//         {!formIsSubmitted ? (
//         <ContactForm submitForm={submitForm}/> 
//         ): (
//         <FormSubmitted/>
//         )}
//     </>
  
};

export default FormPage