import React from 'react'
import { imageObjectAtom } from '../global-states/atoms'
import { useAtom } from 'jotai'

const PhotosList = () => {
const [imageObject,setImageObject] = useAtom(imageObjectAtom);
  return (
    <div className='mt-4 w-full overflow-scroll columns-4' >
        {
            imageObject.map((link, index) => {
                return <div  key={index} className='w-fit h-fit relative'>
                <img key={index} className='max-w-[25rem]  rounded-xl my-2 aspect-auto ' src={link.url} alt="" />
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