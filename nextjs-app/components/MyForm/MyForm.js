/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
// import Styles from './Styles'
import { Field } from 'react-final-form'
import Wizard from '../Wizard'
import Link from 'next/link'
import { Image, Progress } from 'antd'
import moment from 'moment';
import MyInput from '../MyInput'
import { StyledDate, StyledInput, StyledDateContainer } from '../MyInput/styled'
import RadioButton from '../RadioButton'
import { StyledDateWrapper, StyledForm, StyledFormHeader, StyledFormMain, StyledRadioWrapper, StyledSelect, StyledSelectWrapper } from './styled'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2));
}

const Error = ({ name }) => (
  <Field
    name={name}
    subscription={{ touched: true, error: true }}
    render={({ meta: { touched, error } }) => {
      // console.log(error);
      return touched && error ? <span className="error">{error}</span> : null
    }
    }

  />
);

const required = value => (value ? undefined : 'required*');

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
              if (values.hasOwnProperty('email')
                && !values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
              ) {
                console.log(values);
                errors.email = "Email is not valid";
              }
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
                // placeholder="Email"
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
                // placeholder="password"
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
                // placeholder="Confirm password"
                label="confirm password"
                validate={required}
              />
              <Error name="confirmPassword" />
            </StyledInput>
          </Wizard.Page>
          <Wizard.Page
            validate={values => {
              const errors = {}
              const dateMoment = moment(values.year + '-' + values.month + '-' + values.day);
              console.log(dateMoment.isValid() === false, dateMoment.isBetween('1000-01-01', '2022-01-01'));
              // if (dateMoment.isValid() === false && !dateMoment.isBetween('1000-01-01', '2022-01-01')) {
              //   errors.date = 'Input valid date from 1900 to 2022';
              // }
              if (!dateMoment.isValid()) {
                errors.date = 'Input valid date'
              }
              if (!dateMoment.isBetween('1000-01-01', '2022-01-01') === true) {
                return errors.date = 'Input valid date';
              }
              console.log(errors);
              return errors;

            }}
          >
            <Progress percent={66} showInfo={false} />
            {/* <label>Email</label> */}
            <StyledDateWrapper>
              <h3>DATE OF BIRTH</h3>
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
            <StyledRadioWrapper>
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
            </StyledRadioWrapper>
            <StyledSelectWrapper>
              <h3>WHERE DID YOU HEAR ABOUT IT?</h3>
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

          </Wizard.Page>
          <Wizard.Page
          // validate={values => {
          //   const errors = {}
          //   if (!values.notes) {
          //     errors.notes = 'Required';
          //   }
          //   return errors;
          // }}
          >
            <Progress percent={100} showInfo={false} strokeColor="#1890ff" />
            <div>
              <Image
                src="https://gmgroup.ru/assets/template/img/svg/circle-with-check-symbol.svg"
                alt='success'
                width="180px"
                preview={false}
              />
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