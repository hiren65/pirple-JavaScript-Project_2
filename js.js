//alert();
let a1,a2,a3;
let arr = [a1,a2,a3];

a1 = 1;a2 =2;a3 = 3;

let i = -1;
let btn = document.getElementById("btnF");
btn.addEventListener("click",goSlideForward);
let btn1 = document.getElementById("btnR");
btn1.addEventListener("click",goSlideRevarse);



let slider = document.getElementById("slider");

let slVue1 = `
                <h2 id="head1">Vue js Fundamentals Introduction</h2>
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
                <h2 id="head1">Your first Vue App</h2>
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
                <h2 id="head1">Vue.js Directives</h2>
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
                 <h2 id="head1">VueJS - Instances</h2>
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
                <h2 id="head1">Vue Components</h2>
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
                <h1>VueJS - Overview</h1>
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
              `;
arr = [slVue1,slVue2,slVue3,slVue4,slVue5,slVue6 ];
function goSlideForward() {
    i++;
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