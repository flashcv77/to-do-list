import React from 'react'
import { Field } from 'react-final-form'
import Error from '../../../Error'
import MyInput from '../../../MyInput'
import { StyledLabelWrapper } from '../styled'
import { StyledDate, StyledDateContainer, StyledDateWrapper } from './styled'

export default function Date({ required }) {
  return (
    <StyledDateWrapper>
      <StyledLabelWrapper>
        <label>DATE OF BIRTH</label>
      </StyledLabelWrapper>
      <StyledDateContainer>
        <StyledDate>
          <Field
            name="day"
            component={MyInput}
            type="text"
            placeholder="DD"
            label="day"
            validate={required}
          />
          <Error name="day" />
        </StyledDate>

        <StyledDate>
          <Field
            name="month"
            component={MyInput}
            type="text"
            placeholder="MM"
            label="month"
            validate={required}
          />
          <Error name="month" />
        </StyledDate>
        <StyledDate>
          <Field
            name="year"
            component={MyInput}
            type="text"
            placeholder="YYYY"
            label="year"
            validate={required}
          />

          <Error name="year" />
        </StyledDate>
        <Error name="date" />
      </StyledDateContainer>
    </StyledDateWrapper>
  )
}
