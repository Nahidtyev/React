const BASE_URL = "http://localhost:3004";
const Area = document.querySelector(".card_section");

fetch(`${BASE_URL}/card`, Area)
.then((res)=>res.json())
.then((response)=>{
    response.map((card,index)=>{
        Area.innerHTML +=`
        <div class="col-xl-4">
            <div class="card">
                <img src="${card.image}" alt="">
                <div class="info">
                    <div class="upper">
                        <button>${card.category}</button>
                        <h1>${card.head}</h1>
                        <p>${card.content}</p>
                    </div>
                    <div class="lower">
                      <img src="${card.userimg}" alt="">
                      <p>${card.username} <br>${card.date}</p>
                    </div>
                </div>
            </div>
        </div>
        `
    })
})

const SearchData= document.querySelector('#search');


SearchData.addEventListener('keyup',(e)=>{``
   value = e.target.value;
  axios.get(`${BASE_URL}/card?category=${value}`)
  .then((response)=>{
    console.log(response);
    response.data.filter((data) =>{
        Area.innerHTML +=`
        <div class="col-xl-4">
            <div class="card">
                <img src="${data.image}" alt="">
                <div class="info">
                    <div class="upper">
                        <button>${data.category}</button>
                        <h1>${data.head}</h1>
                        <p>${data.content}</p>
                    </div>
                    <div class="lower">
                      <img src="${data.userimg}" alt="">
                      <p>${data.username} <br>${data.date}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        
    })
  })
})

const ToTop = document.querySelector(".totop");
ToTop.addEventListener('click',()=>{
    window.scrollTo({
        top: 0 ,
        behaviour: "smooth"
    })
})
window.addEventListener("scroll",()=>{
    if(window.scrollY>600){
        ToTop.style.display="block";
    }
    else{
        ToTop.style.display="none";
    }
})


function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
  }
  
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedDarkMode = localStorage.getItem('darkMode');
  
  if (savedDarkMode !== null) {
    if (savedDarkMode === true) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      
    }
  } else if (prefersDarkMode) {
    document.body.classList.add('dark-mode');
    
  }

const circle= document.querySelector('.circle')
  circle.onclick = ()=>{
    circle.classList.toggle('active');
  }