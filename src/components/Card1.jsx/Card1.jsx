import React from 'react'

function Card1({img, p, p2, p3, btn, h1}) {
  return (
    <div>
       <aside>
            <img src={img} alt="" />
            <div className='bg-[#0A223D] py-[26px] lg:w-[350px] px-[24px] text-white text-[18px] dark:bg-[#1e1e1f]'>
              <h1>{h1}</h1>
              <p className='text-[14px] flex items-center gap-[10px] pt-[20px]'><img src="src/assets/main/map-pin.png" alt="" />{p}</p>
              <p className='text-[14px] flex items-center gap-[10px] pt-[20px]'><img src="src/assets/main/user.png" alt="" />{p2}</p>
              <p className='text-[14px] flex items-center gap-[10px] pt-[20px]'><img src="src/assets/main/Vector (7).png" alt="" />{p3}</p>
              <p className='flex items-center justify-between pt-[20px] text-[22px]'>$ 8,500 <button className='bg-[red] text-[18px] text-white py-[10px] px-[26px] rounded-[5px]'>{btn}</button></p>
            </div>

          </aside>
    </div>
  )
}

export default Card1
