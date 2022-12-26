import styled from 'styled-components';

export const List = styled.ul`
display: flex;
flex-direction: column;
gap: 5px;
`;

export const Item = styled.li`
display: flex;
align-items: center;
gap: 10px;

color: #2a2a2a;
`;

export const Wrap = styled.span`
font-size: 18px;
color: ${({children}) => {
        if (children[0] === 0) {
            return "#c21010";
        }
        if (children[0] > 0 && children[0] < 90) {
            return "darkblue";
        }
        if (children[0] >= 90) {
            return "#285430";
        }
    return "#000000";
}};
`;
