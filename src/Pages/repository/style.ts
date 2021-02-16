import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;
    margin-top: 80px;
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