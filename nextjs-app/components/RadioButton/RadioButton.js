import { Radio } from 'antd';
import React from 'react';

export default function RadioButton(props) {
  const { input } = props;
  const { name } = input;
  return (
    <div>
      <Radio.Group
        buttonStyle="solid"
        id={name}
        onChange={input.onChange}
      >
        <Radio.Button value='male'>MALE</Radio.Button>
        <Radio.Button value='female'>FEMALE</Radio.Button>
        <Radio.Button value='unspecifed'>UNSPECIFED</Radio.Button>
      </Radio.Group>
    </div>
  )
}
