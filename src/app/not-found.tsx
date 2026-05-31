import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md space-y-6">
        <h1 className="font-heading text-8xl font-bold text-primary">404</h1>
        <h2 className="font-heading text-2xl font-bold text-foreground">
          Page Not Found
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Looks like this dish isn&apos;t on the menu. Head back to our homepage to explore our authentic Indian cuisine.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  )
}
