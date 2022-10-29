Used Technologies versions:      
     -> Angular version  -  12.1.1;  
     -> Node             -  14.16.0;   
     -> typescript       -  4.3.5;  
     
To Run:    
     -> Import the proj in IDE & open the cmd/terminal in the appropriate directory where node_modules/src available & hit below cmds.      
     -> npm install;   
     -> ng serve -o;   

1) Views: Created the Upbox website in 3 different views as per given UI Figma wireframe view pixels;  
        -> Desktop view;   
        -> Tab view - 376px;   
        -> Mobile view - 768px;   

2) Folder/File structure:
    -created all components by encapsulating the (.ts,.html, .css files) under app component/folder .
    -created asset folder to store all the images & logo under src folder.

3)  top-menu compoent is responsible for displaying the top menu bar
     -> Instead of creating the static menu bar, created dynamic menu bar details using array to supply menu bar details & *ngFor to create each menu bar in UI template & which we can replace with api in future.

4)  Footer component is responsible for footer template

5)  home-container component is responsible for displaying courasel/gallery image & showcase steps containers.
        Below of gallery image Instead of creating static templates for works(1,2,3)
        created array of data & supplied data(works step deatails) which dynamically creates showcase containers instead static
        by this we can reuse the showcase containers 

6)  showcase1-container & showcase2-container are sub components of home-container
        responsible for creating middle template layout to display 1,2,3 works steps.
        created in component based structure so in future if possible to add more work steps we can use the same existing containers & just need to supply extra data/props & also in future we can replace the arraydata with api data by calling api to fetch details from backend.

7) Created the website by keeping in mind i,e optimizing, dynamic, reusable, zero console errors,warings & easy to enhance in future with backend api integration.

# AngUIChallengeProj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.1.

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
