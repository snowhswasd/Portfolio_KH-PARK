// 메인배너 스와이퍼
let m_banner_arr = [
    ["banner1.jpeg","mini_banner1.png","responsive_banner1.png"],
    ["banner2.png","mini_banner2.png","responsive_banner2.png"],
    ["banner3.png","mini_banner3.png","responsive_banner3.png"],
    ["banner4.jpeg","mini_banner4.png","responsive_banner4.jpeg"],
    ["banner5.png","mini_banner5.jpg","responsive_banner5.png"],
    ["banner6.png","mini_banner6.png","responsive_banner6.png"],
    ["banner7.jpeg","mini_banner7.jpg","responsive_banner7.jpeg"],
    ["banner8.jpeg","mini_banner8.png","responsive_banner8.png"],
    ["banner9.png","mini_banner9.png","responsive_banner9.png"]
] 


// 메인 배너
let swiper_main_banner = document.getElementsByClassName("swiper-wrapper")[0]

// 스와이퍼 페이지 네이션
let  swiper_bullet = document.getElementsByClassName("swiper-pagination-bullet")

for(let i=0; i<m_banner_arr.length; i++){
    swiper_main_banner.innerHTML +=
    `<div class="swiper-slide">
        <img src="../img/main_banner/${m_banner_arr[i][0]}" alt="메인배너_${i}" class="respnsive_none">
        <img src="../img/main_banner_respnsive/${m_banner_arr[i][2]}" alt="메인배너_${i}" class="respnsive_block">
    </div>` 
}

var swiper = new Swiper(".mySwiper", {
    autoplay: {
        delay: 1000 
    },
    speed: 1000,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    }
});

// 미니 배너 넣어주기
for(let i=0; i<m_banner_arr.length; i++){    
    swiper_bullet[i].innerHTML +=
    `<img src="../img/main_banner_mini/${m_banner_arr[i][1]}" alt="메인배너_미니_${i}">`
}

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

// 랭킹 스와이퍼
var rank_swiper1 = new Swiper(".rank1", {
    navigation: {
      nextEl: ".rank_bth_next_1",
      prevEl: ".rank_bth_prev_1",
    },
    breakpoints: {
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
    },
});
var rank_swiper2 = new Swiper(".rank2", {
    navigation: {
      nextEl: ".rank_bth_next_2",
      prevEl: ".rank_bth_prev_2",
    },
    breakpoints: {
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
      },
});
var rank_swiper3 = new Swiper(".rank3", {
    navigation: {
      nextEl: ".rank_bth_next_3",
      prevEl: ".rank_bth_prev_3",
    },
    breakpoints: {
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
      },
});
var rank_swiper4 = new Swiper(".rank4", {
    navigation: {
      nextEl: ".rank_bth_next_4",
      prevEl: ".rank_bth_prev_4",
    },
    breakpoints: {
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
      },
});
var rank_swiper5 = new Swiper(".rank5", {
    navigation: {
      nextEl: ".rank_bth_next_5",
      prevEl: ".rank_bth_prev_5",
    },
    breakpoints: {
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
      },
});

  
// 장르별 랭킹 스와이퍼 내용 넣어주기 
let swiper_rank = document.getElementsByClassName("swiper_rank")
let genre_opt = document.getElementsByClassName("genre_opt")
let swiper_rank_box = document.getElementsByClassName("swiper_rank_box")
// 선택 장르마다 판 까지 넣어주기
let cate_arr = [
    "musical","concert","sport","theater","classic","rewatch","kid","couple"
]
for(let i=0; i<swiper_rank.length; i++){
    for(let j=0; j<data_arr[i].length; j++){
        swiper_rank[i].innerHTML+=`
        <div class="swiper-slide rank_slide pos_box">
            <a href="./ticketing_page.html?cate=${cate_arr[i]}&idx=${j}&cateNo=${i}" class="pos_box">
                <img src="../img/${cate_arr[i]}/${data_arr[i][j][0]}" alt="공연정보${j}" class="slide_img">
                <span class="num_pos num_pos_${j}">${j+1}<span>
            </a>
            <div class="content_txt_box">
                <span>${data_arr[i][j][1]}</span>
                <span>${data_arr[i][j][2]}</span>
                <span>${data_arr[i][j][3]}</span>
            </div>
        </div>`
    }
}

