import React from 'react'


interface Props {
    icon: React.ReactNode;
    title: string;
    text: string;
}


export const MiniCard = ({ icon, title, text }:Props) => {
  return (
    <div className='bg-white shadow-md rounded-2xl p-4 flex flex-col items-center text-center gap-2 hover:shadow-lg transition'>
        <div className='text-[#2ecc71]'>{ icon }</div>
        <h4 className='font-semibold text-lg'>{ title }</h4>
        <p className='text-gray-600 text-sm'>{ text }</p>
    </div>
  )
}