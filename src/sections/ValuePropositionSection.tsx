import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { ShieldCheck, Layers, Users, ArrowRight, Lightbulb } from 'lucide-react';

export const ValuePropositionSection = () => {
  const values = [
    {
      icon: <Layers size={40} />,
      title: "Escalabilidade",
      description: "Desenho arquiteturas robustas e adaptáveis que permitem que seu produto cresça estruturado, independente da stack ou linguagem utilizada.",
      variant: "light"
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Criação",
      description: "Tiro as ideias do papel. Do rascunho ao deploy, construo sites, aplicativos e plataformas completas, colocando a sua visão na prática.",
      variant: "green"
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Segurança",
      description: "Aplico as melhores práticas de segurança e otimização para garantir um aplicativo fluido, responsivo e blindado.",
      variant: "dark"
    },
    {
      icon: <Users size={40} />,
      title: "Liderança",
      description: "Guio a equipe técnica, realizo code reviews rigorosos e elevo a régua de qualidade e cultura de engenharia do time.",
      variant: "light"
    }
  ] as const;

  return (
    <section id="value" style={{ padding: '40px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '40px', display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            <h2 style={{ 
              fontSize: '2.5rem', 
              backgroundColor: 'var(--color-primary)', 
              padding: '0 8px', 
              borderRadius: '8px', 
              color: 'var(--color-dark)'
            }}>
              Como posso ajudar a sua empresa?
            </h2>
          </div>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-dark)', lineHeight: 1.6, maxWidth: '900px' }}>
            Contratar um Engenheiro Sênior não é apenas sobre adicionar mãos ao teclado. É sobre trazer visão estratégica, previsibilidade nas entregas e maturidade para o seu produto.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
          {values.map((val, idx) => {
            const isDark = val.variant === 'dark';
            const titleBgClass = isDark ? 'var(--color-white)' : (val.variant === 'green' ? 'var(--color-white)' : 'var(--color-primary)');
            const titleColorClass = 'var(--color-dark)';

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Card variant={val.variant} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <h3 style={{ 
                        fontSize: '1.5rem', 
                        backgroundColor: titleBgClass, 
                        color: titleColorClass, 
                        padding: '4px 8px', 
                        borderRadius: '8px',
                        display: 'inline-block',
                        width: 'fit-content'
                      }}>
                        {val.title}
                      </h3>
                    </div>
                    <div style={{ color: isDark ? 'var(--color-white)' : 'var(--color-dark)' }}>
                      {val.icon}
                    </div>
                  </div>
                  
                  <p style={{ marginTop: '16px', marginBottom: '16px', lineHeight: 1.6 }}>{val.description}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto', cursor: 'pointer' }}>
                    <div style={{ 
                      backgroundColor: isDark ? 'var(--color-white)' : 'var(--color-dark)', 
                      color: isDark ? 'var(--color-dark)' : 'var(--color-primary)',
                      borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <ArrowRight size={24} />
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
