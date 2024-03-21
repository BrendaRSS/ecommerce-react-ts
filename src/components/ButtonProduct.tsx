import styled from "styled-components"

interface ButtonProductProps {
    text: string,
    onclick: () => void
}

export default function ButtonProduct({ text, onclick } : ButtonProductProps){
    return <Button onClick={onclick}>{text}</Button>;
}

const Button = styled.button`
    width: 90%;
    height: 30px;
    margin-top: 10px;
    background-color: transparent;
    border: 1px solid #ccc;
    color: #6d6565;
    cursor: pointer;
    transition: all 0.2s;
    &:hover{
        border-radius: 10px;
        background-color: #ccc;
    }
`;