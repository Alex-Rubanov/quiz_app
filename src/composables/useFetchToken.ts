import { getToken } from '@/api'
import { useQuery } from '@tanstack/vue-query'

export const useFetchToken = () => {
  const response = useQuery({
    queryKey: ['token'],
    queryFn: getToken,
    select(data) {
      const sessionToken = sessionStorage.getItem('token')

      if (!sessionToken) {
        sessionStorage.setItem('token', data?.token)
      }

      return data
    },
  })

  return { ...response }
}
