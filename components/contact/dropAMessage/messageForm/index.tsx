import { FC, useCallback } from 'react'
import { Flex, Button, useBoolean } from '@chakra-ui/react'
import Form from '../../../common/formfields/form/Form'
import FormFieldController from '../../../common/formfields/form/FormFieldController'
import InputField from '../../../common/formfields/inputField'
import TextAreaField from '../../../common/formfields/textAreaField'
import useOnSubmit from './useOnSubmit'

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
            rules={{ required: true }}
            componentProps={{ placeholder: 'Enter name...' }}
          />
        </Flex>
        <Flex mb={2} flexDirection={'column'}>
          <FormFieldController
            name={'email'}
            label={'Email:'}
            defaultValue={''}
            component={InputField}
            rules={{ required: true }}
            componentProps={{ placeholder: 'Enter email...' }}
          />
        </Flex>
        <Flex mb={2} flexDirection={'column'}>
          <FormFieldController
            name={'message'}
            label={'Message:'}
            defaultValue={''}
            component={TextAreaField}
            rules={{ required: true }}
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
