import { EmailBody } from '../types/EmailBody'
import { API_RESPONSE } from '../types/ApiResponse'

const magicNumber = Math.random()

export const sendEmail = async (
  requestBody: EmailBody
): Promise<API_RESPONSE> => {
  const response = await fetch('/api/message', {
    method: 'POST',
    mode: 'same-origin',
    cache: 'no-cache',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ...requestBody, id: magicNumber })
  })

  if (response.status === 200) {
    return 'SUCCESS'
  }

  if (response.status === 403) {
    return 'BAD_REQUEST'
  }

  return 'ERROR'
}
