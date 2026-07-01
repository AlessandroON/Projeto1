import React, { useEffect, useState } from 'react';
import productCategories from './data/products.json';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'produtos', label: 'Produtos' },
  { id: 'tecnologia', label: 'Nossa Tecnologia' },
  { id: 'sobre', label: 'Sobre Nos' },
];

const impactSteps = [
  ['01', 'Resíduo doado', 'Empresas e parceiros destinam plástico para reaproveitamento.'],
  ['02', 'Produção nas oficinas', 'As cooperativas transformam o material em peças e produtos.'],
  ['03', 'Compra e patrocínio', 'Empresas e prefeituras geram demanda para móveis e lixeiras.'],
  ['04', 'Renda e impacto', 'A produção fortalece o trabalho e a renda das participantes.'],
];

const impactIndicators = [
  ['Plástico reaproveitado', 'Volume processado pelas oficinas'],
  ['Mulheres participantes', 'Cooperadas envolvidas no projeto'],
  ['Produtos fabricados', 'Peças produzidas com material reciclado'],
  ['Renda gerada', 'Impacto econômico para as participantes'],
];

const workshops = [
  {
    city: 'Fortaleza',
    state: 'CE',
    description:
      'Cooperativa de mulheres que recebe plástico e transforma o material em novos produtos.',
  },
  {
    city: 'Pedra Furada',
    state: 'SE',
    description:
      'Cooperativa de mulheres que recebe plástico e transforma o material em novos produtos.',
  },
  {
    city: 'Itaparica',
    state: 'BA',
    description:
      'Cooperativa de mulheres que recebe plástico e transforma o material em novos produtos.',
  },
  {
    city: 'Trancoso',
    state: 'BA',
    description:
      'Cooperativa de mulheres que recebe plástico e transforma o material em novos produtos.',
  },
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

const heroSlides = [
  '/assets/img/carrosel/Ecodesk (1).png',
  '/assets/img/carrosel/Ecodesk (2).png',
  '/assets/img/carrosel/Equipe Pedra Furada.png',
  '/assets/img/carrosel/Ilustração_Sem_Título 1.png',
  '/assets/img/carrosel/Ilustração_Sem_Título 7.png',
  '/assets/img/carrosel/Mesa ITAPARICA (3).png',
];

const machineLines = [
  {
    id: 'perfis',
    title: 'Máquina de perfis para móveis',
    label: 'Linha de móveis',
    description:
      'Produz perfis de plástico reciclado usados na montagem dos nossos móveis. A linha trabalha com peças circulares, quadradas e retangulares em diferentes medidas.',
    shapes: [
      { letter: 'C', name: 'Circular', models: ['C38', 'C50'] },
      { letter: 'Q', name: 'Quadrado', models: ['Q4040', 'Q5050', 'Q6060'] },
      { letter: 'R', name: 'Retângulo', models: ['R7030'] },
    ],
  },
  {
    id: 'placas',
    title: 'Máquina de placas',
    label: 'Linha de placas',
    description:
      'Transforma o material reciclado em placas de diferentes formatos e dimensões, preparadas para uso na fabricação de novos produtos.',
    shapes: [
      {
        letter: 'D',
        name: 'Diâmetro',
        models: ['D300', 'D350', 'D400', 'D500', 'D600', 'D800'],
      },
      { letter: 'Q', name: 'Quadrado', models: ['Q1000'] },
    ],
  },
];

const machineExampleImages = [
  '/assets/img/Gemini_Generated_Imag.png',
  '/assets/img/image2.png',
];

const teamMembers = [
  {
    name: 'Nome do chefe',
    role: 'Chefe do projeto',
    course: 'Curso ou formação',
    bio: 'Responsável pela direção do projeto, planejamento das atividades e articulação com parceiros.',
    leadership: true,
  },
  {
    name: 'Nome do subchefe',
    role: 'Subchefe do projeto',
    course: 'Curso ou formação',
    bio: 'Acompanha as frentes de trabalho, organiza a equipe e apoia as decisões técnicas e operacionais.',
    leadership: true,
  },
  {
    name: 'Participante 1',
    role: 'Integrante do projeto',
    course: 'Curso ou formação',
    bio: 'Colabora com as atividades e ações desenvolvidas pelo projeto.',
  },
  {
    name: 'Participante 2',
    role: 'Integrante do projeto',
    course: 'Curso ou formação',
    bio: 'Colabora com as atividades e ações desenvolvidas pelo projeto.',
  },
  {
    name: 'Participante 3',
    role: 'Integrante do projeto',
    course: 'Curso ou formação',
    bio: 'Colabora com as atividades e ações desenvolvidas pelo projeto.',
  },
  {
    name: 'Participante 4',
    role: 'Integrante do projeto',
    course: 'Curso ou formação',
    bio: 'Colabora com as atividades e ações desenvolvidas pelo projeto.',
  },
  {
    name: 'Participante 5',
    role: 'Integrante do projeto',
    course: 'Curso ou formação',
    bio: 'Colabora com as atividades e ações desenvolvidas pelo projeto.',
  },
  {
    name: 'Participante 6',
    role: 'Integrante do projeto',
    course: 'Curso ou formação',
    bio: 'Colabora com as atividades e ações desenvolvidas pelo projeto.',
  },
];

const allProducts = productCategories.flatMap((category) =>
  category.products.map((product) => ({
      ...product,
      image: product.images[0],
      categoryId: category.id,
    })),
);

function getInitialPage() {
  const hash = window.location.hash.replace('#', '');

  if (hash === 'participar') {
    return 'participar';
  }

  if (hash.startsWith('maquina-')) {
    return 'tecnologia';
  }

  if (hash.startsWith('produto-') || hash.startsWith('produtos-')) {
    return 'produtos';
  }

  return navItems.some((item) => item.id === hash) ? hash : 'home';
}

function App() {
  const [activePage, setActivePage] = useState(getInitialPage);
  const [showCards, setShowCards] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const isTechnology = activePage === 'tecnologia';
  const isProducts = activePage === 'produtos';
  const isAbout = activePage === 'sobre';
  const isParticipation = activePage === 'participar';

  useEffect(() => {
    const syncPageWithHash = () => {
      setActivePage(getInitialPage());
    };

    window.addEventListener('hashchange', syncPageWithHash);

    return () => window.removeEventListener('hashchange', syncPageWithHash);
  }, []);

  return (
    <>
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main>
        {isTechnology ? (
          <TechnologyPage />
        ) : isProducts ? (
          <ProductsPage />
        ) : isAbout ? (
          <AboutPage />
        ) : isParticipation ? (
          <ParticipationPage />
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
    </>
  );
}

function ImpactFlow() {
  return (
    <section className="impact-flow-section" aria-labelledby="impact-flow-title">
      <div className="section-heading">
        <p className="eyebrow">Economia circular</p>
        <h2 id="impact-flow-title">Do resíduo à geração de renda</h2>
      </div>
      <div className="impact-flow">
        {impactSteps.map(([number, title, description]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AboutPage() {
  const leadership = teamMembers.filter((member) => member.leadership);
  const team = teamMembers.filter((member) => !member.leadership);

  return (
    <section className="about-page" id="sobre">
      <div className="about-hero">
        <p className="eyebrow">Sobre nós</p>
        <h1>Transformamos resíduos em soluções para a comunidade</h1>
        <p>
          O Projeto Zro desenvolve e instala oficinas operadas por cooperativas
          formadas por mulheres de baixa renda. Nelas, resíduos plásticos se
          transformam em peças, móveis e lixeiras, criando trabalho, renda e
          soluções para espaços públicos.
        </p>
      </div>

      <div className="about-story">
        <div>
          <p className="eyebrow">Nossa história</p>
          <h2>Como surgiu o projeto</h2>
          <p>
            O projeto começou a partir da identificação de dois desafios: o
            descarte inadequado de materiais plásticos e a necessidade de criar
            oportunidades produtivas dentro da comunidade. A equipe passou a
            pesquisar formas de reaproveitar esse material e desenvolveu os
            próprios equipamentos para transformá-lo em perfis, placas e móveis.
          </p>
          <p>
            Este texto é um exemplo e deve ser substituído pela história real,
            incluindo o ano de criação, as pessoas envolvidas e os principais
            marcos alcançados.
          </p>
        </div>
        <img src="/assets/img/image2.png" alt="Imagem de exemplo da história do projeto" />
      </div>

      <ImpactFlow />

      <div className="results-section" aria-labelledby="results-title">
        <div className="section-heading">
          <p className="eyebrow">Nosso impacto</p>
          <h2 id="results-title">Resultados do projeto</h2>
          <p>
            Estamos organizando os indicadores das oficinas. Os resultados serão
            publicados aqui assim que os dados forem consolidados.
          </p>
        </div>
        <div className="results-grid">
          {impactIndicators.map(([label, description]) => (
            <article className="result-card" key={label}>
              <strong>Em levantamento</strong>
              <h3>{label}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="headquarters-section">
        <div className="section-heading">
          <p className="eyebrow">Onde atuamos</p>
          <h2>Nossa rede de oficinas</h2>
          <p>
            Hoje fabricamos e implantamos oficinas em quatro localidades e
            trabalhamos para ampliar essa rede para outros estados.
          </p>
        </div>
        <div className="workshop-grid">
          {workshops.map((workshop) => (
            <article className="workshop-card" key={workshop.city}>
              <img
                src="/assets/img/Gemini_Generated_Imag.png"
                alt={`Imagem de exemplo da oficina de ${workshop.city}`}
              />
              <div>
                <p className="eyebrow">Oficina</p>
                <h3>
                  {workshop.city} — {workshop.state}
                </h3>
                <p>{workshop.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="sponsors-section">
        <div className="section-heading">
          <p className="eyebrow">Quem apoia</p>
          <h2>Patrocinadores e parceiros</h2>
        </div>
        <div className="sponsor-grid">
          {['Patrocinador 1', 'Patrocinador 2', 'Parceiro institucional'].map(
            (sponsor) => (
              <div className="sponsor-card" key={sponsor}>
                <span>LOGO</span>
                <strong>{sponsor}</strong>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="team-section">
        <div className="section-heading">
          <p className="eyebrow">Nossa equipe</p>
          <h2>As pessoas por trás do Projeto Zro</h2>
          <p>
            Uma equipe multidisciplinar responsável por transformar ideias em
            impacto ambiental e social.
          </p>
        </div>

        <div className="leadership-grid">
          {leadership.map((member) => (
            <TeamCard member={member} key={member.name} featured />
          ))}
        </div>
        <div className="team-grid">
          {team.map((member) => (
            <TeamCard member={member} key={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ParticipationPage() {
  const partnershipOptions = [
    {
      title: 'Doar resíduos',
      audience: 'Empresas geradoras de resíduos',
      description:
        'Destine plástico reaproveitável para abastecer as oficinas e reduzir o descarte inadequado.',
    },
    {
      title: 'Comprar produtos',
      audience: 'Empresas e instituições',
      description:
        'Adquira móveis e lixeiras para seus espaços e gere demanda produtiva para as cooperativas.',
    },
    {
      title: 'Patrocinar uma oficina',
      audience: 'Patrocinadores',
      description:
        'Apoie a operação, a formação e a geração de renda das participantes de uma oficina.',
    },
    {
      title: 'Criar uma parceria pública',
      audience: 'Prefeituras e órgãos públicos',
      description:
        'Contrate mobiliário urbano e soluções de coleta, unindo benefício público e impacto social.',
    },
    {
      title: 'Integrar uma cooperativa',
      audience: 'Mulheres interessadas',
      description:
        'Conheça as oficinas existentes e manifeste interesse em participar das atividades produtivas.',
    },
  ];

  return (
    <section className="participation-page" id="participar">
      <div className="participation-hero">
        <p className="eyebrow">Quero participar</p>
        <h1>Transforme resíduos em trabalho e impacto social</h1>
        <p>
          Sua organização pode fornecer matéria-prima, gerar demanda, financiar
          postos de trabalho ou contratar soluções produzidas pelas oficinas.
        </p>
      </div>

      <ImpactFlow />

      <div className="partnership-section">
        <div className="section-heading">
          <p className="eyebrow">Formas de parceria</p>
          <h2>Como você pode participar</h2>
        </div>
        <div className="partnership-grid">
          {partnershipOptions.map((option, index) => (
            <article className="partnership-card" key={option.title}>
              <span className="partnership-number">0{index + 1}</span>
              <p>{option.audience}</p>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="public-partnership">
        <div>
          <p className="eyebrow">Empresas e poder público</p>
          <h2>Uma contratação que movimenta toda a cadeia</h2>
          <p>
            A compra de lixeiras, móveis e outros produtos cria demanda contínua
            para as oficinas. Isso mantém a produção ativa, amplia a renda das
            participantes e devolve o plástico reciclado à sociedade em forma de
            equipamentos úteis.
          </p>
        </div>
        <a href="#sobre">Conheça nossas oficinas</a>
      </div>

      <div className="participation-cta" id="contato">
        <p className="eyebrow">Próximo passo</p>
        <h2>Converse com o Projeto Zro</h2>
        <p>
          Entre em contato para apresentar sua empresa, prefeitura, cooperativa ou
          proposta de parceria.
        </p>
        <div className="contact-grid" aria-label="Canais de contato">
          <div className="contact-card">
            <span>WhatsApp</span>
            <strong>Contato em breve</strong>
          </div>
          <div className="contact-card">
            <span>E-mail</span>
            <strong>Contato em breve</strong>
          </div>
          <div className="contact-card">
            <span>Redes sociais</span>
            <strong>Perfis em breve</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

function TeamCard({ member, featured = false }) {
  return (
    <article className={featured ? 'team-card featured' : 'team-card'}>
      <img
        src="/assets/img/Gemini_Generated_Image_hq2vidhq2vidhq2v.png"
        alt={`Foto de perfil de ${member.name}`}
      />
      <div>
        <p className="team-role">{member.role}</p>
        <h3>{member.name}</h3>
        <strong>{member.course}</strong>
        <p>{member.bio}</p>
      </div>
    </article>
  );
}

function ProductsPage() {
  const [activeCategoryId, setActiveCategoryId] = useState(productCategories[0].id);
  const [selectedProductId, setSelectedProductId] = useState(() =>
    window.location.hash.replace('#produto-', ''),
  );
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const activeCategory = productCategories.find(
    (category) => category.id === activeCategoryId,
  );
  const selectedProduct = allProducts.find(
    (product) => product.id === selectedProductId,
  );

  useEffect(() => {
    const syncProductWithHash = () => {
      const hash = window.location.hash.replace('#', '');

      if (hash.startsWith('produto-')) {
        const productId = hash.replace('produto-', '');
        const product = allProducts.find((item) => item.id === productId);

        setSelectedProductId(productId);

        if (product) {
          setActiveCategoryId(product.categoryId);
        }

        return;
      }

      if (hash.startsWith('produtos-')) {
        const categoryId = hash.replace('produtos-', '');
        const category = productCategories.find((item) => item.id === categoryId);

        if (category) {
          setActiveCategoryId(category.id);
        }
      }

      setSelectedProductId(null);
    };

    syncProductWithHash();
    window.addEventListener('hashchange', syncProductWithHash);

    return () => window.removeEventListener('hashchange', syncProductWithHash);
  }, []);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [selectedProductId]);

  if (selectedProduct) {
    const productImages = selectedProduct.images;

    return (
      <section className="product-detail-page" id="produto-detalhes">
        <a
          className="back-button"
          href="#produtos"
          onClick={() => setSelectedProductId(null)}
        >
          Voltar aos produtos
        </a>

        <div className="product-detail">
          <div className="product-gallery">
            <img
              src={productImages[activeImageIndex]}
              alt={`${selectedProduct.name} - imagem ${activeImageIndex + 1}`}
            />

            {productImages.length > 1 && (
              <>
                <button
                  className="gallery-arrow gallery-arrow-previous"
                  type="button"
                  aria-label="Imagem anterior"
                  onClick={() =>
                    setActiveImageIndex((current) =>
                      current === 0 ? productImages.length - 1 : current - 1,
                    )
                  }
                >
                  ‹
                </button>
                <button
                  className="gallery-arrow gallery-arrow-next"
                  type="button"
                  aria-label="Próxima imagem"
                  onClick={() =>
                    setActiveImageIndex((current) =>
                      current === productImages.length - 1 ? 0 : current + 1,
                    )
                  }
                >
                  ›
                </button>
              </>
            )}
          </div>

          <div className="product-detail-info">
            <p className="eyebrow">Detalhes do produto</p>
            <h1>{selectedProduct.name}</h1>
            <strong className="product-price">{selectedProduct.price}</strong>
            <p>{selectedProduct.description}</p>

            <div className="specs">
              <h2>Especificações</h2>
              <ul>
                {selectedProduct.specs.map((spec) => (
                  <li key={spec}>{spec}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="products-page" id="produtos">
      <div className="section-heading products-heading">
        <p className="eyebrow">Produtos</p>
        <h1>Moveis e lixeiras para ambientes sustentaveis</h1>
        <p>
          Conheca as categorias iniciais do catalogo. As fotos abaixo sao imagens
          exemplo e podem ser substituidas pelas fotos reais dos produtos.
        </p>
      </div>

      <div className="category-tabs" aria-label="Categorias de produtos">
        {productCategories.map((category) => (
          <a
            className={
              activeCategoryId === category.id
                ? 'category-tab active'
                : 'category-tab'
            }
            key={category.id}
            href={`#produtos-${category.id}`}
            onClick={() => {
              setActiveCategoryId(category.id);
              setSelectedProductId(null);
            }}
            aria-pressed={activeCategoryId === category.id}
          >
            {category.label}
          </a>
        ))}
      </div>

      <div className="category-intro">
        <h2>{activeCategory.label}</h2>
        <p>{activeCategory.intro}</p>
      </div>

      <div className="product-grid">
        {activeCategory.products.map((product) => (
          <article className="product-card" key={product.name}>
            <img
              src={product.images[0]}
              alt={`Imagem exemplo de ${product.name}`}
            />
            <div>
              <h3>{product.name}</h3>
              <a
                className="details-button"
                href={`#produto-${product.id}`}
                onClick={() => {
                  setSelectedProductId(product.id);
                  setActiveCategoryId(activeCategory.id);
                }}
              >
                Detalhes
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function Navbar({ activePage, onNavigate }) {
  return (
    <header className="site-header">
      <nav className="navbar" aria-label="Navegacao principal">
        <a className="brand" href="#home" onClick={() => onNavigate('home')}>
          <img
            className="brand-logo"
            src="/assets/img/Gemini_Generated_Image_hq2vidhq2vidhq2v.png"
            alt=""
          />
          <span>Projeto Zro</span>
        </a>

        <div className="menu">
          {navItems.map((item) => (
            <a
              className={activePage === item.id ? 'nav-link active' : 'nav-link'}
              key={item.id}
              href={`#${item.id}`}
              onClick={() => onNavigate(item.id)}
            >
              {item.label}
            </a>
          ))}
          <a
            className="join-button"
            href="#participar"
            onClick={() => onNavigate('participar')}
          >
            Quero Participar
          </a>
        </div>
      </nav>
    </header>
  );
}

function HomePage({ showCards, activeCard, onToggleCards, onToggleCard }) {
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-carousel" aria-hidden="true">
          {heroSlides.map((image, index) => (
            <div
              className="hero-slide"
              key={image}
              style={{
                backgroundImage: `url("${image}")`,
                animationDelay: `${index * 6}s`,
                animationDuration: `${heroSlides.length * 6}s`,
              }}
            />
          ))}
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Projeto social</p>
          <h1>Reciclagem com tecnologia e impacto comunitario</h1>
          <p>
            O Projeto Zro aproxima pessoas, instituicoes e solucoes digitais para <br></br>fortalecer a reciclagem, reduzir desperdicios e gerar renda.
          </p>
          <p>
            A proposta combina educacao ambiental, organizacao de materiais <br></br>e participacao social em uma experiencia simples de acompanhar.
          </p>
          <button className="primary-button" type="button" onClick={onToggleCards}>
            {showCards ? 'Ver menos' : 'Ver mais'}
          </button>
        </div>
      </section>

      <ImpactFlow />

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
  const getModelFromHash = () =>
    window.location.hash.startsWith('#maquina-')
      ? window.location.hash.replace('#maquina-', '')
      : null;
  const [detailModel, setDetailModel] = useState(getModelFromHash);
  const [selectedModels, setSelectedModels] = useState(() =>
    Object.fromEntries(
      machineLines.map((machine) => [
        machine.id,
        machine.shapes[0].models[0],
      ]),
    ),
  );

  const selectMachineModel = (machineId, model) => {
    setSelectedModels((current) => ({ ...current, [machineId]: model }));
  };

  useEffect(() => {
    const syncMachineWithHash = () => setDetailModel(getModelFromHash());

    window.addEventListener('hashchange', syncMachineWithHash);

    return () => window.removeEventListener('hashchange', syncMachineWithHash);
  }, []);

  const selectedMachineData = machineLines
    .flatMap((machine) =>
      machine.shapes.flatMap((shape) =>
        shape.models.map((model) => ({ machine, shape, model })),
      ),
    )
    .find((item) => item.model === detailModel);

  if (selectedMachineData) {
    const { machine, shape, model } = selectedMachineData;
    const models = machine.shapes.flatMap((item) => item.models);
    const image =
      machineExampleImages[models.indexOf(model) % machineExampleImages.length];

    return (
      <section className="product-detail-page machine-detail-page">
        <a
          className="back-button"
          href="#tecnologia"
          onClick={() => setDetailModel(null)}
        >
          Voltar às máquinas
        </a>

        <div className="product-detail">
          <div className="product-gallery">
            <img src={image} alt={`Imagem de exemplo do modelo ${model}`} />
          </div>

          <div className="product-detail-info">
            <p className="eyebrow">{machine.label}</p>
            <h1>Modelo {model}</h1>
            <p>
              O modelo {model} faz parte da {machine.title.toLowerCase()} e produz
              peças em formato {shape.name.toLowerCase()}. Ele foi desenvolvido
              para transformar plástico reciclado em componentes padronizados,
              resistentes e prontos para uso em nosso processo de fabricação.
            </p>

            <div className="specs">
              <h2>Detalhes da máquina</h2>
              <ul>
                <li>Tipo de peça: {shape.name}</li>
                <li>Código do modelo: {model}</li>
                <li>Matéria-prima: plástico reciclado processado</li>
                <li>Linha de produção: {machine.label}</li>
                <li>Equipamento desenvolvido para uso produtivo do Projeto Zro</li>
              </ul>
            </div>

            <p className="machine-detail-warning">
              Esta máquina faz parte do nosso processo produtivo e não está à
              venda.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="technology-page" id="tecnologia">
      <div className="section-heading technology-heading">
        <p className="eyebrow">Nossa tecnologia</p>
        <h1>Máquinas que transformam plástico em novas peças</h1>
        <p>
          Desenvolvemos nossos próprios equipamentos para produzir os perfis e as
          placas usados nos móveis do Projeto Zro. Conheça as duas linhas de
          produção.
        </p>
      </div>

      <div className="machine-grid">
        {machineLines.map((machine) => {
          const models = machine.shapes.flatMap((shape) => shape.models);
          const selectedModel = selectedModels[machine.id];
          const selectedImage =
            machineExampleImages[models.indexOf(selectedModel) % machineExampleImages.length];

          return (
            <article className="machine-card" key={machine.id}>
              <figure className="machine-visual">
                <img
                  className="machine-photo"
                  src={selectedImage}
                  alt={`Imagem de exemplo do modelo ${selectedModel}`}
                />
                <figcaption>
                  <span>Modelo {selectedModel}</span>
                  <a
                    href={`#maquina-${selectedModel}`}
                    onClick={() => setDetailModel(selectedModel)}
                  >
                    Detalhes
                  </a>
                </figcaption>
              </figure>

              <div className="machine-content">
                <p className="machine-label">{machine.label}</p>
                <h2>{machine.title}</h2>
                <p className="machine-description">{machine.description}</p>

                <div className="machine-formats">
                  <h3>Peças produzidas</h3>
                  {machine.shapes.map((shape) => (
                    <div className="format-row" key={shape.letter}>
                      <span
                        className={`format-symbol format-symbol-${shape.letter.toLowerCase()}`}
                        aria-hidden="true"
                      >
                        <span className="format-shape" />
                      </span>
                      <div>
                        <strong>{shape.name}</strong>
                        <ul aria-label={`Modelos em formato ${shape.name}`}>
                          {shape.models.map((model) => (
                            <li key={model}>
                              <button
                                className={
                                  selectedModel === model
                                    ? 'model-button active'
                                    : 'model-button'
                                }
                                type="button"
                                onClick={() => selectMachineModel(machine.id, model)}
                                aria-pressed={selectedModel === model}
                              >
                                {model}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="technology-note">
        Estas máquinas fazem parte do nosso processo produtivo e não estão à venda.
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div>
        <h2>Projeto Zro</h2>
        <p>Site institucional</p>
      </div>
      <a href="#participar">Contato</a>
      <strong>Direitos reservados</strong>
    </footer>
  );
}

export default App;
