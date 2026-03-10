# BeatFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.



| Use Case | Displayed size (CSS pixels) | Recommended source size (pixels) | Aspect ratio | Notes / Tips 
| User avatar / profile pic | 32x32 - 64x64 px | 128x128 - 256x256 | 1:1 | Square, round crop common |
| Small icon / status indicator | 16x16 - 24x24 px | Use SVG or 48x48 - 64x64 | 1:1 | SVG preferred |
| Card / widget thumbnail | 200-400 px wide | 600-1200 px wide (2x) | 4:3, 16:9 or 1:1 | Depends on card design |
| Chart / graph screenshot | 300-800 px wide | 900-1600 px wide | Varies | Export at 2x from charting lib |
| Dashboard background / hero section | Full-width (~1200-1920 px) | 1920x1080 - 2560x1440 | 16:9 | Compress heavily often blurred |
| Large illustration / empty state | 400-800 px wide | 1200-2000 px wide | Varies | Keep fun and lightweight |
| Logo in sidebar/header | 120-200 px wide | SVG or 400-600 px wide | Varies | Vector = best |
