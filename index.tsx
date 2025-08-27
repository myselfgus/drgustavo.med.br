import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

const locationData = {
  guarulhos: {
    name: 'Guarulhos',
    serviceArea: 'moradores de Guarulhos',
    whatsapp: '(11) 9 XXXX-XXXX',
    whatsappLink: 'https://wa.me/55119'
  },
  saoJose: {
    name: 'São José do Rio Preto',
    serviceArea: 'moradores de São José do Rio Preto',
    whatsapp: '(17) 9 XXXX-XXXX',
    whatsappLink: 'https://wa.me/55179'
  }
};

const Header = ({ page, setPage }) => {
  return (
    <header className="main-header">
      <div className="container">
        <div className="logo" onClick={() => setPage('home')} aria-label="Voltar para a página inicial">
          Dr. Gustavo Mendes
        </div>
        <nav>
          <button onClick={() => setPage('home')} className={page === 'home' ? 'active' : ''}>Início</button>
          <button onClick={() => setPage('guarulhos')} className={page === 'guarulhos' ? 'active' : ''}>Guarulhos</button>
          <button onClick={() => setPage('sao-jose')} className={page === 'sao-jose' ? 'active' : ''}>SJ do Rio Preto</button>
        </nav>
      </div>
    </header>
  );
};

const HomePage = ({setPage}) => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Psiquiatria potencializada por IA</h1>
          <p className="hero-subtitle">Cuidado especializado em TDAH, TEA, Ansiedade e Depressão com uma abordagem moderna e humana.</p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => setPage('guarulhos')}>Agendar consulta</button>
            <button className="btn btn-secondary" onClick={() => setPage('guarulhos')}>Conheça o método</button>
          </div>
        </div>
      </section>
      
      <section className="specialties">
        <div className="container">
           <h2 className="section-title">Nossas Especialidades</h2>
           <div className="specialties-grid">
              <div className="specialty-card">
                  <div className="card-gradient gradient-1"></div>
                  <h3>TDAH</h3>
                  <p>Diagnóstico e tratamento do Transtorno de Déficit de Atenção e Hiperatividade.</p>
              </div>
              <div className="specialty-card">
                  <div className="card-gradient gradient-2"></div>
                  <h3>TEA</h3>
                  <p>Apoio e manejo para pessoas no Espectro Autista, com foco na qualidade de vida.</p>
              </div>
              <div className="specialty-card">
                  <div className="card-gradient gradient-3"></div>
                  <h3>Ansiedade</h3>
                  <p>Estratégias personalizadas para gerenciar e superar os transtornos de ansiedade.</p>
              </div>
              <div className="specialty-card">
                  <div className="card-gradient gradient-4"></div>
                  <h3>Depressão</h3>
                  <p>Cuidado integral para o tratamento da depressão, buscando a remissão dos sintomas.</p>
              </div>
           </div>
        </div>
      </section>
    </main>
  );
};

const MicIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>);
const RhythmIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>);
const DocIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>);

const LocationPage = ({ location }) => {
  return (
    <main className="location-page">
       <section className="location-hero">
        <div className="container">
          <h1 className="location-title">Atendimento em {location.name}</h1>
          <p className="location-subtitle">Cuidado psiquiátrico online, moderno e humano, disponível para {location.serviceArea}.</p>
        </div>
      </section>
      
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">Uma Nova Abordagem de Cuidado</h2>
           <div className="timeline-container">
            <div className="timeline-item">
              <div className="timeline-icon-wrapper color-1">
                <MicIcon />
              </div>
              <div className="timeline-content">
                <h3>Você Fala.</h3>
                <p>Sessões de 2 horas com escuta ativa em um espaço seguro e sem julgamentos para você compartilhar sua história.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon-wrapper color-2">
                <RhythmIcon />
              </div>
              <div className="timeline-content">
                <h3>Análise e Ritmo.</h3>
                <p>Utilizamos tecnologia de IA para identificar padrões comportamentais e otimizar o tratamento de forma contínua.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-icon-wrapper color-3">
                <DocIcon />
              </div>
              <div className="timeline-content">
                <h3>Tratamento e Tradução.</h3>
                <p>Criamos um plano personalizado e uma documentação narrativa, um registro detalhado da sua jornada, construído em conjunto.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
            <h2 className="section-title">Entre em contato</h2>
            <div className="contact-card">
              <h3>Agende sua consulta online</h3>
              <p>Consultas online para {location.serviceArea}.</p>
              <p><strong>WhatsApp:</strong> <a href={location.whatsappLink} className="whatsapp-number" target="_blank" rel="noopener noreferrer">{location.whatsapp}</a></p>
              <a href={location.whatsappLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">Contatar via WhatsApp</a>
            </div>
        </div>
      </section>
    </main>
  );
}

const Footer = () => (
    <footer className="main-footer">
        <div className="container">
            <p>&copy; {new Date().getFullYear()} Dr. Gustavo Mendes. Todos os direitos reservados.</p>
        </div>
    </footer>
)

const App = () => {
  const [page, setPage] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const renderPage = () => {
    switch(page) {
      case 'guarulhos':
        return <LocationPage location={locationData.guarulhos} />;
      case 'sao-jose':
        return <LocationPage location={locationData.saoJose} />;
      case 'home':
      default:
        return <HomePage setPage={setPage} />;
    }
  }

  return (
    <>
      <Header page={page} setPage={setPage} />
      {renderPage()}
      <Footer />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);