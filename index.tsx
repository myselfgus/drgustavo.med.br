import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { GoogleGenAI, Chat } from '@google/genai';

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

const Header = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    onNavigate(section);
    setIsMenuOpen(false);
  };

  return (
    <header className="main-header">
      <div className="container">
        <div className="logo" onClick={() => handleNavigation('home')} aria-label="Voltar para a página inicial" style={{cursor: 'pointer'}}>
          Dr. Gustavo Mendes e Silva
        </div>
        <nav className={isMenuOpen ? 'open' : ''}>
          <button onClick={() => handleNavigation('home')} className={activeSection === 'home' ? 'active' : ''}>Início</button>
          <button onClick={() => handleNavigation('guarulhos')} className={activeSection === 'guarulhos' ? 'active' : ''}>Guarulhos</button>
          <button onClick={() => handleNavigation('sao-jose')} className={activeSection === 'sao-jose' ? 'active' : ''}>SJ do Rio Preto</button>
        </nav>
        <button 
          className="hamburger-menu" 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  );
};

const HomePage = ({onNavigate}) => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Psiquiatria potencializada por IA</h1>
          <p className="hero-subtitle">
            Tratamentos personalizados para TDAH, TEA, ansiedade e depressão que unem rigor científico, IA avançada e escuta empática.
          </p>
          <div className="cta-buttons">
            <button className="btn btn-primary" onClick={() => onNavigate('guarulhos')}>Agendar consulta</button>
            <button className="btn btn-secondary" onClick={() => onNavigate('guarulhos')}>Conheça o método</button>
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
    </>
  );
};

const MicIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><line x1="12" y1="19" x2="12" y2="22"></line></svg>);
const RhythmIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>);
const DocIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>);

const LocationPage = ({ location }) => {
  return (
    <>
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
    </>
  );
}

const Footer = () => (
    <footer className="main-footer">
        <div className="container">
            <p>&copy; {new Date().getFullYear()} Dr. Gustavo Mendes e Silva. Todos os direitos reservados.</p>
        </div>
    </footer>
);

const ChatIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>);
const SendIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>);
const CloseIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>);
const UserIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>);
const AiIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect x="4" y="8" width="16" height="12" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>);
const MenuIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>);


const systemInstruction = `You are a friendly and professional AI assistant for Dr. Gustavo Mendes e Silva, a psychiatrist specializing in TDAH, Autism Spectrum Disorder (ASD/TEA), Anxiety, and Depression. Your goal is to help users by answering their questions about Dr. Mendes e Silva's practice and guiding them on how to schedule an appointment.

Key Information:
- Doctor: Dr. Gustavo Mendes e Silva
- Specialties: TDAH, TEA (Autism), Anxiety, Depression.
- Methodology: Uses a modern approach with AI to identify behavioral patterns and create personalized treatment plans. The process involves: 1) A 2-hour session for active listening. 2) AI-powered analysis. 3) A personalized treatment plan and a detailed narrative documentation of the patient's journey.
- Locations & Contact:
  - Guarulhos: Serves residents of Guarulhos. WhatsApp for scheduling is (11) 9 XXXX-XXXX.
  - São José do Rio Preto: Serves residents of São José do Rio Preto. WhatsApp for scheduling is (17) 9 XXXX-XXXX.
- How to Schedule: All appointments are scheduled exclusively via WhatsApp. Always provide the correct WhatsApp number for the desired location when asked.

Your tone should be:
- Empathetic and reassuring.
- Clear and concise.
- Professional and helpful.

DO NOT:
- Provide medical advice, diagnoses, or treatment recommendations. Always state that you are an AI assistant and cannot provide medical advice, and recommend scheduling a consultation with Dr. Mendes e Silva for any medical questions.
- Make up information. If you don't know the answer, say that you don't have that information and suggest contacting the clinic via WhatsApp.
- Handle personal or sensitive health information.`;

