import React from 'react'

const Reset = ({resetgame}) => {
  return (
    <div>

    <button className='bg-[#4c1d95] rounded-[12px] border-white border-[3px] px-[35px] py-[34px] w-[300px] text-3xl text-white shadow-lg font-bold hover:text-black active:translate-y-1' id="resetbutton" onClick={resetgame}>RESET</button>
    </div>
  )
}

export default Reset