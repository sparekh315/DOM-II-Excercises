
// Your code goes here

const HeaderTextColor = document.querySelector('.main-navigation');


HeaderTextColor.addEventListener('click', (e) => {
        e.target.style.color = 'blue';
})

const HeaderImgIn = document.querySelector('.header-img');
HeaderImgIn.addEventListener('mouseover', (e) => {
  e.target.style.transform = "scale(1.1)";

});

const HeaderImgOut = document.querySelector('.header-img');
HeaderImgOut.addEventListener('mouseout', (e) => {
  e.target.style.transform = "scale(1.0)";
});

const introHeaderColor = document.querySelector('.intro-header');
introHeaderColor.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = 'pink';
    e.stopPropagation();

})

const introContentColor = document.querySelector('.intro');
introContentColor.addEventListener('dblclick', (e) => {
    e.target.style.backgroundColor = "red";
})


const navClickColor = document.querySelectorAll('.nav a').forEach(item => {
    item.addEventListener('click', (e) => {
            e.target.style.color = 'green';
            e.stopPropagation();
    })
})

const navMouseOver = document.querySelectorAll('.nav a').forEach(item => {
    item.addEventListener('mouseover', (e) => {
        e.target.style.transform = "scale(1.3)";
    });
});


const navMouseOut = document.querySelectorAll('.nav a').forEach(item => {
    item.addEventListener('mouseout', (e) => {
        e.target.style.transform = "scale(1.0)";
    });
});