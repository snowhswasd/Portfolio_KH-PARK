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
    },
});

// 미니 배너 넣어주기
    for(let i=0; i<m_banner_arr.length; i++){    
        swiper_bullet[i].innerHTML +=
        `<img src="../img/main_banner_mini/${m_banner_arr[i][1]}" alt="메인배너_미니_${i}">`
    
    }

function bullet(){
    let w_width = window.innerWidth
    if(w_width >= 1024){
        for(let i=0; i<swiper_bullet.length; i++){
            swiper_bullet[i].style.display = "inline-block"
        }
    }
    else{
        for(let i=0; i<swiper_bullet.length; i++){
            swiper_bullet[i].style.display = "none"
        }
    }
    // swiper.autoplay.stop()
    // swiper.autoplay.start()
}

window.addEventListener("resize", bullet)
window.addEventListener("load", bullet)


// 임시 데이터
let data_arr = [
    ["musical_1.gif","<프랑켄슈타인>","블루스퀘어 신한카드홈","2024.07.28 ~ 10.25"],
    ["musical_2.gif","<하데스타운>","샤롯데씨어터","2024.08.06 ~ 08.25"],
    ["musical_3.gif","<영웅>","계명아트센터","2024.05.28 ~ 08.11"],
    ["musical_4.gif","<이블데드>","인터파크 유니플렉스 1관","2024.07.11 ~ 09.21"],
    ["musical_5.gif","<홍련>","대학로 자유극장","2024.06.20 ~ 09.13"],
    ["musical_6.gif","<스파이>","동국대학교 이해랑예술극장","2024.07.12 ~ 10.06"],
    ["musical_7.gif","<베르사유의 장미>","충무아트센터 대극장","2024.07.28 ~ 10.25"],
    ["musical_8.gif","<살리에르>","세종문화회관 대극장","2024.05.28 ~ 08.11"],
    ["musical_9.gif","<젠틀멘스가이드>","광림아트센터 BBCH홀","2024.06.20 ~ 09.13"],
    ["musical_10.gif","<4월은 너의 거짓말>","예술의 전당 토퀄극장","2024.08.06 ~ 08.25"]
]
// 랭킹 스와이퍼
var rank_swiper1 = new Swiper(".rank1", {
    navigation: {
      nextEl: ".rank_bth_next_1",
      prevEl: ".rank_bth_prev_1",
    },
    breakpoints: {
        //브라우저가 1024보다 클 때
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        //브라우저가 480보다 클 때
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        //브라우저가 0보다 클 때
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
        //브라우저가 1024보다 클 때
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        //브라우저가 480보다 클 때
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        //브라우저가 0보다 클 때
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
        //브라우저가 1024보다 클 때
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        //브라우저가 480보다 클 때
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        //브라우저가 0보다 클 때
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
        //브라우저가 1024보다 클 때
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        //브라우저가 480보다 클 때
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        //브라우저가 0보다 클 때
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
        //브라우저가 1024보다 클 때
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        //브라우저가 480보다 클 때
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        //브라우저가 0보다 클 때
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
for(let i=0; i<swiper_rank.length; i++){
    for(let j=0; j<data_arr.length; j++){
        swiper_rank[i].innerHTML+=`
        <div class="swiper-slide rank_slide pos_box">
            <a href="#" class="pos_box">
                <img src="../img/musical/${data_arr[j][0]}" alt="공연정보${j}" class="slide_img">
                <span class="num_pos num_pos_${j}">${j+1}<span>
            </a>
            <div class="content_txt_box">
                <span>${data_arr[j][1]}</span>
                <span>${data_arr[j][2]}</span>
                <span>${data_arr[j][3]}</span>
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
    ["musical_10.gif","7.16(화) 11:00","4월은 너의 거짓말","1차 티켓오픈"],
    ["musical_9.gif","7.17(수) 13:00","젠틀맨스 가이드","1차 티켓오픈"],
    ["musical_8.gif","7.14(일) 15:00","살리에르","1차 티켓오픈"],
    ["musical_7.gif","7.19(금) 16:00","베르사유 장미","1차 티켓오픈"],
    ["musical_6.gif","7.16(화) 12:00","스파이","1차 티켓오픈"],
    ["musical_5.gif","7.18(목) 08:00","홍련","1차 티켓오픈"],
]
let open_ticket = document.getElementsByClassName("open_ticket")[0]

for(let i=0; i<open_arr.length; i++){
    open_ticket.innerHTML+=`
    <div class="open_ticket_box">
        <a href="#">
            <img src="../img/musical/${open_arr[i][0]}" alt="티켓오픈${i}">
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
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        //브라우저가 0보다 클 때
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
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        //브라우저가 0보다 클 때
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
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        //브라우저가 0보다 클 때
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
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        //브라우저가 0보다 클 때
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
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 3, 
            spaceBetween: 15, 
        },
        //브라우저가 0보다 클 때
        0: {
            slidesPerView: 2, 
            spaceBetween: 10, 
        },
    },
});


//   유튜브 영상
let play_arr =[
    ["https://www.youtube.com/embed/XaV9UVKLxTg?si=5L5fungfLEvseVBx"],
    ["https://www.youtube.com/embed/_6dHSzSZrts?si=piz9nre-3ctk57Uo"],
    ["https://www.youtube.com/embed/YdSXw-P0vQQ?si=ZiaFkWnuqjVWWddW"],
    ["https://www.youtube.com/embed/h8x1FYj-VbE?si=hZF6nu11d40XGt88"]
]
// KH파크 PLAY  스와이퍼 내용 넣어주기
let play_swiper = document.getElementsByClassName("play_swiper")
let play_opt = document.getElementsByClassName("play_opt")
let kh_play_box = document.getElementsByClassName("kh_play_box")
let play_slide = document.getElementsByClassName("play_slide")
let object_event = document.getElementsByTagName("object")


for(let i=0; i<play_opt.length; i++){
    for(let j=0; j<play_arr.length; j++){
        play_swiper[i].innerHTML += `
            <div class="swiper-slide play_slide">
                <div class="object_box">
                    <object data=${play_arr[j]}></object>
                </div>
            </div>`
    }
}

// 유튜브 스와이퍼 안되는거 고치기
// 기술의 한계
for(let i=0; i<play_slide.length; i++){
   
    play_slide[i].addEventListener("click",function(){
        console.log(111)
        object_event[i].style.pointerEvents ="all";
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

// 추천 임시 데이터
let recommend_data_arr = [
    ["keyword_1.gif","<보헤미아의 숲과 들의>","블루스퀘어 신한카드홈","2024.07.28 ~ 10.25"],
    ["keyword_2.gif","<접변>","샤롯데씨어터","2024.08.06 ~ 08.25"],
    ["keyword_3.gif","<유진과 유진>","계명아트센터","2024.05.28 ~ 08.11"],
    ["keyword_4.gif","<시데레우스>","인터파크 유니플렉스 1관","2024.07.11 ~ 09.21"],
    ["keyword_5.gif","<해피맨>","대학로 자유극장","2024.06.20 ~ 09.13"],
    ["keyword_6.gif","<세상친구>","동국대학교 이해랑예술극장","2024.07.12 ~ 10.06"],
    ["keyword_7.gif","<미오 프라텔로>","충무아트센터 대극장","2024.07.28 ~ 10.25"],
    ["keyword_8.gif","<살리에르>","세종문화회관 대극장","2024.05.28 ~ 08.11"],
    ["keyword_9.gif","<젠틀멘스가이드>","광림아트센터 BBCH홀","2024.06.20 ~ 09.13"],
    ["keyword_10.gif","<4월은 너의 거짓말>","예술의 전당 토퀄극장","2024.08.06 ~ 08.25"]
]

//추천 키워드 스와이퍼
var recommend_swiper1 = new Swiper(".recommend_swiper1", {
    navigation: {
      nextEl: ".recommend_btn_next_1",
      prevEl: ".recommend_btn_prev_1",
    },
    breakpoints: {
        //브라우저가 1024보다 클 때
        1024: {
            slidesPerView: 5, 
            spaceBetween: 20, 
        },
        //브라우저가 768보다 클 때
        768: {
            slidesPerView: 4, 
            spaceBetween: 15, 
        },
        //브라우저가 480보다 클 때
        480: {
            slidesPerView: 3, 
            spaceBetween: 10, 
        },
        //브라우저가 0보다 클 때
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
    //브라우저가 1024보다 클 때
    1024: {
        slidesPerView: 5, 
        spaceBetween: 20, 
    },
    //브라우저가 768보다 클 때
    768: {
        slidesPerView: 4, 
        spaceBetween: 15, 
    },
    //브라우저가 480보다 클 때
    480: {
        slidesPerView: 3, 
        spaceBetween: 10, 
    },
    //브라우저가 0보다 클 때
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
    //브라우저가 1024보다 클 때
    1024: {
        slidesPerView: 5, 
        spaceBetween: 20, 
    },
    //브라우저가 768보다 클 때
    768: {
        slidesPerView: 4, 
        spaceBetween: 15, 
    },
    //브라우저가 480보다 클 때
    480: {
        slidesPerView: 3, 
        spaceBetween: 10, 
    },
    //브라우저가 0보다 클 때
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
    for(let j=0; j<recommend_data_arr.length; j++){
        swiper_recommend[i].innerHTML += `
        <div class="swiper-slide recommend_slide">
            <a href="#">
                <img src="../img/recommend/${recommend_data_arr[j][0]}" alt="공연정보${i}" class="slide_img">
            </a>
            <div class="content_txt_box">
                <span>${recommend_data_arr[j][1]}</span>
                <span>${recommend_data_arr[j][2]}</span>
                <span>${recommend_data_arr[j][3]}</span>
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
