import styled from 'styled-components';
import main from '../../assets/main.png';


export const Container = styled.div`
    width: 500px;
    height: auto;
    display: flex;

    margin-top: 20px;

    background: #fff;
    border-radius: 0px 5px 5px 0px;

    box-shadow: 3px 4px 10px rgba(0, 0, 0, 0.5);

    &:hover{
        transform: translateY(-5px);
    }
`;


export const Img = styled.div`
    flex: 1;
    background: url(${main}) no-repeat center ;
    background-size: cover;
`;

export const Content = styled.div`
    width: 350px;

    margin: 20px 15px ;

    h6 {
        font-weight: 700;
    }

    span {
        font-size: 14px;
        color: #696969;
    }
`;