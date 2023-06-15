import React from 'react'
import BGImg from '../../assets/bg-img.png'
export default function NavCard(props) {
  return (
    <div style={{
        backgroundImage: "url("+BGImg+")",
        backgroundPosition: "center"
    }}
    className='w-80 h-80 flex justify-center items-center rounded mb-5 drop-shadow-md js-show-on-scroll'
    >
      <div className='text-lg text-bold bg-slate-50 px-2 py-1 rounded hover:bg-blue-600 hover:text-white hover:scale-150 transition duration-500'>{props.name}</div>
    </div>
  )
}
