import { ComponentType, FC, useContext } from 'react'
import {
  Controller,
  ControllerRenderProps,
  UseFormReturn
} from 'react-hook-form'
import { FormControl, FormLabel, FormErrorMessage } from '@chakra-ui/react'
import { FormContext } from './Form'

interface Props {
  name: string
  component: ComponentType
  label?: string
  rules?: object
  defaultValue: any
  componentProps?: object
}

const FormFieldController: FC<Props> = ({
  component,
  name,
  rules,
  defaultValue,
  componentProps,
  label
}) => {
  const {
    control,
    formState: { errors }
  } = useContext(FormContext) as UseFormReturn
  const Component = component as ComponentType<ControllerRenderProps>
  return (
    <FormControl id={name} isInvalid={errors[name]}>
      {label && (
        <FormLabel
          m={0}
          fontSize={'md'}
          fontWeight={'semibold'}
          as={'legend'}
          htmlFor={name}
        >
          {label}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        rules={rules}
        render={({ field }) => (
          <Component {...{ ...field, ...componentProps }} />
        )}
      />
      {errors[name] && (
        <FormErrorMessage fontFamily={'sans-serif'} fontWeight={'extrabold'}>
          {errors[name].message}
        </FormErrorMessage>
      )}
    </FormControl>
  )
}

export default FormFieldController
