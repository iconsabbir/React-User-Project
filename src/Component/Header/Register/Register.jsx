import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile, } from "firebase/auth";
import app from '../../../firebase/firebase.config';


const auth = getAuth(app);


const Register = () => {
    const [success,setSuccess] = useState(false);  
    const [passwordError,setPasswordError] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault ();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        
        // password vaeldation

        if(!/(?=.*[A-Z]).*[A-Z]/.test(password)){
            setPasswordError('Plase provide at more than tow uppercase')
            return;

        } 
        if(password.length < 6){
            setPasswordError('at more then 6 charecter')
            return;
        }
        if(!/(?=.*[!@#$%*])/.test(password)){
            setPasswordError('Plase any of !@#$%* use this Charecter')
            return;
        }
        setPasswordError('')

        createUserWithEmailAndPassword(auth,email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            setSuccess(true)
            veryfiEmail();
            userUpdateName(name)
            form.reset();

        })
        .catch(error => console.log(error));
    }

    const veryfiEmail = () => {
        sendEmailVerification(auth.currentUser)
        .then(() => {
        alert('Plase chak Your Email')
        });
    }

    const userUpdateName = (name) =>{
        updateProfile(auth.currentUser, {
         displayName: name
        })
        .then(()=>{
             
        })
        .catch((error)=>{

        })



       

    }




    return (
       <div className='w-25 mx-auto my-5 background shadow'>
         <form onSubmit={handleOnSubmit} className="p-4">
            <h4>Please Register Here </h4>
            <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" name='name' className="form-control"  placeholder="Name Please" required/>
            </div>
            <div className="mb-3"> 
                <label  className="form-label">Email</label>
                <input type="email" name='email' className="form-control"  placeholder="Email" required/>
            </div>
            <div className="mb-3"> 
                <label  className="form-label">Password</label>
                <input type="password" name='password' className="form-control"  placeholder="password" required/>
            </div>

            <p className='text-danger'>{passwordError}</p>

            
            <input type="submit" className="btn btn-primary" value="Register"/>
            {
            success && <p className='text-success'>Registation Successfull</p>
           }

           


        </form>
       </div>
    );
};

export default Register;