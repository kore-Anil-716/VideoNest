import React from 'react';
import noresultsfound from '../../public/Assets/R.gif'

const Nopagefound = () => {
  return (
    <div className='w-full h-full'>
      <img className='w-full h-[100vh] -mt-[10vh] object-cover' src={noresultsfound} alt='error' />
    </div>
  )
}

export default Nopagefound
