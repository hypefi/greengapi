import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Greeting() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/greeting/${router.query.id}` : null,
    fetcher
  )

  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.first_name}</div>
}
