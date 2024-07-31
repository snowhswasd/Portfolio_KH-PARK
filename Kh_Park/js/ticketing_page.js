get_info()

function get_info(keyword){
    // 현재 주소 가져오기
    let url_info = location.href

    // 쓸 부분만 남기고 쳐내기
    url_info = url_info.split("?")

    // 종류와 번호 두개 니까 반복
    if(url_info.length > 1){
        // txt=?? idx=?? no=?? 길이=3
        url_info = url_info[1].split("&")

        for(let i=0; i<url_info.length; i++){
            // url_info = [cate=concert, idx=2, cateNo=0]

            // use_url = [cate concert]
            let use_url = url_info[i].split("=")
            
            // cate = cate
            if(keyword == use_url[0]){
                return use_url[1]
            }
        }
    }

}

let cateTxt = get_info("cate")
let showNo = get_info("idx")
let cateNo = get_info("cateNo")
console.log(cateTxt)
console.log(showNo)
console.log(cateNo)
// 임시 데이터

// 임시 데이터
let data_arr = [
    [["musical_1.gif","<프랑켄슈타인>","블루스퀘어 신한카드홈","2024.07.28 ~ 10.25","200분","15세 이상 관람가",["200000","180000","160000","140000","120000"]],
    ["musical_2.gif","<하데스타운>","샤롯데씨어터","2024.08.06 ~ 08.25","190분","12세 이상 관람가",["150000","130000","110000","90000","70000"]],
    ["musical_3.gif","<영웅>","계명아트센터","2024.05.28 ~ 08.11","180분","12세 이상 관람가",["180000","160000","140000","120000","100000"]],
    ["musical_4.gif","<이블데드>","인터파크 유니플렉스 1관","2024.07.11 ~ 09.21","170분","15세 이상 관람가",["170000","160000","150000","140000","130000"]],
    ["musical_5.gif","<홍련>","대학로 자유극장","2024.06.20 ~ 09.13","160분","15세 이상 관람가",["100000","80000","60000","40000","30000"]],
    ["musical_6.gif","<스파이>","동국대학교 이해랑예술극장","2024.07.12 ~ 10.06","150분","12세 이상 관람가",["120000","100000","80000","60000","40000"]],
    ["musical_7.gif","<베르사유의 장미>","충무아트센터 대극장","2024.07.28 ~ 10.25","140분","12세 이상 관람가",["170000","140000","110000","80000","60000"]],
    ["musical_8.gif","<살리에르>","세종문화회관 대극장","2024.05.28 ~ 08.11","130분","15세 이상 관람가",["160000","140000","120000","100000","80000"]],
    ["musical_9.gif","<젠틀멘스가이드>","광림아트센터 BBCH홀","2024.06.20 ~ 09.13","120분","15세 이상 관람가",["80000","70000","60000","50000","40000"]],
    ["musical_10.gif","<4월은 너의 거짓말>","예술의 전당 토퀄극장","2024.08.06 ~ 08.25","110분","전체 관람가",["130000","110000","90000","70000","50000"]]],

    [["concert_1.gif","인천펜타포트","송도달빛축제공원","2024.08.02~ 08.04","18:00 ~","전체 관람가",["200000","180000","160000","140000","120000"]],
    ["concert_2.gif","싸이흠뻑쇼","부산아시아드 주경기장","2024.08.10 ~ 08.11","17:00 ~","15세 이상 관람가",["150000","130000","110000","90000","70000"]],
    ["concert_3.gif","7080 낭만 극장쇼","용인문화예술원","2024.08.10 ~ 12.07","16:00 ~","전체 관람가",["180000","160000","140000","120000","100000"]],
    ["concert_4.gif","딩고뮤직 콘서트","올림픽공원","2024.09.07 ~ 09.08","18:00 ~","전체 관람가",["170000","160000","150000","140000","130000"]],
    ["concert_5.gif","THE VOLUNTEERS","장충체육관","2024.07.31 ~ 09.01","17:00 ~","15세 이상 관람가",["100000","80000","60000","40000","30000"]],
    ["concert_6.gif","god 2024","KSPO DOME","2024.09.27 ~ 09.29","16:00 ~","12세 이상 관람가",["120000","100000","80000","60000","40000"]],
    ["concert_7.gif","THE LAST FAN-CON","KBS아레나","2024.08.24 ~ 08.29","18:00 ~","12세 이상 관람가",["170000","140000","110000","80000","60000"]],
    ["concert_8.gif","박재범 팬미팅","명화라이브홀","2024.08.10 ~ 08.11","17:00 ~","19세 이상 관람가",["160000","140000","120000","100000","80000"]],
    ["concert_9.gif","2024 CassCool Festival","서울랜드","2024.08.07 ~ 08.17","16:00 ~","19세 이상 관람가",["80000","70000","60000","50000","40000"]],
    ["concert_10.gif","TAEMIN WORLD TOUR","인스파이어 아레나","2024.08.31 ~ 09.01","18:00 ~","12세 이상 관람가",["130000","110000","90000","70000","50000"]]],

    [["sport_1.gif","키움 vs SSG","고척스카이돔","2024.08.06","18:00 ~","전체 이용가",["200000","180000","160000","140000","120000"]],
    ["sport_2.gif","배드민턴 국가대표 경기 응원전","스카이아트홀","2024.08.02 ~ 08.04","17:00 ~","전체 이용가",["150000","130000","110000","90000","70000"]],
    ["sport_3.gif","레드불 400","평창 스키점프 센터","2024.09.21","16:00 ~","전체 이용가",["180000","160000","140000","120000","100000"]],
    ["sport_4.gif","Doo 캉스 패키지","잠실야구장","2024.07.25 ~ 08.31","18:00 ~","전체 이용가",["170000","160000","150000","140000","130000"]],
    ["sport_5.gif","LCK CL T1 vs DK","목포실내체육관","2024.08.31","17:00 ~","12세 이용가",["100000","80000","60000","40000","30000"]],
    ["sport_6.gif","LCK FOX vs GEN","LoL PARK","2024.08.01","16:00 ~","12세 이용가",["120000","100000","80000","60000","40000"]],
    ["sport_7.gif","발로란트 챔피언스 서울","인스파이어 아레나","2024.08.23","18:00 ~","15세 이용가",["170000","140000","110000","80000","60000"]],
    ["sport_8.gif","고양 vs LG","고척스카이돔","2024.08.04","17:00 ~","전체 이용가",["160000","140000","120000","100000","80000"]],
    ["sport_9.gif","두산 vs LG","잠실야구장","2024.08.06","16:00 ~","전체 이용가",["80000","70000","60000","50000","40000"]],
    ["sport_10.gif","두산 vs 키움","잠실야구장","2024.08.03","18:00 ~","전체 이용가",["130000","110000","90000","70000","50000"]],
    ],

    [["theater_1.gif","<2호선 세입자>","대학로 바탕골 소극장","2024.08.02~ 08.04","220분","12세 이용가",["200000","180000","160000","140000","120000"]],
    ["theater_2.gif","<스위치>","아스가르드 씨어터","2024.02.10 ~ 08.10","210분","12세 이용가",["150000","130000","110000","90000","70000"]],
    ["theater_3.gif","<이기동 체육관>","링크아트센터드림","2024.08.30 ~ 12.15","200분","전체 이용가",["180000","160000","140000","120000","100000"]],
    ["theater_4.gif","<쉬어매드니스>","콘텐츠박스","2024.09.07 ~ 09.08","190분","15세 이용가",["170000","160000","150000","140000","130000"]],
    ["theater_5.gif","<맥베스>","국립극장","2024.07.31 ~ 09.01","180분","15세 이용가",["100000","80000","60000","40000","30000"]],
    ["theater_6.gif","<햄릿>","홍익대 대학로 아트센터","2024.08.07 ~ 08.17","170분","15세 이용가",["120000","100000","80000","60000","40000"]],
    ["theater_7.gif","<불편한 편의점>","올웨이즈씨어터","2024.08.24 ~ 08.29","160분","12세 이용가",["170000","140000","110000","80000","60000"]],
    ["theater_8.gif","<죽여주는 이야기>","지인시어터","2024.08.10 ~ 08.11","150분","12세 이용가",["160000","140000","120000","100000","80000"]],
    ["theater_9.gif","<행오버>","정극장","2024.09.27 ~ 09.29","140분","15세 이용가",["80000","70000","60000","50000","40000"]],
    ["theater_10.gif","<늘근도둑이야기>","대학로 아트포레스트관","2024.08.10 ~ 08.11","130분","12세 이용가",["130000","110000","90000","70000","50000"]]
    ],

    [["classic_1.gif","지브리 영화 음악 콘서트","롯데콘서트홀","2024.08.14 ~ 08.18","200분","전체 이용가",["200000","180000","160000","140000","120000"]],
    ["classic_2.gif","PLIE","서울아트센터 도암홀","2024.08.16","200분","전체 이용가",["150000","130000","110000","90000","70000"]],
    ["classic_3.gif","탑건 매버릭 인 콘서트","경희대학교 평화의 전당","2024.10.05","190분","12세 이용가",["180000","160000","140000","120000","100000"]],
    ["classic_4.gif","<노인과 바다>","성남아트센터","2024.10.05","180분","전체 이용가",["170000","160000","150000","140000","130000"]],
    ["classic_5.gif","ACI 가을 음악 페스티벌","아트센터인천","2024.10.13","170분","전체 이용가",["100000","80000","60000","40000","30000"]],
    ["classic_6.gif","스미노 하야토 피아노 리사이틀","예술의전당","2024.11.06","160분","전체 이용가",["120000","100000","80000","60000","40000"]],
    ["classic_7.gif","<라 바야데르>","에술의전당","2024.09.27 ~ 09.29","150분","전체 이용가",["170000","140000","110000","80000","60000"]],
    ["classic_8.gif","<투란도트>","올림픽체조경기장","2024.10.12 ~ 10.19","140분","전체 이용가",["160000","140000","120000","100000","80000"]],
    ["classic_9.gif","지브리 오케스트라","국립극장 헤오름극장","2024.09.22","130분","전체 이용가",["80000","70000","60000","50000","40000"]],
    ["classic_10.gif","<오텔로>","예술의전당 오페라극장","2024.08.18 ~ 08.25","120분","전체 이용가",["130000","110000","90000","70000","50000"]],
    ],

    [["keyword_1.gif","<보헤미아의 숲과 들의>","블루스퀘어 신한카드홈","2024.07.28 ~ 10.25","200분","15세 이용가",["200000","180000","160000","140000","120000"]],
    ["keyword_2.gif","<접변>","샤롯데씨어터","2024.08.06 ~ 08.25","190분","15세 이용가",["150000","130000","110000","90000","70000"]],
    ["keyword_3.gif","<유진과 유진>","계명아트센터","2024.05.28 ~ 08.11","180분","12세 이용가",["180000","160000","140000","120000","100000"]],
    ["keyword_4.gif","<시데레우스>","인터파크 유니플렉스 1관","2024.07.11 ~ 09.21","170분","15세 이용가",["170000","160000","150000","140000","130000"]],
    ["keyword_5.gif","<해피맨>","대학로 자유극장","2024.06.20 ~ 09.13","220분","12세 이용가",["100000","80000","60000","40000","30000"]],
    ["keyword_6.gif","<세상친구>","동국대학교 이해랑예술극장","2024.07.12 ~ 10.06","210분","12세 이용가",["120000","100000","80000","60000","40000"]],
    ["keyword_7.gif","<미오 프라텔로>","충무아트센터 대극장","2024.07.28 ~ 10.25","170분","15세 이용가",["170000","140000","110000","80000","60000"]],
    ["keyword_8.gif","<햄릿>","세종문화회관 대극장","2024.05.28 ~ 08.11","180분","15세 이용가",["160000","140000","120000","100000","80000"]],
    ["keyword_9.gif","<상상파티시엘>","광림아트센터 BBCH홀","2024.06.20 ~ 09.13","160분","전체 이용가",["80000","70000","60000","50000","40000"]],
    ["keyword_10.gif","<클럽드바이>","예술의 전당 토퀄극장","2024.08.06 ~ 08.25","170분","15세 이용가",["130000","110000","90000","70000","50000"]]],

    [["kid_1.gif","<한국사 대모험>","코엑스 오디토리움","2024.08.02~ 08.04","170분","전체 이용가",["200000","180000","160000","140000","120000"]],
    ["kid_2.gif","<금수회의록>","꿈빛극장","2024.02.10 ~ 08.10","180분","전체 이용가",["150000","130000","110000","90000","70000"]],
    ["kid_3.gif","<나쁘지 않은 날>","성수아트홀","2024.08.30 ~ 12.15","190분","전체 이용가",["180000","160000","140000","120000","100000"]],
    ["kid_4.gif","<리온의 신비한 과자상점>","해운대 문화회관","2024.09.07 ~ 09.08","215분","전체 이용가",["170000","160000","150000","140000","130000"]],
    ["kid_5.gif","<천하태평 지구를지켜>","경기국악원 국악당","2024.07.31 ~ 09.01","185분","전체 이용가",["100000","80000","60000","40000","30000"]],
    ["kid_6.gif","<앤>","구리아트홀 코스모스 대극장","2024.08.07 ~ 08.17","170분","전체 이용가",["120000","100000","80000","60000","40000"]],
    ["kid_7.gif","<천하태평 인형을 만들어라>","경기국악원 국악당","2024.08.24 ~ 08.29","190분","전체 이용가",["170000","140000","110000","80000","60000"]],
    ["kid_8.gif","<김민형 매직쇼>","함양군문화예술회관","2024.08.10 ~ 08.11","200분","전체 이용가",["160000","140000","120000","100000","80000"]],
    ["kid_9.gif","<사랑에 빠진 뽀메로>","남한산성아트홀 소극장","2024.09.27 ~ 09.29","205분","전체 이용가",["80000","70000","60000","50000","40000"]],
    ["kid_10.gif","<바다 100층짜리 집>","성균관대학교 새천년홀","2024.08.10 ~ 08.11","240분","전체 이용가",["130000","110000","90000","70000","50000"]]],

    [["couple_1.gif","<자취>","댕로홈","2024.08.02~ 08.04","210분","12세 이용가",["200000","180000","160000","140000","120000"]],
    ["couple_2.gif","<투깝쇼>","한성아트홀 2관","2024.08.10 ~ 08.11","200분","15세 이용가",["150000","130000","110000","90000","70000"]],
    ["couple_3.gif","<졸탄식 코미디>","대학로 올래홀","2024.08.10 ~ 12.07","190분","12세 이용가",["180000","160000","140000","120000","100000"]],
    ["couple_4.gif","<오렌지 스카이>","달밤엔씨어터","2024.09.07 ~ 09.08","180분","15세 이용가",["170000","160000","150000","140000","130000"]],
    ["couple_5.gif","<살~짝 바뀐 졸탄쇼>","대학로 자유극장","2024.07.31 ~ 09.01","170분","12세 이용가",["100000","80000","60000","40000","30000"]],
    ["couple_6.gif","<조각>","댕로홈","2024.09.27 ~ 09.29","160분","15세 이용가",["120000","100000","80000","60000","40000"]],
    ["couple_7.gif","<사랑에 빠지기까지>","아루또소극장","2024.08.24 ~ 08.29","200분","12세 이용가",["170000","140000","110000","80000","60000"]],
    ["couple_8.gif","<내일은 내일에게>","초록씨어터","2024.08.10 ~ 08.11","190분","15세 이용가",["160000","140000","120000","100000","80000"]],
    ["couple_9.gif","<죽여주시옵소서>","R&J씨어터","2024.08.07 ~ 08.17","180분","12세 이용가",["80000","70000","60000","50000","40000"]],
    ["couple_10.gif","<이기동 체육관>","링크아트센터드림","2024.08.31 ~ 09.01","170분","15세 이용가",["130000","110000","90000","70000","50000"]]],

    [["classic_1.gif","지브리 영화 음악 콘서트","롯데콘서트홀","2024.08.14 ~ 08.18","200분","전체 이용가",["200000","180000","160000","140000","120000"]],
    ["classic_2.gif","PLIE","서울아트센터 도암홀","2024.08.16","200분","전체 이용가",["150000","130000","110000","90000","70000"]],
    ["keyword_9.gif","<상상파티시엘>","광림아트센터 BBCH홀","2024.06.20 ~ 09.13","160분","전체 이용가",["80000","70000","60000","50000","40000"]],
    ["keyword_10.gif","<클럽드바이>","예술의 전당 토퀄극장","2024.08.06 ~ 08.25","170분","15세 이용가",["130000","110000","90000","70000","50000"]],
    ["couple_9.gif","<죽여주시옵소서>","R&J씨어터","2024.08.07 ~ 08.17","180분","12세 이용가",["80000","70000","60000","50000","40000"]],
    ["couple_10.gif","<이기동 체육관>","링크아트센터드림","2024.08.31 ~ 09.01","170분","15세 이용가",["130000","110000","90000","70000","50000"]]
    ]
]

