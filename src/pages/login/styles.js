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

export const Text = styled.span`
  color: #fafafa;
  font-size: 30px;
  font-weight: bold;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 940px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #7159c1;
    border: 0;
    border-radius: 4px;
    color:#fafafa;
    font-size: 18px;
    font-weight: bold;
    width: 200px;
    height: 50px;

    &:hover:not([disabled]) {
      background: ${darken(0.08, '#7159c1')};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon{
      margin-right: 1rem;
    }
   }
  }
`;

export const Line = styled.div`
  width: 200px;
  border-bottom: 1px solid #ddd;
  margin-top: 20px;
  margin-bottom: 20px;
`;
