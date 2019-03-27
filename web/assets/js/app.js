$(function() {

    $('.star-hover').on('click', function() {
        let img = $(this).parent().siblings().children('img').attr('src');
        let text = $(this).parent().siblings().children('span').text();

        $('#favourite').attr('data-favourite', text).append(
            `<li class="side-menu__lists__list">
            <a href="#">
            <img src="${img}">
            <span>${text}</span>
            </a>
            <a class="" href="#">
            <svg id="remove-favourite" class="svg-icon star-hover star">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#star"></use>
            </svg>
            </a>
            </li>`
        );

        $(this).parent().parent().attr('data-favourite', text).hide(); //paslepia visa list elementa

        if ($('#favourite').data('favourite')) {
            $('.title-hide').removeClass('title-hide'); //parodo title jeigu yra data atributas ant id
        }
    })

    $('body').on('click', '#remove-favourite', function(){
        let text = $(this).parent().siblings().children('span').text();

        $(this).parent().parent().remove();
        $(`[data-favourite="${text}"]`).show();

        if ($('#favourite .side-menu__lists__list').length  == 0) {
            $('#favourite .side-menu__lists__title h3').addClass('title-hide');
        }
    });
})

const content = document.querySelector('.middle-bar__content');
const api_url = "https://rickandmortyapi.com/api/character/?page=1";
fetch(api_url)
.then((response) => response.json())
.then((result) => {
    result.results.forEach((element) => {
        content.insertAdjacentHTML('beforeend', template(element.name, element.image))
    })
})
.catch((err) => console.log('ivyko erroras => ', err));


const sideContent = document.querySelector('.right-bar__lists');
const side_api_url = "https://rickandmortyapi.com/api/character/?page=2";
fetch(side_api_url)
.then((response) => response.json())
.then((result) =>{
    result.results.forEach((item) => {
        const side_template = `
        <li class="right-bar__lists__list">
        <a href="#">
        <img src ="${item.image}">
        <h3>Name: ${item.name}, Status: ${item.status}, Type: ${item.type}, Species: ${item.species}, Gender: ${item.gender}</h3>
        </a>
        </li>
        `;
        sideContent.insertAdjacentHTML('beforeend', side_template)
    })
})
.catch((error) => console.log('ivyko erroras => ', error));



// $.fn.isOnScreen = function(){
//     var win = $(window);
//     var viewport = {
//         top : win.scrollTop(),
//         left : win.scrollLeft()
//     };
//     viewport.right = viewport.left + win.width();
//     viewport.bottom = viewport.top + win.height();
//
//     var bounds = this.offset();
//     bounds.right = bounds.left + this.outerWidth();
//     bounds.bottom = bounds.top + this.outerHeight();
//
//     return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));
// };
//
// let pageCounter = 1;
// let praejo = false;
// if (praejo === false) {
//     $(window).scroll(function() {
//         if ($('#test').isOnScreen() == true && praejo === false) {
//             console.log(praejo);
//             pageCounter++;
//             console.log(pageCounter);
//             console.log('test is on screen');
//
        //     const content = document.querySelector('.middle-bar__content');
        //     const api_url = `https://rickandmortyapi.com/api/character/?page=${pageCounter}`;
        //     fetch(api_url)
        //     .then((response) => response.json())
        //     .then((result) => {
        //         result.results.forEach((element) => {
        //             content.insertAdjacentHTML('beforeend', template(element.name, element.image))
        //         })
        //     })
        //     .catch((err) => console.log('ivyko erroras => ', err));
        // }
//         praejo = true;
//
//         setTimeout(function() {
//             praejo = false;
//         }, 10000)
//
//     });
// }

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {

       const content = document.querySelector('.middle-bar__content');
       const api_url = `https://rickandmortyapi.com/api/character/?page=2`;
       fetch(api_url)
       .then((response) => response.json())
       .then((result) => {
           result.results.forEach((element) => {
               content.insertAdjacentHTML('beforeend', template(element.name, element.image))
           })
       })
       .catch((err) => console.log('ivyko erroras => ', err));
   }
});
