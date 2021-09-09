import styled from "styled-components";
import illustrationImg from "../assets/images/illustration.svg";
import logoImg from "../assets/images/logo.svg";
import { Button } from "../components/Button";

export function NewRoom() {
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
          <h2>Criar uma nova sala</h2>
          <form action="">
            <input type="text" placeholder="Nome da Sala" />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <a href="##">Clique Aqui</a>{" "}
          </p>
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

    h2 {
      font-size: 24px;
      margin: 64px 0px 24px;
      font-family: "Poppins", sans-serif;
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
    p {
      font-size: 14px;
      color: #737380;
      margin-top: 16px;
      a {
        color: #e559f9;
      }
    }
  `,
};
