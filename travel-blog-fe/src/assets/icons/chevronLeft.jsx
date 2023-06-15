import React from 'react'

export default function ChevronLeft(props) {
  return (
    <svg onClick={props.onClick} className='w-6 flex-shrink-0 opacity-50 hover:opacity-100' fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
</svg>
  )
}
