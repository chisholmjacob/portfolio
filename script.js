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








document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    };

    fetch("https://script.google.com/macros/s/AKfycbyjg_rrn9V1KDVNtfHWtl6cvEMafoBQE2SB_ik6M60NOMc2ICLHJhpcvig2-rYQjIqo/exec", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.text())
      .then(response => {
        console.log("Server response:", response); // 👈 For testing
        document.getElementById("response-message").textContent = "Message sent!";
        form.reset();
      })
      .catch(err => {
        console.error("Error occurred:", err);
        document.getElementById("response-message").textContent = "Something went wrong.";
      });
  });
});

