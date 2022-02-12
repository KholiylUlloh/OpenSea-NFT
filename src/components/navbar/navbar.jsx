import React from 'react'
import { InputWrap, ItemWrap, Link, Logo, LogoWrap, Wrapper } from './style'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
import {MdOutlineMenu} from 'react-icons/md'
import {MdOutlineSearch} from 'react-icons/md'
import { Outlet, useLocation } from 'react-router-dom'


const Navbar = () => {
   const location = useLocation()
  return (
      <>
        <Wrapper>
            <LogoWrap>
                <Logo src={'https://opensea.io/static/images/logos/opensea.svg'}/>
                OpenSea
            </LogoWrap>
            <ItemWrap>
                <InputWrap>
                    <MdOutlineSearch className='w-[1.5rem] h-[1.5rem] fill-gray-500'/>
                    <input type="text" placeholder='Search items, collections and accounts'/>
                </InputWrap>
                    <Link to={'/explore'} className="text-gray-700" active={location.pathname.includes('/explore') ? 'active' : null} >Explore</Link>
                    <Link to={'/stats'} className="text-gray-700" active={location.pathname.includes('/stats') ? 'active' : null} >Stats</Link>
                    <Link to={'/resources'} className="text-gray-700" active={location.pathname.includes('/resources') ? 'active' : null} >Resources</Link>
                    <Link to={'/create'} className="text-gray-700" active={location.pathname.includes('/create') ? 'active' : null} >Create</Link>
                <div className='flex justify-between'>
                    <HiOutlineUserCircle className=' text-gray-700  hover:text-black cursor-pointer ml-3 mr-4'  style={{width:'32px', height:'32px'}}/>
                    <MdOutlineAccountBalanceWallet className=' text-gray-700  hover:text-black cursor-pointer ml-4' style={{width:'32px', height:'32px'}}/>
                    <MdOutlineMenu className='w-[2rem] h-[2rem] hidden text-gray-700  hover:text-black cursor-pointer ml-4'/>
                </div>
            </ItemWrap>
        </Wrapper>
        <Outlet />
        </>
  )
}

export default Navbar