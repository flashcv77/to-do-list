import styled from 'styled-components';

// export const StyledForm = styled.div`
// // background-color: #d5ebfe;
// border-radius: 15px;
// border: 2px solid #d3d3d3;
// display: flex;
// flex-direction: column;
// justify-content: flex-start;
// align-items: center;
// // min-height: 500px;  
//     form{
//         width: 400px;
//         min-width: 400px;
//         text-align: center;
//         min-height: 50%;
//         display: flex;
//         flex-direction: column;
//         align-items: center;

//         h1{
//             color: #95BBC6;
//         }
//         
        
//         .buttons {
//             display: flex;
//             align-items: flex-end;
//             flex-direction: row-reverse;
//             justify-content: space-between;
//             width: 100%;
//             min-height: 129px;
//             padding: 0 15px 15px;
            
//             button{
//                 font-size: 16px;
//                 font-family: Arial, sans-serif;
//                 color: #7E7F79;
//                 bor
//             }

//         }
//         .ant-radio-group{
//         }
//     }
    
//     `;
export const StyledInput = styled.div`
display: flex;
flex-wrap: wrap;
width: 100%; 
justify-content: center;
margin: 20px 0;
// font-weight: bold;
color: #7E7F79;
font-size: 16px;
font-family: Arial, sans-serif;
div{
    display: flex;
    justify-content: flex-start;
    label{
        // width: 90%;
        // min-width: 95%;
        // justify-content: flex-start;
        text-align: start;
        text-transform: uppercase;
    }
}

div{
    // justify-content:center;
    width: 90%;
    min-width: 90%;
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
}
`
export const StyledDateContainer = styled.div`
display: flex;
flex-wrap: wrap;
width: 90%;
`

export const StyledDate = styled.div`
// background-color:#f2f2f2;
// border: 1px solid.black;
width: 33%;
min-height: 60px;
div{
    border: 1px solid #d3d3d3;
    input{
        text-align: center;
        height: 40px;
    }
}

`


// export default StyledForm;