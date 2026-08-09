import { Button } from '../components/Button';
import styles from './ContactSection.module.css';

export const ContactSection = () => {
  return (
    <section id="contact" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '64px', flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', backgroundColor: 'var(--color-primary)', padding: '0 8px', borderRadius: '8px' }}>
          Contato
        </h2>
        <p style={{ maxWidth: '500px', fontSize: '1.125rem' }}>
          Vamos discutir seu próximo projeto? Mande uma mensagem para conversarmos sobre arquitetura e escalabilidade.
        </p>
      </div>

      <div className={styles.contactContainer}>
        <div className={styles.formWrapper}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" placeholder="Seu nome" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="seuemail@exemplo.com" />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensagem</label>
              <textarea id="message" placeholder="Conte-me um pouco sobre sua ideia..."></textarea>
            </div>
            <Button variant="dark" style={{ width: '100%' }}>Enviar Mensagem</Button>
          </form>
        </div>
        <div className={styles.illustration}>
          <div className={styles.shapeStar}></div>
        </div>
      </div>
    </section>
  );
};
