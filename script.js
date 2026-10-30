(() => {
  'use strict';
  const site = window.SITE;
  if (!site) return;
  const byId = id => document.getElementById(id);
  const safeUrl = value => { try { const url = new URL(value); return url.protocol === 'https:' ? url.href : null; } catch (_) { return null; } };
  byId('profile-name').textContent = site.name;
  byId('profile-handle').textContent = site.handle;
  byId('profile-bio').textContent = site.bio;
  byId('profile-image').src = site.profileImage;
  byId('profile-image').alt = site.name;
  byId('membership-label').textContent = site.membershipLabel;
  byId('telegram-label').textContent = site.telegramLabel;
  [['membership-link',site.membershipUrl],['telegram-link',site.telegramUrl]].forEach(([id,value]) => {
    const url = safeUrl(value);
    if (url) byId(id).href = url; else byId(id).hidden = true;
  });
  byId('year').textContent = new Date().getFullYear();
  const grid = byId('gallery-grid');
  const lightbox = byId('lightbox');
  let current = 0;
  const showPhoto = index => {
    current = (index + site.gallery.length) % site.gallery.length;
    const photo = site.gallery[current];
    byId('lightbox-image').src = photo.src;
    byId('lightbox-image').alt = photo.caption;
    byId('lightbox-caption').textContent = photo.caption;
  };
  site.gallery.forEach((photo,index) => {
    const button = document.createElement('button');
    button.className = 'gallery-item';
    button.setAttribute('aria-label', 'View photo: ' + photo.caption);
    const image = document.createElement('img');
    image.src = photo.src; image.alt = photo.caption;
    image.loading = 'lazy'; image.decoding = 'async'; image.width = 300; image.height = 400;
    button.append(image);
    button.addEventListener('click',() => { showPhoto(index); lightbox.showModal(); });
    grid.append(button);
  });
  byId('lightbox-close').onclick = () => lightbox.close();
  byId('lightbox-prev').onclick = () => showPhoto(current - 1);
  byId('lightbox-next').onclick = () => showPhoto(current + 1);
  lightbox.addEventListener('click',event => { if (event.target === lightbox) lightbox.close(); });
  lightbox.addEventListener('keydown',event => {
    if (event.key === 'ArrowLeft') showPhoto(current-1);
    if (event.key === 'ArrowRight') showPhoto(current+1);
  });
  let touchX = 0;
  lightbox.addEventListener('touchstart',event => { touchX = event.changedTouches[0].clientX; },{passive:true});
  lightbox.addEventListener('touchend',event => { const dx = event.changedTouches[0].clientX-touchX; if(Math.abs(dx)>50) showPhoto(current+(dx<0?1:-1)); },{passive:true});
  let adult = false;
  try { adult = localStorage.getItem('age-ok') === '1'; } catch (_) {}
  const gate = byId('agegate');
  if(site.ageGate && !adult) {
    gate.hidden = false;
    document.querySelector('.page').inert = true;
    document.body.style.overflow = 'hidden';
    byId('age-enter').focus();
    byId('age-enter').onclick = () => {
      try { localStorage.setItem('age-ok','1'); } catch (_) {}
      gate.hidden = true;
      document.querySelector('.page').inert = false;
      document.body.style.overflow = '';
      byId('membership-link').focus({preventScroll:true});
    };
    gate.addEventListener('keydown',event => {
      if(event.key !== 'Tab') return;
      const enter = byId('age-enter'), leave = gate.querySelector('a');
      if(event.shiftKey && document.activeElement === enter) { event.preventDefault(); leave.focus(); }
      else if(!event.shiftKey && document.activeElement === leave) { event.preventDefault(); enter.focus(); }
    });
  }
})();
