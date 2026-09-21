// === Projets ===
const projects = [
  {
    id: 27,
    title: { fr: "Configurateur de devis Villemin", en: "Villemin Quote Configurator" },
    type: "client",
    description: { fr: "Développement d’un configurateur de devis en 8 étapes pour Villemin (menuisier). Qualification des demandes, suivi via Google Tag Manager et gestion de l’hébergement." },
    tech: [
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "Google Tag Manager", icon: "fas fa-tags" }
    ],
    img: "assets/img/villemin.png",
    link: "https://www.villemin.fr/configurateur-de-devis/",
    featured: true
  },
  {
    id: 18,
    title: { fr: "Chiffrio", en: "Chiffrio" },
    type: "personnel",
    description: { fr: "Application web de chiffrement/déchiffrement (César, Vigenère, RSA). Interface moderne en React, animations fluides, responsive.", en: "Text encryption/decryption app. Modern React UI, smooth animations." },
    tech: [
      { name: "React.js", icon: "fab fa-react" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "CSS", icon: "fab fa-css3-alt" }
    ],
    img: "assets/img/chiffrio.png",
    link: "https://chiffrio-frontend.onrender.com/",
    featured: false
  },
  {
    id: 25,
    title: { fr: "Write Your Path", en: "Write Your Path" },
    type: "personnel",
    description: { fr: "Accompagnement des transitions internationales : ancrage, organisation et épanouissement pour expatriés et nomades.", en: "Support for international transitions: anchoring, organization, and fulfillment." },
    tech: [
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "Elementor", icon: "fa-brands fa-elementor" }
    ],
    img: "assets/img/wyp.png",
    link: "https://writeyourpath.org/",
    featured: false
  },
  {
    id: 19,
    title: { fr: "BedCleaner Site", en: "BedCleaner Site" },
    type: "personnel",
    description: { fr: "Création d'un site sous WordPress avec Elementor, en assurant la conception, l'hébergement et la sécurité.", en: "WordPress site with Elementor, hosting, and security." },
    tech: [
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "Elementor", icon: "fa-brands fa-elementor" }
    ],
    img: "assets/img/bedcleaner.png",
    link: "https://www.bedcleaner.fr/",
    featured: false
  },
  {
    id: 20,
    title: { fr: "Made In Pizza", en: "Made In Pizza" },
    type: "personnel",
    description: { fr: "Site pour une pizzeria avec système de commande en ligne.", en: "Pizzeria site with online ordering." },
    tech: [
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "CSS", icon: "fab fa-css3-alt" }
    ],
    img: "assets/img/pizza.png",
    link: "assets/video/defilement_3-madeinpizza.mp4",
    featured: false
  },
  {
    id: 21,
    title: { fr: "Agence Digitale", en: "Agence Digitale" },
    type: "personnel",
    description: { fr: "Refonte du site d'une agence digitale avec WordPress.", en: "Digital agency site redesign." },
    tech: [
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "CSS", icon: "fab fa-css3-alt" }
    ],
    img: "assets/img/site_1_mac.png",
    link: "assets/video/defilement_site1.mp4",
    featured: false
  },
  {
    id: 23,
    title: { fr: "Association Al Jisr", en: "Association Al Jisr" },
    type: "personnel",
    description: { fr: "Site web pour valoriser les missions d'une association dynamique.", en: "Association showcase site." },
    tech: [
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "Elementor", icon: "fa-brands fa-elementor" }
    ],
    img: "assets/img/aljisr.png",
    link: "assets/video/aljisr.mp4",
    featured: false
  },
  {
    id: 24,
    title: { fr: "Myam Boulange", en: "Myam Boulange" },
    type: "personnel",
    description: { fr: "Site vitrine pour une pâtisserie artisanale.", en: "Artisanal bakery showcase." },
    tech: [
      { name: "WordPress", icon: "fab fa-wordpress" },
      { name: "Elementor", icon: "fa-brands fa-elementor" }
    ],
    img: "assets/img/maymay.png",
    link: "assets/video/maymay-boulange.mp4",
    featured: false
  },
  {
    id: 26,
    title: { fr: "Système de Ticketing", en: "Ticketing System" },
    type: "personnel",
    description: { fr: "Plateforme de gestion de tickets et support client avec interface intuitive.", en: "Ticket and customer support management platform." },
    tech: [
      { name: "PHP", icon: "fab fa-php" },
      { name: "JavaScript", icon: "fab fa-js-square" },
      { name: "MySQL", icon: "fas fa-database" }
    ],
    img: "assets/img/ticketing-site.png",
    link: "",
    featured: false
  }
];

