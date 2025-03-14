import type React from "react"
import { cn } from "@/lib/utils"

interface BaseStylesProps {
  children: React.ReactNode
  className?: string
}

export function Heading({ children, className }: BaseStylesProps) {
  return <h2 className={cn("font-heading font-bold", className)}>{children}</h2>
}

export function BodyText({ children, className }: BaseStylesProps) {
  return <p className={cn("font-body", className)}>{children}</p>
}

export function MonoText({ children, className }: BaseStylesProps) {
  return <code className={cn("font-mono", className)}>{children}</code>
}

