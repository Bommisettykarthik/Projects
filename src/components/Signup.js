// import React,{useState} from 'react';
// import {Link, useNavigate} from 'react-router-dom';
// import validation from './SignUpvalidation';
// import axios from 'axios' ;

// function Signup() {

//   const [values,setValues] = useState({
//     name:'',
//     email:'',
//     password:''
//    })

//    const navigate = useNavigate({})
  
//    const [errors,setErrors] = useState({});
 
//    const handelInput =(event)=>{
//      setValues(prev=>({...prev,[event.target.name]:[event.target.value]}))
//    }
 
 
//    const handelSubmit =(event)=>{
//      event.preventDefault();
//      setErrors(validation(values));
//      if(errors.name==="" && errors.email==='' && errors.password === ""){
//         axios.post('http://localhost:3232/signup',values)
//        .then(res=>
//         navigate('/')
//         )
//        .catch(err=>console.log(err));
   
//      }
//    }


//   return (
//     <div className='d-flex align-items-center justify-content-center vh-100 '>
//       <div className='bg-img'>
//       <img src="images/login-background.jpg" alt="" />
//       </div>
//     <div className='container bg-white  rounded  w-50 w-md-50 position-relative'>
//       <h4>Sign up</h4>
//         <form action="" onSubmit={handelSubmit}>
//         <div>
//                 <label htmlFor='name'><strong>Name</strong></label>
//                 <input type='name' placeholder='Enter Name' name='name' className='form-control rounded-0'
//                 onChange={handelInput}
//                 ></input>
//                  {errors.name && <span className="text-danger"> {errors.name}</span>}
//             </div> 
//             <div>
//                 <label htmlFor='email'><strong>Email</strong></label>
//                 <input type='email' placeholder='email' name="email" className='form-control rounded-0'
//                 onChange={handelInput}
//                 ></input>
//                {errors.email && <span className="text-danger"> {errors.email}</span>}
//             </div> 
//             <div>
//                 <label htmlFor='password'><strong>Password</strong></label>
//                 <input type='password' placeholder='password' name="password" className='form-control rounded-0'
//                 onChange={handelInput}
//                 ></input>
//                 {errors.password && <span className="text-danger"> {errors.password}</span>}
//             </div>
//             <button  type="submit" className='btn btn-success w-100 mb-3'><strong>Sign up</strong>
//             </button>
//             {/* <p>You are agree to our terms and policies</p> */}
//             <Link to='/' className='btn btn-default border w-100 bg-light text-decoration-none'>Login</Link>
//              </form>
//     </div>

//  </div>
//   )
// }

// export default Signup
