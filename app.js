const music = new Audio('audio/12.mp3')
// music.play()

const songs = [{
        id: "1",
        songName: `Anh Đã lạc vào<br>
         <div class="subtitle">Green</div>`,
        poster: "./img/1.jpg",
    },
    {
        id: "2",
        songName: `Chạy về khóc với anh<br>
         <div class="subtitle">Erik</div>`,
        poster: "./img/2.jpg",
    },
    {
        id: "3",
        songName: `Có chơi có chịu<br>
         <div class="subtitle">Karik</div>`,
        poster: "./img/3.jpg",
    },
    {
        id: "4",
        songName: `Có hẹn với thanh xuân<br>
         <div class="subtitle">Monstar</div>`,
        poster: "./img/4.jpg",
    },
    {
        id: "5",
        songName: `Dịu dàng em đến<br>
         <div class="subtitle">Erik</div>`,
        poster: "./img/5.jpg",
    },
    {
        id: "6",
        songName: `Đồng thoại<br>
         <div class="subtitle">Đông Nhi</div>`,
        poster: "./img/6.jpg",
    },
    {
        id: "7",
        songName: `Đường tôi chở em về<br>
         <div class="subtitle">Bùi Trường Linh</div>`,
        poster: "./img/7.jpg",
    },
    {
        id: "8",
        songName: `Em khác gì hoa<br>
         <div class="subtitle">Lil Z</div>`,
        poster: "./img/8.jpg",
    },
    {
        id: "9",
        songName: `Hạt giấy<br>
         <div class="subtitle">Hải Băng</div>`,
        poster: "./img/9.jpg",
    },
    {
        id: "10",
        songName: `Là ai từ bỏ là ai vô tình<br>
         <div class="subtitle">Hương Ly</div>`,
        poster: "./img/10.jpg",
    },
    {
        id: "11",
        songName: `Mưa rơi vào phòng<br>
         <div class="subtitle">Khởi My</div>`,
        poster: "./img/11.jpg",
    },
    {
        id: "12",
        songName: `Ngày đầu tiên<br>
         <div class="subtitle">Đức Phúc</div>`,
        poster: "./img/12.jpg",
    },
    {
        id: "13",
        songName: `Như bến đợi đò<br>
         <div class="subtitle">Hana Cẩm Tiên</div>`,
        poster: "./img/13.jpg",
    },
    {
        id: "14",
        songName: `Rung động<br>
         <div class="subtitle">Dương</div>`,
        poster: "./img/14.jpg",
    },
    {
        id: "15",
        songName: `Sự thật sau một lời hứa<br>
         <div class="subtitle">Chi Dân</div>`,
        poster: "./img/15.jpg",
    },
    {
        id: "16",
        songName: `Thế giới trong em<br>
         <div class="subtitle">Hương Ly</div>`,
        poster: "./img/16.jpg",
    },
    {
        id: "17",
        songName: `Thuận theo ý trời<br>
         <div class="subtitle">Bùi Anh Tuấn</div>`,
        poster: "./img/17.jpg",
    },
    {
        id: "18",
        songName: `Vì mẹ anh bắt chia tay<br>
         <div class="subtitle">Miu Lê</div>`,
        poster: "./img/18.jpg",
    },
    {
        id: "19",
        songName: `Xin má rước dâu<br>
         <div class="subtitle">Diệu Kiên</div>`,
        poster: "./img/19.jpg",
    },
    {
        id: "20",
        songName: `Yêu em hơn mỗi ngày<br>
         <div class="subtitle">Andiez</div>`,
        poster: "./img/20.jpg",
    }
]
// popular song
Array.from(document.getElementsByClassName('songItem')).forEach((e, i) => {
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
})

// search bar
let search_results = document.getElementsByClassName('search_results')[0]
songs.forEach(element => {
    const {id, songName, poster} = element
    let card = document.createElement('a')
    card.classList.add('card')
    card.href = "#" + id
    card.innerHTML = `
    <img src="${poster}" alt="">
         <div class="content">
            ${songName}
        </div>
    `
    search_results.appendChild(card)
})
let input = document.getElementsByTagName('input')[0]
input.addEventListener('keyup', () =>{
    let input_value = input.value.toUpperCase()
    let items = search_results.getElementsByTagName('a')
    for (let index = 0; index < items.length; index++) {
       let as = items[index].getElementsByClassName('content')[0]  
       let text_value = as.textContent || as.innerHTML
       if (text_value.toUpperCase().indexOf(input_value) > -1) {
        items[index].style.display = "flex"
       } else {
        items[index].style.display = "none"
       }
       if (input.value == 0) {
        search_results.style.display = "none"
       } else {
        search_results.style.display = ""
       }
    }
})


