# Hotelinventoryapp

## Start

```
ng new ${name}
//create default project

ng new ${name}--createApplication=false
//no project
ng g app ${name}
//add project

ng serve -o
//run locally
```

| file (part1)   | description                                                                       |
| -------------- | --------------------------------------------------------------------------------- |
| ts.config-spec | for unit testing                                                                  |
| karma.conf.js  | when dev with team log history                                                    |
| polyfil        | convert code to different js version                                              |
|                | (some old browser doest not support latest feature polyfil will cover this issue) |
| main.ts        | like public static void main in Java everything start here                        |
| favicon        | logo in brower's tap title                                                        |
|                |                                                                                   |

mono-repo = multi project(app) in one workspace (share coding between projects)

| file (part2)    | description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| Angular.json    | description types names and root file                                                    |
|                 | options (mapping) bundle of code when deploy                                             |
| bootstrapModule | start project by module                                                                  |
| AppModule       | Main Class can contain other 3rd libraries or other angular libs                         |
|                 | to use such libs (components directives pipes) must be import and registered by declared |
| @NgModule       | contains every modules which is being used and give to compiler                          |
| @NgModule       | typescript decorator => modify behavior of class (components and modules) => compiler    |
| AppComponent    | View will be rendered to end users by html Tag                                           |

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
