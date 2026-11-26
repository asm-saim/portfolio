const SectionHeading = ({ id, eyebrow, title, description, className = "" }) => (
  <div className={`max-w-2xl ${className}`}>
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-400">{eyebrow}</p>
    <h2 id={id} className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
      {title}
    </h2>
    {description ? <p className="mt-3 text-sm leading-7 text-gray-400 sm:text-base">{description}</p> : null}
  </div>
);

export default SectionHeading;
