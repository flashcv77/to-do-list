import { Progress } from 'antd'
import React from 'react'
import { Field } from 'react-final-form'
import Error from '../../Error'
import { StyledInput } from '../../MyInput/styled'
import MyInput from '../../MyInput'

export default function Page1({ required }) {
  return (
    <>
      <Progress percent={33} showInfo={false} />
      <StyledInput>
        <div><label>Email</label></div>
        <Field
          name="email"
          component={MyInput}
          type="email"
          label="email"
          validate={required}
        />
        <Error name="email" />
      </StyledInput>
      <StyledInput>
        <div><label>Password</label></div>
        <Field
          name="password"
          component={MyInput}
          type="password"
          validate={required}
          label="password"
        />
        <Error name="password" />
      </StyledInput>
      <StyledInput>
        <div><label>Confirm password</label></div>
        <Field
          name="confirmPassword"
          component={MyInput}
          type="password"
          label="confirm password"
          validate={required}
        />
        <Error name="confirmPassword" />
      </StyledInput>
    </>
  )
}
