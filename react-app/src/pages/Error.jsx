import React from 'react';
import Header from '../components/Header';


export default function Error() {


    return (
        <div>
            <Header />
            <div className='text-center font-bold mt-10 text-2xl text-amber-600'>404 Not found</div>
            <div className='text-center font-semibold mt-10 text-xl text-gray-600'>Check other pages</div>
            <div className='flex justify-center'>
                <a href="/" className='text-center font-bold mt-10 text-4xl text-neutral-100 bg-black px-4 py-1 mx-2 mb-20 rounded shadow-sm hover:cursor-pointer hover:scale-105 no-underline hover:text-white'>Home</a>
                <a href="/Search/Hello" className='text-center font-bold mt-10 text-4xl text-neutral-100 bg-black px-4 py-1 mx-2 mb-20 rounded shadow-sm hover:cursor-pointer hover:scale-105 no-underline hover:text-white'>Search</a>
            </div>
            <div className='h-10 w-full bg-amber-900'></div>
            <div className='h-10 w-full bg-amber-800'></div>
            <div className='h-10 w-full bg-amber-700'></div>
            <div className='h-10 w-full bg-amber-500'></div>
            <div className='h-10 w-full bg-amber-400'></div>
            <div className='h-10 w-full bg-amber-300'></div>
            <div className='h-10 w-full bg-amber-200'></div>
            <div className='h-10 w-full bg-amber-100'></div>
            <div className='h-10 w-full bg-amber-50'></div>
        </div>
    );

}