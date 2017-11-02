import {trigger, state, transition, style, animate, keyframes, animation, useAnimation} from "@angular/animations";

export let bounceOutLeftAnimation = animation(
  animate('0.5s ease-out', keyframes([
    style({offset: .2, opacity: 1, transform: 'translateX(20px)'}),
    style({offset: 1, opacity: 0, transform: 'translateX(-100%)'})
  ]))
);

export let fadeInAnimation = animation([
  style({ opacity: 0 }),
  animate('{{ duration }} {{ easing }}')
], {
  params: {
    duration: '2s',
    easing: 'ease-out'
  }
});

export let fade = trigger('fade', [
  transition(':enter', useAnimation(fadeInAnimation)),
  transition(':leave', [
    animate(2000, style({ opacity: 0 }))
  ])
]);

export let slide = trigger('slide', [
  state('void', style({transform: 'translateX(-20px)'})),
  transition(':enter', [
    animate(500)
  ]),

  transition(':leave', [
    //animate('0.5s ease-in/ease-out/ease-in-out')
    animate('0.5s cubic-bezier(.61, .29, .07, 1.02)', style({transform: 'translateX(-100%)'}))
  ])
]);

export let slideWithKeyFrame = trigger('slideWithKeyFrame', [
  state('void', style({transform: 'translateX(-20px)'})),
  transition(':enter', [
    animate(500)
  ]),
  transition(':leave', useAnimation(bounceOutLeftAnimation))
]);
