import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { ArrowRight } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section style={{ padding: '80px 24px', maxWidth: '1200px', margin: '0 auto', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'center' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 style={{ fontSize: '4rem', marginBottom: '24px', lineHeight: 1.1 }}>
            Construindo soluções <span style={{ backgroundColor: 'var(--color-primary)', padding: '0 8px', borderRadius: '4px' }}>escaláveis</span> e inovadoras.
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '24px', color: '#4B5563', lineHeight: 1.6 }}>
            Olá, sou Lucas Marques. Engenheiro de Software Sênior com forte foco em arquitetura, system design e desenvolvimento ponta a ponta. Construo fundações sólidas e escaláveis que resolvem problemas reais de negócio, entregando desde integrações críticas em backend até experiências fluidas no mobile, independente da plataforma.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <Button variant="dark" onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}>
              Ver Experiências
            </Button>
            <Button variant="primary" onClick={() => window.location.href = 'mailto:lucaspoletis@gmail.com'}>
              Fale Comigo
            </Button>
            <Button variant="secondary" onClick={() => window.open('https://www.linkedin.com/in/lucasmarques90/', '_blank')}>
              LinkedIn
            </Button>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          {/* Efeito de flutuação suave de todo o terminal */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ width: '100%' }}
          >
            {/* Terminal Brutalista / Hi-Tech */}
            <div 
              style={{ 
                width: '100%',
                backgroundColor: '#1E1E1E', // Fundo escuro de terminal
                borderRadius: '12px',
                border: 'var(--border-width) solid var(--color-dark)',
                boxShadow: '16px 16px 0 var(--color-primary)', // Sombra grossa com a cor primária para um toque vibrante/brutalista
                position: 'relative',
                overflow: 'hidden',
                fontFamily: '"Fira Code", monospace' // Fonte mono
              }}>
              
              {/* Barra superior do Terminal */}
              <div style={{ 
                backgroundColor: 'var(--color-white)', 
                padding: '16px', 
                display: 'flex', 
                alignItems: 'center', 
                borderBottom: 'var(--border-width) solid var(--color-dark)'
              }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid var(--color-dark)', backgroundColor: '#FF5F56' }} />
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid var(--color-dark)', backgroundColor: '#FFBD2E' }} />
                  <div style={{ width: '16px', height: '16px', borderRadius: '50%', border: '2px solid var(--color-dark)', backgroundColor: '#27C93F' }} />
                </div>
                <div style={{ flex: 1, textAlign: 'center', fontWeight: 800, color: 'var(--color-dark)', fontSize: '0.9rem', letterSpacing: '1px' }}>
                  LUCAS_OS_V2.0.sh
                </div>
              </div>

              {/* Corpo do Terminal (Linhas de comando animadas) */}
              <div style={{ padding: '32px 24px', color: '#00FF41', fontSize: '1.05rem', lineHeight: 1.8, minHeight: '340px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                  <span style={{ color: '#fff', fontWeight: 'bold' }}>lucas@engine:~$</span> init_system --role="Senior Engineer"
                </motion.div>
                
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
                  <span style={{ color: '#888' }}>[ OK ]</span> Core architecture loaded...
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
                  <span style={{ color: '#fff', fontWeight: 'bold' }}>lucas@engine:~$</span> load_modules -t mobile,backend,ai
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.2 }}>
                  <span style={{ color: '#888' }}>[ OK ]</span> Kotlin Multiplatform (KMP) Active
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 3.6 }}>
                  <span style={{ color: '#888' }}>[ OK ]</span> Clean Architecture Enforced
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 4.8 }}>
                  <span style={{ color: '#fff', fontWeight: 'bold' }}>lucas@engine:~$</span> execute_deployment --force
                </motion.div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 6.0 }}>
                  <span style={{ color: 'var(--color-primary)', fontWeight: 'bold', textShadow: '0 0 8px rgba(0,255,65,0.5)' }}>
                    {'>'} Deploying highly scalable solution... 🚀
                  </span>
                </motion.div>

                {/* Cursor piscando */}
                <motion.div 
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  style={{ width: '12px', height: '24px', backgroundColor: 'var(--color-primary)', marginTop: '8px' }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

