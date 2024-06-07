var imgs = ["money-removebg-preview.png", "money2-removebg-preview.png", "red.jpg"]
var boxs = [0, 20, 100, 180, 260, 340, 420];
var vist = ["0", "false", "false", "false", "false", "false", "false"];
let scors = [1000, 10, -500];
let socors = 0;
let sounds = new Audio("balloonpop-83760.mp3");
// $(document).ready(()=>{
//     let a=1;
//     $('#but').click(()=>{
//      var p=$('#prints');
//      var number=Math.floor(Math.random()*6)+1;
//      if(vist[number]=="false"){
//     vist[number]="true";
//      p.html(number);
//      let tops=boxs[number];
//      let b="#box";
//      b+=number;
//     var ball=$('#imgs');
//     ball.animate({left:"87vw",top:tops+'px'},3000,function(){
//      $(b).effect({
//             duration:3000,
//             effect:"explode",
//             pieces:200
//         });
//         ball.css({left:"0px",top:"200px"});

//         let rup;
//         // console.log(color);
//         if(b=="#box1" || b=="#box5"){
//             $('#money').attr("src",imgs[2]);
//             rup=scors[2];
//         }else if(b=="#box2" || b=="#box4"){
//             $('#money').attr("src",imgs[0]);
//             rup=scors[0];
//         }else if(b=="#box3"|| b=="#box6"){
//             $('#money').attr("src",imgs[1]);
//             rup=scors[1];
//         }
//  $('#moneys').show();   
//             $('#moneys').hide(2000);
//             var add=$('#socar').html();
//             var ans=Number(add)+Number(rup);
//             $('#socar').html(ans);
//  });
//     }else{
//         alert("please Allready Visited :");
//     }
//     });

// });
function process(n) {
    let tops = boxs[n];
    let b = "#box";
    b += n;
    var ball = $('#imgs');
    ball.animate({ left: "87vw", top: tops + 'px' }, 3000, function () {
        sounds.play();
        $(b).effect({
            duration: 3000,
            effect: "explode",
            pieces: 200
        }, function () {
            $(b).css({ backgroundColor: "red" });
        });

        ball.css({ left: "0px", top: "200px" });

        let rup;
        // console.log(color);
        if (b == "#box1" || b == "#box5") {
            $('#money').attr("src", imgs[2]);
            rup = scors[2];
        } else if (b == "#box2" || b == "#box4") {
            $('#money').attr("src", imgs[0]);
            rup = scors[0];
        } else if (b == "#box3" || b == "#box6") {
            $('#money').attr("src", imgs[1]);
            rup = scors[1];
        }
        $('#moneys').show();
        $('#moneys').hide(2000);
        var add = $('#socar').html();
        var ans = Number(add) + Number(rup);
        $('#socar').html(ans);
    });
    console.log(numbers_r);
}
let numbers_r = [1, 2, 3, 4, 5, 6];
function suffle() {

    for (let i = numbers_r.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [numbers_r[i], numbers_r[j]] = [numbers_r[j], numbers_r[i]];
    }

    return numbers_r.pop();
}
$(document).ready(function () {
    $('#but1').click(function () {
        let n = suffle();
        $('#prints').html(n);
        $('#but1').prop('disabled', true);
        process(n);
    });
    $('#but2').click(function () {
        let n = suffle();
        $('#prints').html(n);
        $('#but2').prop('disabled', true);
        process(n);
    });
    $('#but3').click(function () {
        let n = suffle();
        $('#prints').html(n);
        $('#but3').prop('disabled', true);
        process(n);
    });
    $('#but4').click(function () {
        let n = suffle();
        $('#prints').html(n);
        $('#but4').prop('disabled', true);
        process(n);
    });
    $('#but5').click(function () {
        let n = suffle();
        $('#prints').html(n);
        $('#but5').prop('disabled', true);
        process(n);
    });
    $('#but6').click(function () {
        let n = suffle();
        $('#prints').html(n);
        $('#but6').prop('disabled', true);
        process(n);
    });
});

