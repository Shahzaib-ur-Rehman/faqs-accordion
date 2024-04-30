const faq = document.querySelectorAll('.faq');

function toggleDisclosure() {
  const isExpanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', !isExpanded);
}

function init() {
  if (!faq.length) {
    return
  }
  
  faq.forEach(component => {
    component.dataset.state = 'ready';
    
    const faqsButtons = component.querySelectorAll('.accordion');
    
    faqsButtons.forEach(btn => {
      btn.removeAttribute('title');
      btn.removeAttribute('disabled');

      btn.addEventListener('click', toggleDisclosure);
    });
  }); 
  
  
}

document.addEventListener(
  'DOMContentLoaded',
  () => {
    init();
  });