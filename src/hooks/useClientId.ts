import { useEffect, useState } from 'react'

const CLIENT_ID_KEY = 'trail-app-client-id'

export function useClientId(): string {
  const [clientId, setClientId] = useState<string>('')

  useEffect(() => {
    let id = localStorage.getItem(CLIENT_ID_KEY)
    if (!id) {
      id = crypto.randomUUID()
      localStorage.setItem(CLIENT_ID_KEY, id)
    }
    setClientId(id)
  }, [])

  return clientId
}
