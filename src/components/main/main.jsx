import React, { useState } from 'react'
import {MdVerified} from 'react-icons/md'
import {FaTwitter} from 'react-icons/fa'

const style = {
    banner:'bg-[url(https://lh3.googleusercontent.com/Wx7ewVF5a_qlNvefpnBhY5SbDn2c7sXsVCUU9PMYI4MyEjUcp1YHzjcAQj3sFsk5y0rRAS3Kf4ZmW1GteioLWd3WObZWPOzLRpQ4CMw=h600)] bg-no-repeat bg-center bg-cover w-full h-[180px]',
    Wrapper: 'w-full flex flex-col items-center',
    img: 'rounded-full border-2',
    title: 'text-[42px] font-Poppins font-semibold leading-[] w-[100%] border',
    bttn:'rounded-[30px] flex items-center justify-between py-[15px] px-[15px] border-1 w-[230px] mt-4 font-Poppins font-semibold hover:text-black hover:shadow-lg',
    boxWrap: 'w-[600px] h-[100px] border-1 mt-4 rounded-xl items-center flex flex-wrap',
    boxTitle: 'font-Poppins font-semibold',
    boxsubtitle: 'text-sm text-gray-500',
    box: 'flex flex-col items-center border-r w-[150px]',
    boxl: 'flex items-center flex-col w-[140px]'
}

const Main = () => {
    const [count, setCount] = useState(9.6)
  return (
    <div className={style.Wrapper}>
        <div className={style.banner}></div>
        <div className='mt-[-62px]'> <img  className={style.img} src="https://lh3.googleusercontent.com/lgtTOxFxyk-IpOEZSbanzXxvnmtE2x1EhAvd79xCEzn7GkDJ3sAt7CzZNukX7u9cfR4dyy-eLiYfLc2W81iS6YS3CLj8w7hwtGvZxA=s130" alt="User" /></div>
        <div className='flex text-center justify-center w-[100%] mt-3'><h1 className={style.title}>Psychedelics Anonymous <br /> Genesis</h1></div>
        <div className='w-full items-center justify-center  flex mt-3'><p className='w-full justify-center flex items-center'>Created by 
        <a className='text-blue-600 ml-2 mr-2' href="https://opensea.io/Psychedelics-Anonymous?tab=created">Psychedelics-Anonymous</a>
        <MdVerified className='text-blue-500'/>
        </p> 
        </div>
        <div>
            <a className={style.bttn} href='https://twitter.com/psychedelic_nft'><FaTwitter className='text-blue-500 w-6 h-6'/> psychedelic_nft 
            <span className='text-[12px] text-gray-500'>Linked</span></a>
        </div>
        <div className='w-[90%] border flex  items-center justify-center'>
        <div className={style.boxWrap}>
            <div className={style.box}>
                <div className={style.boxTitle}>{count}K</div>
                <div className={style.boxsubtitle}>items</div>
            </div>
            <div className={style.box}>
                <div className={style.boxTitle}>{count}K</div>
                <div className={style.boxsubtitle}>items</div>
            </div>
            <div className={style.box}>
                <div className={style.boxTitle}>{count}K</div>
                <div className={style.boxsubtitle}>items</div>
            </div>
            <div className={style.boxl}>
                <div className={style.boxTitle}>{count}K</div>
                <div className={style.boxsubtitle}>items</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main