import styled from "styled-components";
import googleIcon from "../assets/images/google-icon.svg";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";

export function Home() {
  return (
    <S.Content>
      <aside>
        <img src={illustrationImg} alt="Ilustração" />
        <strong>Crie sala de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo real</p>
      </aside>
      <main>
        <S.MainContent>
          <img src={logoImg} alt="Letmeask" />
          <S.ButtonCreateRoom>
            <img src={googleIcon} alt="Logo do google" />
            Crie sua sala com o google
          </S.ButtonCreateRoom>
          <S.Separator>ou entre em uma sala</S.Separator>
          <form action="">
            <input type="text" placeholder="digite o código da sala" />
            <Button type="submit">Entrar na sala</Button>
          </form>
        </S.MainContent>
      </main>
    </S.Content>
  );
}

export const S = {
  Content: styled.div`
    display: flex;
    align-items: stretch;
    height: 100vh;
    aside {
      flex: 7;
      background: #835afd;
      color: #fff;

      display: flex;
      flex-direction: column;
      justify-content: center;

      padding: 120px 80px;

      img {
        max-width: 320px;
      }

      strong {
        font: 700 36px "Poppins", sans-serif;
        line-height: 42px;
        margin-top: 16px;
      }
      p {
        font-size: 24px;
        line-height: 32px;
        margin-top: 16px;
        color: #f8f8f8;
      }
    }
    main {
      flex: 8;
      padding: 0 32px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `,
  MainContent: styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background: #fff;
        border: 1px solid #a8a8b3;
      }
      button {
        margin-top: 16px;
      }

      button,
      input {
        width: 100%;
      }
    }
  `,
  ButtonCreateRoom: styled.button`
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    background: #ea4335;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;

    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  `,
  Separator: styled.div`
    font-size: 14px;
    color: #a8a8b3;
    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 16px;
    }
    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background: #a8a8b3;
      margin-left: 16px;
    }
  `,
};