for(let i=0; i<genre_opt.length; i++){
    genre_opt[i].addEventListener("click", function(){
        for(let j=0; j<swiper_rank_box.length; j++){
            swiper_rank_box[j].style.display = "none"  
            genre_opt[j].style.color= "black"
            genre_opt[j].style.background= "none"
            genre_opt[j].style.border ="1px solid gray" 
        }
        swiper_rank_box[i].style.display = "block"
        genre_opt[i].style.color= "white"
        genre_opt[i].style.background= "#8e43e7"
        genre_opt[i].style.border= "1px solid #8e43e7"
    })
}


// 티켓 오픈
let open_arr=[
    ["classic_1.gif","7.26(금) 11:00","지브리 영화 음악 콘서트","1차 티켓오픈"],
    ["classic_2.gif","7.27(토) 13:00","PLIE","1차 티켓오픈"],
    ["keyword_9.gif","7.24(수) 15:00","<상상파티시엘>","1차 티켓오픈"],
    ["keyword_10.gif","7.29(월) 16:00","<클럽드바이>","1차 티켓오픈"],
    ["couple_9.gif","7.26(금) 12:00","<죽여주시옵소서>","1차 티켓오픈"],
    ["couple_10.gif","7.28(일) 08:00","<이기동체육관>","1차 티켓오픈"],
]
let open_ticket = document.getElementsByClassName("open_ticket")[0]

for(let i=0; i<open_arr.length; i++){
    open_ticket.innerHTML+=`
    <div class="open_ticket_box">
        <a href="./ticketing_page.html?cate=open&idx=${i}&cateNo=${8}">
            <img src="../img/open/${open_arr[i][0]}" alt="티켓오픈${i}">
        </a>
        <div class="open_txt">
            <div>
                <span>단독판매</span>
            </div>
            <span>${open_arr[i][1]}</span>
            <span>${open_arr[i][2]}</span>
            <span>${open_arr[i][3]}</span>
        </div>
    </div>`
}




// KH파크 PLAY 스와이퍼
var kh_play_swiper1 = new Swiper(".kh_play1", {
    navigation: {
      nextEl: ".play_btn_next1",
      prevEl: ".play_btn_prev1",
    },
    breakpoints: {
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
    },
});
var kh_play_swiper2 = new Swiper(".kh_play2", {
    navigation: {
      nextEl: ".play_btn_next2",
      prevEl: ".play_btn_prev2",
    },
    breakpoints: {
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
    },
});
var kh_play_swiper3 = new Swiper(".kh_play3", {
    navigation: {
      nextEl: ".play_btn_next3",
      prevEl: ".play_btn_prev3",
    },
    breakpoints: {
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
    },
});
var kh_play_swiper4 = new Swiper(".kh_play4", {
    navigation: {
      nextEl: ".play_btn_next4",
      prevEl: ".play_btn_prev4",
    },
    breakpoints: {
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
    },
});
var kh_play_swiper5 = new Swiper(".kh_play5", {
    navigation: {
      nextEl: ".play_btn_next5",
      prevEl: ".play_btn_prev5",
    },
    breakpoints: {
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
    },
});


