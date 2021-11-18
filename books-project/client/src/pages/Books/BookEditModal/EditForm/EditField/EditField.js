import React from 'react'
import { Input } from 'antd'
import { StyledInput } from './styled'

export const EditField = (props) => {
    const { name } = props.input
    const { allowClear } = props;
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

export default EditField;