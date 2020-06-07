import styled, { keyframes } from 'styled-components'

const intro = keyframes`
    0% {
        opacity: 0;
        transform: translateY(20px);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const Content = styled.main`
    align-items: center;
    display: flex;
    height: 100vh;
    min-height: -webkit-fill-available; /* Fix for iOS 100vh bug */
`;

export const Title = styled.h1`
    animation: ${intro} 0.5s ease-in-out 0.5s 1 normal forwards running;
    font-size: 5vmax;
    font-weight: 400;
    line-height: 1.2;
    margin: 0;
    opacity: 0;
    text-transform: uppercase;
`

export const Footer = styled.footer`
    align-items: flex-end;
    bottom: 25px;
    display: flex;
    position: fixed;
    right: 25px;
`;

export const FooterLink = styled.a`
    transform: translateY(0);
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: translateY(-2px);
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
