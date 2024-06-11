import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const ResponseImage = ({responseImage}) => {
    const [images, setimages] = useState([])
    useEffect(() => {
      setimages(responseImage)
    }, [responseImage])
    
  return (
    <>
        {
        images.map((imageURL)=>{
                    return(
                        <div className='h-[150px] w-[200px] overflow-hidden grid place-content-center bg-gray-200' key={imageURL}>
                            <Image src={imageURL} alt="room in sale" height={150} width={200} />
                        </div>
                    )
                })
            }
    </>
  )
}

export default ResponseImage