"use client"

import React, { useEffect, useRef } from 'react'
import HeroContent from '@/components/Sub/HeroContent'

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.defaultMuted = true
    video.muted = true

    const playVideo = () => {
      video.play().catch(() => {
        // En caso de que el navegador restrinja el autoplay inicial, reanudar al primer toque/interacción
        const resumeOnInteraction = () => {
          video.play().catch(() => {})
          window.removeEventListener('touchstart', resumeOnInteraction)
          window.removeEventListener('click', resumeOnInteraction)
        }
        window.addEventListener('touchstart', resumeOnInteraction, { once: true })
        window.addEventListener('click', resumeOnInteraction, { once: true })
      })
    }

    playVideo()

    // Reanudar automáticamente si el usuario cambia de pestaña y vuelve
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        playVideo()
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  return (
    <div className='relative flex flex-col h-full w-full -z-40'>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload='auto'
        disablePictureInPicture
        disableRemotePlayback
        controls={false}
        onPause={(e) => {
          // Reanudar inmediatamente si se intenta pausar
          e.currentTarget.play().catch(() => {})
        }}
        className='video_hole rotate-180 absolute top-[-340px] h-full w-full left-0 z-[1] object-cover pointer-events-none select-none'
      >
        <source src='/blackhole.webm' type='video/webm' />
      </video>
      <HeroContent />
    </div>
  )
}

export default Hero
