let time = document.querySelector('.time')
let days = document.querySelector('.date')
let monthCollection = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
let dayCollection = ['воскресенье', 'понедельник','вторник','среда','четверг','пятница','суббота',]
let monthCollectionEng = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']
let dayCollectionEng = ['sunday', 'monday','tuesday','wednesday','thursday','friday','saturday',]
let greeting = document.querySelector('.greeting')
let inputName = document.querySelector('.name')
let body = document.querySelector('body')
let sliderNext = document.querySelector('.slide-next')
let sliderPrev = document.querySelector('.slide-prev')

let interval1
let interval2


import playList from './playList.js';


let lang = 'ru'

function changeLang(){    
if(lang != 'ru'){
    
function SetDate(){
    let now = new Date()
    let seconds = now.getSeconds()
    let minutes = now.getMinutes()
    let hours = now.getHours()
    let day = now.getDay()
    let date = now.getDate()
    let month = now.getMonth()
    let years = now.getFullYear()    

  if(hours<10){
    if(minutes<10){
        if(seconds<10){
            time.innerHTML = `0${hours}:0${minutes}:0${seconds}`
        }else{
            time.innerHTML = `0${hours}:0${minutes}:${seconds}`
        }
    }else{
        if(seconds<10){
            time.innerHTML = `0${hours}:${minutes}:0${seconds}`
        }else{
            time.innerHTML = `0${hours}:${minutes}:${seconds}`
        }
    }
  }else{
    if(minutes<10){
        if(seconds<10){
            time.innerHTML = `${hours}:0${minutes}:0${seconds}`
        }else{
            time.innerHTML = `${hours}:0${minutes}:${seconds}`
        }
    }else{
        if(seconds<10){
            time.innerHTML = `${hours}:${minutes}:0${seconds}`
        }else{
            time.innerHTML = `${hours}:${minutes}:${seconds}`
        }
    }
  }

   
    days.innerHTML = `${dayCollectionEng[day]}, ${date} ${monthCollectionEng[month]} ${years}`    
}

clearInterval(interval1)
 interval1 = setInterval(SetDate, 1000);

function getDayPeriod(){
    let greetings = ''
    let now = new Date() 
    let hours = now.getHours()

    if(hours >= 6 && hours < 12){
        greetings = 'Good morning,'
    }
    if(hours >= 12 && hours < 18){
        greetings = 'Good afternoon,'
    }
    if(hours >= 18 && hours <= 23){
        greetings = 'Good evening,'
    }
    if(hours >= 0 && hours < 6){
        greetings = 'Good night,'
    }

    greeting.innerHTML = greetings
}

clearInterval(interval2)
interval2 = setInterval(getDayPeriod, 1000);

inputName.placeholder = 'name'

inputName.addEventListener('change', () =>{
    localStorage.setItem('UserName', inputName.value)
    
})

inputName.value = localStorage.getItem('UserName')





let weatherIcon = document.querySelector('.weather-icon');
let temperature = document.querySelector('.temperature');
let weatherDescription = document.querySelector('.weather-description');
let wind = document.querySelector('.wind')
let humidity = document.querySelector('.humidity')
let city = document.querySelector('.city')
let weatherEror = document.querySelector('.weather-error')


city.placeholder = 'City'
city.value = localStorage.getItem('City')
if(!city.value){
    city.value = 'Minsk'
}




async function getWeatherEN() {  
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=en&appid=1b4b99df0bbc6692314b64b0b67afb15&units=metric`;
    let res = await fetch(url);
    let data = await res.json();
    
    if(res.status == 400){
        weatherEror.textContent = `Error! Nothing to geocode for ''!`
        weatherIcon.className = 'weather-icon owf';    
    temperature.textContent = ``;
    weatherDescription.textContent = '';
    wind.textContent =`` 
    humidity.textContent = ``
    }else{
        if(res.status == 404){
            weatherEror.textContent = `Error! city not found for'${city.value}''`
        weatherIcon.className = 'weather-icon owf';    
    temperature.textContent = ``;
    weatherDescription.textContent = '';
    wind.textContent =`` 
    humidity.textContent = ``

        }else{
            weatherEror.textContent = ''
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${Math.round(data.main.temp)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    wind.textContent =`Wind speed: ${Math.round(data.wind.speed)} m/s` 
    humidity.textContent = `Humidity: ${Math.round(data.main.humidity)}%`

        }
    
    }

    
  }
  getWeatherEN()

  
city.addEventListener('change',  () =>{
    localStorage.setItem('City', city.value)
    
    getWeatherEN()
})
quoteNumber = quoteNumber+20
async function getQuotesEN() {  
    const quotes = 'assets/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    
    quote.textContent = data[quoteNumber].text
    author.textContent = data[quoteNumber].author
  }
  getQuotesEN();

}else{
    
    
    function SetDate(){
        let now = new Date()
        let seconds = now.getSeconds()
        let minutes = now.getMinutes()
        let hours = now.getHours()
        let day = now.getDay()
        let date = now.getDate()
        let month = now.getMonth()
        let years = now.getFullYear()    
    
      if(hours<10){
        if(minutes<10){
            if(seconds<10){
                time.innerHTML = `0${hours}:0${minutes}:0${seconds}`
            }else{
                time.innerHTML = `0${hours}:0${minutes}:${seconds}`
            }
        }else{
            if(seconds<10){
                time.innerHTML = `0${hours}:${minutes}:0${seconds}`
            }else{
                time.innerHTML = `0${hours}:${minutes}:${seconds}`
            }
        }
      }else{
        if(minutes<10){
            if(seconds<10){
                time.innerHTML = `${hours}:0${minutes}:0${seconds}`
            }else{
                time.innerHTML = `${hours}:0${minutes}:${seconds}`
            }
        }else{
            if(seconds<10){
                time.innerHTML = `${hours}:${minutes}:0${seconds}`
            }else{
                time.innerHTML = `${hours}:${minutes}:${seconds}`
            }
        }
      }
    
       
        days.innerHTML = `${dayCollection[day]}, ${date} ${monthCollection[month]} ${years}`    
    }
    
    clearInterval(interval1)
    interval1 =  setInterval(SetDate, 1000);
    
    function getDayPeriod(){
        let greetings = ''
        let now = new Date() 
        let hours = now.getHours()
    
        if(hours >= 6 && hours < 12){
            greetings = 'Доброе утро,'
        }
        if(hours >= 12 && hours < 18){
            greetings = 'Добрый день,'
        }
        if(hours >= 18 && hours <= 23){
            greetings = 'Добрый вечер,'
        }
        if(hours >= 0 && hours < 6){
            greetings = 'Доброй ночи'
        }
    
        greeting.innerHTML = greetings
    }
    
    clearInterval(interval2)
     interval2 = setInterval(getDayPeriod, 1000);
    
    inputName.placeholder = 'имя'
    
    inputName.addEventListener('change', () =>{
        localStorage.setItem('UserName', inputName.value)
        
    })
    
    inputName.value = localStorage.getItem('UserName')
    
    
    
    
    
    let weatherIcon = document.querySelector('.weather-icon');
    let temperature = document.querySelector('.temperature');
    let weatherDescription = document.querySelector('.weather-description');
    let wind = document.querySelector('.wind')
    let humidity = document.querySelector('.humidity')
    let city = document.querySelector('.city')
    let weatherEror = document.querySelector('.weather-error')
    
    city.placeholder = 'Город'
    city.value = localStorage.getItem('City')
    if(!city.value){
        city.value = 'Минск'
    }
    
    
    
    
    async function getWeather() {  
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&lang=ru&appid=1b4b99df0bbc6692314b64b0b67afb15&units=metric`;
        let res = await fetch(url);
        let data = await res.json();
        
        if(res.status == 400){
            weatherEror.textContent = 'Ошибка, пустая строка поиска'
            weatherIcon.className = 'weather-icon owf';    
        temperature.textContent = ``;
        weatherDescription.textContent = '';
        wind.textContent =`` 
        humidity.textContent = ``
        }else{
            if(res.status == 404){
                weatherEror.textContent = `Ошибка, не найден город '${city.value}''`
            weatherIcon.className = 'weather-icon owf';    
        temperature.textContent = ``;
        weatherDescription.textContent = '';
        wind.textContent =`` 
        humidity.textContent = ``
    
            }else{
                weatherEror.textContent = ''
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        temperature.textContent = `${Math.round(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent =`Скорость ветра: ${Math.round(data.wind.speed)} м/с` 
        humidity.textContent = `Влажность: ${Math.round(data.main.humidity)}%`
    
            }
        
        }
    
        
      }
      getWeather()
    
      
    city.addEventListener('change',  () =>{
        localStorage.setItem('City', city.value)
        
        getWeather()
    })
    
    quoteNumber = quoteNumber-20
async function getQuotesRU() {  
    const quotes = 'assets/data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    
    quote.textContent = data[quoteNumber].text
    author.textContent = data[quoteNumber].author
  }
  getQuotesRU();
    

}    
}


let quote = document.querySelector('.quote')
    let author = document.querySelector('.author')
    let changeQuote = document.querySelector('.change-quote')
    
    let quoteNumber
    
    async function getQuotes() {  
        const quotes = 'assets/data.json';
        const res = await fetch(quotes);
        const data = await res.json();
        if(lang == 'ru'){
            quoteNumber = randomInteger(0,19)
        }else{
            quoteNumber = randomInteger(20,39)
        }
        
        quote.textContent = data[quoteNumber].text
        author.textContent = data[quoteNumber].author
      }
      getQuotes();
    
      changeQuote.addEventListener('click', getQuotes);

function randomInteger(min, max) {
   
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }


  let backgroundNumber = randomInteger(1,20)

  let backgroundLink = ''

  function getPeriod(){
          
    let now = new Date() 
    let hours = now.getHours()

    if(hours >= 6 && hours < 12){
        backgroundLink = 'morning'
    }else{
        if(hours >= 12 && hours < 18){
            backgroundLink = 'afternoon'
        }else{
            if(hours >= 18 && hours <= 23){
                backgroundLink = 'evening'
            }else{
                if(hours >= 0 && hours < 6){
                    backgroundLink = 'night'
                }
            }
        }
    }
  }

  setInterval(getPeriod, 1000);

  
  
  async function getStartBackImage(){
      await getPeriod()
    

      if(backgroundNumber < 10){
        const img = new Image();
  img.src = `https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/0${backgroundNumber}.jpg`
  img.onload = () => {      
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/0${backgroundNumber}.jpg")`
  };
    }else{
        const img = new Image();
  img.src = `https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/${backgroundNumber}.jpg`
  img.onload = () => {      
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/${backgroundNumber}.jpg")`
  };
    }
    
}
getStartBackImage()

