import { createTag } from '../../scripts/scripts.js';

export default async function decorate(block) {
  [...block.children].forEach(element => {
    let n = 1;
    element.querySelectorAll('div>div>p').forEach(item => {
      const sliderItem = createTag('div', {style: `background-color:${item.innerHTML}`});
      let h6 = element.querySelector('div>div>h6:nth-child(n)');
      let h5 = element.querySelector('div>div>h5:nth-child(n)');
      sliderItem.appendChild(h6);
      sliderItem.appendChild(h5);
      n+=1;
      console.log(sliderItem);
      element.appendChild(sliderItem);
    });
    element.removeChild(element.querySelector('div>div'));
    console.log(element);
  })
}