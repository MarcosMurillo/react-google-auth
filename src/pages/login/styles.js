import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  min-height: 100%;
  padding: 20px 0;
  background: #1d1a24;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 940px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: #fff;
    max-width: 250px;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 315px;

    input {
      margin-bottom: 15px;
      padding-left: 20px;
      border: 0;
      border-radius: 4px;
      height: 50px;
      font-size: 18px;
      color: #fff;
      background: rgba(47, 46, 48, 0.4);

      &::placeholder {
        color: rgba(255, 255, 255, 0.5);
        font-size: 18px;
      }
    }

    span {
      color: #e5556e;
      padding-bottom: 10px;
    }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      margin-bottom: 20px;
      background: #7159c1;
      border: 0;
      border-radius: 4px;
      height: 50px;
      color: #fff;
      font-size: 18px;
      font-weight: bold;
      transition: background 0.2s;

      &:hover:not([disabled]) {
        background: ${darken(0.08, '#7159c1')};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      .google-account {
        margin-right: 1rem;
      }
    }
  }

  a {
    font-size: 16px;
    font-weight: bold;
    color: rgba(255, 255, 255, 0.6);
    transition: color 0.2s;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
    }
  }
`;
