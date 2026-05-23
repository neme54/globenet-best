/** Page wrapper — no opacity fade (prevents blank pages if motion fails to hydrate) */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
