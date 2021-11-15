import React from 'react'
import { Input } from 'antd'
import { StyledInput } from './styled'

export const MyField = (props) => {
    console.log(props)
    const { name } = props.input
    console.log(name);
    return (
        <>
            <StyledInput>

                <label for={name}>{name}</label>
                <Input
                    id={name}
                    {...props.input}
                // {...props.meta}
                />
            </StyledInput>
        </>
    )
}

export default MyField;