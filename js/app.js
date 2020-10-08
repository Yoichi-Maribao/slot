function setCount() {
    document.getElementById('playCount').textContent = playCounter;
    document.getElementById('bonus').textContent = bonus;

    if(playCounter < 10){
        playEmptyDigits.textContent = "000";
    } else if(playCounter >= 10 && playCounter < 100) {
        playEmptyDigits.textContent = "00";
    } else if(playCounter >= 100 && playCounter < 1000) {
        playEmptyDigits.textContent = "0";
    } else if(playCounter >= 1000) {
        playEmptyDigits.textContent = "";
    }

    if(bonus < 10){
        emptyDigits.textContent = "000";
    } else if(bonus >= 10 && bonus < 100) {
        emptyDigits.textContent = "00";
    } else if(bonus >= 100 && bonus < 1000) {
        emptyDigits.textContent = "0";
    } else if(bonus >= 1000) {
        emptyDigits.textContent = "";
    }

}
setCount();

function leverSwitch() {
    if(isLever){
        lever.classList.add('pointer-none');
    } else {
        lever.classList.remove('pointer-none');
    }
    for(let yet = 0; yet < yets.length; yet ++){
        if(isLever){
            yets[yet].classList.remove('pointer-none');
        }
    }
}

//ランプ制御
function flash() {
    if(gogo.classList.contains('normal')){
        gogo.classList.remove('normal');
        gogo.classList.add('flash');

        //ガコッ抽選
        let gako = Math.floor(Math.random() * (5 - 1) + 1);
        if(gako !== 1){
            document.getElementById('gako').play();
        }
    }
}

//レバーオン時にボーナス抽選、色変化リセット
lever.addEventListener('click', () => {
    //ボタン有効化
    isLever = true;
    //ボタンリセット
    for(let i=0; i < btn.length; i++){
        if(btn[i].classList.contains('already')){
            btn[i].classList.remove('already');
            btn[i].classList.add('yet');
        }
    };
    
    //乱数生成
    let max = 2105;
    let min = 1;
    let randNum = Math.random() * (max - min) + min;
    if(randNum === 1){
        //ベル成立
        console.log("Bell");
    }else if(randNum > 1 && randNum < 347){
        //ぶどう成立
        console.log("Grape")
    }else if(randNum > 348 && randNum < 423){
        //チェリー成立
        console.log("Cherry");
    }else if(randNum > 424 && randNum < 712){
        //リプレイ成立
        console.log("Replay");
    }else{
        console.log("ハズレ");
    }

    
    //スタート音再生
    document.getElementById('leverOn').play();
    document.getElementById('leverOn').addEventListener('ended', () => {
        leverSwitch();
    })
    if(isFlash){
        gogo.classList.remove('flash');
        gogo.classList.add('normal');
        flag = false;
        isFlash = false;
        console.log(isFlash);
    }
})

leverSwitch();
//ボタンのIDを取得,色変更
function getId(id) {
    var btnId = id.getAttribute('id');
    var $id = document.getElementById(btnId);
    //ボタン色制御
    if($id.classList.contains('yet')){
        $id.classList.remove('yet');
        $id.classList.add('already', 'pointer-none');
    }
    count++;
    if(count===3){
        if(flag===true){
            flash();
            bonus++;
            isFlash = true;
            console.log(isFlash);
        }

        // if(isFlash === ) {
        //     //ランプリセット
        //     if(gogo.classList.contains('flash')){
        //         gogo.classList.remove('flash');
        //         gogo.classList.add('normal');
        //         flag = false;
        //         isFlash = false;
        //     }
        // }
        
        //     //ボーナス時、音楽再生
        //     let bonusIntro = document.getElementById('bonusIntro');
        //     bonusIntro.play();
        //     bonusIntro.addEventListener('ended', () => {
        //         //ボーナスBGMリセット
        //         bonusIntro.pause();
        //         bonusIntro.currentTime = 0;
        //     })
        // };
        
        isLever = false;
        count = 0;
        playCounter ++;
        setCount();
    }

    //ボタン音をならす
    let btnAudio = document.getElementById('btnOn');
    if(isPlay = 0){
        btnAudio.play();
        isPlay = 1;
    }else if (isPlay = 1){
        btnAudio.pause();
        btnAudio.currentTime = 0;
        btnAudio.play();
    }
    leverSwitch();
};
