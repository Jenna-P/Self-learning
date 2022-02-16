//vanila script setting 
new fullpage('#fullpage',{
    autoScrolling:true,
    scrollHorizontally:true,
    // licenseKey: '',
    navigation: true,
    anchors:['Num0', 'Num1', 'Num2', 'Num3', 'Num4'],
})

//navigation menu click event
const body = document.querySelector('body');
const nav_icon = document.querySelector('#nav_icon');

nav_icon.addEventListener('click', () => {
    body.classList.toggle('nav_active');
});