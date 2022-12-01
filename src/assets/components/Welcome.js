import React from 'react'
import gnuLogo from '../img/logosmall.png'
import gnuen from '../img/gnuen.png'

const Welcome = () => {
    return (
        <div className='pt-10 md:pt-7 lg:pt-4 xl:pt-2'>
            <div className='text-center md:text-center lg:text-center xl:text-center'>
                <h1 className='h1Welcome'>
                    Klan Selvdød Gnu
                </h1>
            </div>
            <div className=' w-[250px] h-[150px] mx-auto md:w-[550px] md:h-[350px] lg:w-[600px] lg:h-[400px]'
                style={{
                    backgroundImage: `url(${gnuLogo})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }
                }
            >
            </div>
            <div className='text-center p-10'>
                <div className='mx-auto'>
                    <div>
                        <h2 className='h2Welcome xl:text-[70px] xl:font-bold'>
                            OUTPOST
                        </h2>
                    </div>
                    <div>
                        <h3 className='h3Welcome xl:text-[60px] xl:font-normal'>
                            Fort Napping
                        </h3>
                    </div>
                </div>
                <div className='flex justify-center pt-10 md:pt-7 lg:pt-4 xl:pt-2'>
                    <p className='pWelcome ml-3 pt-5 md:pt-10 lg:pt-15 xl:pt-20'>2600</p>
                    <div className='w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[150px] lg:h-[150px]'
                        style={{
                            backgroundImage: `url(${gnuen})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                    </div>
                    <p className='pWelcome mr-15 pt-5 md:pt-10 lg:pt-15 xl:pt-20'>Glostrup</p>
                </div>
            </div>
        </div>
    )
}

export default Welcome