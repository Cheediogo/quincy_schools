const Validation = (values) => {

    let errors={};

    if(!values.fullname){
        errors.fullname="Name is required.";
    }
    if(!values.email){
        errors.email="Email is required.";
    }
    if(!values.subject){
            errors.subject="Select an Option.";
    }

    if(!values.description){
        errors.description="Description is required.";
    }else if(values.description.length < 10){
        errors.description="Description must be at least 10 characters.";
    }
    // else if(!/\$+@\$+\.\$+/.test(values.email)){
    //     errors.email="Email requires special character."
    // }
    
    
  return errors;
}

export default Validation