import styled from 'styled-components';

export const StyledForm = styled.div`
height: 500px;
width: 400px;
border: 1px;
// background-color: yellow;
border-radius: 15px;
border: 2px solid #d3d3d3;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
`

export const StyledFormHeader = styled.div`
height: 48px;
h1{
    color: #82a4b8;
}
`

export const StyledFormMain = styled.div`
height: 410px;

`

export const StyledSelect = styled.div`
width: 90%;
height: 40px;
border: 1px solid #d3d3d3;
text-align: center;
// font-size: 16px;
// font-family: Arial, sans-serif;
select{
    width: 100%;
    height: 100%;
    border: 0;
}
`

export const StyledDateWrapper = styled.div`
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .error{
        height: 20px;
        color: red;
    }
    h3{
        margin-bottom:0;
    }
`

export const StyledRadioWrapper = styled.div`
    margin-top: 15px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: flex-start;
    .error{
        height: 20px;
        min-height: 20px;
        color: red;
    }
    h3{
        margin-bottom:0;
        height: 40px;
    }
`

export const StyledSelectWrapper = styled.div`
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .error{
        height: 20px;
        color: red;
    }
    h3{
        margin-bottom:0;
       
    }
`

export const StyledGoHomeWrapper = styled.div`
width: 100%;
height: 100px;
display: flex;
justify-content: center;
align-items: center;
color: #1890ff;
button{
    border: 1px solid #1890ff;
    color: #1890ff;
}

`

export const StyledLabelWrapper = styled.div`
color: #7E7F79;
font-size: 16px;
font-family: Arial,sans-serif;
`