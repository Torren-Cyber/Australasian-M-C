const plans = [
  {
    name: "One-off Build",
    price: "from $500",
    cadence: "one-time",
    description: "A complete website build, paid once.",
    features: ["Complete website build", "Delivered ready to launch"],
    highlighted: false,
  },
  {
    name: "Website Management",
    price: "from $350",
    cadence: "per month",
    description: "Ongoing management with your build included.",
    features: [
      "Build included",
      "Up to 4 minor* changes per month",
      "Basic security & firewall",
      "12 month lock-in contract",
    ],
    highlighted: true,
  },
]

export function PricingSection() {
  return (
    <section className="mt-12">
      <div className="grid gap-6 sm:grid-cols-2">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative flex flex-col rounded-xl border p-6 ${
              plan.highlighted
                ? "border-accent bg-surface shadow-[0_0_0_1px_var(--color-accent),0_20px_60px_-30px_var(--color-accent)]"
                : "border-border bg-surface"
            }`}
          >
            {plan.highlighted && (
              <span className="absolute -top-3 left-6 rounded-full bg-accent px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                Most popular
              </span>
            )}
            <h2 className="text-lg font-medium">{plan.name}</h2>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-4xl font-semibold tracking-tight text-accent">
                {plan.price}
              </span>
              <span className="text-sm text-muted">{plan.cadence}</span>
            </div>
            <p className="mt-3 text-pretty text-sm leading-relaxed text-muted">
              {plan.description}
            </p>
            <ul className="mt-6 flex flex-col gap-3 text-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground"
                  >
                    ✓
                  </span>
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-6 text-center text-xs leading-relaxed text-muted">
        {"*Minor changes include text, image, and small layout updates."}
      </p>
    </section>
  )
}
