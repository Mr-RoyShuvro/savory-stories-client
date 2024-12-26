import React, { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication2.png'

const Login = () => {

    const [disabled, setDisabled] = useState(true);

    const captchaRef = useRef(null);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
    }

    const handleValidateCaptcha = () => {
        const user_captcha_value = captchaRef.current.value;
        if (validateCaptcha(user_captcha_value) == true) {
            setDisabled(false);
        }
        else {
            setDisabled(true);
        }
    }

    return (
        <div className="hero bg-white min-h-screen">
            <div className="hero-content flex-col lg:flex-row gap-40">
                <div className="text-center lg:text-left w-1/2">

                    <img className='w-[748px] h-auto' src={loginImg} alt="" />
                    {/* <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p> */}
                </div>
                <div className="card bg-white max-w-lg shrink-0 shadow-2xl w-1/2">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered bg-white" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered bg-white" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>


                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <div className='flex gap-5 justify-center items-center'>
                                <input type="text" ref={captchaRef} name='captcha' placeholder="Type here" className="input input-bordered bg-white" required />
                                {/* <button type='button'  className='btn btn-outline btn-sm' >Validate</button> */}
                                <input className='checkbox checkbox-lg checkbox-warning border-4' type="checkbox" onClick={handleValidateCaptcha} name="" id="" />
                            </div>
                        </div>


                        <div className="form-control mt-6">
                            <button disabled={disabled} className="btn btn-primary text-white text-xl font-bold bg-[#D1A054] rounded-lg border-none">Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;