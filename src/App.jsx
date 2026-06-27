import React, { useState } from 'react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'tecnologia', label: 'Nossa Tecnologia' },
  { id: 'sobre', label: 'Sobre Nos' },
];

const cards = [
  {
    title: 'Coleta inteligente',
    image: '/assets/img/image2.png',
    summary:
      'Apoiamos a organizacao da coleta e separacao de materiais reciclaveis com processos simples e rastreaveis.',
    details:
      'O objetivo e aproximar comunidade, tecnologia e logistica para reduzir desperdicio e criar novas oportunidades de renda.',
  },
  {
    title: 'Educacao ambiental',
    image: '/assets/img/image2.png',
    summary:
      'Criamos acoes educativas para explicar o valor da reciclagem e incentivar habitos sustentaveis no dia a dia.',
    details:
      'As atividades podem ser aplicadas em escolas, comunidades e empresas, com linguagem acessivel e foco em pratica.',
  },
  {
    title: 'Geracao de renda',
    image: '/assets/img/image2.png',
    summary:
      'Conectamos materiais, parceiros e participantes para fortalecer uma cadeia de reciclagem mais justa.',
    details:
      'A proposta e transformar residuos em valor social, ampliando o impacto economico para quem participa do projeto.',
  },
];

function App() {
  const [activePage, setActivePage] = useState('home');
  const [showCards, setShowCards] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const isTechnology = activePage === 'tecnologia';

  return (
    <>
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main>
        {isTechnology ? (
          <TechnologyPage />
        ) : (
          <HomePage
            showCards={showCards}
            activeCard={activeCard}
            onToggleCards={() => setShowCards((current) => !current)}
            onToggleCard={(index) =>
              setActiveCard((current) => (current === index ? null : index))
            }
          />
        )}
      </main>
      <Footer />
      <ContactButton />
    </>
  );
}

function Navbar({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegacao principal">
        <button className="brand" type="button" onClick={() => onNavigate('home')}>
          Projeto Zro
        </button>

        <div className="menu">
          {navItems.map((item) => (
            <button
              className={activePage === item.id ? 'nav-link active' : 'nav-link'}
              key={item.id}
              type="button"
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </button>
          ))}
          <button className="join-button" type="button" onClick={() => onNavigate('sobre')}>
            Quero Participar
          </button>
        </div>
      </nav>
    </header>
  );
}

function HomePage({ showCards, activeCard, onToggleCards, onToggleCard }) {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">Projeto social</p>
          <h1>Reciclagem com tecnologia e impacto comunitario</h1>
          <p>
            O Projeto Zro aproxima pessoas, instituicoes e solucoes digitais para
            fortalecer a reciclagem, reduzir desperdicios e gerar renda.
          </p>
          <p>
            A proposta combina educacao ambiental, organizacao de materiais e
            participacao social em uma experiencia simples de acompanhar.
          </p>
          <button className="primary-button" type="button" onClick={onToggleCards}>
            {showCards ? 'Ver menos' : 'Ver mais'}
          </button>
        </div>

        <div className="hero-media" aria-hidden="true">
          <img
            src="/assets/img/Gemini_Generated_Image_hq2vidhq2vidhq2v.png"
            alt=""
          />
        </div>
      </section>

      {showCards && (
        <section className="work-section" id="produtos">
          <div className="section-heading">
            <p className="eyebrow">Atuacao</p>
            <h2>O que nos fazemos?</h2>
          </div>

          <div className="cards" aria-label="Areas de atuacao">
            {cards.map((card, index) => {
              const isActive = activeCard === index;

              return (
                <button
                  className={isActive ? 'card active' : 'card'}
                  key={card.title}
                  type="button"
                  onClick={() => onToggleCard(index)}
                  aria-pressed={isActive}
                >
                  {!isActive ? (
                    <>
                      <img src={card.image} alt="" />
                      <h3>{card.title}</h3>
                      <p>{card.summary}</p>
                    </>
                  ) : (
                    <>
                      <h3>{card.title}</h3>
                      <p>{card.details}</p>
                    </>
                  )}
                </button>
              );
            })}
          </div>
        </section>
      )}
    </>
  );
}

function TechnologyPage() {
  return (
    <section className="technology-page" id="tecnologia">
      <div className="section-heading">
        <p className="eyebrow">Nossa tecnologia</p>
        <h1>Uma base digital para organizar impacto ambiental</h1>
      </div>
      <div className="technology-grid">
        <article>
          <h2>Rastreamento</h2>
          <p>
            Registra etapas de coleta, separacao e destino dos materiais para dar
            visibilidade ao processo.
          </p>
        </article>
        <article>
          <h2>Indicadores</h2>
          <p>
            Reune dados sobre volume, participacao e impacto para orientar decisoes
            do projeto.
          </p>
        </article>
        <article>
          <h2>Participacao</h2>
          <p>
            Facilita o contato com pessoas interessadas em contribuir, aprender ou
            apoiar a iniciativa.
          </p>
        </article>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Projeto Zro</h2>
        <p>Site institucional em React</p>
      </div>
      <strong>Direitos reservados</strong>
    </footer>
  );
}

function ContactButton() {
  return (
    <a className="contact-button" href="#" aria-label="Fale conosco pelo WhatsApp">
      <span>Fale Conosco</span>
      <img src="/assets/img/whatsapp.png" alt="" />
    </a>
  );
}

export default App;
