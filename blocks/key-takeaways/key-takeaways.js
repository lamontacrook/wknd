export default function decorate(block) {
  const h4 = document.createElement('h4');
  h4.innerText = 'Key Takeaways';

  block.append(h4);

  const divBar = document.createElement('div');
  divBar.classList.add('blue-bar');
  divBar.textContent = ' ';
  block.querySelector('div > div').append(divBar);
}