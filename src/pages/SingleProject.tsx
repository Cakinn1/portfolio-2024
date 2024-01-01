import React from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProject() {
    const {id} = useParams()
  return (
    <div className='text-white'>SingleProject</div>
  )
}
