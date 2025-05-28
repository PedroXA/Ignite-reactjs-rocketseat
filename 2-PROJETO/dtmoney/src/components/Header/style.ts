import styled from "styled-components";

export const Container = styled.header`
    background: var(--header-background);
`

export const Content = styled.div`
    display: flex;
    justify-content: space-between;

    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;

    button {
        font-size: 1rem;
        background-color: var(--secundary-green);
        border: none;
        color: #fff;
        padding: 0 2rem;
        border-radius: 0.25rem;

        &:hover{
            filter: brightness(0.9);
            transition-duration: 300ms;
        }
    }
`