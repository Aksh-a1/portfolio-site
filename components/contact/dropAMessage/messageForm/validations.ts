const emailRegex =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const whitespaceRegex = !/^\s+$/i

const contactFormValidationRules = {
  name: {
    required: 'Required',
    maxLength: {
      value: 50,
      message: 'Max length is 50 characters'
    },
    minLength: { value: 4, message: 'Min length is 4 characters' },
    pattern: {
      value: whitespaceRegex,
      message: 'Enter a value not only whitespaces'
    }
  },
  email: {
    required: 'Required',
    maxLength: {
      value: 50,
      message: 'Max length is 50 characters'
    },
    pattern: {
      value: emailRegex,
      message: 'Enter valid email'
    }
  },
  message: {
    required: 'Required',
    maxLength: {
      value: 200,
      message: 'Max length is 200 characters'
    },
    minLength: { value: 4, message: 'Min length is 4 characters' },
    pattern: {
      value: whitespaceRegex,
      message: 'Enter a value not only whitespaces'
    }
  }
}

export default contactFormValidationRules
