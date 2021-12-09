import React from 'react'
import { Field } from 'react-final-form'
import Error from '../../../Error'
import { StyledLabelWrapper } from '../styled'
import { StyledRadioWrapper } from './styled'
import RadioButton from '../../../RadioButton'

export default function Gender({ required }) {

  return (
    <StyledRadioWrapper>
      <StyledLabelWrapper>
        <label>GENDER</label>
      </StyledLabelWrapper>
      <Field
        name="gender"
        component={RadioButton}
        type="radio"
        multiple
        validate={required}
      >
      </Field>
      <Error name="gender" />
    </StyledRadioWrapper>
  )
}
