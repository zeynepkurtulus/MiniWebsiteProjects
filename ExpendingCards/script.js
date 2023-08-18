//we need to bring all of the panels in the js code so that we can switch between them 
const panels = document.querySelectorAll('.panel') // query selector allows us to select anything: this line will select all the divs whose class name is called panel 

console.log("Panels are:", panels[0])

// inside the bracket we want to pass whatever we want to do for each iteration of the each panel inside the panels array like for nt i (like an iterator)
panels.forEach((panel)=>{
    panel.addEventListener('click', () =>{  // for each panel I want to listen for a click and when that click happens we will run a function
        removeActiveClasses()
        panel.classList.add('active') // the panel user clicks on gets add to the class of active  
    })

})

function removeActiveClasses(){ // a fucnt that will remove the panels from the active class once the user clicks on another panel 
    panels.forEach((panel) => {
        panel.classList.remove('active')

    })

} 