const individualServices = [
  ['Social Media Management', 'Starting from Rs. 15,000/month'],
  ['Meta Ads Management', 'Starting from Rs. 10,000/month', 'Ad Budget Separate'],
  ['TikTok Ads Management', 'Starting from Rs. 10,000/month', 'Ad Budget Separate'],
  ['Google Business Profile Setup', 'Rs. 5,000 – Rs. 10,000'],
  ['Landing Page Design', 'Rs. 8,000 – Rs. 15,000'],
  ['Business Website', 'Rs. 15,000 – Rs. 35,000'],
  ['Portfolio Website', 'Rs. 10,000 – Rs. 20,000'],
  ['Logo Design', 'Rs. 2,000 – Rs. 8,000'],
  ['Flyer & Poster Design', 'Rs. 1,000 – Rs. 5,000 per design'],
  ['AI Video Advertisement', 'Rs. 2,000 – Rs. 10,000 per video']
];

const pricing = document.querySelector('#individual-pricing');
if (pricing) {
  pricing.innerHTML = individualServices.map(([name, price, note]) => (
    `<article class="price-item"><h4>${name}</h4><p>${price}</p>${note ? `<small>${note}</small>` : ''}</article>`
  )).join('');
}

const works = [
  ['mehak-bridal-hero.jpg', 'landing', 'Mehak Salon Website Project'],
  ['golden-grill-feedback-proof.png', 'landing', 'Golden Grill Restaurant Website & Feedback'],
  ['golden-grill-homepage.png', 'landing', 'Golden Grill Restaurant Homepage'],
  ['lunara-ecommerce-homepage.png', 'ecommerce', 'Lunara E-commerce Demo Homepage'],
  ['landing-pages-02.png', 'landing', 'Digital Business Landing Page'],
  ['sbh-home-start.jpg', 'webapp', 'Smart Business Hub Homepage'],
  ['sbh-admin-dashboard.jpg', 'webapp', 'Smart Business Hub Admin Dashboard'],
  ['google-business-profiles.png', 'gbp', 'Google Business Profile Work'],
  ['golden-grill-combined-proof.png', 'ads', 'Golden Grill Meta Ads + GBP + Page Handling Proof'],
  ['ad-campaign-dashboard.png', 'ads', 'Meta Ads Campaign Results'],
  ['meta-ads-results-graphic.png', 'ads', 'Meta Ads Performance Graphic'],
  ['Screenshot_20260517-155441_TikTok.jpg', 'ads', 'TikTok Promotion Results'],
  ['social-1m-views-proof.jpg', 'social', 'Social Media 1M+ Views Proof'],
  ['social-81k-post-views-proof.jpg', 'social', 'Social Media 81K Views Proof'],
  ['social-messaging-contacts-proof.jpg', 'social', 'Messaging Contacts Proof'],
  ['blog-17-posts-proof.jpg', 'blog', 'SEO & Digital Marketing Blog Proof'],
  ['blog-international-readership.jpg', 'blog', 'International Blog Readership'],
  ['client-conversions.png', 'feedback', 'Restaurant and Client Conversion Feedback'],
  ['client-conversion-trust.png', 'feedback', 'Client Trust Building Proof'],
  ['mehak-salon-feedback-proof.png', 'feedback', 'Mehak Salon Client Feedback Proof'],
  ['golden-grill-feedback-proof.png', 'feedback', 'Golden Grill Client Feedback Proof'],
  ['Screenshot_20260403-111244_WhatsAppBusiness.jpg', 'feedback', 'Customer Feedback Proof'],
  ['Screenshot_20260311-045211_TikTok.jpg', 'creative', 'Logo Design Collection'],
  ['Screenshot_20260311-045223_TikTok.jpg', 'creative', 'Brand Identity Samples'],
  ['Screenshot_20260403-094013_Gallery.jpg', 'creative', 'Professional Profile Creative'],
  ['Screenshot_20260520-190613_ChatGPT.jpg', 'creative', 'Restaurant Food Poster Creative'],
  ['Screenshot_20260506-155721_Facebook.jpg', 'creative', 'Product Label Design'],
  ['Screenshot_20260511-183413_Facebook.jpg', 'creative', 'Certificate Designs'],
  ['Screenshot_20260524-025321_ChatGPT.jpg', 'creative', 'Apparel Branding Sample']
];

