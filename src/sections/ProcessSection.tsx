import { Accordion } from '../components/Accordion';

const processes = [
  {
    number: "01",
    title: "1. Arquitetura & Design de Solução",
    content: "Imersão profunda nos requisitos de negócio e modelagem de arquiteturas escaláveis (Clean Architecture, Microsserviços, EDA). Desenho técnico estratégico com foco em alta disponibilidade, resiliência e segurança, alinhando produto e tecnologia."
  },
  {
    number: "02",
    title: "2. Construção & Código Escalável",
    content: "Desenvolvimento Full-Cycle. Implementação de ecossistemas robustos via tecnologias nativas/híbridas (Android, Flutter, React Native, KMP) e backends de alta performance (Java, Kotlin, Node.js), aplicando design patterns e código limpo (SOLID)."
  },
  {
    number: "03",
    title: "3. Testes & Segurança Contínua",
    content: "Garantia de qualidade contínua com forte cobertura através da pirâmide de testes (Unitários, Integração e E2E). Análise estática, testes de performance e aplicação de práticas DevSecOps para entregar um software blindado e estável."
  },
  {
    number: "04",
    title: "4. Inovação Guiada por IA",
    content: "Integração de IA (LLMs, arquitetura RAG, Agentes MCP, Engenharia de Prompt) aos fluxos do produto para automatizar decisões, analisar dados complexos e criar funcionalidades inovadoras que colocam a solução à frente do mercado."
  },
  {
    number: "05",
    title: "5. Entregas Ágeis & Observabilidade",
    content: "Construção de esteiras automatizadas (CI/CD) para entregas ágeis e sem atrito. Implantação em infraestrutura Cloud (AWS) com monitoramento proativo (APM) e telemetria avançada, garantindo operação contínua em ambientes de missão crítica."
  }
];

export const ProcessSection = () => {
  return (
    <section id="process" style={{ padding: '40px 24px', maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '40px', flexWrap: 'wrap' }}>
        <h2 style={{ fontSize: '2.5rem', backgroundColor: 'var(--color-primary)', padding: '0 8px', borderRadius: '8px' }}>
          Metodologia de Trabalho
        </h2>
        <p style={{ maxWidth: '500px', fontSize: '1.125rem' }}>
          Engenharia de software de ponta a ponta: do discovery à observabilidade, entregando produtos escaláveis, seguros e impulsionados por Inteligência Artificial.
        </p>
      </div>
      
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {processes.map((proc) => (
          <Accordion key={proc.number} number={proc.number} title={proc.title} content={proc.content} />
        ))}
      </div>
    </section>
  );
};
