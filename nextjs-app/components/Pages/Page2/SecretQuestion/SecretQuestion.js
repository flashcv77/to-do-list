import React from 'react'
import { Field } from 'react-final-form'
import Error from '../../../Error'
import { StyledLabelWrapper } from '../styled'
import { StyledSelect, StyledSelectWrapper } from './styled'

export default function SecretQuestion({ required }) {
  return (
    <StyledSelectWrapper>
      <StyledLabelWrapper>
        <label>WHERE DID YOU HEAR ABOUT IT?</label>
      </StyledLabelWrapper>
      <StyledSelect>
        <Field
          name="whereDid"
          component="select"
          validate={required}
        >
          <option />
          <option value="Facebook">Facebook</option>
          <option value="Friend told me">Friend told me</option>
          <option value="Twitter">Twitter</option>
        </Field>
        <Error name="whereDid" />
      </StyledSelect>
    </StyledSelectWrapper>
  )
}
