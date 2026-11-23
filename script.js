(() => {
  'use strict';
  const site = window.SITE;
  if (!site) return;

  const byId = id => document.getElementById(id);
  byId('profile-name').textContent = site.name;
  byId('profile-image').src = site.profileImage;
  byId('profile-image').alt = site.name;
  byId('chat-link').href = site.chatUrl;
  byId('membership-link').href = site.membershipUrl;

  let adult = false;
  try { adult = localStorage.getItem('age-ok') === '1'; } catch (_) {}
  const gate = byId('agegate');
  const page = document.querySelector('.page');
  if (!site.ageGate || adult) {
    gate.hidden = true;
    page.inert = false;
  } else {
    gate.hidden = false;
    page.inert = true;
    document.body.style.overflow = 'hidden';
    byId('age-enter').focus();
    byId('age-enter').onclick = () => {
      try { localStorage.setItem('age-ok','1'); } catch (_) {}
      gate.hidden = true;
      page.inert = false;
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
