import { motion } from 'framer-motion';
import { Card } from '../components/Card';

export const AboutSection = () => {
  const competencies = [
    { category: "Linguagens", items: ["Kotlin", "Java", "Kotlin Multiplatform (KMP)"] },
    { category: "Frameworks e SDKs", items: ["Android SDK", "Jetpack Components", "ViewModel", "Room", "LiveData", "Navigation", "Flow", "Compose"] },
    { category: "Arquitetura", items: ["Clean Architecture", "MVVM", "MVI", "MVP", "SOLID", "Modularização"] },
    { category: "Segurança Mobile", items: ["Ofuscação de Código", "Injeção de Dependência", "Secure SharedPreferences", "DataStore"] },
    { category: "Testes", items: ["JUnit", "MockK", "Mockito", "Espresso", "UI", "Performance"] },
    { category: "Integração", items: ["RESTful (Retrofit, Ktor)", "WebSockets", "Coroutines", "Flow"] },
    { category: "Dados & DevOps", items: ["Room", "SQLite", "Firestore", "Gradle", "CI/CD", "Git", "GitFlow"] },
    { category: "Outros", items: ["Crashlytics", "Firebase Analytics", "Jira", "Azure", "AWS", "Google Cloud"] }
  ];

  return (
    <section id="about" style={{ padding: '40px 24px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        
        {/* Sobre Mim */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', backgroundColor: 'var(--color-primary)', padding: '0 8px', borderRadius: '8px', color: 'var(--color-dark)' }}>
              Sobre Mim
            </h2>
          </div>
          
          <Card variant="light" style={{ padding: '40px' }}>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', lineHeight: 1.6, marginBottom: '16px', color: 'var(--color-dark)' }}>
              Sou um Engenheiro de Software Sênior apaixonado pelo <strong>Desenvolvimento de Software</strong> como um todo, criando soluções escaláveis para todas as plataformas e não me limitando a apenas uma stack. Com uma forte base em Infraestrutura e Redes, possuo uma visão ponta a ponta do ciclo de vida das aplicações.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', lineHeight: 1.6, marginBottom: '16px', color: 'var(--color-dark)' }}>
              Atualmente, desenvolvo soluções focadas em arquitetura robusta, me preocupando profundamente com o <strong>System Design</strong> para garantir que os produtos suportem alto crescimento e estejam preparados para o futuro.
            </p>
            <p style={{ fontSize: 'clamp(1rem, 3vw, 1.25rem)', lineHeight: 1.6, marginBottom: '0', color: 'var(--color-dark)' }}>
              Tenho forte vivência técnica e de negócios nos setores de <strong>Banking e Meios de Pagamento</strong>, liderando integrações e entregas críticas onde a segurança, resiliência e performance são absolutamente inegociáveis.
            </p>
            <div style={{ 
              backgroundColor: 'var(--color-dark)', 
              color: 'var(--color-primary)', 
              padding: '24px', 
              borderRadius: '8px', 
              fontSize: 'clamp(1rem, 3vw, 1.25rem)',
              fontWeight: 600,
              fontStyle: 'italic',
              marginTop: '24px',
              border: 'var(--border-width) solid var(--color-dark)'
            }}>
              "Meu foco é entregar código limpo, seguro e arquiteturas resilientes."
            </div>
          </Card>
        </motion.div>

        {/* Conhecimentos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '40px' }}>
            <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)' }}>O ferramental que utilizo para escalar negócios</h3>
            <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', backgroundColor: 'var(--color-primary)', padding: '0 8px', borderRadius: '8px', color: 'var(--color-dark)', display: 'inline-block', alignSelf: 'flex-start' }}>
              Conhecimentos
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px' }}>
            {competencies.map((comp, idx) => (
              <Card key={idx} variant="light" style={{ padding: '32px' }}>
                <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', marginBottom: '24px', color: 'var(--color-dark)', fontWeight: 700 }}>{comp.category}</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                  {comp.items.map((item, i) => (
                    <span key={i} style={{ 
                      backgroundColor: 'var(--color-white)', 
                      border: 'var(--border-width) solid var(--color-dark)',
                      boxShadow: '2px 2px 0 var(--color-dark)',
                      padding: '8px 16px', 
                      borderRadius: '16px', 
                      fontSize: '0.9rem',
                      fontWeight: 600,
                      color: 'var(--color-dark)',
                      transition: 'transform 0.2s, box-shadow 0.2s',
                      cursor: 'default'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translate(-2px, -2px)';
                      e.currentTarget.style.boxShadow = '4px 4px 0 var(--color-dark)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translate(0, 0)';
                      e.currentTarget.style.boxShadow = '2px 2px 0 var(--color-dark)';
                    }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
