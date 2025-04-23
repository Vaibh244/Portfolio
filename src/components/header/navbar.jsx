import React from 'react'

export default function navbar() {
  return (
    <div>

        <div className="parent flex justify-between items-center p-6 text-2xl text-white font-bold font-baloo">
            <div className="left cursor-pointer">
                <p>Vaibhav</p>

            </div>
            <div className="right ">
                <ul className='flex gap-6 cursor-pointer text-lg '>
                    <li className='inline-block hover:bg-[#61529e] hover:text-[#181132] px-4 py-2'>Home</li>
                    <li className='inline-block hover:bg-[#61529e] hover:text-[#181132] px-4 py-2'>About</li>
                    <li className='inline-block hover:bg-[#61529e] hover:text-[#181132] px-4 py-2'>Skills</li>
                    <li className='inline-block hover:bg-[#61529e] hover:text-[#181132] px-4 py-2'>Projects</li>
                    <li className='inline-block hover:bg-[#61529e] hover:text-[#181132] px-4 py-2'>Contact</li>
                </ul>

            </div>
        </div>
      
    </div>
  )
}
