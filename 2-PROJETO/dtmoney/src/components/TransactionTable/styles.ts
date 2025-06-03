import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table{
        width: 100%;
        border-spacing: 0 0.5rem;

        th{
            color: rgb(100, 100, 100);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5rem;
        }
        
        td {
            padding: 1rem 2rem;
            border: 0;
            background: rgb(239, 239, 239, 0.99);
            border-radius: 0.25rem;
        }
        
       &.withdraw{
            color: red;
        }

        &.deposit{
            color: var(--secundary-green);
        }
    }

`
