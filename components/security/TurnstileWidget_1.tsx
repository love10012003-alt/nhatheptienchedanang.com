// GĐ3: Widget Turnstile - Gắn vào form
'use client'
import { useEffect, useState } from "react"
import { turnstileSiteKey } from "@/lib/turnstile"

declare global {
  interface Window { turnstile: any }
}

export default function TurnstileWidget({ onToken }: { onToken: (token: string) => void }){
  const [loaded, setLoaded] = useState(false)
  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  useEffect(() => {
    if(!siteKey){
      console.log("[GĐ3] No Turnstile site key - dev mode")
      onToken("dev-bypass")
      return
    }

    // Load script Cloudflare
    if(!document.querySelector('script[src*="turnstile"]')){
      const script = document.createElement('script')
      script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js"
      script.async = true
      script.defer = true
      script.onload = () => setLoaded(true)
      document.head.appendChild(script)
    } else {
      setLoaded(true)
    }
  }, [siteKey])

  useEffect(() => {
    if(loaded && window.turnstile && siteKey){
      window.turnstile.render("#cf-turnstile", {
        sitekey: siteKey,
        callback: (token: string) => onToken(token),
        "error-callback": () => onToken(""),
        theme: "light"
      })
    }
  }, [loaded, siteKey])

  if(!siteKey){
    return <div className="text-xs text-slate-400 p-2 bg-yellow-50 rounded">GĐ3 Dev mode: Turnstile bypass - Thêm NEXT_PUBLIC_TURNSTILE_SITE_KEY vào .env để bật bảo vệ thật</div>
  }

  return <div id="cf-turnstile" className="my-3"></div>
}
