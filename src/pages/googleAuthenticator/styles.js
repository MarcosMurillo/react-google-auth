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

  span {
    color: #fafafa;
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  iframe {
    align-items: center;
    border: 0;
    width: 320px;
    height: 320px;
  }

  input {
    padding: 20px;
    border: 0;
    border-radius: 4px;
    width: 320px;
    height: 50px;
    font-size: 18px;
    color: #fafafa;
    background: rgba(47, 46, 48, 0.4);
    text-align: center;
    margin-top: 10px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
      font-size: 18px;
    }
  }

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      margin-bottom: 20px;
      background: #7159c1 !important;
      border: 0;
      border-radius: 4px;
      height: 50px;
      color: #fafafa !important;
      font-size: 18px;
      font-weight: bold;
      transition: background 0.2s;
      width: 320px;

      &:hover:not([disabled]) {
        background: ${darken(0.08, '#7159c1')};
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }
    }
  }
`;
