import { motion } from 'framer-motion';
import { Card } from '../components/Card';
import { Badge } from '../components/Badge';

const experiences = [
  {
    company: "CI&T",
    role: "Engenheiro de Software Sênior",
    period: "Jan 2022 - Presente",
    description: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <p>
          Atuação estratégica em arquitetura e engenharia de software para contas globais. Foco em estabilidade, refatoração de sistemas críticos e entregas de altíssimo impacto.
        </p>
        <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li><strong>Banco Pan & BTG:</strong> Liderou a construção de fluxos críticos para o Super App unificado. Viabilizou tecnicamente o lançamento do <em>Cartão Estelar</em> e comandou a reestruturação da Home de Cartões, destravando a escalabilidade do produto.</li>
          <li><strong>Bradesco:</strong> Arquiteto responsável pelo desenvolvimento de bibliotecas base nativas em Kotlin (KMP), desenhando o Journey Container e Injeção de Dependências corporativas, acelerando o desenvolvimento de múltiplos times.</li>
          <li><strong>AB InBev:</strong> Refatorou fluxos de missão crítica, garantindo escalabilidade para grandes volumes de acessos com alto padrão de qualidade e uptime.</li>
        </ul>
      </div>
    ),
    tech: ["Android", "Kotlin", "KMP", "Clean Architecture", "Mobile Banking"]
  },
  {
    company: "Projetos Independentes",
    role: "Tech Lead & Engenheiro de Software",
    period: "Em paralelo",
    description: "Consultoria e execução de ponta a ponta. Atuação como 'Fractional CTO' para empresas (Me Rifa, Palco 78, HortoFrut), desenhando a arquitetura, liderando a implementação de e-commerces e plataformas web/mobile, além de orquestrar a alocação técnica.",
    tech: ["Web Development", "E-commerce", "Full-stack", "Consultoria"]
  },
  {
    company: "Valiant Group",
    role: "Engenheiro Backend",
    period: "Jun 2021 - Dez 2021",
    description: "Construção do zero de uma plataforma de contabilidade online. Liderou todas as decisões de arquitetura de servidor, projetando um backend robusto, seguro e com alta disponibilidade utilizando Node.js e Nest.js.",
    tech: ["Node.js", "Nest.js", "TypeScript", "JavaScript", "PostgreSQL"]
  },
  {
    company: "Softvaro Consultoria",
    role: "Analista de Infraestrutura de TI Sênior",
    period: "Abr 2021 - Jun 2021",
    description: "Liderança solitária de toda a infraestrutura corporativa. Garantiu a disponibilidade e segurança da informação de ponta a ponta, orquestrando servidores, hardware e redes de forma resiliente.",
    tech: ["Servidores", "Hardware", "PfSense", "VMWare", "Zabbix", "Jira"]
  },
  {
    company: "Atmo Educação",
    role: "Analista de Infraestrutura Sênior",
    period: "Fev 2014 - Abr 2021",
    description: "Responsável pela infraestrutura de missão crítica em 28 unidades. Conduziu projetos de expansão, otimizou redes e implementou políticas de firewall corporativas, evoluindo a estabilidade operacional de toda a rede educacional.",
    tech: ["pfSense", "Linux", "Windows Server", "MySQL", "Redes"]
  }
];

export const ExperienceSection = () => {
  return (
    <section id="experience" style={{ padding: '80px 24px', backgroundColor: 'var(--color-light)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '64px', flexWrap: 'wrap' }}>
          <h2 style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', backgroundColor: 'var(--color-primary)', padding: '0 8px', borderRadius: '8px' }}>
            Experiência
          </h2>
          <p style={{ maxWidth: '500px', fontSize: '1.125rem' }}>
            Minha jornada da Infraestrutura à Engenharia de Software.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card variant={index % 2 === 0 ? "light" : "green"}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
                  <div>
                    <h3 style={{ fontSize: 'clamp(1.25rem, 4vw, 1.5rem)', marginBottom: '8px' }}>{exp.role}</h3>
                    <p style={{ fontSize: '1.125rem', fontWeight: 600 }}>{exp.company}</p>
                  </div>
                  <span style={{ fontWeight: 500 }}>{exp.period}</span>
                </div>
                <hr style={{ border: 'none', borderTop: 'var(--border-width) solid var(--color-dark)' }} />
                <p style={{ fontSize: '1.125rem', lineHeight: 1.6 }}>{exp.description}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: 'auto' }}>
                  {exp.tech.map(t => (
                    <Badge key={t} variant={index % 2 === 0 ? "primary" : "default"}>{t}</Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
