"use client"

interface ClientIframeProps {
  src: string
  title: string
  className?: string
  sandbox?: string
  onLoad?: () => void
  onError?: () => void
}

export default function ClientIframe({ src, title, className, sandbox, onLoad, onError }: ClientIframeProps) {
  return (
    <iframe
      src={src}
      className={className}
      title={title}
      onLoad={onLoad}
      onError={onError}
      sandbox={sandbox}
      loading="lazy"
    ></iframe>
  )
}