const ChatWidget = ({ isVisible, onClose }) => {
    const [chat, setChat] = useState<Chat | null>(null);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (isVisible) {
            const initChat = async () => {
                try {
                    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
                    const newChat = ai.chats.create({
                        model: 'gemini-2.5-flash',
                        config: { systemInstruction },
                    });
                    setChat(newChat);
                    setMessages([{
                        role: 'model',
                        text: 'Olá! Sou o assistente virtual do Dr. Gustavo. Como posso te ajudar com agendamentos, especialidades ou sobre o método de trabalho?'
                    }]);
                } catch (error) {
                    console.error("Failed to initialize AI Chat:", error);
                    setMessages([{
                        role: 'model',
                        text: 'Desculpe, meu sistema está temporariamente indisponível. Por favor, tente novamente mais tarde.'
                    }]);
                }
            };
            initChat();
        }
    }, [isVisible]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!inputValue.trim() || isLoading || !chat) return;

        const userMessage = { role: 'user', text: inputValue };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);
        setIsTyping(true);

        try {
            const stream = await chat.sendMessageStream({ message: inputValue });
            let modelResponse = '';
            let isFirstChunk = true;

            for await (const chunk of stream) {
                if (isFirstChunk) {
                    setIsTyping(false);
                    setMessages(prev => [...prev, { role: 'model', text: '' }]);
                    isFirstChunk = false;
                }
                modelResponse += chunk.text;
                setMessages(prev => {
                    const newMessages = [...prev];
                    newMessages[newMessages.length - 1].text = modelResponse;
                    return newMessages;
                });
            }
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages(prev => [...prev, { role: 'model', text: 'Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente.' }]);
        } finally {
            setIsLoading(false);
            setIsTyping(false);
        }
    };

    return (
        <div className={`chat-widget ${isVisible ? 'visible' : ''}`} aria-hidden={!isVisible}>
            <div className="chat-header">
                <h3>Assistente Virtual</h3>
                <button onClick={onClose} aria-label="Fechar chat"><CloseIcon /></button>
            </div>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.role}`}>
                        <div className="avatar">
                            {msg.role === 'model' ? <AiIcon /> : <UserIcon />}
                        </div>
                        <div className="message-bubble">{msg.text}</div>
                    </div>
                ))}
                 {isTyping && (
                    <div className="chat-message model">
                        <div className="avatar"><AiIcon /></div>
                        <div className="message-bubble typing-indicator">
                            <span></span><span></span><span></span>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            <form className="chat-input-form" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Digite sua mensagem..."
                    aria-label="Digite sua mensagem"
                    disabled={isLoading}
                />
                <button type="submit" disabled={isLoading || !inputValue.trim()} aria-label="Enviar mensagem">
                    <SendIcon />
                </button>
            </form>
        </div>
    );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isChatOpen, setIsChatOpen] = useState(false);

  const homeRef = useRef(null);
  const guarulhosRef = useRef(null);
  const saoJoseRef = useRef(null);
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // FIX: Cast the result of querySelector to HTMLElement to access offsetHeight.
      const headerOffset = document.querySelector<HTMLElement>('.main-header')?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const sections = [
      { id: 'home', ref: homeRef },
      { id: 'guarulhos', ref: guarulhosRef },
      { id: 'sao-jose', ref: saoJoseRef }
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' } 
    );

    sections.forEach(section => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} onNavigate={scrollToSection} />
      <main>
          <div ref={homeRef} id="home">
            <HomePage onNavigate={scrollToSection} />
          </div>
          <div ref={guarulhosRef} id="guarulhos">
            <LocationPage location={locationData.guarulhos} />
          </div>
          <div ref={saoJoseRef} id="sao-jose">
            <LocationPage location={locationData.saoJose} />
          </div>
      </main>
      <Footer />
      <button 
        className={`chat-fab ${isChatOpen ? 'open' : ''}`} 
        onClick={() => setIsChatOpen(!isChatOpen)}
        aria-label={isChatOpen ? 'Fechar chat' : 'Abrir chat com assistente virtual'}
      >
        <ChatIcon />
      </button>
      <ChatWidget isVisible={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);