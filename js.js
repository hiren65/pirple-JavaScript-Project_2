//alert();
let a1,a2,a3;
let arr = [a1,a2,a3];

a1 = 1;a2 =2;a3 = 3;

let i = -1;
let slideCount = 0;

let setT = 0;

let btn = document.getElementById("btnF");
btn.addEventListener("click",goSlideForward);
let btn1 = document.getElementById("btnR");
btn1.addEventListener("click",goSlideRevarse);



let slider = document.getElementById("slider");

let slVue1 = `
                <h1 id="head1">Vue js Fundamentals Introduction Slide 1</h1>
                <h3 id = "head2">What is Vue.js?</h3>
                <img class="img" src="img/slideWhat1.PNG">
                <p id="internal">
                   Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. 
                   Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
                   The core library is focused on the view layer only, and is easy to pick up and integrate 
                   with other libraries or existing projects. On the other hand, Vue is also perfectly capable of 
                   powering sophisticated Single-Page Applications when used in combination with modern tooling and 
                   supporting libraries.
                </p>
                <p id="internal1">
                    
                </p>
              `;
let slVue2 = `
                <h1 id="head1">Your first Vue App Slide 2</h1>
                <p class="pera">First I’ll go through the most basic example of using Vue.</p>
                <h3 id = "head2">First example</h3>
                <p class="pera">
                    You create an HTML file which contains:
                </p>
                        
                <img class="img" src="img/example1.PNG">
                <p class="pera">
                    and you open it in the browser. That’s your first Vue app! 
                    The page should show a “Hello World!” message.
                </p>
              `;
let slVue3 = `
                <h1 id="head1">Vue.js Directives Slide 3</h1>
                <h3 id = "head2">Data Binding</h3>
                <p class="pera1">
                    Vue.js uses double braces {{ }} as place-holders for data.
                    I put the script tags at the end of the body so that they are executed in 
                    order after the DOM is loaded. <br>

                    What this code does is instantiate a new Vue app, 
                    linked to the #example element as its template.
                    It's defined using a CSS selector usually, 
                    but you can also pass in an HTMLElement.<br>

                    Then, it associates that template to the data object. <br>
                    That is a special object that hosts the data we want Vue to render.
                    
                    In the template, the special {{ }} tag indicates that this <br>
                    is some part of the template that's dynamic, 
                    and its content should be looked up in the Vue app data.
                </p>
                
              `;
let slVue4 = `
                 <h1 id="head1">VueJS - Instances Slide 4</h1>
                 <h3 id = "head2">Data Binding</h3>  
                 <p class="pera">
                 To start with VueJS, we need to create the instance of Vue, which is called the root Vue Instance.
                 </p> 
                 <h1>Syntex</h1>
                 <img id="syn" class="img" src="img/syntext.PNG">
                 <p class="pera1">
                 Let us look at an example to understand what needs to be part of the Vue constructor.
                 </p>
                 <img class="img" src="img/syntext1.PNG">
                 <h2>vue_instance.js</h2>
                 <img class="img" src="img/script.PNG">
                 <p class="pera1">
                      For Vue, there is a parameter called el. It takes the id of the DOM element. In the above example,
                      we have the id #vue_det. It is the id of the div element, which is present in .html.
                 </p>
              `;

let slVue5 = `
                <h1 id="head1">Vue Components Slide 5</h1>
                <p class="pera1">
                    Vue Components are one of the important features of VueJS that creates custom elements,
                    which can be reused in HTML.

                    Let’s work with an example and create a component, 
                    that will give a better understanding on how components work with VueJS.
                </p>
                <h1>Example</h1>
                <img class="img" src="img/components1.PNG">
                <h1>vue_component.js</h1>
                <img class="img" src="img/components2.PNG">
                <p class="pera1">
                    In the .html file, we have created two div with id component_test and component_test1. 
                    In the .js files shown above, two Vue instances are created with the div ids.
                    We have created a common component to be used with both the view instances.
                </p>
             `;
