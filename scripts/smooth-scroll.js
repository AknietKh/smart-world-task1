document.addEventListener('DOMContentLoaded', () => {
  const scrollLinks = document.querySelectorAll('[name="scroll-link"]');
  
  scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const link = e.target.closest('[name="scroll-link"]');
      const scrolllingSectionId = link.hash.split('#')[1];
      const scrollingSection = document.getElementById(scrolllingSectionId);
      
      e.preventDefault();
      scrollingSection.scrollIntoView({block: "start", behavior: "smooth"});
    });
  });
});