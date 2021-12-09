import styled from 'styled-components';

export const StyledInput = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%; 
height: 50px;
justify-content: center;
margin: 15px 0;
// font-weight: bold;
color: #7E7F79;
font-size: 16px;
font-family: Arial, sans-serif;



.error{
    min-width: 90%;
    display: block;
    min-height: 15px;
    height: 15px;
    // background-color: yellow;
    font-size: 12px;
    color: red;
    text-align:center;
}

div{
    display: flex;
    justify-content: flex-start;
    height: 30px;
    label{
        // height: 26.8px;
        text-align: start;
        text-transform: uppercase;
    }
}

div{
    // justify-content:center;
    width: 90%;
    min-width: 90%;
    height: 33.11px;
    input{
        background-color: #11ffee00;
        // border: 0;
        border-radius: 0;
        // border-bottom: 2px solid #d3d3d3;
    }
    input: active { 
        // decoration: none;
        // border: 0;
        // border-bottom: 0;
    }
    .ant-input-borderless, .ant-input-borderless:hover, .ant-input-borderless:focus, .ant-input-borderless-focused, .ant-input-borderless-disabled, .ant-input-borderless[disabled]{
        border-bottom: 2px solid #d3d3d3;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px white inset;
}
}
`



