import styled from 'styled-components';

export const StyledRadio = styled.div`
    width: 90%;
    heigth: 40px;
    display: flex;
    justify-content: center;
    .ant-radio-group{
      display: flex;
      flex-direction: row;
      width: 100%;
      .ant-radio-button-wrapper{
      // width: 118.8px;
      width: 100%;
      height: 100%;
      ant-radio-button:{
      width: 100%;
      display: block;
    }
  }
}
`

export const StyleRadioButtonWrapper = styled.div`
width: 118.8px;
heigth: 40px;
`