import { UserButton } from '@clerk/nextjs'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <div className='flex justify-between px-5 py-3 bg-slate-400 items-center'>
        <div>Header</div>
        <div><UserButton/></div>
    </div>
  )
}

export default Header