sliderNext.addEventListener('click', () =>{
    
    if(backgroundNumber ==20){
        backgroundNumber = 1
    }else{
        backgroundNumber++
    }
    if(backgroundNumber < 10){
        const img = new Image();
  img.src = `https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/0${backgroundNumber}.jpg`
  img.onload = () => {      
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/0${backgroundNumber}.jpg")`
  };
    }else{
        const img = new Image();
  img.src = `https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/${backgroundNumber}.jpg`
  img.onload = () => {      
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/${backgroundNumber}.jpg")`
  };
    }

    
})

sliderPrev.addEventListener('click', () =>{

    if(backgroundNumber ==1){
        backgroundNumber = 20
    }else{
        backgroundNumber--
    }
    
    
    if(backgroundNumber < 10){
        const img = new Image();
  img.src = `https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/0${backgroundNumber}.jpg`
  img.onload = () => {      
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/0${backgroundNumber}.jpg")`
  };
    }else{
        const img = new Image();
  img.src = `https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/${backgroundNumber}.jpg`
  img.onload = () => {      
    body.style.backgroundImage = `url("https://raw.githubusercontent.com/Zhdmitry/stage1-tasks/assets/images/${backgroundLink}/${backgroundNumber}.jpg")`
  };
    }

    
    
})



