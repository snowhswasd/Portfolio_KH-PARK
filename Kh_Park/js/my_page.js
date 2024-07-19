// 마이페이지 우측 버튼들 넣어주기
let info_box_R = document.getElementsByClassName("info_box_R")[0]
let fn_icon = document.getElementsByClassName("fn_icon")

let info_fn_arr =[
    ["정보 수정","my_info.png","정보를 수정합니다."],
    ["포인트 충전","cash.png","포인트를 충전합니다."],
    ["예매 내역","tickting.png","예매 내역을 확인합니다."],
    ["후기작성","review.png","후기를 작성합니다."],
    ["???","review.png","???를 합니다"],
    ["회원탈퇴", "delete.png","회원을 탈퇴합니다"]
]

for(let i=0; i<info_fn_arr.length; i++){
    info_box_R.innerHTML += `
    <div class="info_function">
        <div class="fn_icon"></div>
        <p>${info_fn_arr[i][0]}</p>
        <p class="sub_txt">${info_fn_arr[i][2]}</p>
    </div>`
}
console.log(fn_icon.length)
for(let i=0; i<info_fn_arr.length; i++){ 
    fn_icon[i].style.background= `url(../img/my_page/${info_fn_arr[i][1]}) no-repeat center center / cover`
}

// 포인트 충전 팝업
let point_input = document.getElementsByClassName("point_input")[0]
let add_btn = document.getElementsByClassName("add_btn")
let point_decide_btn = document.getElementsByClassName("point_decide_btn")[0]
let total_point = 0;


for(let i=0; i<add_btn.length; i++){
    add_btn[i].addEventListener("click",function(){
        if(i == 0){
            total_point += 10000
        }
        else if(i == 1){
            total_point += 30000
        }
        else if(i == 2){
            total_point += 50000
        }
        else{
            total_point += 100000
        }
        point_input.value = total_point.toLocaleString("ko")
    })
}

point_decide_btn.addEventListener("click", function(){
    if(total_point == 0){
        alert("충전할 금액을 입력해주세요.")
    }
    else{
        alert(total_point.toLocaleString("ko")+"P 충전되었습니다.")
        point_input.value = 0
        total_point = 0
    }
})









// 회원 탈퇴 팝업
let delete_confirm_input = document.getElementsByClassName("delete_confirm_input")[0]
let delete_btn = document.getElementsByClassName("delete_btn")[0]
let delete_cofirm = false

delete_confirm_input.addEventListener("keyup", function(){
    let delete_txt_value = delete_confirm_input.value 

    console.log(delete_txt_value.trim())
    if(delete_txt_value.trim() == "회원탈퇴에 동의합니다"){
        delete_btn.style.backgroundColor ="red"
        delete_cofirm = true
    }
    else{
        delete_cofirm = false
    }
})
delete_btn.addEventListener("click", function(e){
    if(delete_cofirm == false){
        e.preventDefault()
    }
    else{
        alert("회원탈퇴가 완료되었습니다.")
    }
    
})
