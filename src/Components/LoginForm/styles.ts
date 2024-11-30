import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60vh;
    height: 60vh;
    background-color: #f5f5f5;
`;

export const Input = styled.input`
    width: 300px;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
`;

export const Button = styled.button`
    width: 320px;
    padding: 10px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`;

export const ErrorMessage = styled.p`
    color: red;
    font-size: 12px;
    margin: 0 0 10px 0;
`;