//   유튜브 영상
let play_arr =[
    [   
        ["https://www.youtube.com/embed/XaV9UVKLxTg?si=5L5fungfLEvseVBx"],
        ["https://www.youtube.com/embed/_6dHSzSZrts?si=piz9nre-3ctk57Uo"],
        ["https://www.youtube.com/embed/YdSXw-P0vQQ?si=ZiaFkWnuqjVWWddW"],
        ["https://www.youtube.com/embed/h8x1FYj-VbE?si=hZF6nu11d40XGt88"]
    ],
    [
        ["https://www.youtube.com/embed/6ea8J2FCQhE?si=d6KkU4nekTE5t9Vn"],
        ["https://www.youtube.com/embed/oIJO5CncC_o?si=6vVh5OoO7gbwgjbf"],
        ["https://www.youtube.com/embed/3iM_06QeZi8?si=CKio9facfSBxLydQ"]
    ],
    [
        ["https://www.youtube.com/embed/7ImJzfyTJkE?si=wkwYx_qkc4dtNacY"],
        ["https://www.youtube.com/embed/GM86hyffVg0?si=1qoXd4OmnbCDZuyX"],
        ["https://www.youtube.com/embed/mo_7A3Zm1-g?si=uKqMl7nOyHxQDmUq"],
        ["https://www.youtube.com/embed/nzmZCG_LyxI?si=eh4HvVg5bqistpVU"]
    ],
    [
        ["https://www.youtube.com/embed/FeKohpaeO_8?si=oS_lQ2G74dhHKTDi"],
        ["https://www.youtube.com/embed/YIERv0cwxkA?si=D987EYX4FwHLn6-Z"],
        ["https://www.youtube.com/embed/o3T8osoIdH4?si=el_pXVV_Cng_FL9J"],
        ["https://www.youtube.com/embed/82RfcvjUAxA?si=GQGYbxyW7xiWACnm"]
    ]
]
// KH파크 PLAY  스와이퍼 내용 넣어주기
let play_swiper = document.getElementsByClassName("play_swiper")
let play_opt = document.getElementsByClassName("play_opt")
let kh_play_box = document.getElementsByClassName("kh_play_box")
let play_slide = document.getElementsByClassName("play_slide")
let iframe_event = document.getElementsByTagName("iframe")
console.log(play_opt.length)

for(let i=0; i<play_opt.length; i++){
    for(let j=0; j<play_arr[i].length; j++){
        play_swiper[i].innerHTML += `
            <div class="swiper-slide play_slide">
                <div class="object_box">
                    <iframe src="${play_arr[i][j]}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>`
    }
}

// 유튜브 스와이퍼 안되는거 고치기
for(let i=0; i<play_slide.length; i++){
    play_slide[i].addEventListener("click",function(){
        console.log(111)
        iframe_event[i].style.pointerEvents ="all";
    })
}

for(let i=0; i<play_opt.length; i++){
    play_opt[i].addEventListener("click", function(){
        for(let j=0; j<kh_play_box.length; j++){
            kh_play_box[j].style.display = "none"  
            play_opt[j].style.color= "black"
            play_opt[j].style.background= "none"
            play_opt[j].style.border ="1px solid gray" 
        }
        kh_play_box[i].style.display = "block"
        play_opt[i].style.color= "white"
        play_opt[i].style.background= "#8e43e7"
        play_opt[i].style.border= "1px solid #8e43e7"
    })
}

//추천 키워드 스와이퍼
var recommend_swiper1 = new Swiper(".recommend_swiper1", {
    navigation: {
      nextEl: ".recommend_btn_next_1",
      prevEl: ".recommend_btn_prev_1",
    },
    breakpoints: {
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
            slidesPerGroup: 5, // 한번에 몇개씩 빠져 나가게
        },
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
      },
});
var recommend_swiper2 = new Swiper(".recommend_swiper2", {
    navigation: {
        nextEl: ".recommend_btn_next_2",
        prevEl: ".recommend_btn_prev_2",
    },
    breakpoints: {
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
            slidesPerGroup: 5,
        },
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
        },
});
var recommend_swiper3 = new Swiper(".recommend_swiper3", {
    navigation: {
        nextEl: ".recommend_btn_next_3",
        prevEl: ".recommend_btn_prev_3",
    },
    breakpoints: {
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
            slidesPerGroup: 5, 
        },
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
        },
});

// 추천 키워드 스와이퍼 내용 넣어주기 
let swiper_recommend = document.getElementsByClassName("swiper_recommend")
let keyword_opt = document.getElementsByClassName("keyword_opt")
let keyword_swiper_box = document.getElementsByClassName("keyword_swiper_box")
for(let i=0; i<keyword_swiper_box.length; i++){
    for(let j=0; j<data_arr[5].length; j++){
        swiper_recommend[i].innerHTML += `
        <div class="swiper-slide recommend_slide">
            <a href="./ticketing_page.html?cate=${cate_arr[i+5]}&idx=${j}&cateNo=${i+5}">
                <img src="../img/${cate_arr[i+5]}/${data_arr[i+5][j][0]}" alt="공연정보${i}" class="slide_img">
            </a>
            <div class="content_txt_box">
                <span>${data_arr[i+5][j][1]}</span>
                <span>${data_arr[i+5][j][2]}</span>
                <span>${data_arr[i+5][j][3]}</span>
            </div>
        </div>`
    }
}

