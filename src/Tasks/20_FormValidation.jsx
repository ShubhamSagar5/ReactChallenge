import { useState } from "react"


const FormValidation = () => {
   
    const [formData,setFormData] = useState({
        first:null,
        last:null,
        email:null,
        password:null,
        confirmPassword:null
    })

    const [formError,setFormError] = useState({
        first:null,
        last:null,
        email:null,
        password:null,
        confirmPassword:null
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
    })
    }
   
    const handleFormSubmit = (e) => {
        e.preventDefault()
        let validForm = true

        let emailRegex = /^\S+@\S+\.\S+$/
        let passwordRegex = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
    
        const {first,last,email,password,confirmPassword} = formData

        let formError = {
first:null,
        last:null,
        email:null,
        password:null,
        confirmPassword:null
        }

        if(!first){
            formError.first = "Please Enter valid name"
            validForm = false
        }
        if(!last){
            formError.last = "Please Enter valid last name"
            validForm = false
        }
        if(!emailRegex.test(email)){
            formError.email = "Enter valid email"
            validForm = false
        }
        if(!passwordRegex.test(password)){
            formError.password = "Enter valid password"
            validForm = false
        }

        if(password != confirmPassword){
            formError.confirmPassword = "Confirm password not match"
            validForm = false
        }
    
    setFormError(formError) 

    if(validForm){
        console.log("Form Submitted successfully")
    }
    
    }

   
    return (
        <div>
            <div>
                <input type="text" name="first" id="" placeholder="First Name" onChange={(e) => handleChange(e)}/>
                {formError.first && <p className="text-red-600">{formError.first}</p>}
                <br />
                <input type="text" name="last" id="" placeholder="Last Name" onChange={(e) => handleChange(e)}/>
                {formError.last && <p className="text-red-600">{formError.last}</p>}
                <br />
                <input type="email" name="email" id="" placeholder="Enter email " onChange={(e) => handleChange(e)} />
                {formError.email && <p className="text-red-600">{formError.email}</p>}
                <br />
                <input type="password" name="password" id="" placeholder="Enter Password" onChange={(e) => handleChange(e)} />
                {formError.password && <p className="text-red-600">{formError.password}</p>}
                <br />
                <input type="password" name="confirmPassword" id="" placeholder="Enter confim password" onChange={(e) => handleChange(e)} />
            {formError.confirmPassword && <p className="text-red-600">{formError.confirmPassword}</p>}
            <br />
            </div>

            <button onClick={handleFormSubmit} >Submit</button>
        </div>
    )
}

export default FormValidation