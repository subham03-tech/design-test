import React from 'react'

function Herosection() {
  return (
    <div className="bg-white h-[76vh] flex">
      <div className=" w-100 ml-15 h-100 pt-15 border border-amber-950" >
        <img className="mt-22 pl-5" src="NAME.png " />
        <h3 className="text-[#00000099] text-3xl px-5 font ">Unleash your phonky style Stand out Be <span className="text-4x1 text-[#FF7F3E] font-bold">bold.</span></h3>
        <button className='text-amber-50 bg-[#FF7F3E] rounded-xl pl-8 ml-7 text-center w-30 h-10 pr-6 mt-5 flex pt-3'>Explore <img className="h-5 w-5 " src="Vector.png" /></button>
        </div>
        <div className="w-100 h-100 ml-130">
        <img className="h-100 mt-27"src="man.png"/>
        </div>
    </div>
  )
}

export default Herosection
