//enable Bootstrap tooltip everywhere
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
});

// enable Bootstrap toast notification feature (it's just a div popping up but looks like a notification)
var toastElList = [].slice.call(document.querySelectorAll('.toast'));
let toastBtn = document.getElementById('liveToastBtn');

var toastList = toastElList.map(function (toastEl) {
    console.log(toastEl);
    toastBtn.addEventListener('click', item => {
        console.log(item);
        return new bootstrap.Toast(toastEl,{autohide: false}).show()
    })
});

//adding a shadow effect (also a Bootstrap class) on hover and leaving hover on Bootstrap cards
let shadowHover = document.querySelectorAll('.card');
shadowHover.forEach(item => {
    item.addEventListener('mouseover',className => {
        // className.classList.add('shadow')
        item.classList.add('shadow');
        item.addEventListener('mouseout',rmv =>{
            item.classList.remove('shadow');
        })
    })
})