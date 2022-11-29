import React from 'react'
import gnuLogo from '../img/logo.png'
import gnuen from '../img/gnuen.png'

const Welcome = () => {
    return (
        <div>
            <div className='text-center'>
                <h1>Klan Selvdød Gnu</h1>
            </div>
            <div className='w-[550px] h-[350px] mx-auto'
                style={{
                    backgroundImage: `url(${gnuLogo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }
                }
            >
            </div>
            <div className='text-center'>
                <div>
                    <h2>OUTPOST</h2>
                </div>
                <div>
                    <h3>
                        Fort Napping
                    </h3>
                </div>
                <div className='flex justify-center'>
                    <p>2600</p>
                    <div className='w-[100px] h-[100px] mx-auto'
                        style={{
                            backgroundImage: `url(${gnuen})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                    </div>
                    <p>Glostrup</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome