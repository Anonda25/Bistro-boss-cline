import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import UseAuth from '../../Hooks/UseAuth';
import UseAxiosPublic from '../../Hooks/UseAxiosPublic';
import { useNavigate } from 'react-router-dom';

const SocilLogin = () => {
    const Navigate = useNavigate()
    const { GoogleLogin }=UseAuth()
    const AsxoisPublic = UseAxiosPublic()
    const handlerGoogleLogin =()=>{
        GoogleLogin()
        .then(res =>{
            console.log(res.user);
            const userInfo ={
                email : res.user?.email,
                name: res.user?.displayName
            }
            AsxoisPublic.post('/users', userInfo)
            .then(res =>{
                console.log(res.data);
                Navigate('/')
            })
        })
    }
    return (
        <div >
            <div className='divider'>

            </div>
            <div>
                <button onClick={handlerGoogleLogin} className='btn btn-accent w-full'>
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocilLogin;