import {trigger, state, transition, style, animate} from "@angular/animations";

export let fade = trigger('fade', [
  state('void', style({opacity: 0})),
  transition(':enter, :leave', [
    animate(2000)
  ])
]);

export let slide = trigger('slide', [
  state('void', style({ transform: 'translateX(-20px)' })),
  transition(':enter', [
    animate(500)
  ]),

  transition(':leave', [
    animate(500, style({ transform: 'translateX(-100%)' }))
  ])
]);
