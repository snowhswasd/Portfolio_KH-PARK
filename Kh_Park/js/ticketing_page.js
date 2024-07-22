let sit_line = document.getElementsByClassName("sit_line")

for(let i=0; i<15; i++){
    sit_line[0].innerHTML +=`
        <div class="sit_box VIP_sit_box" data-price="170000">
            <input type="checkbox" class="VIP_sit sit">
            <div class="VIP_sit_label label">${i+1}</div>
        </div>
        `
    sit_line[1].innerHTML +=`
    <div class="sit_box R_sit_box" data-price="140000">
        <input type="checkbox" class="R_sit sit">
        <div class="R_sit_label label">${i+1}</div>
    </div>
    `
    sit_line[2].innerHTML +=`
    <div class="sit_box S_sit_box" data-price="110000">
        <input type="checkbox" class="S_sit sit">
        <div class="S_sit_label label">${i+1}</div>
    </div>
    `
    sit_line[3].innerHTML +=`
    <div class="sit_box A_sit_box" data-price="80000">
        <input type="checkbox" class="A_sit sit">
        <div class="A_sit_label label">${i+1}</div>
    </div>
    `
}



// 좌석 고르기
let sit_box = document.getElementsByClassName("sit_box")
let sit = document.getElementsByClassName("sit")
let total_price_span = document.getElementsByClassName("total_price_span")[0]
let total_price = 0
for(let i=0; i<sit_box.length; i++){
    
    sit_box[i].addEventListener("click", function(e){
        sit[i].checked = !sit[i].checked
        total_price += Number(sit_box[i].dataset.price)
        total_price_span.textContent=`${total_price.toLocaleString("ko")}`
    })
}


let VIP_sit_box = document.getElementsByClassName("VIP_sit_box")
let R_sit_box = document.getElementsByClassName("R_sit_box")
let S_sit_box = document.getElementsByClassName("S_sit_box")
let A_sit_box = document.getElementsByClassName("A_sit_box")

let VIP_sit_label = document.getElementsByClassName("VIP_sit_label")
let R_sit_label = document.getElementsByClassName("R_sit_label")
let S_sit_label = document.getElementsByClassName("S_sit_label")
let A_sit_label = document.getElementsByClassName("A_sit_label")

for(let i=0; i<VIP_sit_box.length; i++){
    VIP_sit_box[i].addEventListener("click",function(){
         VIP_sit_label[i].classList.toggle("VIP_color")
    })
    R_sit_box[i].addEventListener("click",function(){
         R_sit_label[i].classList.toggle("R_color")
    })
    S_sit_box[i].addEventListener("click",function(){
         S_sit_label[i].classList.toggle("S_color")
    })
    A_sit_box[i].addEventListener("click",function(){
         A_sit_label[i].classList.toggle("A_color")
    })
}





// 날짜 골랐을 때 좌석 초기화
let date_input = document.getElementsByClassName("date_input")[0]
let label = document.getElementsByClassName("label")
date_input.addEventListener("change", function(){
    // 총 금액 초기화
    total_price_span.textContent="0"
    total_price = 0

    // 모든 좌석 해제
    for(let i=0; i<sit.length; i++){
        sit[i].checked = false
    }

    // 모든 좌석 색상 해제
    for(let i=0; i<label.length; i++){
        label[i].classList.remove("VIP_color")
        label[i].classList.remove("R_color")
        label[i].classList.remove("S_color")
        label[i].classList.remove("A_color")
    }

    // 날짜 선택 다 해제 하고
    for(let i=0; i<show_time_input.length; i++){
        show_time_input[i].checked = false
    } 
    // 해당 날짜 첫 시간 자동 선택
    show_time_input[0].checked = true

    // 색상 초기화 그날 첫번째 색상 자동
    for(let i=0; i<time_title.length; i++){
        time_title[i].style.background="white"
        time_title[0].style.background="red"
    }

})

// 오늘 날짜 체크해두기 지난 날짜 선택X
let today = new Date();
let year = today.getFullYear();
let month = today.getMonth() + 1;
let day = today.getDate();

if (month < 10) {
    month = '0' + month;
}
if (day < 10) {
    day = '0' + day;
}

// 날짜 값 넣기 && 제한 하기
date_input.value = `${year}-${month}-${day+1}`
date_input.min = `${year}-${month}-${day+1}`








// 시간 골랐을 떄 좌석 초기화
let show_time_input = document.getElementsByClassName("show_time_input")
let time_title = document.getElementsByClassName("time_title")
let time_box = document.getElementsByClassName("time_box")[0]

// 날짜 데이터
let time_arr = [
    "11:00","13:00","15:00","17:00","19:00",
]

for(let i=0; i<time_arr.length; i++){
    // 날짜 만큼 넣어주기
    time_box.innerHTML += `
        <input type="radio" class="show_time_input" id="time_${i}" name="time">
        <label for="time_${i}" class="time_title" data-num="${i}">${time_arr[i]}</label>
    `
    show_time_input[0].checked = true
    time_title[0].style.background="red"
}

for(let i=0; i<time_title.length; i++){
    time_title[i].addEventListener("click", function(){
        for(let j=0; j<time_title.length; j++){
            time_title[j].style.background = "white"
        }

        event.target.style.background="red"
    })
}

for(let i=0; i<show_time_input.length; i++){
    show_time_input[i].addEventListener("change" , function(){
        // 총 결제 금액 해제
        total_price_span.textContent="0"
        total_price = 0

        // 모든 좌석 해제
        for(let i=0; i<sit.length; i++){
            sit[i].checked = false
        }

        // 모든 좌석 색상 해제
        for(let i=0; i<label.length; i++){
            label[i].classList.remove("VIP_color")
            label[i].classList.remove("R_color")
            label[i].classList.remove("S_color")
            label[i].classList.remove("A_color")
        }
    })
}