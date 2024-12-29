import React from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div className="hero bg-white min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-40">

                <div className="text-center lg:text-left w-1/2">
                    <img className='w-[748px] h-auto' src={loginImg} alt="" />
                </div>

                <div className="card bg-white max-w-lg shrink-0 shadow-2xl w-1/2">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>
                    <form className="card-body">
                        <div className="form-control pb-6">
                            <label className="label">
                                <span className="label-text text-[#444444] text-xl font-semibold pb-4">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="Enter your email" className="input input-bordered border-[#D1A054] bg-white text-[#A1A1A1] text-base font-normal" required />
                        </div>
                        <div className="form-control pb-10">
                            <label className="label">
                                <span className="label-text text-[#444444] text-xl font-semibold pb-4">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="Enter your password" className="input input-bordered border-[#D1A054] bg-white text-[#A1A1A1] text-base font-normal" required />

                        </div>


                        <div className="form-control mt-10">
                            <button className="btn btn-primary text-white text-xl font-bold bg-[#D1A054] hover:bg-[#c28f44] rounded-lg border-none">Sign Up</button>
                        </div>
                    </form>
                    <p className='text-[#D1A054] text-xl font-medium text-center'>Already registered? <Link to="/login" className='font-bold'>Go to log in</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;