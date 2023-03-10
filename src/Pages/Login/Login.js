import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/tasklogin.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {
    const {login}=useContext(AuthContext);
    const[loginError,setLoginError]=useState('');
    const location=useLocation();
    const navigate=useNavigate();

    const from= location.state?.from?.pathname || '/';

    const handleLogin=event=>{
        event.preventDefault();
        const form= event.target;
        const email= form.email.value;
        const password= form.password.value;
        setLoginError('');
        login(email,password)
        .then(result=>{
            const user= result.user;
            console.log(user);
            navigate(from,{replace:true});
        })
        .catch(err=>{
            console.error(err.message)
            setLoginError(err.message)
        });
        
    }
    return (
        <div className="hero my-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center">
                    <img className='max-w-xs' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className='text-3xl font-bold mt-4 text-center'>Login Now</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" className="btn btn-primary" value="Login" />
                            <div>
                                {loginError && <p className='text-center my-2 text-red-600'>{loginError}</p>}
                            </div>
                        </div>
                    </form>
                    <p className='text-center mb-4'>New to Task Manager?Please <Link to='/register' className='font-bold text-success'>Sign Up</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default Login; <h1>This is login</h1>