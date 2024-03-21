import { useNavigate } from "react-router-dom";
import styled from "styled-components"

interface ButtonProps{
    text: string;
    path: string
}

export default function Button({text, path} : ButtonProps){
  const navigate = useNavigate();

  function switchPage(){
    navigate(path);
  }

    return (
      <ButtonComponent onClick={switchPage}>
        {text}
      </ButtonComponent>
    );
}

const ButtonComponent = styled.button`
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #ac3e3e;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    background-color: #ac3e3e;
    color: #ffffff;
  }
`;