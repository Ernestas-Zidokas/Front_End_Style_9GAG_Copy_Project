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

        console.log($('[data-favourite]'));

        if ($('.star-hover').hasClass('star')) {
            $('.title-hide').removeClass('title-hide'); //parodo title jeigu yra star classe
        }
    })

    $('body').on('click', '#remove-favourite', function(){
        let text = $(this).parent().siblings().children('span').text();

        $(this).parent().parent().hide();
        $(`[data-favourite="${text}"]`).show();
    });
})

const content = document.querySelector('.content');
const api_url = "https://rickandmortyapi.com/api/character";
fetch(api_url)
  .then((response) => response.json())
  .then((result) =>{
    result.results.forEach((element) => {
      const template = `
      <div class="content__list">
        <a href="#">
            <h1>${element.name}</h1>
            <img src ="${element.image}">
        </a>
      </div>
      `;
      content.insertAdjacentHTML('beforeend', template)
    })
  })
  .catch((err) => console.log('ivyko erroras => ', err));
