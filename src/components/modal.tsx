import React from 'react'
import { useAtom } from 'jotai'
import { modalAtom } from '../global-states/atoms'

const Modal = () => {
    const [modal, setModal] = useAtom(modalAtom)
  return (
    <div  onClick={() => {
        setModal(false)
    }} className='w-full h-full justify-center items-center flex bg-black/40 absolute z-10 inset-0 border border-gray-400'>
    <div onClick={(e) => {
        e.stopPropagation()

    }} className='bg-white w-[38.75rem] h-[23rem] flex flex-col  justify-center items-center gap-4 px-10 rounded-xl'>
        <span className='text-2xl font-semibold' >Add a photo</span>
        <label className='self-start  text-xs font-semibold' htmlFor="name">Label</label>
        <input className='w-[34.5rem] border border-gray-200 rounded-xl p-2' type="text" placeholder='Enter Name' />
        <label className='self-start text-xs font-semibold' htmlFor="Photo URL">Photo URL</label>
        <input className='w-[34.5rem] border border-gray-200 rounded-xl p-2' type="text" placeholder='Enter Link'/>
        <div className='flex gap-4 self-end'>
            <button className='bg-red-500 rounded-xl w-[9.5rem] text-white  p-2' > Cancel </button>
            <button className='bg-[#3DB46D] rounded-xl w-[9.5rem] text-white  p-2' > Add a photo </button>
        </div>



    </div>
    </div>
  )
}

export default Modal