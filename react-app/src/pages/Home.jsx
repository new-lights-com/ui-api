import React, {useEffect, useState} from 'react';
import Header from '../components/Header';
import jwt_decode from "jwt-decode";
import music from "../assets/music/Passenger_-_Let_Her_Go_Luvmp.Com_.mp3";
import Loader from "../components/Loader";
import sideImage2 from "../assets/images/pngwing.com (9).png";
import sideImage1 from "../assets/images/pngwing.com (2).png";

export default function Home() {

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
                                        className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                                        <div
                                            className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                                            <div>
                                                <img style={{margin: 'auto', width: '670px', height: '500px'}}
                                                     src={sideImage2}
                                                     alt="Sample image"/>
                                            </div>
                                        </div>
                                        <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                                            <div>
                                                <img style={{margin: 'auto', width: '670px', height: '500px'}}
                                                     src={sideImage1}
                                                     alt="Sample image"/>
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
