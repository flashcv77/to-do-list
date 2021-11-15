import React from 'react'
import { Input } from 'antd'
import { StyledInput } from './styled'

export const MyField = (props) => {
    console.log(props)
    const { name} = props.input
    const { allowClear} = props;
    console.log(name);
    return (
        <>
            <StyledInput>
                <label for={name}>{name}</label>
                <Input
                    id={name}
                    {...props.input}
                    allowClear={allowClear}
                />
            </StyledInput>
        </>
    )
}

export default MyField;