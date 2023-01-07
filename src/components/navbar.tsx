import { useAtom } from 'jotai'
import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import { modalAtom } from '../global-states/atoms'

const Navbar = () => {
const [_modal, setModal] = useAtom(modalAtom)

  return (
    <div className=' flex justify-between mx-6 p-4' >
        <div className='flex items-center space-x-3  '>
            <img src="/image.svg" alt="Logo" />
            <div  className='w-[19rem] h-14 border-[1px] border-solid border-[#BDBDBD] rounded-xl flex items-center gap-3 pl-2' >
           <BiSearchAlt2 className='text-gray-500' />
           <input className='outline-none' type="search" placeholder='Search by name' />
            </div>
        </div>
        <button onClick={() => setModal(true)}
        className='bg-[#3DB46D] rounded-xl w-[9.5rem] text-white ' > Add a photo </button>
    </div>
  )
}

export default Navbar