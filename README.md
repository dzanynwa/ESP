# WebSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## @adnan 2019-05-04

* [angular-mdc-web/getting-started.md at master · trimox/angular-mdc-web · GitHub](https://github.com/trimox/angular-mdc-web/blob/master/docs/getting-started.md)
* [GitHub - material-components/material-components-web: Modular and customizable Material Design UI components for the web](https://github.com/material-components/material-components-web)
* [material-components-web/framework-wrappers.md at master · material-components/material-components-web · GitHub](https://github.com/material-components/material-components-web/blob/master/docs/framework-wrappers.md)
* [angular-cli/docs/documentation/stories at master · angular/angular-cli · GitHub](https://github.com/angular/angular-cli/tree/master/docs/documentation/stories)
* [Import scss file error · Issue #3036 · material-components/material-components-web · GitHub](https://github.com/material-components/material-components-web/issues/3036)
* [GitHub - williamernest/mdc-web-angular-example](https://github.com/williamernest/mdc-web-angular-example)

```powershell
PS C:\dev\LoyaltyMatrix\src\Web> ng new web-spa
PS C:\dev\LoyaltyMatrix\src\Web> cd web-spa
PS C:\dev\LoyaltyMatrix\src\Web\web-spa> npm i material-components-web
```
- [x] angular.json > projects.web-spa.architect.build.options
```json
            "stylePreprocessorOptions": {
              "includePaths": [
                "node_modules"
              ]
            },
```
- [x] index.html
```html
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
```
- [x] app.component.scss
```css
@import "@material/top-app-bar/mdc-top-app-bar";
@import "@material/drawer/mdc-drawer";
@import "@material/list/mdc-list";
```
- [x] app.component.ts
```javascript
import { MDCTopAppBar } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
...

  ngOnInit() {
    const topAppBar = MDCTopAppBar.attachTo(document.getElementById('app-bar'));
    const drawer = MDCDrawer.attachTo(document.querySelector('.mdc-drawer'));
    
    topAppBar.setScrollTarget(document.getElementById('main-content'));
    topAppBar.listen('MDCTopAppBar:nav', () => {
      drawer.open = !drawer.open;
    });
  }
```#   E S P  
 