import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";



const Register = () => {
    const { register, handleSubmit, watch, formState: { errors }, } = useForm()
    const { creactUser, updateProfiles } = useContext(AuthContext)
    const Navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        creactUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateProfiles(data.name, data.photoURL)
                    .then(res => {
                        console.log(res);
                        Navigate('/');
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Register Success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })
                    .catch(error => console.log(error))
            })
    }


    // console.log(watch("example"))
    return (
        <div className="hero bg-base-200 min-h-screen">
            <Helmet>
                <title>Bistro Boss | | Register</title>

            </Helmet>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center w-1/2 lg:text-left">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-1/2 max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name'{...register("name", { required: true })} placeholder="NAME" className="input input-bordered" />
                            {errors.name && <span className="text-red-300">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" {...register("Photo", { required: true })} placeholder="PhotoURL" className="input input-bordered" />
                            {errors.photo && <span className="text-red-300">PhotoURL  is  a required</span>}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-300">This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,
                                // pattern: /^(?=.*[0-9])(?=.*[!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~])[a-zA-Z0-9!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~*]{8,}$/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === 'required' && <span className="text-red-300">Password must be  chareacter</span>}
                            {errors.password?.type === 'minLength' && <span className="text-red-300">Password must be 6 chareacter</span>}
                            {errors.password?.type === 'maxLength' && <span className="text-red-300">Password must be 20 chareacter</span>}

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <p className='text-center mb-5 font-xl uppercase '>allready you have an accoutn please <Link to={'/login'} className='underline text-green-300'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;