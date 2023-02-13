import { createTag } from '../../scripts/scripts.js';

export default async function decorate(block) {
  [...block.children].forEach((element) => {
    element.querySelectorAll('div>div>p').forEach((item) => {
      const sliderItem = createTag('div', { style: `background-color:${item.innerHTML}` });
      const h6 = element.querySelector('div>div>h6');
      const h5 = element.querySelector('div>div>h5');
      sliderItem.appendChild(h6);
      sliderItem.appendChild(h5);
      element.appendChild(sliderItem);
    });
    element.removeChild(element.querySelector('div>div'));
  });
}