let show_img = document.getElementsByClassName("show_img")[0]
let show_title = document.getElementsByClassName("show_title")[0]
let txt_sub = document.getElementsByClassName("txt_sub")
//가격정보
let price_num = document.getElementsByClassName("price_num")
console.log("asdasd "+txt_sub.length)
data_in()
// 공연 정보 넣어주기
function data_in () {
    show_img.style.background = `url(../img/${cateTxt}/${data_arr[cateNo][showNo][0]}) no-repeat center center / cover`
    show_title.textContent=`${data_arr[cateNo][showNo][1]}`
    // 무이자 할부  항목 빼주기
    for(let i=0; i<txt_sub.length-1; i++){
        txt_sub[i].textContent=`${data_arr[cateNo][showNo][i+2]}`
    }
    for(let i=0; i<data_arr[cateNo][showNo][6].length; i++){
        price_num[i].textContent=`${Number(data_arr[cateNo][showNo][6][i]).toLocaleString("ko")}`
    }
}







let sit_line = document.getElementsByClassName("sit_line")

for(let i=0; i<30; i++){
    sit_line[0].innerHTML +=`
        <div class="sit_box VIP_sit_box" data-price="${data_arr[cateNo][showNo][6][0]}">
            <input type="checkbox" class="VIP_sit sit">
            <div class="VIP_sit_label label">${i+1}</div>
        </div>
        `
    sit_line[1].innerHTML +=`
    <div class="sit_box R_sit_box" data-price="${data_arr[cateNo][showNo][6][1]}">
        <input type="checkbox" class="R_sit sit">
        <div class="R_sit_label label">${i+1}</div>
    </div>
    `
    sit_line[2].innerHTML +=`
    <div class="sit_box S_sit_box" data-price="${data_arr[cateNo][showNo][6][2]}">
        <input type="checkbox" class="S_sit sit">
        <div class="S_sit_label label">${i+1}</div>
    </div>
    `
    sit_line[3].innerHTML +=`
    <div class="sit_box A_sit_box" data-price="${data_arr[cateNo][showNo][6][3]}">
        <input type="checkbox" class="A_sit sit">
        <div class="A_sit_label label">${i+1}</div>
    </div>
    `
    sit_line[4].innerHTML +=`
    <div class="sit_box B_sit_box" data-price="${data_arr[cateNo][showNo][6][4]}">
        <input type="checkbox" class="B_sit sit">
        <div class="B_sit_label label">${i+1}</div>
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
        if(sit[i].checked == true){
            total_price += Number(sit_box[i].dataset.price)
            total_price_span.textContent=`${total_price.toLocaleString("ko")}`
        }
        else{
            total_price -= Number(sit_box[i].dataset.price)
            total_price_span.textContent=`${total_price.toLocaleString("ko")}`
        }
    })
}


let VIP_sit_box = document.getElementsByClassName("VIP_sit_box")
let R_sit_box = document.getElementsByClassName("R_sit_box")
let S_sit_box = document.getElementsByClassName("S_sit_box")
let A_sit_box = document.getElementsByClassName("A_sit_box")
let B_sit_box = document.getElementsByClassName("B_sit_box")

let VIP_sit_label = document.getElementsByClassName("VIP_sit_label")
let R_sit_label = document.getElementsByClassName("R_sit_label")
let S_sit_label = document.getElementsByClassName("S_sit_label")
let A_sit_label = document.getElementsByClassName("A_sit_label")
let B_sit_label = document.getElementsByClassName("B_sit_label")


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
    B_sit_box[i].addEventListener("click",function(){
        B_sit_label[i].classList.toggle("B_color")
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
        label[i].classList.remove("B_color")
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
        time_title[i].style.color="black"
        time_title[0].style.background="#8e43e7"
        time_title[0].style.color="white"
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
date_input.value = `${year}-${month}-${day}`
date_input.min = `${year}-${month}-${day}`








// 시간 골랐을 떄 좌석 초기화
let show_time_input = document.getElementsByClassName("show_time_input")
let time_title = document.getElementsByClassName("time_title")
let time_box = document.getElementsByClassName("time_box")[0]

// 날짜 데이터
let time_arr = [
    "11:00","13:00","15:00","17:00","19:00"
]

for(let i=0; i<time_arr.length; i++){
    // 날짜 만큼 넣어주기
    time_box.innerHTML += `
        <input type="radio" class="show_time_input" id="time_${i}" name="time">
        <label for="time_${i}" class="time_title" data-num="${i}">${time_arr[i]}</label>
    `
    show_time_input[0].checked = true
    time_title[0].style.background="#8e43e7"
    time_title[0].style.color="white"
}

for(let i=0; i<time_title.length; i++){
    time_title[i].addEventListener("click", function(){
        for(let j=0; j<time_title.length; j++){
            time_title[j].style.background = "white"
            time_title[j].style.color = "black"
        }

        event.target.style.background="#8e43e7"
        event.target.style.color="white"
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
            label[i].classList.remove("B_color")
        }
    })
}

// 결제하기
let payment_btn = document.getElementsByClassName("payment_btn")[0]

payment_btn.addEventListener("click", function(e){
    if(total_price == 0){
        alert("좌석을 선택해주세요")
        e.preventDefault()
    }
    else{
        e.preventDefault()

        alert("예매가 완료되었습니다")
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
            label[i].classList.remove("B_color")
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
            time_title[i].style.color="black"
            time_title[0].style.background="#8e43e7"
            time_title[0].style.color="white"
        }
    }
})


// 공연 판
let manual_txt = document.getElementsByClassName("manual_txt")
let m_pan = document.getElementsByClassName("m_pan")
for(let i=0; i<manual_txt.length; i++){
    manual_txt[i].addEventListener("click", function(e){
        for(let j=0; j<m_pan.length; j++ ){
            m_pan[j].style.display="none"
            manual_txt[j].style.color="black"
            manual_txt[j].style.backgroundColor="white"

        }
        m_pan[i].style.display="block"
        manual_txt[i].style.color="white"
        manual_txt[i].style.backgroundColor="#8e43e7"
        
        sticky_height ();
        
        for(let i=0; i<notice_content.length; i++){
            notice_content[i].classList.remove("notice_block")
        }

    })
}




// float 높이 증발 하는거 구하기
let show_box= document.getElementsByClassName("show_box")[0]
let show_manual_box = document.getElementsByClassName("show_manual_box")[0]

let show_box_outer = document.getElementsByClassName("show_box_outer")[0]
let pos_box = document.getElementsByClassName("pos_box")[0]

sticky_height ();

window.addEventListener("resize", sticky_height)

function sticky_height () {
    if(window.innerWidth > 1024){
        let h1 = show_box.offsetHeight
        let h2 = show_manual_box.offsetHeight+20
        console.log(h1)
        console.log(h2)

        pos_box.style.height=`0px`;
        show_box_outer.style.height=`0px`;
    
        pos_box.style.height=`${h1 + h2}px`;
        show_box_outer.style.height=`${h1 + h2}px`;
    }
    else{
        pos_box.style.height=`auto`;
        show_box_outer.style.height=`auto`;
    }
}



// 캐스팅 정보
let casting_arr =[
["casting_1.gif","곽은태"],
["casting_2.jpg","육현욱"],
["casting_3.gif","진상현"],
["casting_4.gif","양준모"],
["casting_5.gif","정재은"],
["casting_6.gif","민우혁"],
["casting_7.gif","유리아"],
["casting_8.gif","솔지"],
["casting_9.gif","김진수"],
["casting_10.gif","최민철"],
["casting_11.gif","서영주"],
["casting_12.gif","임정모"],
["casting_13.gif","조휘"],
["casting_14.gif","유동하"],
["casting_15.gif","장기용"],
["casting_16.gif","방보용"],
["casting_17.jpg","이정열"],
["casting_18.gif","최유정"],
["casting_19.jpg","김상현"],
["casting_20.jpg","임선애"],
["casting_21.gif","왕하성"],
["casting_22.jpg","박정자"],
["casting_23.gif","이강"],
["casting_24.gif","김고운"],
["casting_25.gif","오윤서"],
["casting_26.jpg","김도형"],
["casting_27.gif","김도현"],
["casting_28.jpg","정성화"],
["casting_29.gif","조영태"]
]
let casting_pan_inner = document.getElementsByClassName("casting_pan_inner")[0]

for(let i=0; i<casting_arr.length; i++){
    casting_pan_inner.innerHTML +=`
        <div class="casting_box">
            <div class="casting_img_box">
                <img src="../img/casting/${casting_arr[i][0]}" alt="${casting_arr[i][1]}사진">
            </div>
            <span class="people_name">${casting_arr[i][1]}</span>
        </div>`
}

// 공지사항
let notice_arr = [
["취소 안내","운영자","2024-07-28","My티켓 > 예매/취소내역에서 직접 취소 또는 고객센터 (0000-0000)를 통해서 예매를 취소할 수 있습니다.<br>티켓이 배송된 이후에는 인터넷 취소가 안되며, 취소마감 시간 이전에 고객센터로 반송되어야 취소 가능합니다.<br>취소수수료는 도착일자 기준으로 부과되며, 배송료는 환불되지 않습니다."],
["모바일 티켓안내","운영자","2024-07-28","티켓수령방법을 모바일티켓으로 선택 시 인터파크 앱, 인터파크 티켓 앱에서 즉시 이용 가능합니다.<br>모바일티켓으로 예매하실 경우 종이 티켓으로 입장권 수령방법 변경 불가합니다.<br>결제완료(입금완료)후 모바일티켓을 확인할 수 있습니다.<br>안드로이드 버전 4.0이상만 사용 가능, iOS 7 이상만 사용 가능합니다.<br>스포츠 시즌권 구매고객이거나 인터파크 외 예매처에서 예매한 모바일티켓은 별도의 모바일티켓 앱을 통해서만 이용 가능합니다."],
["배송티켓 안내","운영자","2024-07-28","티켓 배송 (배송상태 : 배송 준비중 이후) 후에는 주소 변경이 불가합니다.<br>부득이하게 주소 변경이 필요하신 경우 각 배송사에 수취 거절 요청 후,<br>고객센터로 재배송 신청할 수 있습니다.(배송비 3,200원 추가 부과)"],
["예매 유의사항","운영자","2024-07-28","다른 이용자의 원활한 예매 및 취소에 지장을 초래할 정도로 반복적인 행위를 지속하는 경우 회원의 서비스 이용을 제한할 수 있습니다.<br>일부 상품의 판매 오픈 시 원활한 서비스 제공을 위하여 인터파크페이, I-point, NOL 포인트, 문화예매권 등의 특정 결제수단 이용이 제한될 수 있습니다."],
["예매 취소 유의사항","운영자","2024-07-28","~관람일 10일전까지 : 뮤지컬/콘서트/클래식 장당 4,000원, 연극/전시 등 장당 2,000원 (단, 최대 티켓금액의 10% 한도)<br>관람일 9일전~관람일 7일전까지 : 티켓금액의 10%<br>관람일 6일전~관람일 3일전까지 : 티켓금액의 20%<br>관람일 2일전~관람일 1일전까지 : 티켓금액의 30%"],
["환불안내-신용카드","운영자","2024-07-28","일반적으로 당사의 취소 처리가 완료되고 4~5일 후 카드사의 취소가 확인됩니다. (체크카드 동일)<br>예매 취소 시점과 해당 카드사의 환불 처리기준에 따라 취소금액의 환급방법과 환급일은 다소 차이가 있을 수 있으며,<br>예매 취소시 기존에 결제하였던 내역을 취소하며 최초 결제하셨던 동일카드로 취소 시점에 따라 취소수수료와 배송료를 재승인 합니다."],
["환불안내-무통장입금","운영자","2024-07-28","예매 취소 시에 환불 계좌번호를 남기고, 그 계좌를 통해 취소수수료를 제외한 금액을 환불 받습니다.<br>취소 후 고객님의 계좌로 입금까지 대략 5~7일 정도가 소요됩니다. (주말 제외)<br>환불은 반드시 예매자 본인 명의의 계좌로만 받으실 수 있습니다.<br>단, 예매자 본인 명의의 계좌가 없을 경우에는 직계 가족 명의의 계좌에 한하여 가능하며,<br>이 경우 관계를 증명할 수 있는 증빙서류를 예매자 본인이 팩스나 우편 등으로 인터파크 티켓 본사로 보내주셔야 합니다.<br>(예매자 본인 외 가족이 증빙서류를 보내주셨을 경우, 이로 인해 문제 발생 시 환불 접수한 가족 본인에게 모든 책임이 있습니다.)"],
["환불안내-휴대폰결제","운영자","2024-07-28","취소 신청 후 바로 취소 처리가 되며 취소 수수료를 제외한 티켓 금액 및 예매수수료/핸드폰결제이용료가 취소 가능합니다.<br>예매 취소 시 기존에 결제하셨던 내역을 취소하며 결제하셨던 동일 정보로 취소 시점에 따라 취소수수료가 재승인 합니다.<br>(티켓이 배송된 경우는 배송료 포함하여 재승인 합니다.)"],
["무통장입금 주의사항","운영자","2024-07-28","입금 시 총 결제금액을 정확히 입금하여야 합니다.<br>입금금액이 다를 경우 예매내역은 자동취소 되며, 입금된 금액은 추후 환불 처리됩니다.<br>2건 이상 예매시에도, 각 예매 건 별로 입금을 하셔야 합니다.<br>입금 시, 입금자명으로 주문자명과 동일하게 입금해주시기 바랍니다.<br>수표는 정상적으로 입금되지 않고 입금 오류가 발생하오니, 현금으로 입금을 해주시기 바랍니다.<br>예매일 익일 오후 23시 59분까지 입금하지 않으시면 자동으로 예매취소 되며, 상품에 따라 입금 기한이 상이 할 수 있으니 My 티켓에서 입금 마감시간을 확인해주시기 바랍니다. (단, 오후 17시 이후에는 무통장입금 문의 대응이 어려울 수 있으니, 이전시간 입금을 권장합니다.)<br>주말/공휴일은 은행 영업일이 아니고, ATM기기 중 가상계좌입금이 안 되는 경우가 있으니 인터넷뱅킹, 폰뱅킹이 어려우신 고객님은 결제방법을 다른 결제수단을 선택하시기 바랍니다.<br>은행에 무통장 입금 시에는 입금증에 반드시 전화번호를 기입하시기 바랍니다.<br>입금 후에는 반드시 입금확인 메일이나 예매확인/취소에서 입금확인내역을 확인 후 공연장으로 가시기 바랍니다.<br>무통장입금 시 입급확인까지 일정시간이 소요될 수 있습니다."]
]
let notice_pan = document.getElementsByClassName("notice_pan")[0]
for(let i=0; i<notice_arr.length; i++){
    notice_pan.innerHTML += `
    <div class="notice_list">
        <div class="notice_list_inner">
            <span class="notice_title">${notice_arr[i][0]}</span>
            <div>
                <span class="notice_people">${notice_arr[i][1]}</span>
                <span class="notice_date">${notice_arr[i][2]}</span>
            </div>
        </div>
        <div class="notice_content">
            <p>${notice_arr[i][3]}</p>
        </div>
    </div>`
}

let notice_content = document.getElementsByClassName("notice_content")
let notice_list = document.getElementsByClassName("notice_list")
for(let i=0; i<notice_list.length; i++){
    notice_list[i].addEventListener("click", function(){
        notice_content[i].classList.toggle("notice_block")

        sticky_height ();
    })
}

let total_num = document.getElementsByClassName("total_num")[0]
total_num.textContent=`${notice_list.length+1}`

