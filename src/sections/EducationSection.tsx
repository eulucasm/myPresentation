import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { GraduationCap, Award } from 'lucide-react';

export const EducationSection = () => {
  const education = [
    {
      institution: "ESAMC",
      degree: "Executive MBA, Project Management",
      period: "mar de 2022 – jun de 2023",
      description: "Planejamento é fundamental para o bom desempenho. Por isso, a gestão de projetos alinhada à estratégia da empresa é um diferencial essencial.",
      icon: <Award size={32} color="var(--color-primary)" />
    },
    {
      institution: "ESAMC",
      degree: "Bacharelado, Computer Engineering",
      period: "jul de 2016 – dez de 2021",
      description: "Nível de formação: Engenharia da computação com ênfase em gestão empresarial.\nAtividades e grupos: Maratona Esamc;\nCurso de engenharia, com foco em gestão.",
      icon: <GraduationCap size={32} color="var(--color-primary)" />
    },
    {
      institution: "ETEC - Escola Técnica Estadual de São Paulo",
      degree: "Técnico, Informatics",
      period: "2012 – 2013",
      description: "",
      icon: <GraduationCap size={32} color="var(--color-primary)" />
    }
  ];

  return (
    <section id="education" style={{ padding: '80px 24px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px', flexWrap: 'wrap' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', 
            backgroundColor: 'var(--color-primary)', 
            padding: '4px 16px', 
            borderRadius: '8px', 
            color: 'var(--color-dark)'
          }}>
            Formação Acadêmica
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card variant="light" style={{ padding: '32px', display: 'flex', gap: '24px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
                <div style={{ 
                  backgroundColor: 'var(--color-dark)', 
                  padding: '16px', 
                  borderRadius: '16px',
                  border: 'var(--border-width) solid var(--color-dark)',
                  flexShrink: 0
                }}>
                  {item.icon}
                </div>
                <div style={{ flex: 1, minWidth: '250px' }}>
                  <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', fontWeight: 800, color: 'var(--color-dark)', marginBottom: '8px' }}>
                    {item.institution}
                  </h3>
                  <div style={{ fontSize: '1.125rem', fontWeight: 600, color: 'var(--color-dark)', marginBottom: '4px' }}>
                    {item.degree}
                  </div>
                  <div style={{ fontSize: '0.9rem', color: '#6B7280', marginBottom: item.description ? '16px' : '0' }}>
                    {item.period}
                  </div>
                  {item.description && (
                    <p style={{ fontSize: '1rem', color: '#4B5563', lineHeight: 1.6, whiteSpace: 'pre-line' }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
