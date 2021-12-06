import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-final-form';
import { Button } from 'antd';
import { StyledWizardFooter, StyledWizardForm, StyledWizardMain } from './styled';

class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  }
  static Page = ({ children }) => children

  state = {
    page: 0,
    values: this.props.initialValues || {}
  }

  next = values =>
    this.setState(state => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      values
    }));

  previous = () =>
    this.setState(state => ({
      page: Math.max(state.page - 1, 0)
    }));

  validate = values => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {}
  }

  handleSubmit = values => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    console.log("values on submit:", values, 'page:', page);
    const isLastPage = page === React.Children.count(children) - 1
    if (isLastPage) {
      return onSubmit(values);
    } else {
      this.next(values);
    }
  }

  render() {

    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 2;
    const isSuccessPage = page === 2;
    // console.log(React.Children.count(children));
    console.log(this.state);
    return (
      <Form
        initialValues={values}
        validate={this.validate}
        onSubmit={this.handleSubmit}
      >
        {({ handleSubmit, submitting, errors, values }) => {
          console.log(errors);
          return (
            <>
              <form id="form" onSubmit={handleSubmit} noValidate>
                <StyledWizardForm>
                  <StyledWizardMain>
                    {activePage}
                  </StyledWizardMain>

                  {!isSuccessPage && <StyledWizardFooter>

                    {!isSuccessPage && !isLastPage &&
                      <Button
                        type="text"
                        htmlType="form"
                        className="nextButton"
                      // disabled={!Object.keys(errors).length == 0}
                      >
                        Next
                      </Button>}

                    {!isSuccessPage && isLastPage && (
                      <Button
                        // type="submit"
                        type="text"
                        // disabled={submitting}
                        htmlType="form"
                      // disabled={!Object.keys(errors).length == 0}
                      >
                        Submit
                      </Button>
                    )}
                    {!isSuccessPage && page > 0 && (
                      <Button type="text" onClick={this.previous}>
                        Back
                      </Button>
                    )}

                  </StyledWizardFooter>}
                </StyledWizardForm>
                {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
              </form>
            </>
          )
        }}
      </Form>
    )
  }
}

export default Wizard;