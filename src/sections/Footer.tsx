const LinkedinIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const GithubIcon = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);


export const Footer = () => {
  return (
    <div style={{ padding: '0 24px', maxWidth: '1248px', margin: '80px auto 0 auto' }}>
      <footer style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-white)', padding: '48px 48px 24px 48px', borderRadius: '40px 40px 0 0' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap' }}>
          {/* Coluna 1: Contato */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: '1', minWidth: '250px' }}>
            <h3 style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-dark)', display: 'inline-block', padding: '0 8px', borderRadius: '4px', width: 'fit-content' }}>
              Fale Comigo
            </h3>
            <p><strong>Email:</strong> lucaspoletis@gmail.com</p>
            <p><strong>Telefone:</strong> (19) 99260-5660</p>
            <p><strong>Local:</strong> Hortolândia, SP - Brasil</p>
          </div>

          {/* Coluna 2: Navegação */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: '1', minWidth: '200px' }}>
            <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '8px' }}>Navegação</h3>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <a href="#about" style={{ color: 'var(--color-white)', textDecoration: 'none', transition: 'color 0.2s' }}>Sobre</a>
              <a href="#experience" style={{ color: 'var(--color-white)', textDecoration: 'none', transition: 'color 0.2s' }}>Experiência</a>
              <a href="#skills" style={{ color: 'var(--color-white)', textDecoration: 'none', transition: 'color 0.2s' }}>Habilidades</a>
              <a href="#process" style={{ color: 'var(--color-white)', textDecoration: 'none', transition: 'color 0.2s' }}>Método de trabalho</a>
            </nav>
          </div>

          {/* Coluna 3: Redes Sociais */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: '1', minWidth: '200px' }}>
            <h3 style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', fontWeight: 600, color: 'var(--color-primary)', marginBottom: '8px' }}>Redes Sociais</h3>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a href="https://www.linkedin.com/in/lucasmarques90/" target="_blank" rel="noreferrer" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-dark)', borderRadius: '50%', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}>
                <LinkedinIcon size={24} />
              </a>
              <a href="https://github.com/eulucasm" target="_blank" rel="noreferrer" style={{ backgroundColor: 'var(--color-white)', color: 'var(--color-dark)', borderRadius: '50%', padding: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s' }}>
                <GithubIcon size={24} />
              </a>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: '32px 0' }} />
        
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap', fontFamily: 'var(--font-heading)' }}>
          <p>© 2026. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
    </div>
  );
};
