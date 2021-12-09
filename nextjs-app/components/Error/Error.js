import React from 'react'
import { Field } from 'react-final-form'

export default function Error({ name }) {
  return (
    <Field
      name={name}
      subscription={{ touched: true, error: true }}
      render={({ meta: { touched, error } }) => {
        // console.log(error);
        return touched && error ? <span className="error">{error}</span> : null
      }
      }

    />
  )
}
