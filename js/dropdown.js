class CustomDropdown extends HTMLElement {
  constructor() {
    super();
    
    this.attachShadow({ mode: 'open' });

    const container = document.createElement('div');
    container.className = 'dropdown-container';

    const button = document.createElement('button');
    button.className = 'dropdown-btn';
    button.textContent = 'Select Option';

    const dropdownList = document.createElement('div');
    dropdownList.className = 'dropdown-list';

    const options = ['Option 1', 'Option 2', 'Option 3'];
    options.forEach(option => {
      const item = document.createElement('div');
      item.className = 'dropdown-item';
      item.textContent = option;
      dropdownList.appendChild(item);

      item.addEventListener('click', () => {
        button.textContent = option;
        dropdownList.style.display = 'none';
      });
    });

    button.addEventListener('click', () => {
      dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    });

    container.appendChild(button);
    container.appendChild(dropdownList);
    this.shadowRoot.appendChild(container);

    const style = document.createElement('link');
    style.setAttribute('rel', 'stylesheet');
    style.setAttribute('href', '/css/styles.css');
    this.shadowRoot.appendChild(style);
  }
}

customElements.define('custom-dropdown', CustomDropdown);
