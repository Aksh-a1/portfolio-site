import { EmailBody } from '../types/EmailBody'
import { API_RESPONSE } from '../types/ApiResponse'

export const sendEmail = async (
  requestBody: EmailBody
): Promise<API_RESPONSE> => {
  const response = await fetch('/api/message', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'same-origin', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(requestBody)
  })

  if (response.status === 200) {
    return 'SUCCESS'
  }

  return 'ERROR'
}
