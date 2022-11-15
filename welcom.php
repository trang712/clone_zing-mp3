<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zing mp3</title>
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      integrity="sha512-SfTiTlX6kk+qitfevl/7LibUOeJWlt9rbyDn92a1DqWOw9vWG2MFoays0sgObmWazO5BQPiFucnnEAjpAB+/Sw=="
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./style.css"
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      />
    <link rel="stylesheet" href="./media.css"
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"
      />
</head>
<body>
    <header>
      <!-- trai -->
      <div class="menu_side">
        <!-- <h6 id="menu_list_active_button"><i class=" fa fa-list"></i></h6> -->
        <h1>Playlist</h1>
        <div class="playlist">
          <h4 class="active"><span></span><i class="bi fa fa-music"></i>Playlist</h4>
          <h4><span></span><i class="bi fa fa-music"></i>Last Listening</h4>
          <h4><span></span><i class="bi fa fa-music"></i>Recommended</h4>
        </div>
        <div class="menu_song">
          <li class="songItem">
            <span>01</span>
            <img src="./img/bgd ĐỨC PHÚC.png" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="1"></i>
          </li>
          <li class="songItem">
            <span>02</span>
            <img src="./img/Bùi Anh Tuấn.jpg" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="2"></i>
          </li>
          <li class="songItem">
            <span>03</span>
            <img src="./img/Bùi Anh Tuấn.jpg" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="3"></i>
          </li>
          <li class="songItem">
            <span>04</span>
            <img src="./img/Bùi Anh Tuấn.jpg" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="4"></i>
          </li>
          <li class="songItem">
            <span>05</span>
            <img src="./img/Bùi Anh Tuấn.jpg" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="5"></i>
          </li>
          <li class="songItem">
            <span>06</span>
            <img src="./img/Bùi Anh Tuấn.jpg" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="6"></i>
          </li>
          <li class="songItem">
            <span>07</span>
            <img src="./img/Bùi Anh Tuấn.jpg" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="7"></i>
          </li>
          <li class="songItem">
            <span>08</span>
            <img src="./img/Bùi Anh Tuấn.jpg" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="8"></i>
          </li>
          <li class="songItem">
            <span>09</span>
            <img src="./img/Bùi Anh Tuấn.jpg" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="9"></i>
          </li>
          <li class="songItem">
            <span>10</span>
            <img src="./img/Bùi Anh Tuấn.jpg" alt="">
            <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            <i class="bi playListPlay fa fa-play-circle" id="10"></i>
          </li>
        </div>
      </div>
      <!-- phai -->
      <div class="song_side">
        <nav>
          <ul>
            <li>Discover <span></span></li>
            <li>My Library</li>
            <li>Radio</li>
          </ul>
          <div class="search">
            <i class=" bi fa fa-search"></i>
            <input type="text" placeholder="Search Music">
            <div class="search_results">
              <!-- <a href="" class="card">
                <img src="./img/1.jpg" alt="">
                <div class="content">
                  Ngày đầu tiên
                  <div class="subtitle">Đức Phúc</div>
                </div>
              </a> -->
            </div>
          </div>
          <div class="user">
            <img src="./img/Chang.jpeg" alt="">
          </div>
        </nav>
        <!-- ca nhan -->
        <div class="content">
          <h1>Nguyễn Thị Thùy Trang</h1>
          <p>Frontend Dev <br> Contact me</p>
          <div class="buttons">
            <!-- <button>Facebook</button> -->
            <a href="https://www.facebook.com/profile.php?id=100009542145080" target="_blank"><button>Facebook</button></a>
            <!-- <button>Instagram</button> -->
            <a href="https://www.instagram.com/ngonguyenthuytrang/" target="_blank"><button>Instagram</button></a>
          </div>
        </div>
        <!-- popular song -->
        <div class="popular_song">
          <div class="h4">
            <h4>Popular Song</h4>
            <div class="btn_s">
              <i id="pop_song_left" class="bi fa fa-arrow-left"></i>
              <i id="pop_song_right" class="bi fa fa-arrow-right"></i>
            </div>
          </div>
          <div class="pop_song">
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="11"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="12"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="13"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="14"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="15"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="16"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="17"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="18"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="19"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
            <li class="songItem">
              <div class="img_play">
                <img src="./img/Bùi Anh Tuấn.jpg" alt="">
                <i class="bi playListPlay fa fa-play-circle" id="20"></i>
              </div>
              <h5>Ngày Đầu tiên <br> <div class="subtitle">Đức Phúc</div></h5>
            </li>
          </div>
        </div>
        <!-- artists -->
        <div class="popular_artists">
          <div class="h4">
            <h4>Popular Artists</h4>
            <div class="btn_s">
              <i id="pop_art_left" class="bi fa fa-arrow-left"></i>
              <i id="pop_art_right" class="bi fa fa-arrow-right"></i>
            </div>
          </div>
          <div class="item Artists_bx">
            <li>
              <img src="./img/1.jpg" alt="">
            </li>
            <li>
              <img src="./img/2.jpg" alt="">
            </li>
            <li>
              <img src="./img/3.jpg" alt="">
            </li>
            <li>
              <img src="./img/4.jpg" alt="">
            </li>
            <li>
              <img src="./img/5.jpg" alt="">
            </li>
            <li>
              <img src="./img/6.jpg" alt="">
            </li>
            <li>
              <img src="./img/7.jpg" alt="">
            </li>
            <li>
              <img src="./img/8.jpg" alt="">
            </li>
            <li>
              <img src="./img/9.jpg" alt="">
            </li>
            <li>
              <img src="./img/10.jpg" alt="">
            </li>
            <li>
              <img src="./img/11.jpg" alt="">
            </li>
            <li>
              <img src="./img/12.jpg" alt="">
            </li>
            <li>
              <img src="./img/13.jpg" alt="">
            </li>
            <li>
              <img src="./img/14.jpg" alt="">
            </li>
            <li>
              <img src="./img/15.jpg" alt="">
            </li>
            <li>
              <img src="./img/16.jpg" alt="">
            </li>
            <li>
              <img src="./img/17.jpg" alt="">
            </li>
            <li>
              <img src="./img/18.jpg" alt="">
            </li>
            <li>
              <img src="./img/19.jpg" alt="">
            </li>
            <li>
              <img src="./img/20.jpg" alt="">
            </li>
          </div>
        </div>
      </div>
      <!-- duoi -->
      <div class="master_play">
        <div class="wave" id="wave">
          <div class="wave1"></div>
          <div class="wave1"></div>
          <div class="wave1"></div>
        </div>
        <img src="./img/12.jpg" alt="" id="poster_master_play">
        <h5 id="title">
          Ngày Đầu tiên
          <div class="subtitle">Đức Phúc</div>
        </h5>
        <div class="icon">
          <i class="bi shuffle fa fa-music">next</i>
          <i class="bi fa fa-step-backward" id="back"></i>
          <i class="bi fa fa-play" id="masterPlay"></i>
          <i class="bi fa fa fa-step-forward" id="next"></i>
          <a href="" download id="download_music"><i class="bi fa fa-cloud-download"></i></a>
        </div>
        <!-- tgian bai hat -->
        <span id="currentStart">0:00</span>
        <div class="bar">
          <input type="range" id="seek" min="0" max="100">
          <div class="bar2" id="bar2"></div>
          <div class="dot"></div>
        </div>
        <span id="currentEnd">0:30</span>
        <!-- am thanh -->
        <div class="vol">
          <i class="bi fa fa-volume-up" id="vol_icon"></i>
          <input type="range" min="0" max="100" id="vol">
          <div class="vol_bar"></div>
          <div class="dot" id="vol_dot"></div>
        </div>
      </div>
    </header>
    <script src="./app.js"></script>
    <script>
      let menu_list_active_button = document.getElementById('menu_list_active_button')
      let menu_side = document.getElementsByClassName('menu_side')[0]
      menu_list_active_button.addEventListener('click', ()=>{
        menu_side.style.transform = "unset"
        menu_list_active_button.style.opacity = 0
      })

      let song_side = document.getElementsByClassName('song_side')[0]
      song_side.addEventListener('click', ()=>{
        menu_side.style.transform = "translateX(-100%)"
        menu_list_active_button.style.opacity = 1
      })

    </script>
</body>
</html>