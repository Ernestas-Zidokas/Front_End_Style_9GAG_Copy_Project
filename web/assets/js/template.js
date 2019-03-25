function template(name, image) {
    return `
    <div class="content__middle">
        <div class="post-section">
            <a href="#">
                <img src="assets/images/funny.jpg" alt="funny">
                <p>Funny · 1h</p>
            </a>
        </div>
        <div class="middle-bar__list">
          <a href="#">
              <h1>${name}</h1>
              <img src ="${image}">
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
    </div>
    `;

}
