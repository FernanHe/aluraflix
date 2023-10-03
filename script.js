let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5
}
let callback = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.target.id == 'movie-trailer') {
      if (entry.isIntersecting) {
        entry.target.play()
      } else {
        entry.target.pause()
      }
    }
  })
}
let observer = new IntersectionObserver(callback, options)
observer.observe(document.querySelector('#movie-trailer'))

/* Altera cor da Navbar quando estiver no topo */
$(window).scroll(function () {
  if ($(document).scrollTop() > 200) {
    $('nav').addClass('header-color')
  } else {
    $('nav').removeClass('header-color')
  }
})

let moviesArr = []
let userElement = document.getElementById('user-movies')
// Adicionar filme
function addMovie() {
  let favoriteMovie = document.getElementById('filme').value
  if (favoriteMovie.endsWith('.jpg') || favoriteMovie.endsWith('.png')) {
    if (moviesArr.includes(favoriteMovie) == true) {
      alert('Filme existente! Porfavor, insira outro.')
    } else {
      moviesArr.push(favoriteMovie)

      listMoviesOnScreen()
    }
  } else {
    console.error('Endereço de filme inválido')
  }
  document.getElementById('filme').value = ''
}

// Lista filmes
function listMoviesOnScreen() {
  let element = ''
  for (let i = 0; i < moviesArr.length; i++) {
    element += `<div class="user-item">`
    element += `<img src="${moviesArr[i]}" class="movie-item">`
    element += `<div class="movie-info" >
    <i class="fa-solid fa-info"></i>
    <i class="fa-solid fa-ellipsis-vertical"></i></div>`
    element += `</div>`
  }
  userElement.innerHTML = element
}

// Remover Séries
function removeMovie() {
  let favoriteMovie = document.getElementById('filme').value
  if (favoriteMovie.endsWith('.jpg') || favoriteMovie.endsWith('.png')) {
    let index = moviesArr.indexOf(favoriteMovie)
    moviesArr.splice(index, 1)
    listMoviesOnScreen()
  } else {
    console.error('Direcciòn de pelicula invalida')
  }
  document.getElementById('filme').value = ''
}