const labels = {
  landing: 'Websites & Landing Pages',
  ecommerce: 'E-commerce Demo',
  webapp: 'Full-Stack / Web Apps',
  gbp: 'Google Business Profile',
  ads: 'Meta Ads',
  social: 'Social Media Management',
  creative: 'Graphic Design',
  feedback: 'Client Feedback',
  blog: 'Blog / Content Writing'
};

const grid = document.querySelector('#portfolio-grid');
if (grid) {
  grid.innerHTML = works.map(([file, category, title]) => (
    `<button class="work-card" data-category="${category}" data-lightbox="assets/${file}" data-caption="${title}"><img loading="lazy" src="assets/${file}" alt="${title}"><span class="work-card-info"><h3>${title}</h3><span>${labels[category]}</span></span></button>`
  )).join('');

  document.querySelectorAll('.portfolio-filters button').forEach((button) => {
    button.addEventListener('click', () => {
      document.querySelectorAll('.portfolio-filters button').forEach((item) => item.classList.toggle('active', item === button));
      document.querySelectorAll('.work-card').forEach((item) => {
        item.classList.toggle('hidden', button.dataset.filter !== 'all' && item.dataset.category !== button.dataset.filter);
      });
    });
  });
}

const qs = [
  ['Is ad budget included in the package?', 'No, ad budget is separate and depends on campaign goals.'],
  ['Do you create landing pages?', 'Yes, I create modern responsive landing pages and websites.'],
  ['Can you manage social media pages?', 'Yes, including content support, page management and ad campaigns.'],
  ['Do you create designs and videos?', 'Yes, including logos, flyers, posters, social media creatives and AI video ads.'],
  ['How can clients contact you?', 'Directly on WhatsApp at 0321 4930875.'],
  ['Do you provide Google Business Profile services?', 'Yes, including setup, optimization and local business visibility support.'],
  ['Do you provide Local SEO support?', 'Yes, I support local visibility improvements for Google Business Profile, service pages and online presence.'],
  ['Can I order only one service?', 'Yes, individual services and monthly packages are both available.']
];

const faq = document.querySelector('#faq-list');
if (faq) {
  faq.innerHTML = qs.map(([question, answer], index) => (
    `<article class="faq-item ${index === 0 ? 'open' : ''}"><button class="faq-question">${question}<span>+</span></button><div class="faq-answer">${answer}</div></article>`
  )).join('');
  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => question.parentElement.classList.toggle('open'));
  });
}

const lightbox = document.querySelector('#lightbox');
if (lightbox) {
  const pic = lightbox.querySelector('img');
  const caption = lightbox.querySelector('.lightbox-caption');
  document.addEventListener('click', (event) => {
    const item = event.target.closest('[data-lightbox]');
    if (!item) return;
    pic.src = item.dataset.lightbox;
    pic.alt = item.dataset.caption || '';
    caption.textContent = item.dataset.caption || '';
    lightbox.classList.add('show');
    document.body.style.overflow = 'hidden';
  });
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
    document.body.style.overflow = '';
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') lightbox.click();
  });
}

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', nav.classList.contains('open'));
  });
}

document.querySelectorAll('#site-nav a').forEach((link) => {
  link.addEventListener('click', () => nav?.classList.remove('open'));
});

document.querySelectorAll('#year').forEach((year) => {
  year.textContent = new Date().getFullYear();
});

const extraStyles = document.createElement('link');
extraStyles.rel = 'stylesheet';
extraStyles.href = 'updates.css';
document.head.append(extraStyles);

document.querySelectorAll('.site-header .brand, footer .brand').forEach((brand) => {
  const mark = brand.querySelector('span');
  if (mark) {
    mark.textContent = 'AF';
    mark.setAttribute('aria-label', 'Areesha Fatima logo');
  }
});

const feedbackForm = document.querySelector('#feedback-form');
if (feedbackForm) {
  feedbackForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = new FormData(feedbackForm);
    const message = `Feedback from ${form.get('name')}%0AService: ${form.get('service')}%0ARating: ${form.get('rating')}/5%0AFeedback: ${form.get('message')}`;
    window.open(`https://wa.me/923214930875?text=${message}`, '_blank', 'noopener');
  });
}
