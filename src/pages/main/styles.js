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
    color: #fff;
    max-width: 250px;
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 30px;
    text-align: center;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    margin-bottom: 20px;
    background: #7159c1 !important;
    border: 0;
    border-radius: 4px;
    height: 50px;
    color: #fff !important;
    font-size: 18px;
    font-weight: bold;
    transition: background 0.2s;
    width: 200px;

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
