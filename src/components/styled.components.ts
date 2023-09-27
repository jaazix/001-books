import styled from 'styled-components';

interface IProps {
    height?: number;
}

export const Flex = styled.div<IProps>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

export const Container = styled.div<IProps>`
    height: ${(props) => props.height}vh;
    width: 100%;
    background-color: red;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;
