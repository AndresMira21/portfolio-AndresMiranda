type SectionHeadingProps = {
  kicker: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "mx-auto max-w-2xl text-center items-center"
      : "max-w-2xl";

  return (
    <div className={`flex flex-col ${alignment}`}>
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
        {description}
      </p>
      <div className="section-divider" />
    </div>
  );
}
