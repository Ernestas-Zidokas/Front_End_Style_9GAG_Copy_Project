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

// const content = document.querySelector('.middle-bar');
// const api_url = "https://rickandmortyapi.com/api/character/";
// fetch(api_url)
//   .then((response) => response.json())
//   .then((result) => {
//       console.log(result);
//     result.results.forEach((element) => {
//       content.insertAdjacentHTML('beforeend', template(element.name, element.image))
//     })
//   })
//   .catch((err) => console.log('ivyko erroras => ', err));

  $('.middle-bar').infiniteScroll({
    // options
    path: function() {
        var pageNumber = ( this.loadCount + 1 );
        return `https://rickandmortyapi.com/api/character/?page=${pageNumber}`;
    },
    append: template(element.name, element.image),
    history: false,
  });

  // element argument can be a selector string
  //   for an individual element
  var infScroll = new InfiniteScroll( '.container', {
    // options
  });



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
            <h3>Name: ${item.name}, Status: ${item.status}, Type: ${item.type}, Species: ${item.species}, Gender: ${item.Gender}</h3>
        </a>
      </li>
      `;
      sideContent.insertAdjacentHTML('beforeend', side_template)
    })
  })
  .catch((error) => console.log('ivyko erroras => ', error));
