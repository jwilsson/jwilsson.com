import styled, { keyframes } from 'styled-components';

const fadeSlide = keyframes`
    0% {
        opacity: 0;
        transform: translateY(25px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Wrapper = styled.main`
    align-items: center;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: relative;

    &::after {
        animation: ${fadeIn} 1s ease-in-out 0s 1 normal forwards running;
        background-image: linear-gradient(-40deg, #575366 0%, #6e7dab 50%, #d1e3dd 100%);
        bottom: 0;
        content: '';
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        z-index: 1;
    }
`;

export const Content = styled.section`
    animation: ${fadeSlide} 1s ease-in-out 0s 1 normal forwards running;
    background-color: #ffffff;
    border-radius: 6px;
    box-shadow: 0px 24px 30px 0px #1b364a09;
    margin-left: 5vw;
    margin-right: 5vw;
    padding: 50px 70px;
    position: relative;
    text-align: center;
    z-index: 2;
`;

export const Title = styled.h1`
    color: #6e7dab;
    font-size: 2.5em;
    font-weight: 300;
    line-height: 1.25;
    margin-bottom: 0;
    margin-top: 0;
`;

export const Subtitle = styled.h2`
    color: #6e7dab;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.5;
`;

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    margin-top: 25px;
    padding-top: 25px;
    position: relative;

    &::before {
        background-color: #e4ebf0;
        content: '';
        height: 1px;
        left: 10%;
        position: absolute;
        right: 10%;
        top: 0;
    }
`;

/* Hide labels but not for screen readers */
export const FooterLabel = styled.span`
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;