// === Travaux de design graphique ===
const designWorks = [
  {
    id: 1,
    title: { fr: "Identité visuelle Club Devers", en: "Club Devers Visual Identity" },
    type: "design",
    description: { fr: "Création complète d'identité visuelle incluant logo, charte graphique et supports de communication.", en: "Complete visual identity creation." },
    images: [
      "assets/img/id_devers.jpg",
      "assets/img/logo_devers.jpg",
      "assets/img/planche1.png",
      "assets/img/mockup_devers.jpg",
      "assets/img/fin_devers.jpg"
    ],
    category: "Identité visuelle"
  },
  {
    id: 2,
    title: { fr: "Supports Print BedCleaner", en: "BedCleaner Print Materials" },
    type: "design",
    description: { fr: "Conception de supports de communication print : cartes de visite, flyers, affiches.", en: "Print communication materials design." },
    images: [
      "assets/img/bedcleaner_recto.jpg",
      "assets/img/bedcleaner_verso.jpg"
    ],
    category: "Print"
  },
  {
    id: 3,
    title: { fr: "Identité visuelle Sara Greenway", en: "Sara Greenway Visual Identity" },
    type: "design",
    description: { fr: "Identité visuelle et papeterie pour une entreprise de transport et logistique : logo, cartes de visite et papier en-tête.", en: "Visual identity and stationery for a transport and logistics company." },
    images: [
      "assets/img/papier.png",
      "assets/img/carte.png",
      "assets/img/recto.png",
      "assets/img/verso.png"
    ],
    category: "Identité visuelle"
  }
];

// === Rendu des projets dans le Bento Grid ===
const portfolioGrid = document.getElementById('portfolioGrid');
const designGrid = document.getElementById('designGrid');
const modalsContainer = document.getElementById('modalsContainer');

