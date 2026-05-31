'use client'

import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        <div className="w-20 h-20 rounded-full bg-destructive/10 flex items-center justify-center mx-auto">
          <span className="text-4xl">🍛</span>
        </div>
        <h1 className="font-heading text-3xl font-bold text-foreground">
          Something Went Wrong
        </h1>
        <p className="text-muted-foreground text-lg leading-relaxed">
          We couldn&apos;t load the page properly. Please try again or contact Moti Mahal directly at +256 757 879048.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={reset} size="lg">
            Try Again
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.location.href = '/'}
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
}
