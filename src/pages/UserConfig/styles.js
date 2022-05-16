import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    width: 400px;
    margin-top: 30px;

`;
export const InputGroup = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items:flex-start;
    
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