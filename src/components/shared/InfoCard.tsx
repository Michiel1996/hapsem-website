interface InfoCardProps {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

/** Informatiekaart voor praktische content */
export function InfoCard({ title, children, icon }: InfoCardProps) {
  return (
    <article className="card-premium h-full">
      {icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-medical-50 text-medical-600">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-semibold text-medical-900">{title}</h3>
      <div className="mt-3 text-medical-600 leading-relaxed">{children}</div>
    </article>
  );
}
