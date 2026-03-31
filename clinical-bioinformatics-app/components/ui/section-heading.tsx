type SectionHeadingProps = {
    eyebrow?: string;
    title: string;
    description?: string;
  };
  
  export function SectionHeading({
    eyebrow,
    title,
    description
  }: SectionHeadingProps) {
    return (
      <div>
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
            {eyebrow}
          </p>
        ) : null}
  
        <h1 className="mt-2 text-3xl font-bold">{title}</h1>
  
        {description ? (
          <p className="mt-3 text-slate-600">{description}</p>
        ) : null}
      </div>
    );
  }