changeLang()


let playListContainer = document.querySelector('.play-list')
let durationTitle = document.querySelector('.duration-title')


  playList.forEach(el => {
    const li = document.createElement('li');
    li.classList.add('play-item')
    li.innerHTML= `<img src="assets/svg/play.svg" width="20px" alt="play" class="small-play"></img> <p>${el.title}</p>`
    playListContainer.append(li)
    
  })

  let playItemCollection = document.querySelectorAll('.play-item')



  let playNum = 0
  let x = 
  playItemCollection.forEach(el =>{
    el.addEventListener('click', (e)=>{        
        for(let i = 0; i < playItemCollection.length; i++){
            if(e.target.parentNode == playItemCollection[i]){                
                if(x == e.target.parentNode){
                    playAudio()
                }else{
                    playNum=i
                    audio.src = playList[playNum].src
                    isPlay = true
        playAud.classList.add('pause');
        audio.play();
        playItemCollection.forEach(item => {
            item.classList.remove('item-active')
            item.firstChild.src= "assets/svg/play.svg"
        })
        playItemCollection[playNum].classList.add('item-active')
        playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
        durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
        audio.onended = ()=>{
            if(playNum == playList.length-1){
                playNum = 0
              }else{
                playNum++
                }
                playItemCollection.forEach(item => {
                    item.classList.remove('item-active')
                    item.firstChild.src= "assets/svg/play.svg"
                })
                playItemCollection[playNum].classList.add('item-active')
                playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
                durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
                audio.src = playList[playNum].src
                audio.play();
        }
                }

            }

        }
        
        x = e.target.parentNode
    })
})

  let isPlay = false;
  let playAud = document.querySelector('.play')

  const audio = new Audio();
  audio.src = playList[playNum].src

