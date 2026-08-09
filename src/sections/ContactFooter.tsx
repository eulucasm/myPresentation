import { Button } from '../components/Button';

export const ContactFooter = () => {
  return (
    <footer style={{ backgroundColor: 'var(--color-dark)', color: 'var(--color-white)', padding: '64px 24px', borderRadius: '40px 40px 0 0', marginTop: '80px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '32px' }}>
        <h2 style={{ fontSize: '2.5rem', backgroundColor: 'var(--color-primary)', color: 'var(--color-dark)', padding: '0 8px', borderRadius: '8px' }}>
          Vamos Conversar?
        </h2>
        <p style={{ fontSize: '1.25rem', maxWidth: '600px' }}>
          Estou sempre aberto a novos desafios e oportunidades para colaborar em projetos escaláveis e inovadores.
        </p>
        
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Button onClick={() => window.open('https://www.linkedin.com/in/lucasmarques90/', '_blank')}>
            LinkedIn
          </Button>
          <Button onClick={() => window.open('https://github.com/eulucasm', '_blank')}>
            GitHub
          </Button>
          <Button onClick={() => window.location.href = 'mailto:lucaspoletis@gmail.com'}>
            Email
          </Button>
        </div>
        
        <hr style={{ width: '100%', border: 'none', borderTop: '1px solid rgba(255,255,255,0.2)', margin: '32px 0' }} />
        <p style={{ fontFamily: 'var(--font-heading)' }}>© 2026 Lucas Marques. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
