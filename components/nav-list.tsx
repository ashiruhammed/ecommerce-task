"use client"

import React from 'react'
import NavLink from './nav-link'
import OpenIcon from '@/public/icon/OpenIcon'

function NavList({className}: {className?:string}) {
    const [openList, setOpenList] = React.useState(false)
  return (
        <div className={className}> 
            <OpenIcon className='lg:hidden'/>
            <div className="flex flex-col lg:flex-row gap-4">
            <NavLink>Home</NavLink>
            <NavLink>Shop</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Blog</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Pages</NavLink>
            </div>
        </div>
  )
}

export default NavList