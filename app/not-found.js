// app/not-found.js
'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [router])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div>Sayfa bulunamadı.</div>
      <div>Anasayfaya Yönlendiriliyor...</div>
    </div>
  )
}