import { ReactNode } from "react";

type PageShellProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  children?: ReactNode;
};

export function PageShell({
  title,
  eyebrow,
  description,
  children,
}: PageShellProps) {
  return (
    <main className="min-h-screen">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          {eyebrow ? (
            <p className="mb-4 text-xs uppercase tracking-[0.35em] text-cyan-400">
              {eyebrow}
            </p>
          ) : null}

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>

          {description ? (
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              {description}
            </p>
          ) : null}
        </div>

        <div className="mt-12">{children}</div>
      </section>
    </main>
  );
}