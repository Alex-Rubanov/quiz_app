import { getAllCategories } from '@/api'
import { useQuery } from '@tanstack/vue-query'

export const useFetchCategories = () => {
  const response = useQuery({
    queryKey: ['categories'],
    queryFn: getAllCategories,
  })

  return { ...response }
}
