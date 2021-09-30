import styled from 'styled-components'

export const CartItemsWrapper = styled.div`
display: flex;
justify-content: space-around;
padding: 0px 12px;
margin-bottom: 15px;
margin-top: 10px;
p {
    font-weight: bold;
    display: inline-block;
    width: 105px;
    text-align: left;
}

i {
    margin: 0px;
}

input {
    width: 18px;
    margin: 0px;
    font-weight: bold;
    border: 1px solid black;
    border-radius: 2px;
    padding: 0px 4px;
    color: #e31837;
    background-color: white;
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



button {
    height:18px;
    width:18px;
    background-color: #444;
    color: white;
    cursor: pointer;
    border: 1px solid black;
    border-radius: 4px;
    font-weight: bold;
    box-shadow: 0 0 3px black;
}

#deleteBtn {
    background-color: #e31837;
    color: #fff;
}

span {
    font-size: 1rem;

    i {
        font-size: 0.6rem;
        font-weight: bold;
    }
}
`