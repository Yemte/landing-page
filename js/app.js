/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
 * 
*/
// get the ul ordred list by id
const ul_nav =document.getElementById('navbar__list');
//get a list of all sections
const sections = document.querySelectorAll('section');

/* End Global Variables*/

/**
 This function is for active section on the viewport
 */
function activeSection (){
    /* a scroll event is attached to the window object, 
    then when a section is in browser view adds 'your-active-class' to the class of that section.
     When no longer in view, remove the active style.*/
   window.addEventListener('scroll', function(){
    
    for(let x =0; x<sections.length;x++){
        //This method Returns the size of a section and its position relative to the viewport.
        /* if a section is scroll up(getBoundingClientRect().top < 0) and no longer in view or or a section is below the view or
        its top distance is greater than the window inner height remove the active state */
        if(sections[x].getBoundingClientRect().top < 0||(sections[x].getBoundingClientRect().top>window.innerHeight)){
            if( sections[x].classList.contains('your-active-class'))
            sections[x].classList.remove('your-active-class');
            
        } 
        else{sections[x].classList.add('your-active-class');}     
   }

   })
    
}
/**
 This function is to create the dynamic nav lists
 */
function navListItems (){

    for(let i=1;i<=sections.length;i++){
        const li_nav = document.createElement('li');
        li_nav.innerHTML = `<a href = "#section${i}" class="menu__link"> Section ${i}</a>`;
        li_nav.addEventListener('click',function(e){
            let li = document.querySelectorAll('li');
            e.preventDefault();//prevents the default jump behaviour
            sections[i-1].scrollIntoView({behavior: "smooth"});/* The scrollIntoView method scrolls the section's parent container
             such that the section on which scrollIntoView() is called is visible to the user*/

            /* the for loop is to check if any of the lists contains the active link class if there is it will be removed */
            for(let x=0; x<li.length;x++){

                if(li[x].classList.contains('active')){
                    li[x].classList.remove('active');

            }
           /* add the active clas to change the background color of active link */
             li_nav.classList.add('active');
            }
        })  
        ul_nav.appendChild(li_nav );
        
    }
}

activeSection ();
navListItems();