function playAudio() {

    if(!isPlay){       
        
        isPlay = true
        playAud.classList.add('pause');
        audio.play();
        playItemCollection.forEach(item => {
            item.classList.remove('item-active')
            item.firstChild.src= "assets/svg/play.svg"
        })
        playItemCollection[playNum].classList.add('item-active')
        playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
        durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
        audio.onended = ()=>{
            if(playNum == playList.length-1){
                playNum = 0
              }else{
                playNum++
                }
                playItemCollection.forEach(item => {
                    item.classList.remove('item-active')
                    item.firstChild.src= "assets/svg/play.svg"
                })
                playItemCollection[playNum].classList.add('item-active')
                playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
                durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
                audio.src = playList[playNum].src
                audio.play();
                

        }
        
    }else{
        playAud.classList.remove('pause');
        playItemCollection[playNum].firstChild.src= "assets/svg/play.svg"
        isPlay = false
        audio.pause();
    }
    
}

playAud.addEventListener('click', playAudio)





  let playPr = document.querySelector('.play-prev')


  function playPrev (){
      if(playNum == 0){
        playNum = playList.length-1
        audio.src = playList[playNum].src
        isPlay = true
        playAud.classList.add('pause');
        audio.play();
        playItemCollection.forEach(item => {
            item.classList.remove('item-active')
            item.firstChild.src= "assets/svg/play.svg"
        })
        playItemCollection[playNum].classList.add('item-active')
        playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
        durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
        audio.onended = ()=>{
            if(playNum == playList.length-1){
                playNum = 0
              }else{
                playNum++
                }
                playItemCollection.forEach(item => {
                    item.classList.remove('item-active')
                    item.firstChild.src= "assets/svg/play.svg"
                })
                playItemCollection[playNum].classList.add('item-active')
                playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
                durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
                audio.src = playList[playNum].src
                audio.play();
        }
        

      }else{
        playNum--
        audio.src = playList[playNum].src
        isPlay = true
        playAud.classList.add('pause');
        audio.play();
        playItemCollection.forEach(item => {
            item.classList.remove('item-active')
            item.firstChild.src= "assets/svg/play.svg"
        })
        playItemCollection[playNum].classList.add('item-active')
        playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
        durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
        audio.onended = ()=>{
            if(playNum == playList.length-1){
                playNum = 0
              }else{
                playNum++
                }
                playItemCollection.forEach(item => {
                    item.classList.remove('item-active')
                    item.firstChild.src= "assets/svg/play.svg"
                })
                playItemCollection[playNum].classList.add('item-active')
                playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
                durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
                audio.src = playList[playNum].src
                audio.play();
        }

      }
  }


  playPr.addEventListener('click', playPrev)

  let playNe = document.querySelector('.play-next')

  
  function playNext (){
      if(playNum == playList.length-1){
        playNum = 0
        audio.src = playList[playNum].src
        isPlay = true
        playAud.classList.add('pause');
        audio.play();
        playItemCollection.forEach(item => {
            item.classList.remove('item-active')
            item.firstChild.src= "assets/svg/play.svg"
        })
        playItemCollection[playNum].classList.add('item-active')
        playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
        durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
        audio.onended = ()=>{
            if(playNum == playList.length-1){
                playNum = 0
              }else{
                playNum++
                }
                playItemCollection.forEach(item => {
                    item.classList.remove('item-active')
                    item.firstChild.src= "assets/svg/play.svg"
                })
                playItemCollection[playNum].classList.add('item-active')
                playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
                durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
                audio.src = playList[playNum].src
                audio.play();
        }
        

      }else{
        playNum++
        audio.src = playList[playNum].src
        isPlay = true
        playAud.classList.add('pause');
        audio.play();
        playItemCollection.forEach(item => {
            item.classList.remove('item-active')
            item.firstChild.src= "assets/svg/play.svg"
        })
        playItemCollection[playNum].classList.add('item-active')
        playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
        durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
        audio.onended = ()=>{
            if(playNum == playList.length-1){
                playNum = 0
              }else{
                playNum++
                }
                playItemCollection.forEach(item => {
                    item.classList.remove('item-active')
                    item.firstChild.src= "assets/svg/play.svg"
                })
                playItemCollection[playNum].classList.add('item-active')
                playItemCollection[playNum].firstChild.src= "assets/svg/pause.svg"
                durationTitle.textContent = playItemCollection[playNum].lastChild.textContent
                audio.src = playList[playNum].src
                audio.play();
        }

      }
  }


  playNe.addEventListener('click', playNext)


  let prevVolume = 50

