// 푸터 상세정보 칸
let drop = document.getElementsByClassName("drop")
let f_txt_outer = document.getElementsByClassName("f_txt_outer")
let f_txt_title = document.getElementsByClassName("f_txt_title")[0]

let f_txt_title_height = f_txt_title.clientHeight

for(let i=0; i<drop.length; i++){
    let count = 1
    drop[i].addEventListener("click", function(){
        count ++
        if((count % 2) == 0)
            f_txt_outer[i].style.height = `100px`
        else{
            f_txt_outer[i].style.height = `${f_txt_title_height}px`
        }
    })
}

// 화면 맨 위로 이동
let top_btn = document.getElementsByClassName("top_btn")

for(let i=0; i<top_btn.length; i++){
    top_btn[i].addEventListener("click", function(e){
        e.preventDefault()
        window.scrollTo({top:0, left:0, behavior:'smooth'});
    })
}

// 검색 막아두기
let h_search_box = document.getElementsByClassName("h_search_box")[0]

h_search_box.addEventListener("click", function(e){
    alert("검색기능은 추후 업데이트 예정입니다.")
})