let slVue6  = `
                <h1>VueJS - Overview Slide 6</h1>
                <p class="pera1">
                    VueJS is an open source progressive JavaScript framework used to develop 
                    interactive web interfaces. It is one of the famous frameworks used to simplify web development. 
                    VueJS focusses on the view layer. It can be easily integrated into big projects for front-end 
                    development without any issues.
                    The installation for VueJS is very easy to start with.
                    Any developer can easily understand and build interactive web interfaces in a 
                    matter of time. VueJS is created by Evan You, an ex-employee from Google. 
                    The first version of VueJS was released in Feb 2014. It recently has clocked to 64,
                    828 stars on GitHub, making it very popular.
                </p>
                <h1>Features</h1>
                <p class="pera1">
                Following are the features available with VueJS.
                </p>
                <ul class="ul">
                    <li>Virtual DOM</li>
                    <li>Data Binding</li>
                    <li>Components</li>
                    <li>Event Handling</li>
                    <li>Animation/Transition</li>
                    <li>Computed Properties</li>
                    <li>Templates</li>
                </ul>
                <p class="pera1">In Next Slides We will see in brief! </p>
              `;
let slVue7  = `
                <h1>VueJS - Overview Slide - features Slide 7</h1>
                <h2>Virtual DOM</h2>
                <p class="pera1">
                    VueJS makes the use of virtual DOM, which is also used by other frameworks such as React, Ember, etc. 
                    The changes are not made to the DOM, instead a replica of the DOM is created which is present in the form of 
                    JavaScript data structures. Whenever any changes are to be made, 
                    they are made to the JavaScript data structures and the latter is compared with the original data structure. 
                    The final changes are then updated to the real DOM, which the user will see changing.
                    This is good in terms of optimization, it is less expensive and the changes can be made at a faster rate
                </p>
                <h2>Data Binding</h2>
                <p class="pera1">
                    The data binding feature helps manipulate or assign values to HTML attributes, change the style, 
                    assign classes with the help of binding directive called v-bind available with VueJS.
                </p>
                <h2>Components</h2>
                <p class="pera1">
                    Components are one of the important features of VueJS that helps create custom elements,
                    which can be reused in HTML.
                </p>
                <h2>Event Handling</h2>
                <p class="pera1">
                    v-on is the attribute added to the DOM elements to listen to the events in VueJS
                </p>
                <h2>Animation / Transition</h2>
                <p class="pera1">
                    VueJS provides various ways to apply transition to HTML elements when they are added/updated or removed from the DOM.
                    VueJS has a built-in transition component that needs to be wrapped around the element for transition effect. 
                    We can easily add third party animation libraries and also add more interactivity to the interface.
                </p>
                `;

let slVue8  = `
                <h1>VueJS - Overview Slide - features Slide 8</h1>
                <h2>Computed Properties</h2>
                <p class="pera1">This is one of the important features of VueJS. 
                    It helps to listen to the changes made to the UI elements and performs the necessary calculations. 
                    There is no need of additional coding for this.
                </p>
                <h2>Templates</h2>
                <p class="pera1">
                    VueJS provides HTML-based templates that bind the DOM with the Vue instance data. 
                    Vue compiles the templates into virtual DOM Render functions. 
                    We can make use of the template of the render functions and to do so we have 
                    to replace the template with the render function.
                </p>
                <h2>Directives</h2>
                <p class="pera1">
                    VueJS has built-in directives such as v-if, v-else, v-show, v-on, v-bind, and v-model, 
                    which are used to perform various actions on the frontend.
                </p>
                <h2>Watchers</h2>
                <p class="pera1">
                    Watchers are applied to data that changes. For example, form input elements. Here, 
                    we don’t have to add any additional events.
                    Watcher takes care of handling any data changes making the code simple and fast.
                </p>
                <h2>Routing</h2>
                <p class="pera1">
                    Navigation between pages is performed with the help of vue-router.
                </p>
                <h2>Light Weight</h2>
                <p class="pera1">
                    VueJS script is very lightweight and the performance is also very fast.
                </p>
                <h2>Vue-CLi </h2>
                <p class="pera1">
                    VueJS can be installed at the command line using the vue-cli command line interface. 
                    It helps to build and compile the project easily using vue-cli.
                </p>
              `;
