import styled from 'styled-components';
import main from '../../assets/main.png';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
`;

export const ImgBackground = styled.div`
    flex: 1;
    background: url(${main}) no-repeat center;
    background-size:cover;
`;

export const Content = styled.div`
    width: 1100px;
    padding: 10px;
    
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
`;

export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items:flex-start;
    justify-content: center;
    
    label {
        width: 100%;
        font-size: 14px;
        margin-bottom: 5px;
    }
    
    input {
        width: 100%;
        height: 30px;
        border: 1px solid #aaa;
        border-radius: 5px;
        font-size: 12px;

        padding: 10px;
    }

    :first-of-type {
    margin-bottom: 10px;
    }
`;


