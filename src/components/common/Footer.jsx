import { AUTHOR_NAME, SOCIAL_LINKS } from '../../utils/constants';

const Footer = () => {
  return (
    <footer style={{ padding: '2rem', borderTop: '1px solid var(--border)', marginTop: 'auto', textAlign: 'center' }}>
      <p>&copy; {new Date().getFullYear()} {AUTHOR_NAME}. All rights reserved.</p>
      <div style={{ marginTop: '1rem', display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        {Object.entries(SOCIAL_LINKS).map(([platform, url]) => (
          <a key={platform} href={url} target="_blank" rel="noopener noreferrer" style={{ textTransform: 'capitalize' }}>
            {platform}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
