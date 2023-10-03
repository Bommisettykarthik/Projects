// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import  validation from'./LoginValidation';
// import axios from 'axios';

// function Login() {

//   const [values,setValues] = useState({
//    email:'',
//    password:''
//   })
 
//   const [errors,setErrors] = useState({});

//   const navigate =useNavigate({})

//   const handelInput =(event)=>{
//     setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
//   }


//   const handelSubmit =(event)=>{
//     event.preventDefault();
//     setErrors(validation(values));
//     if(errors.email==='' && errors.password === ""){
//       axios.post('http://localhost:3232/login',values)
//      .then(res=>{
//       if(res.data === "success"){
//         navigate('/Home');
//       }else{
//         alert("no record")
//       }
//      }
    
//       )
//      .catch(err=>console.log(err));
 
//    }
//  }
  

//   return (
//  <div className='d-flex align-items-center justify-content-center vh-100'>

// <div className="bg-img">
//         <img src="images/login-background.jpg" alt="" />
//       </div>
  
//     <div className='container bg-white  rounded w-50 w-md-50  position-relative'>
//         <h4>Login In</h4>
//         <form action='' onSubmit={handelSubmit}>
            
//             <div>
//                 <label htmlFor='email'><strong>Email</strong></label>
//                 <input type='email' placeholder='email' name='email' className='form-control rounded-0'
//                 onChange={handelInput}
//                 ></input>
//                {errors.email && <span className="text-danger"> {errors.email}</span>}
//             </div> 
//             <div>
//                 <label htmlFor='password'><strong>Password</strong></label>
//                 <input type='password' placeholder='password' name='password' className='form-control rounded-0'
//                 onChange={handelInput}
//                 ></input>
//                  {errors.password && <span className="text-danger"> {errors.password}</span>}
//             </div>
//             <button  type="submit" className='btn btn-success w-100 mb-3'><strong>Log in</strong>
//             </button>
//             {/* <p>You are agree to our terms and policies</p> */}
//             <Link to='/signup' className='btn btn-default border w-100 bg-light text-decoration-none'>Create Account</Link>
//              </form>
//     </div>

//  </div>
//   );
// }

// export default Login;

