import { Progress } from 'antd'
import React from 'react'
import Date from './Date'
import Gender from './Gender'
import SecretQuestion from './SecretQuestion/SecretQuestion'

export default function Page2({ required }) {
  return (
    <>
      <Progress percent={66} showInfo={false} />
      <Date
        required={required} />
      <Gender
        required={required}
      />
      <SecretQuestion
        required={required}
      />
    </>
  )
}
