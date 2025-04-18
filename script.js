function toggleFAQ(element) {
    const answer = element.querySelector('.faq-answer');
    const arrow = element.querySelector('.arrow');

    const isOpen = answer.style.display === 'block';

    document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
    document.querySelectorAll('.arrow').forEach(arw => arw.innerText = '↓');

    if (!isOpen) {
      answer.style.display = 'block';
      arrow.innerText = '↑';
    }
  }