let volume = document.querySelector('.button-volume')
  let volumeProgress = document.querySelector('.audio-volume')

  volumeProgress.addEventListener('input', function() {
    const value = this.value;
    
  })

  volume.addEventListener('click',  () =>{
  
    let c = volume.src[volume.src.length-6]+volume.src[volume.src.length-5]
    
    if(c == 'me'){
      volume.src = './assets/svg/mute.svg'
      volumeProgress.value = 0
      volumeProgress.style.background = `linear-gradient(to right, #710707 0%, #710707 0%, #fff 0%, white 100%)`
      audio.volume = volumeProgress.value/100
  
    }else{
      volume.src = 'assets/svg/button-volume.svg'
      volumeProgress.value = prevVolume
      volumeProgress.style.background = `linear-gradient(to right, #710707 50%, #710707 50%, #fff 50%, white 100%)`
      audio.volume = volumeProgress.value/100
    }
  })




  volumeProgress.addEventListener('input', () =>{
  
    if(volumeProgress.value == 0){
      volume.src = './assets/svg/mute.svg'
    }else{
      volume.src = './assets/svg/button-volume.svg'
    }
    audio.volume = volumeProgress.value/100
    prevVolume = volumeProgress.value
  })

let progress = document.querySelector('.audio-duration')

let curTime = document.querySelector('.current-time')
let audioTime = document.querySelector('.audio-time')

  audio.ontimeupdate = progressUpdate

  function progressUpdate(){
    let d = audio.duration
    let c = audio.currentTime
    let audioMinutes = Math.floor(d/60)
    
    let audioSec =Math.floor(d - audioMinutes*60) 

    if(audioMinutes < 10){
        audioMinutes = `0${audioMinutes}`
    }

    if(audioSec < 10){
        audioSec = `0${audioSec}`
    }

    let curMinutes = Math.floor(c/60)
    
    let curSec = Math.floor(c - curMinutes*60) 

    if(curMinutes < 10){
        curMinutes = `0${curMinutes}`
    }

    if(curSec < 10){
        curSec = `0${curSec}`
    }
    
    curTime.textContent = `${curMinutes}:${curSec}`
    audioTime.textContent = `/${audioMinutes}:${audioSec}`
    let value = c/d*100
    progress.value = value
    

  }
  
  progress.addEventListener('input', () =>{

    audio.currentTime = audio.duration/100*progress.value

  })
  
let langRu = document.querySelector('.lang-ru')
let langEn = document.querySelector('.lang-eng')

langEn.addEventListener('click', ()=>{
   langRu.classList.remove('lang-active')
   langRu.disabled = false
   langEn.classList.add('lang-active')
   langEn.disabled = true
   lang = 'en'
   changeLang()
})



langRu.addEventListener('click', ()=>{
   langEn.classList.remove('lang-active')
   langEn.disabled = false
   langRu.classList.add('lang-active')
   langRu.disabled = true
   lang = 'ru'
   changeLang()
})

