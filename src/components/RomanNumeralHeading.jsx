// A heritage-editorial heading: small eyebrow, roman numeral, title, hairline rule
export default function RomanNumeralHeading({
  eyebrow,
  roman,
  title,
  italic,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignClass = align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left';
  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="eyebrow mb-4">
          {roman ? <><span className="engraved-numeral mr-3">{roman}</span>·</> : null}
          <span className={roman ? 'ml-3' : ''}>{eyebrow}</span>
        </p>
      )}
      <h2 className="font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.1] text-royal-900 text-balance">
        {title}{' '}
        {italic && <em className="font-display italic text-brass-600">{italic}</em>}
      </h2>
      {subtitle && (
        <p className="font-serif text-[clamp(1.05rem,1.4vw,1.25rem)] text-ink-500 mt-5 max-w-2xl text-pretty leading-relaxed">
          {subtitle}
        </p>
      )}
      <hr
        className={`brass-rule mt-7 ${align === 'center' ? 'mx-auto w-24' : 'w-24'}`}
      />
    </div>
  );
}
