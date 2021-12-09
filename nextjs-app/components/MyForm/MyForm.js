/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react'
import Wizard from '../Wizard'
import moment from 'moment';
import { StyledForm, StyledFormHeader, StyledFormMain } from './styled'
import Page3 from '../Pages/Page3'
import Page2 from '../Pages/Page2/Page2'
import Page1 from '../Pages/Page1/Page1'

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2));
}

const required = value => (value ? undefined : 'required*');

// const validatePage1 = (values) => {
//   const errors = {}
//   if (values.hasOwnProperty('email')
//     && !values.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
//   ) {
//     console.log(values);
//     errors.email = "Email is not valid";
//   }
//   if (values.password !== values.confirmPassword) {
//     errors.confirmPassword = 'password doesn`t match';
//   }
//   return errors;
// }

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
            // validate={validatePage1}
          >
            <Page1
              required={required}
            />
          </Wizard.Page>
          <Wizard.Page
            validate={values => {
              const errors = {}
              const dateMoment = moment(values.year + '-' + values.month + '-' + values.day);
              console.log(dateMoment.isValid() === false, dateMoment.isBetween('1000-01-01', '2022-01-01'));
              if (!dateMoment.isValid()) {
                errors.date = 'Input valid date'
              }
              if (!dateMoment.isBetween('1900-01-01', '2022-01-01') === true) {
                errors.date = 'Input valid date';
              }
              console.log(errors);
              return errors;
            }}
          >
            <Page2
              required={required}
            />
          </Wizard.Page>
          <Wizard.Page>
            <Page3 />
          </Wizard.Page>
        </Wizard>
      </StyledFormMain>
    </StyledForm>
  </>
)

export default MyForm;