for(let i=0; i<keyword_opt.length; i++){
    keyword_opt[i].addEventListener("click", function(){
        for(let j=0; j<keyword_swiper_box.length; j++){
            keyword_swiper_box[j].style.display = "none"  
            keyword_opt[j].style.color= "black"
            keyword_opt[j].style.background= "none"
            keyword_opt[j].style.border ="1px solid gray" 
        }
        keyword_swiper_box[i].style.display = "block"
        keyword_opt[i].style.color= "white"
        keyword_opt[i].style.background= "#8e43e7"
        keyword_opt[i].style.border= "1px solid #8e43e7"
    })
}



// 리뷰 넣어주기
let reivew_arr =[
["keyword_3.gif","유진과 유진","이 공연 진짜 재밌습니다~!!!",
"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti modi minima repudiandae. Eligendi sapiente totam debitis numquam, quia neque repellendus deleniti repellat. Id animi, assumenda magni officiis neque labore doloremque?",
"딸기맛 딸기우유",
"4.8"],

["keyword_4.gif","시데레우스","친구들과 같이 보기 좋아요!",
"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti modi minima repudiandae. Eligendi sapiente totam debitis numquam, quia neque repellendus deleniti repellat. Id animi, assumenda magni officiis neque labore doloremque?",
"바나나맛 바나나우유",
"5.0"],

["keyword_7.gif","미오 프라텔로","마지막 결말이 너무 충격이에요...!!",
"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti modi minima repudiandae. Eligendi sapiente totam debitis numquam, quia neque repellendus deleniti repellat. Id animi, assumenda magni officiis neque labore doloremque?",
"초코맛 초코우유",
"4.9"],

["keyword_2.gif","접번","시대를 앞서간 공연 입니다...",
"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti modi minima repudiandae. Eligendi sapiente totam debitis numquam, quia neque repellendus deleniti repellat. Id animi, assumenda magni officiis neque labore doloremque?",
"우유맛 우유우유",
"5.0"],
]

let review_box_outer = document.getElementsByClassName("review_box_outer")[0]

for(let i=0; i<reivew_arr.length; i++){
    review_box_outer.innerHTML +=`
        <div class="review_box" data-idx="${i}">
            <div class="review_inner">
                <div class="review_img_box">
                    <img src="../img/rewatch/${reivew_arr[i][0]}" alt="리뷰포스터">
                </div>
                <div class="review_txt_box">
                    <div class="review_txt_inner">
                        <span>${reivew_arr[i][1]}</span>
                        <span>${reivew_arr[i][2]}</span>
                        <span>${reivew_arr[i][3]}</span>
                    </div>
                    <div class="user_info">
                        <div class="user_box">
                            <div class="user_img"></div>
                            <span>${reivew_arr[i][4]}</span>
                        </div>
                        <div class="star_box">
                            <div class="star"></div>
                            <span class="star_score">${reivew_arr[i][5]}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
}

let review_box = document.getElementsByClassName("review_box")
let review_popup = document.getElementsByClassName("review_popup")[0]
let pop_close_btn = document.getElementsByClassName("pop_close_btn")[0]
let block_pan = document.getElementsByClassName("block_pan")[0]
let put_value = document.getElementsByClassName("put_value")
let pop_img_box = document.getElementsByClassName("pop_img_box")[0]

for(let i=0; i<review_box.length; i++){
    review_box[i].addEventListener("click",function(e){
        let num = e.currentTarget.dataset.idx
        review_popup.style.display="block"
        block_pan.style.display="block"
        
        for(let i=0; i<put_value.length - 1; i++){
            pop_img_box.style.background=`url(../img/rewatch/${reivew_arr[num][0]}) no-repeat center center / cover`
            put_value[i+1].textContent=`${reivew_arr[num][i+1]}`
        }
        
        console.log(num)

        
    })
}

pop_close_btn.addEventListener("click", function(){
        review_popup.style.display="none"
        block_pan.style.display="none"
})