function renderProjects() {
  if (!portfolioGrid || !modalsContainer) return;

  portfolioGrid.innerHTML = '';
  modalsContainer.innerHTML = '';

  projects.forEach((project, index) => {
    const isVideo = project.link && project.link.includes('.mp4');
    const linkIcon = isVideo ? 'fas fa-play-circle' : 'fas fa-external-link-alt';

    // Création de la carte projet
    const card = document.createElement('div');
    card.className = 'bento-card project-card' + (project.featured ? ' featured' : '');
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 100));

    card.innerHTML = `
      <div class="project-image">
        ${isVideo
          ? `<video muted loop playsinline><source src="${project.link}" type="video/mp4"></video>`
          : `<img src="${project.img}" alt="${project.title.fr}" loading="lazy">`
        }
        <div class="project-overlay">
          ${project.link ? `<a href="${project.link}" target="_blank" rel="noopener" class="project-link" aria-label="Visiter le site"><i class="${linkIcon}"></i></a>` : ''}
          <button class="project-link modal-trigger" data-id="${project.id}" aria-label="Voir les détails"><i class="fas fa-info-circle"></i></button>
        </div>
      </div>
      <div class="project-content">
        <div class="project-tech">
          ${project.tech.map(t => `<span class="tech-tag"><i class="${t.icon}"></i> ${t.name}</span>`).join('')}
        </div>
        <h3>${project.title.fr}</h3>
        <p>${project.description.fr}</p>
      </div>
    `;

    // Hover sur vidéo pour la lire
    if (isVideo) {
      const video = card.querySelector('video');
      if (video) {
        card.addEventListener('mouseenter', () => video.play());
        card.addEventListener('mouseleave', () => {
          video.pause();
          video.currentTime = 0;
        });
      }
    }

    portfolioGrid.appendChild(card);

    // Création du modal
    const modal = document.createElement('div');
    modal.id = `modal-${project.id}`;
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-modal" aria-label="Fermer">&times;</span>
        <h2>${project.title.fr}</h2>
        ${isVideo
          ? `<video controls style="width:100%; max-height:400px; border-radius:20px; margin:20px 0;"><source src="${project.link}" type="video/mp4"></video>`
          : `<img src="${project.img}" alt="${project.title.fr}">`
        }
        <p>${project.description.fr}</p>
        <div class="modal-tech">
          ${project.tech.map(t => `<span class="tech-tag"><i class="${t.icon}"></i> ${t.name}</span>`).join('')}
        </div>
        ${project.link && !isVideo ? `
          <p style="margin-top:25px;">
            <a href="${project.link}" target="_blank" rel="noopener" class="cta-primary">
              <i class="fas fa-external-link-alt"></i> Visiter le site
            </a>
          </p>` : ''
        }
        ${isVideo ? `
          <p style="margin-top:25px;">
            <a href="${project.link}" target="_blank" rel="noopener" class="cta-primary">
              <i class="fas fa-play-circle"></i> Voir la démo complète
            </a>
          </p>` : ''
        }
      </div>
    `;
    modalsContainer.appendChild(modal);
  });
}

// === Rendu des travaux de design ===
function renderDesignWorks() {
  if (!designGrid || !modalsContainer) return;

  designGrid.innerHTML = '';

  designWorks.forEach((work, index) => {
    // Création de la carte design
    const card = document.createElement('div');
    card.className = 'bento-card design-card';
    card.setAttribute('data-aos', 'fade-up');
    card.setAttribute('data-aos-delay', (index * 100));

    // Utiliser la première image comme aperçu
    const previewImage = work.images[0];

    card.innerHTML = `
      <div class="design-image-container">
        <img src="${previewImage}" alt="${work.title.fr}" loading="lazy">
        <div class="design-overlay">
          <button class="design-btn modal-trigger" data-id="design-${work.id}" aria-label="Voir la galerie">
            <i class="fas fa-images"></i>
          </button>
        </div>
      </div>
      <div class="design-content">
        <span class="design-category">${work.category}</span>
        <h3>${work.title.fr}</h3>
        <p>${work.description.fr}</p>
      </div>
    `;

    designGrid.appendChild(card);

    // Création du modal avec galerie
    const modal = document.createElement('div');
    modal.id = `modal-design-${work.id}`;
    modal.className = 'modal';
    modal.innerHTML = `
      <div class="modal-content">
        <span class="close-modal" aria-label="Fermer">&times;</span>
        <h2>${work.title.fr}</h2>
        <span class="design-category">${work.category}</span>
        <p style="margin: 20px 0;">${work.description.fr}</p>
        <div class="design-modal-gallery">
          ${work.images.map(img => `<img src="${img}" alt="${work.title.fr}" loading="lazy" onclick="window.open('${img}', '_blank')">`).join('')}
        </div>
      </div>
    `;
    modalsContainer.appendChild(modal);
  });
}

// === Initialisation ===
document.addEventListener('DOMContentLoaded', () => {
  // Rendu des projets
  renderProjects();

  // Rendu des travaux de design
  renderDesignWorks();

  // Initialisation AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }

  // Gestion des modals
  document.addEventListener('click', e => {
    // Ouvrir modal
    if (e.target.closest('.modal-trigger')) {
      const id = e.target.closest('.modal-trigger').dataset.id;
      const modal = document.getElementById(`modal-${id}`);
      if (modal) {
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    }

    // Fermer modal
    if (e.target.classList.contains('close-modal') || e.target.classList.contains('modal')) {
      document.querySelectorAll('.modal').forEach(m => {
        m.style.display = 'none';
      });
      document.body.style.overflow = 'auto';
    }
  });

  // Fermer modal avec ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal').forEach(m => {
        m.style.display = 'none';
      });
      document.body.style.overflow = 'auto';
    }
  });

  // Smooth scroll pour la navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Retour en haut au clic sur le logo
  const logoContainer = document.querySelector('.logo-container');
  if (logoContainer) {
    logoContainer.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }
});
