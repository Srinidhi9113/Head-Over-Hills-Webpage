import React from 'react'


export default function NavCard(props) {
  return (
    <div className={props.class}
    >
      <div className='text-lg text-bold bg-slate-50 px-2 py-1 rounded hover:bg-blue-600 hover:text-white hover:scale-150 transition duration-500 cursor-pointer'>{props.name}</div>
    </div>
  )
}
