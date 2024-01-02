import React, {Suspense} from 'react'
import {useImage} from 'react-image'

 function MyImageComponent() {
  const {src} = useImage({
    srcList: '/assets/images/untitled.png',
  })

  return <img className='rounded-2xl ' src={src} />
}
export default function MyComponent() {
    return (
      <Suspense>
        <MyImageComponent />
      </Suspense>
    )
  }
  