/* 
  Séries Adicionadas
*/
const seriesList = [
  'https://www.latercera.com/resizer/aZrqANIQfh3cG_RonLjNQF2w82A=/768x0/smart/filters:quality(70):format(webp):no_upscale()/arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/K5S52WFLOZEBTMIA7Q23ZV4CTM.jpg',
  'https://www.lahiguera.net/musicalia/artistas/varios/disco/9143/13_reasons_why_season_2_a_netflix_original_series_soundtrack-portada.jpg',
  'https://i.pinimg.com/236x/3e/ef/11/3eef118af13b131c3e97554519962139.jpg',
  'https://www.mundiario.com/asset/thumbnail,1280,720,center,center/media/mundiario/images/2022/10/05/2022100519442283899.jpg',
  'https://rafaelcine.com/wp-content/uploads/2021/01/equinox-1096x1536.jpg',
  'https://www.deperu.com/cine/portadas/portada1598.jpg',
  'https://www.findelahistoria.com/web/wp-content/uploads/2021/12/la-casa-de-papel-money-heist-serie-poster.jpg',
  'https://www.findelahistoria.com/web/wp-content/uploads/2021/12/loki-marvel-serie-poster.jpg',
  'https://www.findelahistoria.com/web/wp-content/uploads/2021/12/you-serie-netflix-poster.jpg',
  'https://www.findelahistoria.com/web/wp-content/uploads/2020/04/The-walking-dead-series-tv-poster-amc.jpg',
  'https://www.findelahistoria.com/web/wp-content/uploads/2020/04/Stranger-things-series-tv-poster-netflix.jpg'
]
const moviesList = [
  'https://i.pinimg.com/564x/7a/e2/36/7ae236da939fec89a335426f6ac706d5.jpg',
  'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.18169-9/10313174_688838137853444_7687546838722031216_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=9267fe&_nc_ohc=6iIoqoxmWxkAX9owdxo&_nc_ht=scontent.fsjo6-1.fna&oh=00_AfBBRo7a7vGCYdfaj51J8dbMa_qiCgIYttHG8rqlYGRrJw&oe=65418845',
  'https://scontent.fsjo6-1.fna.fbcdn.net/v/t31.18172-8/1836696_688836317853626_2571873013496683597_o.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9267fe&_nc_ohc=16HjmOpeZPIAX9w6VLq&_nc_ht=scontent.fsjo6-1.fna&oh=00_AfBg2oQOrdGBgDSqd0hsXoiBvC3Rjq2-IeKO-lDXt-sD1A&oe=65416D92',
  'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.18169-9/1375856_556220397781886_2140806968_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_ohc=jO_-BtnO4JYAX-Kj86S&_nc_oc=AQlY2ov3PShkBWENfnEbVH_x5kKtlJMhAGNrmCrJ4YETwcCCequgvmHclgfuGFajIKE&_nc_ht=scontent.fsjo6-1.fna&oh=00_AfBQWbsX-pizQatQWrwgYeg0YIcq19JDb33IHboMCrknFA&oe=654172E4',
  'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.18169-9/537847_556219327781993_1428432264_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=AUoPHEboxeQAX_gN_N8&_nc_ht=scontent.fsjo6-1.fna&oh=00_AfCDczLC8Lf3RXiH3PSGnIP0bsdqGb1Ij8Lrna1d9vPuvg&oe=65416A11',
  'https://scontent.fsjo6-1.fna.fbcdn.net/v/t31.18172-8/1273767_552528541484405_192171065_o.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=XFwOvmrGLB0AX_F7TZx&_nc_ht=scontent.fsjo6-1.fna&oh=00_AfAyiHAA6k8mDjjMGv3Yz7HeCqZyS_4SnmLbZCKLwFOnKw&oe=65415789',
  'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-15.jpg',
  'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-14.jpg',
  'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-10.jpg',
  'https://www.laguiadelvaron.com/wp-content/uploads/2019/07/portadas-pel%C3%ADculas-iguales-www.laguiadelvaron-8.jpg',
  'https://scontent.fsjo6-1.fna.fbcdn.net/v/t1.18169-9/34437_157600704279223_8167539_n.jpg?stp=cp0_dst-jpg_e15_p403x403_q65&_nc_cat=107&ccb=1-7&_nc_sid=e007fa&_nc_ohc=3o-J_4NPppsAX9wECsZ&_nc_ht=scontent.fsjo6-1.fna&oh=00_AfCccveLUEaym8SKZp5OvZi4E8afrkUJ9nybxS6jNcygdA&oe=65418673'
]

const itemsElement = document.getElementById('items-movies')
const itemsElementSeries = document.getElementById('items-series')

for (let i = 0; i < seriesList.length; i++) {
  let img = document.createElement('img')
  let div = document.createElement('div')
  let divInfo = document.createElement('div')
  img.setAttribute('src', seriesList[i])
  img.setAttribute('class', 'movie-item')
  divInfo.setAttribute('class', 'movie-info')
  divInfo.innerHTML = `<i class="fa-solid fa-info"></i>
  <i class="fa-solid fa-ellipsis-vertical"></i>`
  div.setAttribute('class', 'item')
  div.appendChild(img)
  div.appendChild(divInfo)
  itemsElementSeries.appendChild(div)
}

for (let i = 0; i < moviesList.length; i++) {
  let img = document.createElement('img')
  let div = document.createElement('div')
  let divInfo = document.createElement('div')
  img.setAttribute('src', moviesList[i])
  img.setAttribute('class', 'movie-item')
  divInfo.setAttribute('class', 'movie-info')
  divInfo.innerHTML = `<i class="fa-solid fa-info"></i>
  <i class="fa-solid fa-ellipsis-vertical"></i>`
  div.setAttribute('class', 'item')
  div.appendChild(img)
  div.appendChild(divInfo)
  itemsElement.appendChild(div)
}
