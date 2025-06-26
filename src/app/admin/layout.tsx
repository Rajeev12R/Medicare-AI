import { ReactNode } from "react"

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-black dark:bg-dot-white/[0.2]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  )
}
