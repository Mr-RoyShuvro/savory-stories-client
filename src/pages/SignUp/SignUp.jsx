import React from 'react';
import loginImg from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


const SignUp = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => console.log(data)

    // console.log(watch("name"))

    return (
        <div className="hero bg-white min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-40">

                <div className="text-center lg:text-left w-1/2">
                    <img className='w-[748px] h-auto' src={loginImg} alt="" />
                </div>

                <div className="card bg-white max-w-lg shrink-0 shadow-2xl w-1/2">
                    <h1 className="text-5xl font-bold">Sign Up now!</h1>

                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control pb-6">
                            <label className="label">
                                <span className="label-text text-[#444444] text-xl font-semibold pb-4">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name='name' placeholder="Enter your name" className="input input-bordered border-[#D1A054] bg-white text-[#A1A1A1] text-base font-normal"  />
                            {errors.name && <span className='text-red-600 font-semibold'>Name is required</span>}
                        </div>

                        <div className="form-control pb-6">
                            <label className="label">
                                <span className="label-text text-[#444444] text-xl font-semibold pb-4">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} name='email' placeholder="Enter your email" className="input input-bordered border-[#D1A054] bg-white text-[#A1A1A1] text-base font-normal" />
                            {errors.email && <span className='text-red-600 font-semibold'>Email is required</span>}
                        </div>

                        <div className="form-control pb-10">
                            <label className="label">
                                <span className="label-text text-[#444444] text-xl font-semibold pb-4">Password</span>
                            </label>
                            <input type="password" {...register("password", { required: true, minLength: 6, maxLength: 20})} name='password' placeholder="Enter your password" className="input input-bordered border-[#D1A054] bg-white text-[#A1A1A1] text-base font-normal" />
                            {errors.password && <span className='text-red-600 font-semibold'>Password is't valid</span>}
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