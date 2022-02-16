//vanila script fullpage setting 
new fullpage('#fullpage',{
    autoScrolling:true,
    scrollHorizontally:true,
    // licenseKey: '',
    navigation: true,
    anchors:['Num0', 'Num1', 'Num2', 'Num3', 'Num4'],
    //callback
    afterLoad: (old_elem, new_elem, direction) => {
        if (new_elem.index == 2) {
            sec2();
            
        }
        if (old_elem.index == 2) {
            sec2_reset();
           
        }
    }
})

// section function
const sec2_Title = document.querySelector('#sec2 h1.title');
const sec2_Slider = document.querySelector('#sec2 .slider_wrap');

const sec2 = () => {

    sec2_Title.style.cssText = `
                                opacity:1;
                                transform: translateX(50px); 
                            `
    sec2_Slider.style.cssText = `
                                opacity:1;
                                transform: translateX(-50px); 
                            `
}

const sec2_reset = () => {
    sec2_Title.style.cssText =`
                            opacity:0;
                            transform: translateX(-50px); 
                        `
    sec2_Slider.style.cssText = `
                            opacity:0;
                            transform: translateX(50px); 
                        `
}

//navigation menu click event
const body = document.querySelector('body');
const nav_icon = document.querySelector('#nav_icon');

nav_icon.addEventListener('click', () => {
    body.classList.toggle('nav_active');
});