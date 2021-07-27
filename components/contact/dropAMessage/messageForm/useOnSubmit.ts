import { useCallback } from 'react'
import { useToast } from '@chakra-ui/react'
import { SubmitHandler, FieldValues } from 'react-hook-form'
import { sendEmail } from '../../../../utils/apiCalls'

interface Args {
  afterSubmit: Function
}

const useOnSubmit: (args: Args) => SubmitHandler<FieldValues> = ({
  afterSubmit
}) => {
  const toast = useToast()

  return useCallback(
    (data) => {
      const { name, email, message } = data ?? {}
      sendEmail({ name, email, message })
        .then((data) => {
          if (data === 'ERROR') {
            throw new Error('send-mail-fail')
          }
          if (data === 'BAD_REQUEST') {
            toast({
              title: 'Error',
              description: 'Maximum request limit reached!',
              status: 'error',
              duration: 9000,
              position: 'top'
            })
            return
          }
          toast({
            title: 'Message sent successfully',
            status: 'success',
            duration: 9000,
            position: 'top'
          })
        })
        .catch(() => {
          toast({
            title: 'Error Occured',
            description: 'There was an error while sending message!',
            status: 'error',
            duration: 9000,
            position: 'top'
          })
        })
        .finally(() => {
          afterSubmit()
        })
    },
    [afterSubmit, toast]
  )
}

export default useOnSubmit
