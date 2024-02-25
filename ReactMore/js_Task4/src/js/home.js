const NEW_VACANCY = document.querySelector(".new_vacancy");
const BASE_URL = "  http://localhost:3000";
const SearchData= document.querySelector('#search');
const Area = document.querySelector('.found_card');

SearchData.addEventListener('keyup',(e)=>{``
   value = e.target.value;
  axios.get(`${BASE_URL}/product?vacancy=${value}`)
  .then((response)=>{
    console.log(response);
    response.data.filter((data) =>{
      // var input_value = data.vacancy.includes(value);
       Area.innerHTML += `
      <div class="col-xl-12">
            <div class="vacancy">
                <button id="card_date">${data.time1}-${data.time2}</button>
                <img src="${data.image}" alt="">
                <div class="information">
                    <div class="head">
                        <h4>${data.vacancy}</h4>
                        <i class="fa-solid fa-location-dot"></i> <span>${data.location}</span>
                    </div>
                    <p>${data.description}...</p>
                    <i id="delete" class="fa-solid fa-trash-can"></i>
                </div>
            </div>
        </div>`;
        const DeleteVacancy= document.querySelectorAll("#delete");

        for (let i = 0; i < DeleteVacancy.length; i++) {
          const deleteBtn = DeleteVacancy[i];
          deleteBtn.addEventListener("click", (event) => {
            event.preventDefault();
            fetch(`${BASE_URL}/product/${data.id}`,{
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }).then((response) => {
              if (response.status === 200) {
                console.log("deleted");
              }
            });
          });
        }
    })
  })
})

const SelectedVacancy = document.querySelector('#category');
let value = '';
SelectedVacancy.addEventListener('click',(e)=>{
  value = e.target.value;
 axios.get(`${BASE_URL}/product?vacancy=${value}`)
 .then((response)=>{
   console.log(response);
   response.data.filter((data) =>{
     // var input_value = data.vacancy.includes(value);
      Area.innerHTML += `
     <div class="col-xl-12">
           <div class="vacancy">
               <button id="card_date">${data.time1}-${data.time2}</button>
               <img src="${data.image}" alt="">
               <div class="information">
                   <div class="head">
                       <h4>${data.vacancy}</h4>
                       <i class="fa-solid fa-location-dot"></i> <span>${data.location}</span>
                   </div>
                   <p>${data.description}...</p>
                   <i id="delete" class="fa-solid fa-trash-can"></i>
               </div>
           </div>
       </div>`;
       const DeleteVacancy= document.querySelectorAll("#delete");

        for (let i = 0; i < DeleteVacancy.length; i++) {
          const deleteBtn = DeleteVacancy[i];
          deleteBtn.addEventListener("click", (event) => {
            event.preventDefault();
            fetch(`${BASE_URL}/product/${data.id}`,{
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }).then((response) => {
              if (response.status === 200) {
                console.log("deleted");
              }
            });
          });
        }
   })
 })
})


fetch(`${BASE_URL}/product`)
.then((res) => res.json())
.then((response) => {
    response.map((product,index) =>{
        NEW_VACANCY.innerHTML += `
        <div class="col-xl-12">
            <div class="vacancy">
                <button id="card_date">${product.tim1}-${product.time2}</button>
                <img src="${product.image}" alt="">
                <div class="information">
                    <div class="head">
                        <h4>${product.vacancy}</h4>
                        <i class="fa-solid fa-location-dot"></i> <span>${product.location}</span>
                    </div>
                    <p>${product.description}...</p>
                    <i id="delete" class="fa-solid fa-trash-can"></i>
                </div>
            </div>
        </div>
        `;
        const DeleteVacancy= document.querySelectorAll("#delete");

        for (let i = 0; i < DeleteVacancy.length; i++) {
          const deleteBtn = DeleteVacancy[i];
          deleteBtn.addEventListener("click", (event) => {
            event.preventDefault();
            fetch(`${BASE_URL}/product/${product.id}`,{
              method: "DELETE",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              },
            }).then((response) => {
              if (response.status === 200) {
                console.log("deleted");
              }
            });
          });
        }
    });

});


const ImageUrl = document.querySelector('#image');
const Vacancy = document.querySelector('#vacancy');
const Location = document.querySelector('#location');
const Description = document.querySelector('#description');
const Time1 = document.querySelector('#time1');
const Time2 = document.querySelector('#time2');

const APPLY_BTN = document.querySelector('#apply');

APPLY_BTN && APPLY_BTN.addEventListener('click', (event)=>{
    event.preventDefault();
    const NEW_VACANCY = {
        id: self.crypto.randomUUID(),
        image: ImageUrl.value,
        vacancy: Vacancy.value,
        location: Location.value,
        description: Description.value,
        time1: Time1.value,
        time2: Time2.value
    }
    axios.post(`${BASE_URL}/product`, NEW_VACANCY, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      })
      .then((response) => {
        if (response.status === 201) {
          console.log("SUCCESSEDDDD");
        }
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => {
        ImageUrl.value = "";
        Time1.value = "";
        Time2.value = "";
        Description.value = "";
        Location.value ="";
        Vacancy.value="";
      });
})

const FORM_BTN = document.querySelector("#form_btn");
const MY_FORM = document.querySelector("#myForm")
FORM_BTN.addEventListener('click', ()=>{
    if( MY_FORM.style.opacity ==='0'){
        MY_FORM.style.opacity ='1';
        MY_FORM.style.zIndex='999'
        FORM_BTN.style.backgroundColor = '#4fb6a8';
        FORM_BTN.style.color = 'rgb(231, 229, 229)';
    }
    else{
        MY_FORM.style.opacity ='0';
        FORM_BTN.style.backgroundColor = 'rgb(231, 229, 229)';
        FORM_BTN.style.color = '#4fb6a8';
    }
})




// let thisPage = 1;
// let limit = 5;
// let list = document.querySelector('.vacancy')

// function loadItems(){
//   let beginGet = limit * (thisPage - 1);
//   let endGet = limit * thisPage - 1;
//   list.forEach((item,key) => {
//     if(key >= beginGet && key<= endGet){
//       item.style.display='block';
//     }
//     else{
//       item.style.display='none';
//     }
//   });
//   listPage();
// }
// loadItems();
// function listPage(){
//   let count = Math.ceil(list.length / limit);
//   document.querySelector('.listPage').innerHTML='';

//   if(thisPage != 1){
//     let prev= document.createElement('li');
//     prev.setAttribute('onclick', "changePage( "+ (thisPage -1) +" )");
//       document.querySelector(".listPage").appendChild(prev);
//   }

//   for( i = 0 ; i <= count ;i++){
//     let newPage = document.createElement('li');
//     newPage.innerText = i ;
//     if(i == thisPage){
//       newPage.classList.add('active');
//       newPage.setAttribute('onclick', "changePage( "+ i +" )");
//       document.querySelector(".listPage").appendChild(newPage);
//     }
//   }
// }
// function changePage(i){
//   thisPage = i;
//   loadItems();
// }