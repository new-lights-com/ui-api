import React, {useState, useEffect} from 'react';
import Header from "../components/Header";
import Home from "./Home";
import sideImage1 from "../assets/images/pngwing.com (2).png"
import sideImage2 from "../assets/images/pngwing.com (9).png"
import Loader from "../components/Loader";
import jwt_decode from 'jwt-decode';
import music from "../assets/music/Passenger_-_Let_Her_Go_Luvmp.Com_.mp3";

const LoginPage = ({ onLogin }) => {
    const [email, setEmail] = useState('');
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [otp, setOtp] = useState('');
    const [otpSent, setOtpSent] = useState(false);
    const [otpVerified, setOtpVerified] = useState(false);
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const storedToken = localStorage.getItem('jwtToken');
        console.log("storedToken="+storedToken)
        if (storedToken) {
            window.location.href = '/';
        }
    }, []);

    // const handleToken = (token) => {
    //     try {
    //         const decoded = jwt_decode(token);
    //         const currentTime = Date.now() / 1000;
    //         if (decoded.exp < currentTime) {
    //             console.log('Token expired');
    //             localStorage.removeItem('jwtToken');
    //             localStorage.removeItem('jwtPayload');
    //             return;
    //         }
    //         window.location.href = '/';
    //     } catch (error) {
    //         console.log('Error decoding token:', error);
    //     }
    // };


    const handleEmailVerification = async (e) => {
        // e.preventDefault();
        setLoading(true)
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            setError("Email cannot be empty")
            setLoading(false)
            return
        }
        if (!emailRegex.test(email)) {
            setError('please provide a valid email')
            setLoading(false)
            return
        }
        try {
            const url = 'https://oauth-api-i46x.onrender.com/api/oauth/email/verification?email=' + email
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            console.log(response)
            if (response.ok) {
                setOtpSent(true)
                setError(null);
            } else {
                setError('Failed to authenticate');
            }
        } catch (error) {
            setError('An error occurred: 500');
        }
        setLoading(false)
    };

    const handleOtpVerifiction = async (e) => {
        // e.preventDefault();
        setLoading(true)
        if (!otp) {
            setError("OTP cannot be empty")
            setLoading(false)
            return
        }
        try {
            const url = 'https://oauth-api-i46x.onrender.com/api/oauth/email/authentication?email='+email+'&otp='+otp
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.ok) {
                const responseBody = await response.json();
                setResponseData(responseBody);
                setOtpVerified(true)
                setError(null);
                setLoading(false)
                setToken(responseBody.token)
                console.log("responseBody.token"+responseBody.token)
                const decoded = jwt_decode(responseBody.token);
                console.log(decoded)
                localStorage.setItem('jwtToken', responseBody.token);
                localStorage.setItem('jwtPayload', JSON.stringify(decoded));
                window.location.href = '/';
            } else {
                setError('Please provide a valid OTP');
            }
        } catch (error) {
            setError('An error occurred: 500');
        }
        setLoading(false)
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
                    {loading && <Loader />}
                </div>
                <section style={{height: '84.5vh'}}>
                    <div className="h-full">
                        <div
                            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
                            {
                                otpSent ?
                                    <div
                                        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                                        <div>
                                            <img style={{margin: 'auto', width: '670px', height: '500px'}}
                                                 src={sideImage2}
                                                 alt="Sample image"/>
                                        </div>
                                    </div>: <div
                                        className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                                        <div>
                                            <img style={{margin: 'auto', width: '670px', height: '500px'}}
                                                 src={sideImage1}
                                                 alt="Sample image"/>
                                        </div>
                                    </div>
                            }

                            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                                <div
                                    className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                            Sign in to your account
                                        </h1>
                                        <form className="space-y-4 md:space-y-6">
                                            {otpVerified ?
                                                <div>
                                                    {Home}
                                                </div> :
                                                otpSent ?
                                                    <div>
                                                        <div>
                                                            <input type="email" value={email} disabled={true}
                                                                name="email" id="email"
                                                                   className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                                            <input type="otp" value={otp} name="otp" id="otp"
                                                                   placeholder="Enter your OTP" maxLength={6}
                                                                   onChange={(e) => {
                                                                       const input = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
                                                                       if (input.length <= 6) {
                                                                           setOtp(input);
                                                                       }
                                                                   }}
                                                                   className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                                                        </div>
                                                        <button type="button" onClick={handleOtpVerifiction}
                                                                className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign
                                                            in
                                                        </button>
                                                    </div> :
                                                    <div>
                                                        <div>
                                                            <label htmlFor="email"
                                                                   className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your
                                                                email</label>
                                                            <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}
                                                                   className="bg-gray-50 mb-4 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                                   placeholder="Enter your email" required=""/>
                                                            <button type="button" onClick={handleEmailVerification}
                                                                    className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send OTP
                                                            </button>
                                                        </div>

                                                    </div>
                                            }
                                        </form>
                                        <br/>
                                        <div className="align-content-center" style={{color: 'indianred', textAlign: 'center'}}>
                                            {responseData && <p>Login successful! Data: {JSON.stringify(responseData)}</p>}
                                            {error && <p>{error}</p>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div className='h-1.5 w-full bg-amber-300 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-300 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-300 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-500 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-700 animate-pulse z-50'></div>
            <div className='h-1.5 w-full bg-amber-800 animate-pulse z-50'></div>
        </div>
    );
};

export default LoginPage;
