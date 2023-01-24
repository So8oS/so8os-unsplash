import React from 'react'
import { useAtom } from 'jotai'
import { modalAtom, imageObjectAtom } from '../global-states/atoms'

const Modal = () => {
    const [modal, setModal] = useAtom(modalAtom);
    const [linksArray, setLinksArray] = useAtom(imageObjectAtom);
    const [url, setUrl] = React.useState<string>('');
    const [desc, setDesc] = React.useState<string>('');


  return (
    <div  onClick={() => {
        setModal(false)
    }} className='w-full h-full justify-center items-center flex bg-black/40 absolute z-10 inset-0 border border-gray-400'>
    <div onClick={(e) => {
        e.stopPropagation()

    }} className='bg-white w-[20rem]  md:w-[38.75rem] h-[23rem] flex flex-col  justify-center items-center gap-4 px-10 rounded-xl'>
        <span className='text-2xl font-semibold' >Add a photo</span>
        <label className='self-start  text-xs font-semibold' htmlFor="name">Label</label>
        <input  onChange={(e) => {
            setDesc(e.target.value)
        }}  className='w-[17rem]  md:w-[34.5rem] border border-gray-200 rounded-xl p-2' type="text" placeholder='Enter Name' />
        <label className='self-start text-xs font-semibold' htmlFor="Photo URL">Photo URL</label>
        <input 
            onChange={(e) => {
                setUrl(e.target.value)
            }}

         className='w-[17rem]  md:w-[34.5rem] border border-gray-200 rounded-xl p-2' type="text" placeholder='Enter Link'/>
        <div className='flex gap-4 self-end mt-3'>
            <button onClick={() => {setModal(false)}} className='bg-red-500 rounded-xl w-[7rem]  md:w-[9.5rem] text-white  p-2' > Cancel </button>
            <button disabled={
                // disabled if url is empty or description is empty
                desc.length === 0 || url.length === 0 || !url.includes(`unsplash.com`) || !url.includes(`https://`)
            } onClick={() => {
                setModal(false)
                setLinksArray((prev) => [...prev, {
                    url: url,
                    description: desc
                }])
            }} className='bg-[#3DB46D] rounded-xl w-[7rem]  md:w-[9.5rem] text-white  p-2 disabled:bg-gray-400 disabled:cursor-not-allowed'  > Add a photo </button>
        </div>



    </div>
    </div>
  )
}

export default Modal