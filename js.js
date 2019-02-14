//alert();

let btn = document.getElementById("btnF");
btn.addEventListener("click",goSlideForward);
let btn1 = document.getElementById("btnR");
btn1.addEventListener("click",goSlideRevarse);

let a1,a2,a3;
let arr = [a1,a2,a3];

a1 = 1;a2 =2;a3 = 3;
;
let i = 0;

let slider = document.getElementById("slider");

let slVue1 = `
                <h2 id="head1">Vue js Fundamentals Introduction</h2>
                <h3 id = "head2">What is Vue.js?</h3>
                <p id="internal">
                    Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. 
                    Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.
                    The core library is focused on the view layer only, and is easy to pick up and integrate 
                    with other libraries or existing projects. On the other hand, Vue is also perfectly capable of 
                    powering sophisticated Single-Page Applications when used in combination with modern tooling and 
                    supporting libraries.
                </p>
                <p id="internal1">
                    include Vue in html page with:

                    development version, includes helpful console warnings 
                     src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"
                    or:
                    
                    production version, optimized for size and speed 
                    src="https://cdn.jsdelivr.net/npm/vue"
                </p>
              `;
let slVue2 = `
                <h2 id="head1">Vue js Fundamentals Example</h2>
                <h3 id = "head2">Data Binding</h3>
                
              `;
let slVue3 = `
                <h2 id="head1">Vue js Fundamentals Two Way Data Binding</h2>
                <h3 id = "head2">Data Binding  Two Way</h3>
                
              `;

arr = [slVue1,slVue2,slVue3];
function goSlideForward() {
    if (i >= arr.length){
        i = 0;
    }
    console.log(arr[i]);
    slider.innerHTML = arr[i];
    i++;
};
function goSlideRevarse() {
    if (i < 0 ){
        i = arr.length - 1;
    }
    console.log(arr[i]);
    slider.innerHTML = arr[i];
    i--;
};