import styled from 'styled-components';

export const StyledWizardForm = styled.div`
height: 455px;
width: 396px;
border-radius: 0 0 15px 15px;
display: flex;
flex-wrap: wrap;
justify-content: center;
// flex-direction: row-reverse;
`

export const StyledWizardMain = styled.div`
height: 396px;
width: 396px;
// background-color: #f7e3e3;
display: flex; 
flex-direction: column;
align-items: center;
// border-bottom: 1px solid #d3d3d3;
.ant-progress{
  margin-bottom: 35px;
  .ant-progress-inner{
      border-radius:0;
      border-top: 1px solid #d3d3d3;
      border-bottom: 1px solid #d3d3d3;
      .ant-progress-bg{
          border-radius:0;
      }
  }
}
`

export const StyledWizardFooter = styled.div`
    // margin-left: auto;
    height: 50px;
    // background-color: green;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    width: 100%;
    border-top: 1px solid #d3d3d3;
    align-items: center;
    button{
        font-size: 16px;
        font-family: Arial, sans-serif;
        color: #7E7F79;
        bor
    }
`