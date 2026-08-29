const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  if (window.innerWidth < 768) {
    menuToggle.classList.toggle('ativo');
    menu.classList.toggle('aberto');
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    menu.classList.remove('aberto');
    menuToggle.classList.remove('ativo');
  }
});

const codeLines = [
  'def boas_vindas(nome):',
  '    print(f"Oi, {nome}! ")',
  '    print("Bem-vinda ao SOMA+")',
  '    return "vamos programar juntas"',
  '',
  'boas_vindas("você")'
];

const typedEl = document.getElementById('typedCode');

function typeWriter(){
  if (!typedEl) return;

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion){
    typedEl.textContent = codeLines.join('\n');
    return;
  }

  let lineIndex = 0;
  let charIndex = 0;
  let output = '';

  function step(){
    if (lineIndex >= codeLines.length){
      return;
    }
    const currentLine = codeLines[lineIndex];

    if (charIndex < currentLine.length){
      output += currentLine[charIndex];
      charIndex++;
      typedEl.textContent = output;
      setTimeout(step, 28);
    } else {
      output += '\n';
      lineIndex++;
      charIndex = 0;
      typedEl.textContent = output;
      setTimeout(step, 180);
    }
  }
  step();
}

typeWriter();

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const question = item.querySelector('.faq-question');

  question.addEventListener('click', () => {
    const estaAberto = item.classList.contains('aberto');
    item.classList.toggle('aberto');
    question.setAttribute('aria-expanded', String(!estaAberto));
  });
});
