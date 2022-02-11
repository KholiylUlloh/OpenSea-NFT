import React from 'react'
import { InputWrap, Items, ItemWrap, Link, LinkWrap, Logo, LogoWrap, Wrapper } from './style'
import {HiOutlineUserCircle} from 'react-icons/hi'
import {MdOutlineAccountBalanceWallet} from 'react-icons/md'
import {MdOutlineMenu} from 'react-icons/md'
import {MdOutlineSearch} from 'react-icons/md'
import links from '../../mock/openseamock'
import { useLocation } from 'react-router-dom'


const Navbar = () => {
   const location = useLocation()
  return (
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
                    <HiOutlineUserCircle className=' text-gray-700  hover:text-black cursor-pointer mr-6'  style={{width:'32px', height:'32px'}}/>
                    <MdOutlineAccountBalanceWallet className=' text-gray-700  hover:text-black cursor-pointer' style={{width:'32px', height:'32px'}}/>
                    <MdOutlineMenu className='w-[2rem] h-[2rem] hidden text-gray-700  hover:text-black cursor-pointer'/>
            </ItemWrap>
        </Wrapper>
  )
}

export default Navbar