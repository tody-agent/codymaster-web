document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-hamburger]').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var menu = document.querySelector('[data-mobile-menu]');
      if (menu) menu.classList.toggle('open');
    });
  });
  document.addEventListener('click', function() {
    var menu = document.querySelector('[data-mobile-menu]');
    if (menu) menu.classList.remove('open');
  });
});
