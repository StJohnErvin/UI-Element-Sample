class CustomDatePicker extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.className = 'date-picker-container';

    const label = document.createElement('label');
    label.setAttribute('for', 'date');
    label.textContent = 'Choose a Date:';

    const input = document.createElement('input');
    input.setAttribute('type', 'date');
    input.setAttribute('id', 'date');

    container.appendChild(label);
    container.appendChild(input);
    this.shadowRoot.appendChild(container);

    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', '/css/styles.css');
    this.shadowRoot.appendChild(style);
  }
}

customElements.define('custom-date-picker', CustomDatePicker);
