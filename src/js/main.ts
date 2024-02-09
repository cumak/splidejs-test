import Splide from '@splidejs/splide';
import '@splidejs/splide/css/core';
import { ArrowPositionExtension } from './ArrowPositionExtension';

class MyFunc {
  slider() {
    //breakpointをcssから取得
    const widthTab =
      Number(
        getComputedStyle(document.body)
          .getPropertyValue('--widthTab')
          .replace(/[^0-9]/g, '')
      ) - 1;

    const splide = new Splide('.splide', {
      type: 'loop',
      autoWidth: true,
      pagination: false,
      padding: { left: '10%' },
      updateOnMove: true,
      speed: 800,
      gap: 30,
      cloneStatus: false,
      breakpoints: {
        [widthTab]: {
          focus: 'center',
          padding: { left: '10%', right: '10%' },
          gap: '15%',
          arrowPositionExtension: {
            offsetLeft: -20,
          },
        },
      },
    });

    // splide.on( 'resized', () => {
    //   adjustArrow()
    // });

    // splide.on( 'mounted', () => {
    //   adjustArrow()
    // });

    splide.mount({
      ArrowPositionExtension,
    });

    // function adjustArrow() {
    //   const arrowEl = splide.Components.Elements.next;
    //   const activeElIndex = splide.Components.Controller.getIndex();
    //   const activeElWidth = splide.Components.Layout.slideSize(activeElIndex);
    //   //getBoundingClientRectの値が何かおかしい。extensionに移動すると正常に取得できる
    //   const positionL = splide.Components.Slides.getAt(activeElIndex).slide.getBoundingClientRect().left;
    //   console.log(positionL);
    //   const val = positionL + activeElWidth;

    //   arrowEl.style.left = `${val}px`;
    // }
  }
}

const myFunc = new MyFunc();
window.addEventListener('load', function () {
  myFunc.slider();
});
