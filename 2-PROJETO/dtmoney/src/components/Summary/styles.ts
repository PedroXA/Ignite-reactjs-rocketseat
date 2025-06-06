import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div{
        background-color: rgb(239, 239, 239, 0.99);
        padding: 2.5rem 2rem;
        border-radius: 0.25rem;
    }

    header{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    strong{
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }

    .highlight-background{
        background: var(--secundary-green);
        color: white;
    }
`