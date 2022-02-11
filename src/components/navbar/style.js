import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
align-items: center;
box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
height: 72px;
padding: 15px 0 15px 20px;
justify-content: space-between;
background-color: rgb(255, 255, 255);
`
export const LogoWrap = styled.div`
display: flex;
width: 100%;
align-items: center;
font-weight: 650;
font-size: 22px;
font-family: 'Poppins', sans-serif;
`
export const Logo = styled.img`
width: 40px;
margin-right: 10px;
`

export const ItemWrap = styled.div`
display: flex;
align-items: center;
margin-right: 20px;
`

export const Items = styled.div`
`

export const InputWrap = styled.div`
margin-left: 20px;
align-items: center;
color: rgb(53, 56, 64);
font-size: 14px;
display: flex;
border: 1px solid rgb(229, 232, 235);
padding: 10px 15px;
border-radius: 8px;
margin-right: 20px;
input{
    border: 1px solid white;
    width: 35vw;
    margin-left: 10px;
    outline: none;
}
:hover{
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
}
`

export const LinkWrap = styled.div`
font-family: 'Poppins';
font-weight: 600;
font-size: 18px;
width: 26vw;
display: flex;
margin-right: 15px;
` 

export const Link = styled(NavLink)`
font-family: 'Poppins';
font-weight: 600;
font-size: 18px;
text-decoration: none;
transition: all .03s;
display: flex;
align-items: center;
color: ${({ active }) => (active ? 'black' : 'rgb(50, 50, 60)')};
  border: 4px solid transparent;
  border-bottom: ${({ active }) => active && '4px solid #2a9df4'};
  margin-right: 35px;
  padding-top: 20px;
  padding-bottom: 20px;
  cursor: pointer;
  transition: all 0.3s;
:hover{
    color: black;
}
`