const navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
const skillContiner = document.getElementById('skill-continer');
window.addEventListener('scroll',checkScroll);
const animationDone =false;

//initalising bars
function initialiseBars(){
    for(let bar of progessBars){
        bar.style.width = 0 + '%';
    }
}


//Smooth Scroll
for(let i=0; i < navMenuAnchorTags.length;i++){
    navMenuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        const targetSelectionID = this.textContent.trim().toLowerCase();
        //console.log(targetSelectionID);
        const targetSelection = document.getElementById(targetSelectionID);
        // console.log(targetSelection);
        const targetSelectionCoodinates = targetSelection.getBoundingClientRect();
        // console.log(targetSelectionCoodinates);
        const interval = setInterval(function(){
            const targetSelectionCoodinates = targetSelection.getBoundingClientRect();
            if(targetSelectionCoodinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,70);
        },50);
    });
}

//Check Skill Continer is at window
function checkScroll(){
    const coodinates = skillContiner.getBoundingClientRect();
    if(!animationDone && coodinates.top <= window.innerHeight){
        animationDone = true;
        console.log('Skill Section Visiaable');
        fillBars();
    }
    else if(coodinates.top > window.innerHeight){
        animationDone = false;
        initialiseBars();
    }
}

//fills Bars of Skills
function fillBars(){

    for(let bar of progessBars){
        
        let targetWidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        let interval = setInterval(function(){
            if(currentWidth > targetWidth){
                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%'; 
        },3);
    }
}