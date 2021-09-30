import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

export const SideBarContainer = styled.aside`
position: fixed;
z-index: 9999999;
width: 380px;
height: 100%;
background: #ffc500;
display: grid;
align-items: center;
top: 0;
transition: 0.3s ease-in-out;
// right: 0px;
right: ${({isSubmit}) => (isSubmit ? "0px" : "-1000px")};

@media screen and (max-width: 400px) {
    width: 100%;
}
`

export const CloseIcon = styled(FaTimes)`
color: #000;
`

export const Icon = styled.div`
// transform: translateY(-90px);
position: relative;
// float: right;
margin-left: 340px;
// margin-top: 25px;
top: 0.5rem;
bottom: 1.2rem;
// right: 1.5rem;
background: transparent;
border: transparent;
font-size: 2rem;
cursor: pointer;
// outline: none;
`


export const SideBarMenu = styled.div`
text-align: center;

label {
    display: block;
    font-weight: bold;
    font-size: 1.3rem;
    margin-bottom: 5px;
}

input {
    width: 70%;
    padding: 5px;
    font-size: 1rem;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0 0 3px black;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}

textarea {
    width: 70%;
    height: 80px;
    padding: 5px;
    font-size: 1rem;
    border-radius: 5px;
    margin-bottom: 20px;
    box-shadow: 0 0 3px black;
}
`

export const SideBarLink = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
font-size: 1.5rem;
text-decoration: none;
list-style: none;
transition: 0.2s ease-in-out;
text-decoration: none;
color: #000;
cursor: pointer;

&:hover {
    color: #e31837;
    transition: 0.2s ease-in-out;
};
`

export const SideBtnWrap = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

export const SideBarRoute = styled(Link)`
background: #e31837;
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration: none;
box-shadow: 0 0 3px black;
font-weight: bold;

&:hover {
    transition: 0.2s ease-in-out;
    background: #fff;
    color: #010606;
}
`

export const ClearCartBtn = styled.button`
background:  #81B214;
white-space: nowrap;
padding: 16px 64px;
color: #fff;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: 0.2s ease-in-out;
text-decoration: none;
box-shadow: 0 0 3px black;
font-weight: bold;
margin-top: 80px;

&:hover {
    transition: 0.2s ease-in-out;
    background: #62760C;
    color: #010606;
}
`