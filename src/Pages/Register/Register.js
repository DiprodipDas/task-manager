import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import registration from '../../assets/taskreg.jpg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const {createUser}=useContext(AuthContext)
    const handleSignUp=event=>{

        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;

        createUser(email,password)
        .then(result=>{
            const user=result.user;
            console.log(user);
            toast.success('Sign up successfull')

        })
        .catch(err=>console.error(err));
        
    }
    return (
        <div className="hero my-5">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center">
                <img className='max-w-xs' src={registration} alt="" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <h1 className='text-3xl font-bold mt-4 text-center'>Sign Up Now</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' placeholder="your name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" name='email' placeholder="your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                    <input type="submit" className="btn btn-primary" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center mb-4'>Already have an account?Please <Link to='/login' className='font-bold text-success'>Log in</Link> </p>
            </div>
        </div>
    </div>
    );
};

export default Register;