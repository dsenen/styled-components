import styled from "styled-components";

export const Flex = styled.div`
    display: flex;
    align-items: center;

    & > div,
    & > ul {
        flex: 1;
    }
    
    & > div > p > a {
        text-decoration: none; 
    }

    & > div > p > a:hover {
        text-decoration: underline; 
    }

    @media(max-width: ${({ theme }) => theme.mobile}) {
        flex-direction: column;
        text-align: center;
    }
`