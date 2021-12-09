import { Button, Image, Progress } from 'antd'
import React from 'react'
import Link from 'next/link'
import StyledGoHomeWrapper from './styled.js'

export default function Page1() {
  return (
    <>
      <Progress percent={100} showInfo={false} strokeColor="#1890ff" />
      <div>
        <Image
          src="https://gmgroup.ru/assets/template/img/svg/circle-with-check-symbol.svg"
          alt='success'
          width="180px"
          preview={false}
        />
      </div>
      <StyledGoHomeWrapper>
        <Link href="/">
          <a>
            <Button
              // type="text"
              size='large'
            >
              Go to Dashboard
            </Button>
          </a>
        </Link>
      </StyledGoHomeWrapper>
    </>
  )
}
