import { useRouter } from 'next/router'
import useSwr from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Greeting() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.first_name ? `/api/greeting/${router.query.first_name}` : null,
    fetcher
  )
   console.log(data);
  if (error) return <div>Failed to load user</div>
  if (!data) return <div>Loading...</div>

  return <div>{data.first_name}</div>
}