console.log(`Ваша оценка - 120 баллов 
Отзыв по пунктам ТЗ:
Не выполненные/не засчитанные пункты:
1) в качестве источника изображений может использоваться Unsplash API 

2) в качестве источника изображений может использоваться Flickr API 

3) в настройках приложения можно указать язык приложения (en/ru или en/be)  

4) в настройках приложения можно указать источник получения фото для фонового изображения: коллекция изображений GitHub, Unsplash API, Flickr API 

5) если источником получения фото указан API, в настройках приложения можно указать тег/теги, для которых API будет присылает фото 

6) в настройках приложения можно скрыть/отобразить любой из блоков, которые находятся на странице: время, дата, приветствие, цитата дня, прогноз погоды, аудиоплеер, список дел/список ссылок/ваш собственный дополнительный функционал 

7) Скрытие и отображение блоков происходит плавно, не влияя на другие элементы, которые находятся на странице, или плавно смещая их 

8) настройки приложения сохраняются при перезагрузке страницы 

9) ToDo List - список дел (как в оригинальном приложении) или Список ссылок (как в оригинальном приложении) или Свой собственный дополнительный функционал, по сложности аналогичный предложенным 

Выполненные пункты:
1) время выводится в 24-часовом формате, например: 21:01:00 

2) время обновляется каждую секунду - часы идут. Когда меняется одна из цифр, остальные при этом не меняют своё положение на странице (время не дёргается) 

3) выводится день недели, число, месяц, например: "Воскресенье, 16 мая" / "Sunday, May 16" / "Нядзеля, 16 траўня" 

4) текст приветствия меняется в зависимости от времени суток (утро, день, вечер, ночь). Проверяется соответствие приветствия текущему времени суток 

5) пользователь может ввести своё имя. При перезагрузке страницы приложения имя пользователя сохраняется 

6) ссылка на фоновое изображение формируется с учётом времени суток и случайного номера изображения (от 01 до 20). Проверяем, что при перезагрузке страницы фоновое изображение изменилось. Если не изменилось, перезагружаем страницу ещё раз 

7) изображения можно перелистывать кликами по стрелкам, расположенным по бокам экрана.Изображения перелистываются последовательно - после 18 изображения идёт 19 (клик по правой стрелке), перед 18 изображением идёт 17 (клик по левой стрелке) 

8) изображения перелистываются по кругу: после двадцатого изображения идёт первое (клик по правой стрелке), перед 1 изображением идёт 20 (клик по левой стрелке) 

9) при смене слайдов важно обеспечить плавную смену фоновых изображений. Не должно быть состояний, когда пользователь видит частично загрузившееся изображение или страницу без фонового изображения. Плавную смену фоновых изображений не проверяем: 1) при загрузке и перезагрузке страницы 2) при открытой консоли браузера 3) при слишком частых кликах по стрелкам для смены изображения 

10) при перезагрузке страницы приложения указанный пользователем город сохраняется, данные о нём хранятся в local storage 

11) для указанного пользователем населённого пункта выводятся данные о погоде, если их возвращает API. Данные о погоде включают в себя: иконку погоды, описание погоды, температуру в °C, скорость ветра в м/с, относительную влажность воздуха в %. Числовые параметры погоды округляются до целых чисел 

12) выводится уведомление об ошибке при вводе некорректных значений, для которых API не возвращает погоду (пустая строка или бессмысленный набор символов) 

13) при загрузке страницы приложения отображается рандомная цитата и её автор 

14) при перезагрузке страницы цитата обновляется (заменяется на другую). Есть кнопка, при клике по которой цитата обновляется (заменяется на другую) 

15) при клике по кнопке Play/Pause проигрывается первый трек из блока play-list, иконка кнопки меняется на Pause 

16) при клике по кнопке Play/Pause во время проигрывания трека, останавливается проигрывание трека, иконка кнопки меняется на Play 

17) треки пролистываются по кругу - после последнего идёт первый (клик по кнопке Play-next), перед первым - последний (клик по кнопке Play-prev) 

18) трек, который в данный момент проигрывается, в блоке Play-list выделяется стилем 

19) после окончания проигрывания первого трека, автоматически запускается проигрывание следующего. Треки проигрываются по кругу: после последнего снова проигрывается первый. 

20) добавлен прогресс-бар в котором отображается прогресс проигрывания 

21) при перемещении ползунка прогресс-бара меняется текущее время воспроизведения трека 

22) над прогресс-баром отображается название трека 

23) отображается текущее и общее время воспроизведения трека 

24) есть кнопка звука при клике по которой можно включить/отключить звук 

25) добавлен регулятор громкости, при перемещении ползунка регулятора громкости меняется громкость проигрывания звука 

26) можно запустить и остановить проигрывания трека кликом по кнопке Play/Pause рядом с ним в плейлисте 

27) переводится язык и меняется формат отображения даты 

28) переводится приветствие и placeholder 

29) переводится прогноз погоды в т.ч описание погоды и город по умолчанию 

30) переводится цитата дня т.е цитата отображается на текущем языке приложения. Сама цитата может быть другая 

31) переводятся настройки приложения, при переключении языка приложения в настройках, язык настроек тоже меняется 

`)