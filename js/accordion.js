class CustomAccordion extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.className = 'accordion-container';

    const sections = [
      { title: 'First Section', content: 'This is the content for the first section.' },
      { title: 'Second Section', content: 'This is the content for the second section.' },
      { title: 'Third Section', content: 'This is the content for the third section.' }
    ];

    sections.forEach(section => {
      const accordionItem = document.createElement('div');
      accordionItem.className = 'accordion-item';

      const header = document.createElement('h3');
      header.className = 'accordion-header';
      header.textContent = section.title;

      const content = document.createElement('div');
      content.className = 'accordion-content';
      content.textContent = section.content;

      header.addEventListener('click', () => {
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
      });

      accordionItem.appendChild(header);
      accordionItem.appendChild(content);
      container.appendChild(accordionItem);
    });

    this.shadowRoot.appendChild(container);

    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', '/css/styles.css');
    this.shadowRoot.appendChild(style);
  }
}

customElements.define('custom-accordion', CustomAccordion);
