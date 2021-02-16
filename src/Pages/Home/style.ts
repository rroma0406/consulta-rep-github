import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
`

export const Form = styled.form `
    margin-top: 40px;
    max-width: 700px;
    display: flex;

    input {
        flex: 1;
        height: 70px;
        padding: 0 24px;
        border: 0;
        border-radius: 5px 0 0 5px;

        &::placeholder {
            color: #A8A8B3;
        }
    }

    button {
        width: 200px;
        height: 70px;
        background: #00D26A;
        border-radius: 0 5px 5px 0;
        border: 0;
        color: #FFF;
        font-weight: bold;
        transition: 0.5s;

        &:hover {
            transition: 0.5s;
            background: ${shade(0.1, '#00D26A')};
        }
    }
`

export const Repositories = styled.div `
    margin-top: 80px;
    max-width: 700px;

    a {
        background: #FFF;
        border-radius: 5px;
        width: 100%;
        padding: 24px;
        display: flex;
        text-decoration: none;
        align-items: center;
        transition: 0.5s;

        &:hover {
            transform: translateX(10px);
            transition: 0.5s;
        }

        & + a {
            margin-top: 18px;
        }

        img {
            width: 65px;
            height: 65px;
            border-radius: 50%;
        }
        
        div {
            margin-left: 16px;

            strong {
                font-size: 20px;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                color: #CBCBD6;
            }
        }

        svg {
            margin-left: auto;
            color: #CBCBD6;
        }
    }
`