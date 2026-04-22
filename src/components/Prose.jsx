// Prose — a small helper to render HTML strings (from siteData) so that
// inline brass hyperlinks and emphasis survive into the rendered paragraph.
// We intentionally accept `html` for editorial paragraphs that contain
// <a class="prose-link" ...> — the content is authored, not user-supplied.
export default function Prose({ html, className = '', as = 'p' }) {
  const Tag = as;
  return (
    <Tag
      className={className}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
