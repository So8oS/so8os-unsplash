import React from 'react'
import { imageObjectAtom } from '../global-states/atoms'
import { useAtom } from 'jotai'

const PhotosList = () => {
const [imageObject,setImageObject] = useAtom(imageObjectAtom);
  return (
    <div className='p-4 columns-3  md:columns-2' >
        {
            imageObject.map((link, index) => {
                return <div  key={index} className='flex flex-col w-80 items-center  relative gap aspect-auto'>
                <img key={index} className='w-80  rounded-xl aspect-auto ' src={link.url} alt="" />
                <div 
                className='absolute inset-0 hover:bg-black/40 rounded-xl flex flex-col gap-3 justify-between  p-2  opacity-0 hover:opacity-100 duration-300 transition-all '>
                <button onClick={() => {
                    setImageObject((prev) => prev.filter((_,i) => i !== index))
                }} className='bg-transparent border border-red-500 self-end rounded-xl text-sm text-red-500  p-2' >Delete</button>
                <span className='text-gray-200' >{link.description}</span>
                </div>

                </div>
            })
        }
    </div>
  )
}

export default PhotosList