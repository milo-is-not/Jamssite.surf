document.addEventListener('DOMContentLoaded', () => {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const closeBtn = document.getElementById('lightbox-close');

  document.querySelectorAll('img.enlarge').forEach(img => {
    img.addEventListener('click', e => {
      e.preventDefault();
      lb.classList.add('open');
      lbImg.src = img.src;
      lbImg.alt = img.alt || '';
    });
  });

  const close = () => {
    lb.classList.remove('open');
    lbImg.src = '';
  };

  closeBtn.addEventListener('click', close);
  lb.addEventListener('click', (e) => { if (e.target === lb) close(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });
});
