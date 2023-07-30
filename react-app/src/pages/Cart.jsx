import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import jwt_decode from "jwt-decode";
import music from "../assets/music/Something-Just-Like-This-(Gospeljingle.com).mp3";
import Loader from "../components/Loader";
import cartImage from "../assets/images/cart/cart2.png";

export default function Cart() {

    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('jwtToken');
        if (storedToken) {
            setToken(storedToken);
            handleToken(storedToken)
        } else {
            localStorage.removeItem('jwtToken');
            localStorage.removeItem('jwtPayload');
            window.location.href = '/login';
        }
    }, []);

    const handleToken = (token) => {
        try {
            const decoded = jwt_decode(token);
            const currentTime = Date.now() / 1000;
            if (decoded.exp < currentTime) {
                console.log('Token expired');
                localStorage.removeItem('jwtToken');
                localStorage.removeItem('jwtPayload');
                window.location.href = '/login';
            }
        } catch (error) {
            console.log('Error decoding token:', error);
            window.location.href = '/login';
        }
    };

    return (
        <div>
            <Header/>
            <audio src={music} autoPlay loop />
            <div className='h-1.5 w-full bg-amber-900 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-800 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-700 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-500 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-300 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-300 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-300 animate-pulse z-50'></div>
            <div className="bg-stone-100">
                <div>
                    {
                        loading ?
                            <Loader /> :
                            <section style={{height: '84.5vh'}}>
                                <div className="h-full">
                                    <div
                                        className="flex h-full align-items-center align-content-center justify-content-center items-center justify-center lg:justify-between">
                                        <div className="ext-stone-400 px-8 py-20 pb-52 h-full ">
                                            <div
                                                className="max-w-screen-xl px-8 grid gap-8 grid-cols-1 md:px-12 lg:px-16 xl:px-32 py-16 mx-auto bg-stone-200 text-neutral-900 rounded-lg shadow-xl">
                                                <div>
                                                    <img style={{margin: 'auto', width: '670px', height: '500px'}}
                                                         src={cartImage}
                                                         alt="Sample image"/>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </section>
                    }
                </div>
            </div>
            <div className='h-1.5 w-full bg-amber-300 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-300 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-300 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-500 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-700 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-800 animate-pulse z-50'></div>
        </div>
    );
}
