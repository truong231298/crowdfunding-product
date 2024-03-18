import React from 'react'
import icon from "/images/icon-check.svg"

const Sucess = () => {
    return (
        <div className='flex justify-center items-center '>
            <div className='flex flex-col max-w-sm items-center gap-4 p-4 border-2 bg-white rounded-lg  '>
                <img src={icon} alt="" className='w-12' />
                <h1 className='font-semibold text-Black'>Thanks for your support!</h1>
                <p className='text-Darkgray'>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.</p>
                <button className='text-white px-4 py-2 bg-Moderatecyan hover:bg-Darkcyan rounded-full'>Got it!</button>
            </div>

        </div>
    )
}

export default Sucess