import React, { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import loginImg from '../../assets/others/authentication2.png'
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {

    const [disabled, setDisabled] = useState(true);

    const captchaRef = useRef(null);

    const { signIn } = useContext(AuthContext);

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
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


                        <div className="form-control">
                            <label className="label">
                                <LoadCanvasTemplate />
                            </label>
                            <div className='flex gap-10 items-center justify-between pt-6'>
                                <input type="text" ref={captchaRef} name='captcha' placeholder="Type here" className="input input-bordered border-[#D1A054] bg-white w-full" required />
                                {/* <button type='button'  className='btn btn-outline btn-sm' >Validate</button> */}
                                <input className='checkbox checkbox-lg checkbox-warning border-4' type="checkbox" onClick={handleValidateCaptcha} name="" id="" />
                            </div>
                        </div>

                        <div className="form-control mt-10">
                            <button disabled={disabled} className="btn btn-primary text-white text-xl font-bold bg-[#D1A054] hover:bg-[#c28f44] rounded-lg border-none">Sign In</button>
                        </div>
                    </form>
                    <p className='text-[#D1A054] text-xl font-medium text-center'>New here? <Link to="/signup" className='font-bold'>Create a New Account</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;