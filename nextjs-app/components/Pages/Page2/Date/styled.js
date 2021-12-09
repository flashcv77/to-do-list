import styled from "styled-components";

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

export const StyledDateContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
height: 63px;
justify-content:center;
`

export const StyledDate = styled.div`
// background-color:#f2f2f2;
// border: 1px solid.black;
width: 33%;
min-height: 60px;
height: 60px;
text-align: center;
div{
    border: 1px solid #d3d3d3;
    input{
        text-align: center;
        height: 40px;
    }
}
`