// playing music
let masterPlay = document.getElementById('masterPlay')
let wave = document.getElementById('wave')
masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <= 0){
        music.play()
        wave.classList.add('active1')
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
    }else{
        music.pause()
        wave.classList.remove('active1')
        masterPlay.classList.add('fa-play')
        masterPlay.classList.remove('fa-pause')
    }
})
const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('fa-play-circle')
        el.classList.remove('fa-pause-circle')
    })
}
const makeAllBackground = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105, 105, 105, .0)'
    })
}
let index = 0
let poster_master_play = document.getElementById('poster_master_play')
let download_music = document.getElementById('download_music')
let title = document.getElementById('title')
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el) => {
        index = el.target.id
        music.src = `./audio/${index}.mp3`
        poster_master_play.src = `./img/${index}.jpg`
        music.play()
        masterPlay.classList.remove('fa-play')
        masterPlay.classList.add('fa-pause')
        download_music.href = `./audio/${index}.mp3`

        let songTitles = songs.filter((els) =>{
            return els.id == index
        })
        songTitles.forEach(elss =>{
            let { songName } = elss
            title.innerHTML = songName
            download_music.setAttribute('download', songName)
        })
        makeAllBackground()
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)"
        makeAllplays()
        el.target.classList.remove('fa-play-circle')
        el.target.classList.add('fa-pause-circle')
        wave.classList.add('active1')
    })
})


