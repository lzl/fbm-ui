import * as React from 'react';
import { TextField, OutlinedTextFieldProps } from '@mui/material'
import styled from '@mui/material/styles/styled'
import { useFormikContext } from 'formik'

export const componentName: string = 'Input'

type SizeMap = 'small' | 'large';

type Props = {
  size: SizeMap;
  name?: string;
  label?: string;
}

export type FbmInputProps =  {
  size: SizeMap;
  name?: string;
  label?: string;
} | OutlinedTextFieldProps

const InputRoot: React.FC<FbmInputProps> = styled(TextField, {
  name: 'Input',
  slot: 'Root',
})(({ size }) => {
  const sizes = {
    small: 36,
    large: 48,
  }
  const helperTextHeight = 18
  return {
    height: sizes[size] + helperTextHeight,
    marginBottom: 8,
  }
})

const useInputProps = (inProps) => {
  const formik = useFormikContext();
  if (!formik || (inProps && !inProps.name)) return inProps

  const {
    getFieldProps,
    getFieldMeta,
  } = formik

  const fieldProps = getFieldProps(inProps)
  const fieldMeta = getFieldMeta(inProps.name)

  const props = {
    ...inProps,
    ...fieldProps,
  }

  if (fieldMeta.error) {
    props.helperText = fieldMeta.error
    props.error = true
  }

  return props
}

const FbmInput: React.FC<FbmInputProps> = (inProps) => {
  const props = useInputProps(inProps)

  return <InputRoot  {...props} />
}

FbmInput.defaultProps = {
  size: 'large',
}

export default FbmInput
