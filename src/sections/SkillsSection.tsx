import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Smartphone, Server, BrainCircuit, ShieldCheck, ArrowRight } from 'lucide-react';

const skills = [
  { icon: <Smartphone size={40} />, title: "Mobile Dev", desc: "Android, Kotlin, Compose, KMP, Flutter, React Native", variant: "light" },
  { icon: <Server size={40} />, title: "Backend", desc: "Node.js, Java, Kotlin, JS/TS, APIs, Microsserviços", variant: "green" },
  { icon: <BrainCircuit size={40} />, title: "Inteligência Artificial", desc: "RAG, MCP, Engenharia de Prompt", variant: "dark" },
  { icon: <ShieldCheck size={40} />, title: "Cloud & DevOps", desc: "AWS, CI/CD, Arquitetura de Nuvem", variant: "light" }
] as const;

export const SkillsSection = () => {
  return (
    <section id="skills" style={{ padding: '40px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: '2.5rem', backgroundColor: 'var(--color-primary)', padding: '0 8px', borderRadius: '8px' }}>
            Áreas de Expertise
          </h2>
          <p style={{ maxWidth: '600px', fontSize: '1.125rem' }}>
            Foco em entregar soluções robustas que integram o que há de melhor em ecossistemas móveis, backend escalável e infraestrutura em nuvem.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
          {skills.map((skill, index) => {
            const isDark = skill.variant === 'dark';
            const titleBgClass = isDark ? 'var(--color-white)' : (skill.variant === 'green' ? 'var(--color-white)' : 'var(--color-primary)');
            const titleColorClass = 'var(--color-dark)';
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card variant={skill.variant} style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
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
                        {skill.title}
                      </h3>
                    </div>
                    <div style={{ color: isDark ? 'var(--color-white)' : 'var(--color-dark)' }}>
                      {skill.icon}
                    </div>
                  </div>
                  
                  <p style={{ marginTop: '16px', marginBottom: '16px', lineHeight: 1.6 }}>{skill.desc}</p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: 'auto', cursor: 'pointer' }}>
                    <div style={{ 
                      backgroundColor: isDark ? 'var(--color-white)' : 'var(--color-dark)', 
                      color: isDark ? 'var(--color-dark)' : 'var(--color-primary)',
                      borderRadius: '50%', padding: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}>
                      <ArrowRight size={24} />
                    </div>
                    <span style={{ fontSize: '1.125rem', fontWeight: 500, display: 'none' }}>Learn more</span>
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
