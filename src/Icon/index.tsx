import * as React from 'react';
import useThemeProps from '@material-ui/core/styles/useThemeProps'
import * as Icons from '@avocadoui/icons';

export const componentName: string = 'Aicon'

export interface AiconProps {
  name?: string
}

const Aicon:  React.FC<AiconProps>  = (inProps) => {
  const {
    name,
    ...otherProps
  } = useThemeProps({ props: inProps, name: componentName })
  
  const Icon = Icons[name]

  if (!Icon) return null
  
  return <Icon {...otherProps} />
}

export default Aicon