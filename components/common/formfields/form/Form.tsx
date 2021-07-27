import { createContext, FC, ReactNode } from 'react'
import {
  useForm,
  SubmitHandler,
  FieldValues
} from 'react-hook-form'

interface Props {
  onSubmit: SubmitHandler<FieldValues>
  children: ReactNode
}

export const FormContext = createContext({})

const Form: FC<Props> = ({ onSubmit, children }) => {
  const { handleSubmit, ...rest } = useForm()
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormContext.Provider value={{ ...rest }}>
        {children}
      </FormContext.Provider>
    </form>
  )
}

export default Form
