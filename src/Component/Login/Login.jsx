import React, { useState } from 'react';
import './Login.css';
import { signInWithEmailAndPassword,getAuth, sendPasswordResetEmail } from 'firebase/auth';
import app from '../../firebase/firebase.config';


const auth = getAuth(app);

const Login = () => {

  const [success,setSuccess] = useState(false); 
  const [userEmail,setUserEmail] = useState('');

    const handleOnSubmit = (event) => {
        event.preventDefault ();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmailAndPassword(auth,email,password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            setSuccess (true)
            form.reset(); 
        })
        .catch(error=>console.log(error))

    }

    const handelEmailBlur = (event) =>{
        const email = event.target.value ;
        setUserEmail(email)
    }

    const handleForgetPassword = () =>{
        if(!userEmail){
            alert('Please Enter Your Email')
            return 
        }
        // password Reset email
        sendPasswordResetEmail(auth,userEmail)
        .then(()=>{
            alert('Plese Check Your Email & R')
        })
    }





    return (
        <div className='w-25 mx-auto my-5 loginbackground rounded shadow'>
        <form onSubmit={handleOnSubmit} className="p-4">
           <h4 className='login'>LOGIN </h4>
           <div className="mb-3"> 
               <label  className="form-label">Email</label>
               <input onBlur={handelEmailBlur} type="email" name='email' className="form-control"  placeholder="Email" required/>
           </div>
           <div className="mb-3"> 
               <label  className="form-label">Password</label>
               <input type="password" name='password' className="form-control"  placeholder="password" required/>
              
           </div>
           <div>
           
           </div>
           <input type="submit" className="btn btn-primary button-size" value="Login"/>
           {
            success && <p className='text-success'>Login Successfull</p>
           }
       </form>
       <button onClick={handleForgetPassword} className='btn btn-link  forget-password'>Forget Password?</button>
      </div>
    );
};

export default Login;