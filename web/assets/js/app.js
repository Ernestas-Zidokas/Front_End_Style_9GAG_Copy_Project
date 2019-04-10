$(function() {

    $('.star-hover').on('click', function(event) {
        event.preventDefault();
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

        //paslepia visa list elementa
        $(this).parent().parent().attr('data-favourite', text).hide();

        //parodo title jeigu yra data atributas ant id
        if ($('#favourite').data('favourite')) {
            $('.title-hide').removeClass('title-hide');
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

    $('.active .dropdown .dropdown-menu__item').on('click', function(event) {
        $(this).addClass('check-arrow');
        $(this).siblings().removeClass('check-arrow');
    })

    $('#nightmode').on('click', function(){
        $('body').toggleClass('nightmode');
    })

    $('body').on('click', '[data-upvote]', function(e) {
        e.preventDefault();
        $(this).toggleClass('vote-active');
        let dataPoints = $(this).closest('.post-afterbar').siblings('.post-meta').find('[data-points]')
        // let dataDownVote = $(this).closest(this).find('[data-downvote]');
        // let dataUpVote = $(this).closest('[data-upvote]');
        // BLOGAI
        // console.log(dataDownVote);
        if($(this).hasClass('vote-active')){
            let points = Number(dataPoints.text());
            if($(dataDownVote).hasClass('vote-active')){
                points+= 2;
                $(dataDownVote).removeClass('vote-active');
            } else {
                points++;
            }
            $(dataPoints).text(points.toString());
        } else {
            let points = Number(dataPoints.text());
            points--;
            dataPoints.text(points.toString());
        }
    })

    $('body').on('click', '[data-downvote]', function(e) {
        e.preventDefault();
        $(this).toggleClass('vote-active');
        let dataPoints = $(this).closest('.post-afterbar').siblings('.post-meta').find('[data-points]')
        let dataDownVote = $(this).closest('[data-downvote]');
        let dataUpVote = $(this).closest('[data-upvote]');

        if($(dataDownVote).hasClass('vote-active')){
            let points = Number(dataPoints.text());
            if($(dataUpVote).hasClass('vote-active')){
                points-= 2;
                $(dataUpVote).removeClass('vote-active');
            } else {
                points--;
            }
            $(dataPoints).text(points.toString());
        } else {
            let points = Number(dataPoints.text());
            points++;
            dataPoints.text(points.toString());
        }
    })
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
        <h3>Name: ${item.name}, Status: ${item.status}, Type: ${item.type}, Species: ${item.species}</h3>
        </a>
        </li>
        `;
        sideContent.insertAdjacentHTML('beforeend', side_template)
    })
})
.catch((error) => console.log('ivyko erroras => ', error));


let pageCounter = 0;
$(window).scroll(function() {
    if($(window).scrollTop() + $(window).height() == $(document).height()) {
        pageCounter++;
        console.log(pageCounter);

        const content = document.querySelector('.middle-bar__content');
        const api_url = `https://rickandmortyapi.com/api/character/?page=${pageCounter}`;
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

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
