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
