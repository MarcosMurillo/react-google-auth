import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  min-height: 100%;
  padding: 20px 0;
  background: #1d1a24;
  display: flex;
  flex-direction: column;
`;

export const Text = styled.span`
  color: ${({ color }) => (color ? color : '#fafafa')};
  font-size: 30px;
  font-weight: bold;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 20px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #7159c1 !important;
    border: 0;
    border-radius: 4px;
    height: 50px;
    color: #fafafa !important;
    font-size: 18px;
    font-weight: bold;
    width: 200px;

    &:hover:not([disabled]) {
      background: ${darken(0.08, '#7159c1')};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .icon {
      margin-right: 1rem;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  width: 100%;
  height: 100%;
  padding: 0px 20px 0 20px;
`;

export const User = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  width: 450px;
  height: 350px;
  border-radius: 10px;
  background-color: #fafafa;

  img {
    margin-bottom: 20px;
    border-radius: 50%;
  }

  span {
    font-size: 20px;
    color: #b5b5b5;
    margin-bottom: 10px;
    font-weight: bold;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #7159c1 !important;
    border: 0;
    border-radius: 4px;
    height: 50px;
    color: #fafafa !important;
    font-size: 18px;
    font-weight: bold;
    width: 200px;
    margin-top: 10px;

    &:hover:not([disabled]) {
      background: ${darken(0.08, '#7159c1')};
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`;

export const Link = styled.a`
  color: #fafafa;
  font-weight: bold;
`;

export const Project = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  margin-left: 20px;
  width: 700px;
  height: 100%;
  border-radius: 10px;
  background-color: #fafafa;
  text-align: justify;
  padding: 20px;

  p {
    font-size: 20px;
    color: #b5b5b5;
    margin: 10px 0px 10px 0px;
    font-weight: bold;
    max-width: 650px;
  }
`;

export const Line = styled.div`
  width: 350px;
  border-bottom: 1px solid #b5b5b5;
  margin-top: 20px;
  margin-bottom: 20px;
`;
