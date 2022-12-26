import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 20px;

  border: 2px solid transparent;
  border-radius: 10px;
  background-color: #ebd8c3;
  color: #2a2a2a;
  fill: #2a2a2a;
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;

  transition: transform 200ms linear, border-color 200ms linear, fill 200ms linear;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
    border: 2px solid;
    border-color: ${({ children }) => {
      switch (children[1]) {
        case 'good':
          return '#285430';
        case 'neutral':
          return '#f49d1a';
        case 'bad':
          return '#c21010';
        default:
          return '#000000';
      }
    }};
    fill: ${({ children }) => {
      switch (children[1]) {
        case 'good':
          return '#285430';
        case 'neutral':
          return '#f49d1a';
        case 'bad':
          return '#c21010';
        default:
          return '#000000';
      }
    }};
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;
