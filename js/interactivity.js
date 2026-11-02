/*Excavate - Interactivity & Form Validation */

document.addEventListener('DOMContentLoaded', () => {

  /* Form Validation */
  const forms = document.querySelectorAll('form[data-validate]');
  
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default submission for AJAX
      
      let isValid = true;
      const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');
      
      // Clear previous errors
      form.querySelectorAll('.error-msg').forEach(el => el.remove());
      form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));

      inputs.forEach(input => {
        if (!input.value.trim()) {
          isValid = false;
          showError(input, 'This field is required.');
        } else if (input.type === 'email' && !validateEmail(input.value)) {
          isValid = false;
          showError(input, 'Please enter a valid email address.');
        } else if (input.type === 'tel' && !validatePhone(input.value)) {
          isValid = false;
          showError(input, 'Please enter a valid phone number.');
        }
      });

      if (isValid) {
        // Simulate the submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        setTimeout(() => {
          alert('Thank you! Your message has been sent successfully.');
          form.reset();
          submitBtn.textContent = originalText;
          submitBtn.disabled = false;
        }, 1500);
      }
    });
  });

  function showError(input, message) {
    input.classList.add('error');
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-msg';
    errorDiv.style.color = 'var(--rust)';
    errorDiv.style.fontSize = '0.85rem';
    errorDiv.style.marginTop = '4px';
    errorDiv.textContent = message;
    input.parentNode.appendChild(errorDiv);
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    // validation for South African phone format
    return /^(\+27|0)[6-8][0-9]{8}$/.test(phone.replace(/\s/g, ''));
  }

  /*  Dynamic Content for the search and filter functionality on the Projects page
    */
  const searchInput = document.getElementById('project-search');
  const filterSelect = document.getElementById('project-filter');
  const projectCards = document.querySelectorAll('.project-card');

  if (searchInput && filterSelect && projectCards.length > 0) {
    function filterProjects() {
      const searchTerm = searchInput.value.toLowerCase();
      const filterValue = filterSelect.value.toLowerCase();

      projectCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const meta = card.querySelector('.meta').textContent.toLowerCase();
        const matchesSearch = title.includes(searchTerm) || meta.includes(searchTerm);
        const matchesFilter = filterValue === 'all' || meta.includes(filterValue);

        if (matchesSearch && matchesFilter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }

    searchInput.addEventListener('input', filterProjects);
    filterSelect.addEventListener('change', filterProjects);
  }

  /* Interactive Elements for the gallery lightbox functionality on the Projects page
  */
  const galleryImages = document.querySelectorAll('.gallery-item img');
  
  if (galleryImages.length > 0) {
    // Create lightbox modal HTML
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.innerHTML = `
      <div class="lightbox-content">
        <span class="lightbox-close">&times;</span>
        <img src="" alt="Expanded view">
      </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImg = lightbox.querySelector('img');
    const closeBtn = lightbox.querySelector('.lightbox-close');

    galleryImages.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
      });
    });

    closeBtn.addEventListener('click', () => lightbox.style.display = 'none');
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) lightbox.style.display = 'none';
    });
  }

  /*  Interactive Elements for the accordion functionality on the Projects page */
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;
      const isOpen = content.style.maxHeight;

      // Close all others
      document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
      document.querySelectorAll('.accordion-header').forEach(h => h.classList.remove('active'));

      if (!isOpen) {
        content.style.maxHeight = content.scrollHeight + "px";
        header.classList.add('active');
      }
    });
  });

});