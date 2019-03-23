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
      <div class="post-section">
          <a href="#">
              <img src="assets/images/funny.jpg" alt="funny">
              <p>Funny · 1h</p>
          </a>
      </div>
      <div class="content__list">
        <a href="#">
            <h1>${element.name}</h1>
            <img src ="${element.image}">
        </a>
      </div>
      <div class="post-meta">
          <a href="#">
              <p>725 points</p>
          </a>
          <div>·</div>
          <a href="#">
              <p>14 comments</p>
          </a>
      </div>
      <div class="post-afterbar">
          <div class="btn-left">
              <ul class="btn-vote">
                  <li class="btn-vote__list">
                      <a href="#">
                          <svg class="svg-icon">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#up"></use>
                          </svg>
                      </a>
                  </li>
                  <li class="btn-vote__list">
                      <a href="#">
                          <svg class="svg-icon">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#down"></use>
                          </svg>
                      </a>
                  </li>
              </ul>
              <ul class="btn-vote">
                  <li class="btn-vote__list">
                      <a href="#">
                          <svg class="svg-icon">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#comment"></use>
                          </svg>
                      </a>
                  </li>
                  <li class="btn-vote__list">
                      <a href="#">
                          <svg class="svg-icon">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#more"></use>
                          </svg>
                      </a>
                  </li>
              </ul>
          </div>
          <div class="btn-right">
              <ul>
                  <li class="btn-right__list btn-right__list--facebook">
                      <a href="#">
                          <svg class="svg-icon">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#facebook"></use>
                          </svg>
                          <span>Facebook</span>
                      </a>
                  </li>
                  <li class="btn-right__list btn-right__list--pinterest">
                      <a href="#">
                          <svg class="svg-icon">
                              <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#pinterest"></use>
                          </svg>
                          <span>Pinterest</span>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
      `;
      content.insertAdjacentHTML('beforeend', template)
    })
  })
  .catch((err) => console.log('ivyko erroras => ', err));
