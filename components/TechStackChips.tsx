const stack = ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Paystack', 'SEO', 'Framer Motion']

export function TechStackChips() {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary-dark"
        >
          {tech}
        </span>
      ))}
    </div>
  )
}
