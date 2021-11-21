import React from 'react'
import { Input } from 'antd'
import { StyledTextArea } from './styled'
import PropTypes from 'prop-types';

export const MyTextArea = (props) => {
    const { name } = props.input
    const { allowClear } = props;
    return (
        <>
            <StyledTextArea>
                <label for={name}>{name}</label>
                <Input.TextArea
                    rows={4}
                    id={name}
                    {...props.input}
                    allowClear={allowClear}
                />
            </StyledTextArea>
        </>
    );
}

MyTextArea.propTypes = {
    allowClear: PropTypes.bool,
    name: PropTypes.string,
    input: PropTypes.object,
}

export default MyTextArea;