import React, { useEffect, useState } from 'react';

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

const heroSlides = [
  '/assets/img/carrosel/Ecodesk (1).png',
  '/assets/img/carrosel/Ecodesk (2).png',
  '/assets/img/carrosel/Equipe Pedra Furada.png',
  '/assets/img/carrosel/Ilustração_Sem_Título 1.png',
  '/assets/img/carrosel/Ilustração_Sem_Título 7.png',
  '/assets/img/carrosel/Mesa ITAPARICA (3).png',
];

const productDisplayImage = '/assets/img/Gemini_Generated_Imag.png';
const productSecondaryImage = '/assets/img/image2.png';

const productCategories = [
  {
    id: 'mesas',
    label: 'Mesas',
    intro: 'Mesas feitas para areas internas e externas, com foco em durabilidade e reaproveitamento de materiais.',
    products: [
      {
        id: 'mesa-eco-retangular',
        name: 'Mesa Eco Retangular',
        image: '/assets/img/Gemini_Generated_Imag.png',
        price: 'R$ 420,00',
        description:
          'Modelo retangular para refeitorios, pracas e espacos coletivos. Estrutura resistente e superficie facil de limpar.',
        specs: ['Tampo retangular', 'Acabamento resistente', 'Uso interno e externo'],
      },
      {
        id: 'mesa-redonda-comunitaria',
        name: 'Mesa Redonda Comunitaria',
        image: '/assets/img/image2.png',
        price: 'R$ 360,00',
        description:
          'Opcao compacta para convivencia, reunioes e areas de descanso. Indicada para ambientes com circulacao constante.',
        specs: ['Formato redondo', 'Base reforcada', 'Ideal para areas de convivencia'],
      },
      {
        id: 'mesa-modular',
        name: 'Mesa Modular',
        image: '/assets/img/Gemini_Generated_Image_hq2vidhq2vidhq2v.png',
        price: 'R$ 510,00',
        description:
          'Formato versatil para compor layouts maiores ou menores conforme o espaco disponivel.',
        specs: ['Composicao modular', 'Facil reposicionamento', 'Indicada para layouts flexiveis'],
      },
    ],
  },
  {
    id: 'cadeiras',
    label: 'Cadeiras',
    intro: 'Cadeiras praticas para uso diario, pensadas para conforto, manutencao simples e longa vida util.',
    products: [
      {
        id: 'cadeira-eco-basic',
        name: 'Cadeira Eco Basic',
        image: '/assets/img/image2.png',
        price: 'R$ 145,00',
        description:
          'Cadeira leve para salas, eventos e ambientes compartilhados. Design simples e resistente.',
        specs: ['Modelo leve', 'Empilhavel', 'Manutencao simples'],
      },
      {
        id: 'cadeira-com-encosto-alto',
        name: 'Cadeira com Encosto Alto',
        image: '/assets/img/Gemini_Generated_Imag.png',
        price: 'R$ 190,00',
        description:
          'Modelo com mais apoio para uso prolongado em recepcoes, escolas e espacos de atendimento.',
        specs: ['Encosto alto', 'Assento confortavel', 'Indicada para uso prolongado'],
      },
      {
        id: 'banco-individual',
        name: 'Banco Individual',
        image: '/assets/img/Gemini_Generated_Image_hq2vidhq2vidhq2v.png',
        price: 'R$ 120,00',
        description:
          'Alternativa compacta para areas externas, corredores e pontos de espera.',
        specs: ['Formato compacto', 'Estrutura reforcada', 'Uso em areas externas'],
      },
    ],
  },
  {
    id: 'lixeiras',
    label: 'Lixeiras',
    intro: 'Lixeiras para separacao e organizacao de residuos, adequadas a escolas, empresas e areas publicas.',
    products: [
      {
        id: 'lixeira-seletiva-dupla',
        name: 'Lixeira Seletiva Dupla',
        image: '/assets/img/Gemini_Generated_Image_hq2vidhq2vidhq2v.png',
        images: [
          '/assets/img/lixeiras/v1 - IIXEIRA (1).jpg',
          '/assets/img/lixeiras/v1 - IIXEIRA (2).jpg',
        ],
        price: 'R$ 260,00',
        description:
          'Conjunto para separacao basica de residuos reciclaveis e rejeitos em locais de grande fluxo.',
        specs: ['Dois compartimentos', 'Identificacao seletiva', 'Tampa removivel'],
      },
      {
        id: 'lixeira-coletiva-4-cestos',
        name: 'Lixeira Coletiva 4 Cestos',
        image: '/assets/img/image2.png',
        images: [
          '/assets/img/lixeiras/v1 - IIXEIRA (1).jpg',
          '/assets/img/lixeiras/v1 - IIXEIRA (2).jpg',
        ],
        price: 'R$ 480,00',
        description:
          'Solucao completa para vidro, papel, plastico e metal, com identificacao visual clara.',
        specs: ['Quatro cestos', 'Cores para coleta seletiva', 'Uso institucional'],
      },
      {
        id: 'lixeira-externa',
        name: 'Lixeira Externa',
        image: '/assets/img/Gemini_Generated_Imag.png',
        images: [
          '/assets/img/lixeiras/v1 - IIXEIRA (1).jpg',
          '/assets/img/lixeiras/v1 - IIXEIRA (2).jpg',
        ],
        price: 'R$ 310,00',
        description:
          'Modelo reforcado para pracas, patios e calcadas, preparado para uso continuo ao ar livre.',
        specs: ['Estrutura reforcada', 'Boa capacidade interna', 'Indicada para areas abertas'],
      },
    ],
  },
];

const allProducts = productCategories.flatMap((category) =>
  category.products.map((product) => {
    const fallbackImages = [
      productDisplayImage,
      product.image === productDisplayImage
        ? productSecondaryImage
        : product.image,
    ];

    return {
      ...product,
      image: product.images?.[0] ?? productDisplayImage,
      images: product.images ?? fallbackImages,
      categoryId: category.id,
    };
  }),
);

function getInitialPage() {
  const hash = window.location.hash.replace('#', '');

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
              <h2>Especificacoes</h2>
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
              src={product.images?.[0] ?? productDisplayImage}
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
          <a className="join-button" href="#sobre" onClick={() => onNavigate('sobre')}>
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
        <p>Site institucional</p>
      </div>
      <strong>Direitos reservados</strong>
    </footer>
  );
}

export default App;