let ff = "&lt"+"script"+"&gt";
let slVue9  = `
                <h1>VueJS - Environment Setup Slide 9</h1>
                <p class="pera1">
                    There are many ways to install VueJS. 
                    Some of the ways on how to carry out the installation are discussed ahead.
                </p>
                <h2>Using the ${ff} tag directly in HTML file </h2>
                <img class="img" src="img/enviroment.PNG">
                <p class="pera1">
                    Go to the home site https://vuejs.org/v2/guide/installation.
                    html of VueJS and download the vue.js as per need. There are two versions for use - production 
                    version and development version. The development version is not minimized, 
                    whereas the production version is minimized as shown in the following screenshot. 
                    Development version will help with the warnings and debug mode during the development of the project.
                </p>
                <img class="img" src="img/warning.PNG">
              `;
let slVue10 = `
                <h1>What is Vue.js and What are its Advantages Slide 10</h1>
                <h2>Following are the advantages of using Vue.js technology in web development.</h2>
                <ul class="ul">
                    <li>1-Very Small Size</li>
                    <li>2-Easy to Understand and Develop Applications</li>
                    <li>3-Simple Integration</li>
                    <li>4-Detailed Documentation</li>
                    <li>5-Flexibility</li>
                    <li>6-Two-Way Communication</li>
                </ul>
                <p class="pera1">
                    In the end, we can say that Vue.js has clear advantages over all the earlier 
                    frameworks like Angular.js and React.js. 
                    In short, it combines the peculiar features of all the older frameworks.
                </p>
              `;

let slVue11 = `
                <h1>Resources Used For Preparation of this Display Slides</h1>
                <ul class="ul">
                    <li>https://vuejs.org/v2/guide/</li>
                    <li>https://www.w3schools.com</li>
                    <li>https://stackoverflow.com</li>
                </ul>
                <h2>Thanks Watching Patiently, Thank You</h2>
              `;

////
arr = [slVue1,slVue2,slVue3,slVue4,slVue5,slVue6,slVue7,slVue8,slVue9,slVue10,slVue11 ];
function goSlideForward() {
    i++;//slideCount++;
    arr = [slVue1,slVue2,slVue3,slVue4,slVue5,slVue6,slVue7,slVue8,slVue9,slVue10,slVue11 ];
    if (i >= arr.length){
        i = 0;
    }

    console.log(arr[i]);
    slider.innerHTML = arr[i];

};
function goSlideRevarse() {
    i--;
    if (i < 0 ){
        i = arr.length - 1;
    }

    console.log(arr[i]);
    slider.innerHTML = arr[i];

};
let inputList = document.getElementById("listBox");
let v1 = inputList.value = "Get Value";
let v2;
inputList.addEventListener("click",function () {
    inputList.value = "";
});

let autoTimer = document.getElementById("btnPlay");
autoTimer.addEventListener("click",setTimer);
function setTimer(){
    if (setT === 0){
        v1 = inputList.value;
        v2 = parseInt(v1,10);
        //alert("find v2"+ v2);
        if (typeof v2 !== "number" || v2<1000 || isNaN(v2)){
            alert("wrong input or less than 1000 ");
            return;
        }
        //alert(parseInt(v2,10));
        autoTimer.innerText= "Stop";
        setT = 1;
        myFunction();
        return;
    }
    if (setT === 1){
        myStopFunction();
        autoTimer.innerText= "Play Slides";
        setT = 0;
        return;
    }

}

//create time interval for auto sliders
var myVar;

function myFunction() {
    myVar = setInterval(function () {
        //alert("hello");
        goSlideForward();
    },parseInt(v2,10));
}

function myStopFunction() {
    clearTimeout(myVar);
}

