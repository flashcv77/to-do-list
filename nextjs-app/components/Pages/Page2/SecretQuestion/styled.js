import styled from "styled-components";

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