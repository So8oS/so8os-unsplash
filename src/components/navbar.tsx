import { useAtom } from 'jotai'
import React from 'react'
import {BiSearchAlt2} from 'react-icons/bi'
import { modalAtom } from '../global-states/atoms'

const Navbar = () => {
const [_modal, setModal] = useAtom(modalAtom)

  return (
    <div className=' flex justify-between  p-4' >
        <div className='flex items-center space-x-3  '>
            <img className='w-32  md:w-40 ' src="/image.svg" alt="Logo" />
            {/* <div  className='w-[19rem] h-14 border-[1px] border-solid border-[#BDBDBD] rounded-xl flex items-center gap-3 pl-2' >
           <BiSearchAlt2 className='text-gray-500' />
           <input className='outline-none' type="search" placeholder='Search by name' />
            </div> */}
        </div>
        <button onClick={() => setModal(true)}
        className='  h-9 p-2 bg-[#3DB46D] rounded-lg items-center content-center text-sm text-white md:w-[9.5rem]  ' > Add a photo </button>
    </div>
  )
}

export default Navbar