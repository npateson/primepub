import styled from 'styled-components'

export const CartItemsWrapper = styled.div`
display: flex;
justify-content: space-around;
padding: 0px 12px;
margin-bottom: 12px;

p {
    font-weight: bold;
}

i {
    margin: 0px;
}

b {
    margin: 0px;
    border: 1px solid black;
    border-radius: 2px;
    padding: 0px 3px;
    color: #e31837;
    background-color: white;
    box-shadow: 0 0 3px black;
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


`