// time play
let currentStart = document.getElementById('currentStart')
let currentEnd = document.getElementById('currentEnd')
let seek = document.getElementById('seek')
let bar2 = document.getElementById('bar2')
let dot = document.getElementsByClassName('dot')[0]
music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime
    let music_dur = music.duration

    let min1 = Math.floor(music_dur / 60)
    let sec1 = Math.floor(music_dur % 60)
    if(sec1 < 10){
        sec1 = `0${sec1}`
    }
    currentEnd.innerText = `${min1}:${sec1}`

    let min2 = Math.floor(music_curr / 60)
    let sec2 = Math.floor(music_curr % 60)
    if(sec2 < 10){
        sec2 = `0${sec2}`
    }
    currentStart.innerText = `${min2}:${sec2}`

    let progressBar = parseInt((music_curr / music_dur) * 100)
    seek.value = progressBar
    let seekbar = seek.value
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`
})
seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100
})


// volumn
let vol_icon = document.getElementById('vol_icon')
let vol = document.getElementById('vol')
let vol_bar = document.getElementsByClassName('vol_bar')[0]
let vol_dot = document.getElementById('vol_dot')
vol.addEventListener('change', () => {
    if(vol.value == 0){
        vol_icon.classList.remove('fa-volume-up')
        vol_icon.classList.remove('fa-volume-down')
        vol_icon.classList.add('fa-volume-off')
    }
    if(vol.value > 0){
        vol_icon.classList.remove('fa-volume-up')
        vol_icon.classList.add('fa-volume-down')
        vol_icon.classList.remove('fa-volume-off')
    }
    if(vol.value > 50){
        vol_icon.classList.add('fa-volume-up')
        vol_icon.classList.remove('fa-volume-down')
        vol_icon.classList.remove('fa-volume-off')
    }
    let vol_a = vol.value
    vol_bar.style.width = `${vol_a}%`
    vol_dot.style.left = `${vol_a}%`
    music.volume = vol_a / 100
})


// back,next
let back = document.getElementById('back')
let next = document.getElementById('next')
back.addEventListener('click', ()=>{
    index -= 1
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length
    }
    music.src = `./audio/${index}.mp3`
    poster_master_play.src = `./img/${index}.jpg`
    music.play()
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')

    let songTitles = songs.filter((els) =>{
        return els.id == index
    })
    songTitles.forEach(elss =>{
        let { songName } = elss
        title.innerHTML = songName
    })
    makeAllBackground()
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)"
        makeAllplays()
        el.target.classList.remove('fa-play-circle')
        el.target.classList.add('fa-pause-circle')
        wave.classList.add('active1')
})
next.addEventListener('click', ()=>{
    index ++
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1
    }
    music.src = `./audio/${index}.mp3`
    poster_master_play.src = `./img/${index}.jpg`
    music.play()
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')

    let songTitles = songs.filter((els) =>{
        return els.id == index
    })
    songTitles.forEach(elss =>{
        let { songName } = elss
        title.innerHTML = songName
    })
    makeAllBackground()
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)"
        makeAllplays()
        el.target.classList.remove('fa-play-circle')
        el.target.classList.add('fa-pause-circle')
        wave.classList.add('active1')
})


// scroll popular
let pop_song_left = document.getElementById('pop_song_left')
let pop_song_right = document.getElementById('pop_song_right')
let pop_song = document.getElementsByClassName('pop_song')[0]
pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 330
})
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 330
})


// scroll artists
let pop_art_left = document.getElementById('pop_art_left')
let pop_art_right = document.getElementById('pop_art_right')
let Artists_bx = document.getElementsByClassName('Artists_bx')[0]
pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft += 330
})
pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -= 330
})


// next, random buttom
let shuffle = document.getElementsByClassName('shuffle')[0]
shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML
    switch (a) {
        case "next":
            shuffle.classList.add('fa-repeat')
            shuffle.classList.remove('fa-music')
            shuffle.classList.remove('fa-random')
            shuffle.innerHTML = 'repeat'
            break;
    
        case "repeat":
        shuffle.classList.remove('fa-repeat')
            shuffle.classList.remove('fa-music')
            shuffle.classList.add('fa-random')
            shuffle.innerHTML = 'random'
            break;
        case "random":
        shuffle.classList.remove('fa-repeat')
            shuffle.classList.add('fa-music')
            shuffle.classList.remove('fa-random')
            shuffle.innerHTML = 'next'
            break;
    }
})



// next, random song

const next_music = () =>{
    if(index == songs.length){
        index = 1
    }else{
        index++
    }
    music.src = `./audio/${index}.mp3`
    poster_master_play.src = `./img/${index}.jpg`
    music.play()
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
    download_music.href = `./audio/${index}.mp3`

    let songTitles = songs.filter((els) =>{
        return els.id == index
    })
    songTitles.forEach(elss =>{
        let { songName } = elss
        title.innerHTML = songName
        download_music.setAttribute('download', songName)
    })
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)"
    makeAllplays()
    el.target.classList.remove('fa-play-circle')
    el.target.classList.add('fa-pause-circle')
    wave.classList.add('active1')    
}
const repeat_music = () =>{
    index
    music.src = `./audio/${index}.mp3`
    poster_master_play.src = `./img/${index}.jpg`
    music.play()
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
    download_music.href = `./audio/${index}.mp3`

    let songTitles = songs.filter((els) =>{
        return els.id == index
    })
    songTitles.forEach(elss =>{
        let { songName } = elss
        title.innerHTML = songName
        download_music.setAttribute('download', songName)
    })
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)"
    makeAllplays()
    el.target.classList.remove('fa-play-circle')
    el.target.classList.add('fa-pause-circle')
    wave.classList.add('active1')
}
const random_music = () =>{
    if(index == songs.length){
        index = 1
    }else{
        index = Math.floor((Math.random() * songs.length) + 1)
    }
    music.src = `./audio/${index}.mp3`
    poster_master_play.src = `./img/${index}.jpg`
    music.play()
    masterPlay.classList.remove('fa-play')
    masterPlay.classList.add('fa-pause')
    download_music.href = `./audio/${index}.mp3`

    let songTitles = songs.filter((els) =>{
        return els.id == index
    })
    songTitles.forEach(elss =>{
        let { songName } = elss
        title.innerHTML = songName
        download_music.setAttribute('download', songName)
    })
    makeAllBackground()
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)"
    makeAllplays()
    el.target.classList.remove('fa-play-circle')
    el.target.classList.add('fa-pause-circle')
    wave.classList.add('active1')
}

// play next, random song
music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML
    switch (b) {
        case 'repeat':
            repeat_music()
            break;
        case 'next':
            next_music()
            break;
        case 'random':
            random_music()
            break;
    }
})


