import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
height: 72px;
padding: 15px 0px 15px 20px;
background-color: rgb(255, 255, 255);
`
export const LogoWrap = styled.div`
display: flex;
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
justify-content: space-between;
width: 75%;
margin-right: 20px;
/* margin-left: 20vw; */
`

export const Items = styled.div`
`

export const InputWrap = styled.div`
align-items: center;
color: rgb(53, 56, 64);
font-size: 16px;
display: flex;
border: 1px solid rgb(229, 232, 235);
padding: 10px 15px;
border-radius: 8px;
input{
    border: 1px solid white;
    width: 38vw;
    margin-left: 10px;
    outline: none;
}
:hover{
    box-shadow: rgb(4 17 29 / 25%) 0px 0px 8px 0px;
}
`


export const Link = styled(NavLink)`
font-family: 'Poppins';
font-weight: 600;
font-size: 16px;
text-decoration: none;
transition: all .03s;
display: flex;
align-items: center;
color: ${({ active }) => (active ? 'black' : 'rgb(50, 50, 60)')};
  border: 4px solid transparent;
  border-bottom: ${({ active }) => active && '4px solid #2a9df4'};
  /* margin-right: 35px; */
  padding: 20px 10px 20px 10px;
  cursor: pointer;
  transition: all 0.3s;
:hover{
    color: black;
}
`