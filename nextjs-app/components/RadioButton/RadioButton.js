import { Radio } from 'antd';
import React from 'react';
import { StyledRadio, StyleRadioButtonWrapper } from './styled';

export default function RadioButton(props) {
  const { input } = props;
  const { name } = input;
  return (
    <StyledRadio>
      <Radio.Group
        buttonStyle="solid"
        id={name}
        onChange={input.onChange}
      >
        <StyleRadioButtonWrapper>
          <Radio.Button value='male'>MALE</Radio.Button>

        </StyleRadioButtonWrapper>
        <StyleRadioButtonWrapper>
          <Radio.Button value='female'>FEMALE</Radio.Button>

        </StyleRadioButtonWrapper>
        <StyleRadioButtonWrapper>
          <Radio.Button value='unspecifed'>UNSPECIFED</Radio.Button>

        </StyleRadioButtonWrapper>
      </Radio.Group>
    </StyledRadio>

  )
}
