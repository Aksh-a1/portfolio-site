const emailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i

const contactFormValidationRules = {
  name: {
    required: 'This is a required field',
    maxLength: {
      value: 50,
      message: 'Max length is 50'
    },
    minLength: { value: 4, message: 'Min length is 4' }
  },
  email: {
    required: 'This is a required field',
    maxLength: {
      value: 50,
      message: 'Max length is 50'
    },
    pattern: {
      value: emailRegex,
      message: 'Enter valid email'
    }
  },
  message: {
    required: 'This is a required field',
    maxLength: {
      value: 200,
      message: 'Max length is 200'
    },
    minLength: { value: 4, message: 'Min length is 4' }
  }
}

export default contactFormValidationRules
