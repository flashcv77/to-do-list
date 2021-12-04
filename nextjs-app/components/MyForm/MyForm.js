/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
// import Styles from './Styles'
import { Field } from 'react-final-form'
import Wizard from '../Wizard'
import Link from 'next/link'
import { Progress } from 'antd'
import MyInput from '../MyInput'
import { StyledDate, StyledInput, StyledDateContainer } from '../styled'
import RadioButton from '../RadioButton'
import { StyledForm, StyledFormHeader, StyledFormMain } from './styled'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2));
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) =>
      touched && error ? <span>{error}</span> : null
    }
  />
);

const required = value => (value ? undefined : '*');

const MyForm = () => (
  <>
    <StyledForm>
      <StyledFormHeader>
        <h1>Signup</h1>
      </StyledFormHeader>
      <StyledFormMain>


        <Wizard
          initialValues={{}}
          onSubmit={onSubmit}
        >
          <Wizard.Page
            validate={values => {
              console.log(values);
              const errors = {}
              if (values.password !== values.confirmPassword) {
                errors.confirmPassword = 'password doesn`t match';
              }
              return errors;
            }}
          >
            <Progress percent={33} showInfo={false} />
            <StyledInput>
              <div><label>Email</label></div>
              <Field
                name="email"
                component={MyInput}
                type="email"
                placeholder="Email"
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
                placeholder="password"
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
                placeholder="Confirm password"
                label="confirm password"
                validate={required}
              />
              <Error name="confirmPassword" />
            </StyledInput>
          </Wizard.Page>
          <Wizard.Page
            validate={values => {
              const errors = {}
              if (Number(values.year) < 1950 || Number(values.year) > 2003) {
                errors.year = 'Input year between 1950 and 2003';
              }
              if (Number(values.month) < 1 || Number(values.month) > 12) {
                errors.month = 'Input month between 1 and 12';
              }
              if (Number(values.day) < 1 || Number(values.day) > 30) {
                errors.day = 'Input date between 1 and 30';
              }
              return errors;
            }}
          >
            <Progress percent={66} showInfo={false} />
            {/* <label>Email</label> */}
            <h3>DATE OF BIRTH</h3>
            <StyledDateContainer>
              <StyledDate>
                <Field
                  name="year"
                  component={MyInput}
                  type="text"
                  placeholder="year"
                  label="year"
                  validate={required}
                />

                <Error name="year" />
              </StyledDate>
              <StyledDate>
                <Field
                  name="month"
                  component={MyInput}
                  type="text"
                  placeholder="month"
                  label="month"
                  validate={required}
                />
                <Error name="month" />
              </StyledDate>
              <StyledDate>
                <Field
                  name="day"
                  component={MyInput}
                  type="text"
                  placeholder="day"
                  label="day"
                  validate={required}
                />
                <Error name="day" />
              </StyledDate>
            </StyledDateContainer>
            <h3>GENDER</h3>
            <Field
              name="gender"
              component={RadioButton}
              type="radio"
              multiple
              validate={required}
            >
            </Field>
            <Error name="gender" />
            <h3>WHERE DID YOU HEAR ABOUT IT?</h3>
            <div>
              <Field
                name="whereDid"
                component="select"
                validate={required}
              >
                <option value="Facebook">Facebook</option>
                <option value="Friend told me">Friend told me</option>
                <option value="Twitter">Twitter</option>
              </Field>
              <Error name="whereDid" />
            </div>
          </Wizard.Page>
          <Wizard.Page
            validate={values => {
              const errors = {}
              if (!values.notes) {
                errors.notes = 'Required';
              }
              return errors;
            }}
          >
            <Progress percent={100} showInfo={false} strokeColor="#1890ff" />
            <div>
              <h1>SUCCESS</h1>
            </div>
          </Wizard.Page>
        </Wizard>
      </StyledFormMain>
    </StyledForm>
    <Link href="/">
      <a>Back to home</a>
    </Link>
  </>
)

export default MyForm;