document.addEventListener('DOMContentLoaded', () => {
    const dropdownBtn = document.querySelector('.dropdown-btn');
    const dropdownList = document.querySelector('.dropdown-list');
  
    dropdownBtn.addEventListener('click', () => {
      dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
    });
  
    document.addEventListener('click', (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownList.contains(e.target)) {
        dropdownList.style.display = 'none';
      }
    });
  
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.addEventListener('click', () => {
        dropdownBtn.textContent = item.textContent;
        dropdownList.style.display = 'none';
      });
    });
  });
  