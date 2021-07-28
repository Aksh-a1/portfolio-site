import { FC, useCallback } from 'react'
import { Flex, Button, useBoolean } from '@chakra-ui/react'
import Form from '../../../common/forms/form/Form'
import FormFieldController from '../../../common/forms/form/FormFieldController'
import InputField from '../../../common/forms/fields/inputField'
import TextAreaField from '../../../common/forms/fields/textAreaField'
import useOnSubmit from './useOnSubmit'
import validations from './validations'

const MessageForm: FC = () => {
  const [sendInProgress, { toggle: setSendInProgress }] = useBoolean(false)
  const onSubmit = useOnSubmit({ afterSubmit: setSendInProgress })
  const handleOnSubmit = useCallback(
    (data) => {
      setSendInProgress()
      onSubmit(data)
    },
    [onSubmit, setSendInProgress]
  )
  return (
    <Form onSubmit={handleOnSubmit}>
      <Flex flexDirection={'column'}>
        <Flex mb={2} flexDirection={'column'}>
          <FormFieldController
            name={'name'}
            label={'Name:'}
            defaultValue={''}
            component={InputField}
            rules={{ ...validations.name }}
            componentProps={{ placeholder: 'Enter name...' }}
          />
        </Flex>
        <Flex mb={2} flexDirection={'column'}>
          <FormFieldController
            name={'email'}
            label={'Email:'}
            defaultValue={''}
            component={InputField}
            rules={{ ...validations.email }}
            componentProps={{ placeholder: 'Enter email...' }}
          />
        </Flex>
        <Flex mb={2} flexDirection={'column'}>
          <FormFieldController
            name={'message'}
            label={'Message:'}
            defaultValue={''}
            component={TextAreaField}
            rules={{ ...validations.message }}
            componentProps={{
              minH: 32,
              size: 'lg',
              placeholder: 'Enter message...'
            }}
          />
        </Flex>
        <Button
          type={'submit'}
          isLoading={sendInProgress}
          loadingText='🚀'
          padding={{ base: 'unset', md: 'unset' }}
          w={'50%'}
        >
          Whoosh...
        </Button>
      </Flex>
    </Form>
  )
}

export default MessageForm
