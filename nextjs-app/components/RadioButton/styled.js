import styled from 'styled-components';

export const StyledRadio = styled.div`
    width: 90%;
    height: 40px;
    display: flex;
    justify-content: center;
    .ant-radio-group{
      display: flex;
      flex-direction: row;
      width: 100%;
      .ant-radio-button-wrapper{
      // width: 118.8px;
      width: 100%;
      // height: 100%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      ant-radio-button:{
      width: 100%;
      display: block;
    }
    .error{ 
      min-height: 20px;
    }
    h3{
      margin-bottom: 0;
    }
  }
}
`

export const StyleRadioButtonWrapper = styled.div`
width: 118.8px;
// height: 40px;

  .ant-radio-button-wrapper{
    span{
      color: #d3d3d3;
      font-size: 15px;
      font-family: Arial,sans-serif;
    }
  } 


`
