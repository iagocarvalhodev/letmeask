import { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return <S.Button {...props} />;
}

export const S = {
  Button: styled.button`
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    background: #835afd;
    color: #fff;
    padding: 0 32px;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:not(:disabled):hover {
      filter: brightness(0.9);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  `,

  // 42:53
};
