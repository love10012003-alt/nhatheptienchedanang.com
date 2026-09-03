// GĐ3: Hiện trạng thái rate limit trên admin
export default function RateLimitBadge({ remaining, reset }: { remaining: number, reset: number }){
  const isLow = remaining <= 1
  return (
    <div className={`text-xs px-2 py-1 rounded-full ${isLow ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'}`}>
      {isLow ? `⚠️ Còn ${remaining} lần - Reset sau ${reset}s` : `✅ Còn ${remaining} lần`}
    </div>
  )
}
