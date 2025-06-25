$(document).ready(function() {
    $('#ripple-header').ripples({
      resolution: 256,
      dropRadius: 20,
      perturbance: 0.03
    });
  });








  

function rotateCarousel(className) {
  let current = 0;
  const images = document.querySelectorAll(`.${className}`);

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1) % images.length;
    images[current].classList.add('active');
  }, 3000);
}

rotateCarousel('carousel1');
rotateCarousel('carousel2');





function showTab(tabId) {
    document.querySelectorAll('.tab').forEach(tab => {
      tab.classList.remove('active');
    });

    document.querySelectorAll('.tab-content').forEach(content => {
      content.classList.remove('active');
    });

    const activeTabButton = document.querySelector(`.tab[onclick="showTab('${tabId}')"]`);
    if (activeTabButton) {
      activeTabButton.classList.add('active');
    }

    const activeTabContent = document.getElementById(tabId);
    if (activeTabContent) {
      activeTabContent.classList.add('active');
    }
  }









  const scriptURL = '<SCRIPT URL>'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
  })



