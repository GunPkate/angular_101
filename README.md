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

| file (part1)   | description                                                                      |
| -------------- | -------------------------------------------------------------------------------- |
| ts.config-spec | for unit testing                                                                 |
| karma.conf.js  | when dev with team log history                                                   |
| polyfil        | convert code to different js version                                             |
|                | (some old browser does not support latest feature polyfil will cover this issue) |
| main.ts        | like public static void main in Java everything start here                       |
| favicon        | logo in brower's tap title                                                       |
|                |                                                                                  |

mono-repo = multi project(app) in one workspace (share coding between projects)

| file (part2)    | description                                                                              |
| --------------- | ---------------------------------------------------------------------------------------- |
| Angular.json    | description types names and root file prefix(start name of component)                    |
|                 | options (mapping) bundle of code when deploy                                             |
| bootstrapModule | start project by module                                                                  |
| AppModule       | Main Class can contain other 3rd libraries or other angular libs                         |
|                 | to use such libs (components directives pipes) must be import and registered by declared |
| @NgModule       | contains every modules which is being used and give to compiler                          |
| @NgModule       | typescript decorator => modify behavior of class (components and modules) => compiler    |
| AppComponent    | View will be rendered to end users by html Tag                                           |

roomsComponent add function and databinding

```
<h1>Welcome to {{hotelsName}}</h1>
<div [hidden]="hideRooms">
    Numbers of Romms:
    <div [innerText]="numbersOfRooms"></div>
</div>
<button (click)="toggle()">Hide</button>
<!-- document.getElemntById('numbersOfRooms').innerText = numbersOfRooms -->
```

databinding can be done in 2 ways

Directive (structure and attribute)
-controll DOM element
-hook lifecycle
-no template

ngIf
\*ngFor optional chaining and null collision

```
        <tr *ngFor="let room of roomsList; let e =even; let o = odd; let i =index;">
            <td>{{i}}</td>
            <td>{{e?"Even":"Odd"}}</td>
            <td>{{room.RoomType}}</td>
            <td>{{room.amendities}}</td>
            <td>{{room.price}}</td>
            <td>{{room.photos}}</td>
            <td>{{room.checkInTime}}</td>
            <td>{{room.checkOutTime}}</td>
        </tr>
```

ngSwitch

app.components.html

```
<div [ngSwitch]="role">
        <div *ngSwitchCase="'User'">Welcome Users</div>
        <div *ngSwitchCase="'Admin'">
            <hinv-rooms></hinv-rooms>
        </div>
        <div *ngSwitchDefault>Unauthorized</div>
</div>
```

"\*" is structural directive can add/modify entire dom
attribute directive can not add/remove element from dom
result
image...

ngStyle

```
    <div [ngStyle]="{color: rooms.availableRooms?'green':'red'}"[innerText]="numbersOfRooms" style="font-size: larger;"></div>
```

pipes(Data transformation)
When we get data from API, we have to change format before showing on frontend
(Object dont change)

```
        <!-- <tr [ngClass]="e? 'even': 'odd' " *ngFor="let room of roomsList  | slice : 0:1; let e =even; let o = odd; let i =index;"> -->
            <td>{{i}}</td>
            <td>{{e?"Even":"Odd"}}</td>
            <td>{{room.RoomType}}</td>
            <td>{{room.amendities | lowercase}}</td>
            <td>{{room.price | currency}}</td>
            <!-- <td>{{room.photos}}</td> -->
            <td>{{room.checkInTime | date :"medium"}}</td>
            <td>{{room.checkOutTime | date}}</td>
            <td>{{room.rating | number :'1.1-2'}}</td>
```
![image](https://user-images.githubusercontent.com/77183620/203937666-c48c0fcd-5bc8-4488-a42b-7824286256db.png)

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
