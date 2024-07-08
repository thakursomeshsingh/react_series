import React, {useState} from 'react'

function FormValidation() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errrors, setErrors] = useState({});
    const [submittedData, setSubmittedData] = useState("null");

    const validateForm = ()=>{
        let isValid = true;
        const newErrors = {};

        if(!name.trim()){
            newErrors.name = "Name is required";
            isValid = false;
        }
        if(!email.trim()){
            newErrors.email = "Email is required";
            isValid = false;
        } else if(!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "email is invalid";
            isValid = false;
        }
        if(!password.trim()){
            newErrors.password = "password is required";
            isValid = false;
        } else if(password.length < 6){
            newErrors.password = "password should be at least 6 charactes long";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (event) =>
        {
            event.preventDefault();

            if(validateForm()){
                const submittedData = {
                    name,
                    email,
                    password,
                };
               setSubmittedData(submittedData);
               console.log("Form Submitted:",submittedData);
            }
        };
    
  return (
    <>
   
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input 
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />
                {errrors.name && <span className='errors'>{errrors.name}</span>}
            </div>
            <div>
                <label>Email:</label>
                <input 
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />
                {errrors.email && <span className='errors'>{errrors.email}</span>}
            </div>
            <div>
                <label>Password:</label>
                <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                />
                {errrors.password && <span className='errors'>{errrors.password}</span>}
            </div>
            <button type='submit'>Submit</button>
        </form>

        {submittedData && (
            <div>
                <h2>SubmittedData:</h2>
                <p>Name: {submittedData.name}</p>
                <p>Email: {submittedData.email}</p>
                <p>Password: {submittedData.password}</p>
            </div>
        )}
    </>
  )
}

export default FormValidation;