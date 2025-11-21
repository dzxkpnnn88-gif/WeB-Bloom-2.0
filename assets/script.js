// Intersection observer for fade-in
document.addEventListener('DOMContentLoaded', function(){
  const faders = document.querySelectorAll('.fade');
  const obs = new IntersectionObserver((entries, o)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){ entry.target.classList.add('visible'); o.unobserve(entry.target); }
    });
  }, {threshold: 0.2});
  faders.forEach(f=>obs.observe(f));

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      e.preventDefault();
      const id = this.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
});
