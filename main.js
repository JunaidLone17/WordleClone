var word = ['P', 'A', 'I', 'N', 'T']
var wordinstr = "PAINT";
var q = document.getElementById('q');
var w = document.getElementById('w');
var e = document.getElementById('e');
var r = document.getElementById('r');
var t = document.getElementById('t');
var y = document.getElementById('y');
var u = document.getElementById('u');
var i = document.getElementById('i');
var o = document.getElementById('o');
var p = document.getElementById('p');
var a = document.getElementById('a');
var s = document.getElementById('s');
var d = document.getElementById('d');
var f = document.getElementById('f');
var g = document.getElementById('g');
var h = document.getElementById('h');
var j = document.getElementById('j');
var k = document.getElementById('k');
var l = document.getElementById('l');
var z = document.getElementById('z');
var x = document.getElementById('x');
var c = document.getElementById('c');
var v = document.getElementById('v');
var b = document.getElementById('b');
var n = document.getElementById('n');
var m = document.getElementById('m');
var ent = document.getElementById('ent');
var back = document.getElementById('back');
var boxa1 = document.getElementById('first1');
var boxa2 = document.getElementById('second1');
var boxa3 = document.getElementById('third1');
var boxa4 = document.getElementById('fourth1');
var boxa5 = document.getElementById('fifth1');
var boxb1 = document.getElementById('first2');
var boxb2 = document.getElementById('second2');
var boxb3 = document.getElementById('third2');
var boxb4 = document.getElementById('fourth2');
var boxb5 = document.getElementById('fifth2');
var boxc1 = document.getElementById('first3');
var boxc2 = document.getElementById('second3');
var boxc3 = document.getElementById('third3');
var boxc4 = document.getElementById('fourth3');
var boxc5 = document.getElementById('fifth3');
var boxd1 = document.getElementById('first4');
var boxd2 = document.getElementById('second4');
var boxd3 = document.getElementById('third4');
var boxd4 = document.getElementById('fourth4');
var boxd5 = document.getElementById('fifth4');
var boxe1 = document.getElementById('first5');
var boxe2 = document.getElementById('second5');
var boxe3 = document.getElementById('third5');
var boxe4 = document.getElementById('fourth5');
var boxe5 = document.getElementById('fifth5');
var boxf1 = document.getElementById('first6');
var boxf2 = document.getElementById('second6');
var boxf3 = document.getElementById('third6');
var boxf4 = document.getElementById('fourth6');
var boxf5 = document.getElementById('fifth6');
var tofill = 0;
function nextbox() {
    tofill = tofill + 1
}
q.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'Q'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'Q';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'Q';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'Q';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'Q';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'Q';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'Q';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'Q';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'Q';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'Q';
        checkcomplete();
        
    }
 
    nextbox();
})

w.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'W'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'W';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'W';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'W';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'W';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'W';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'W';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'W';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'W';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'W';
        checkcomplete();
        
    }
 
    nextbox();
})
e.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'E'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'E';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'E';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'E';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'E';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'E';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'E';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'E';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'E';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'E';
        checkcomplete();
        
    }
 
    nextbox();
})
r.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'R'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'R';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'R';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'R';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'R';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'R';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'R';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'R';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'R';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'R';
        checkcomplete();
        
    }
 
    nextbox();
})
t.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'T'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'T';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'T';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'T';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'T';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'T';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'T';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'T';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'T';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'T';
        checkcomplete();
        
    }
 
    nextbox();
})
u.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'U'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'U';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'U';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'U';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'U';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'U';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'U';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'U';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'U';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'U';
        checkcomplete();
        
    }
 
    nextbox();
})
y.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'Y'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'Y';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'Y';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'Y';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'Y';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'Y';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'Y';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'Y';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'Y';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'Y';
        checkcomplete();
        
    }
 
    nextbox();
})
i.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'I'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'I';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'I';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'I';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'I';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'I';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'I';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'I';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'I';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'I';
        checkcomplete();
        
    }
 
    nextbox();
})
o.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'O'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'O';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'O';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'O';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'O';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'O';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'O';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'O';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'O';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'O';
        checkcomplete();
        
    }
 
    nextbox();
})
p.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'P'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'P';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'P';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'P';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'P';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'P';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'P';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'P';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'P';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'P';
        checkcomplete();
        
    }
 
    nextbox();
})
a.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'A'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'A';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'A';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'A';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'A';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'A';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'A';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'A';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'A';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'A';
        checkcomplete();
        
    }
 
    nextbox();
})
s.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'S'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'S';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'S';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'S';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'S';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'S';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'S';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'S';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'S';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'S';
        checkcomplete();
        
    }
 
    nextbox();
})
d.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'D'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'D';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'D';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'D';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'D';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'D';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'D';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'D';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'D';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'D';
        checkcomplete();
        
    }
 
    nextbox();
})
f.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill ===1) {
        boxa2.innerText = 'F'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'F';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'F';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'F';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'F';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'F';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'F';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'F';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'F';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'F';
        checkcomplete();
        
    }
 
    nextbox();
})
g.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'G';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'G'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'G';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'G';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'G';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'G';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'G';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'G';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'G';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'G';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'G';
        checkcomplete();
        
    }
 
    nextbox();
})
h.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'H';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'H'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'H';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'H';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'H';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'H';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'H';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'H';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'H';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'H';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'H';
        checkcomplete();
        
    }
 
    nextbox();
})
j.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'J';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'J'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'J';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'J';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'J';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'J';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'J';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'J';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'J';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'J';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'J';
        checkcomplete();
        
    }
 
    nextbox();
})
k.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'K';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'K'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'K';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'K';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'K';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'K';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'K';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'K';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'K';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'K';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'K';
        checkcomplete();
        
    }
 
    nextbox();
})
l.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'L';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'L'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'L';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'L';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'L';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'L';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'L';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'L';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'L';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'L';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'L';
        checkcomplete();
        
    }
 
    nextbox();
})
z.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'Z';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'Z'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'Z';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'Z';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'Z';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'Z';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'Z';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'Z';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'Z';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'Z';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'Z';
        checkcomplete();
        
    }
 
    nextbox();
})
x.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'X';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'X'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'X';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'X';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'X';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'X';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'X';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'X';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'X';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'X';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'X';
        checkcomplete();
        
    }
 
    nextbox();
})
c.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'C';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'C'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'C';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'C';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'C';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'C';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'C';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'C';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'C';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'C';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'C';
        checkcomplete();
        
    }
 
    nextbox();
})
v.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'V';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'V'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'V';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'V';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'V';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'V';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'V';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'V';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'V';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'V';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'V';
        checkcomplete();
        
    }
 
    nextbox();
})
b.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'B';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'B'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'B';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'B';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'B';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'B';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'B';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'B';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'B';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'B';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'B';
        checkcomplete();
        
    }
 
    nextbox();
})
n.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'N';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'N'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'N';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'N';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'N';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'N';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'N';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'N';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'N';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'N';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'N';
        checkcomplete();
        
    }
 
    nextbox();
})
m.addEventListener("click", (event) => {
    if (tofill === 0) {
        boxa1.innerText = 'M';
        checkcomplete();
        
    }	
    if (tofill ===1) {
        boxa2.innerText = 'M'
        checkcomplete();
        
    }
    if (tofill === 2) {
        boxa3.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 3) {
        boxa4.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 4) {
        boxa5.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 5) {
        boxb1.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 6) {
        boxb2.innerText = 'M';
        checkcomplete();
        
    }

    if (tofill === 7) {
        boxb3.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 8) {
        boxb4.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 9) {
        boxb5.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill ===10) {
        boxc1.innerText = 'M';
        checkcomplete();
        
    }if (tofill === 11) {
        boxc2.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 12) {
        boxc3.innerText = 'M';
        checkcomplete();
        
    }

    if (tofill === 13) {
        boxc4.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 14) {
        boxc5.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 15) {
        boxd1.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill == 16) {
        boxd2.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 17) {
        boxd3.innerText = 'M';
        checkcomplete();
        
    }

    if (tofill === 18) {
        boxd4.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 19) {
        boxd5.innerText = 'M';
        checkcomplete();
        
    }if (tofill === 20) {
        boxe1.innerText = 'M';
        checkcomplete();
        
    }

    if (tofill === 21) {
        boxe2.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 22) {
        boxe3.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 23) {
        boxe4.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 24) {
        boxe5.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 25) {
        boxf1.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 26) {
        boxf2.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 27) {
        boxf3.innerText = 'M';
        checkcomplete();
    }
    if (tofill === 28) {
        boxf4.innerText = 'M';
        checkcomplete();
        
    }
    if (tofill === 29) {
        boxf5.innerText = 'M';
        checkcomplete();
        
    }
 
    nextbox();
})
back.addEventListener("click", (event) => {
        if (tofill === 0) {
        return
    }
    if (tofill-1 === 0) {
        boxa1.innerText = '';
        tofill = tofill - 1;
    }	
    if (tofill-1 ===1) {
        boxa2.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 2) {
        boxa3.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 3) {
        boxa4.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 4) {
        boxa5.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 5) {
        boxb1.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 6) {
        boxb2.innerText = '';
        tofill = tofill - 1;
    }

    if (tofill-1 === 7) {
        boxb3.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 8) {
        boxb4.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 9) {
        boxb5.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 ===10) {
        boxc1.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 11) {
        boxc2.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 12) {
        boxc3.innerText = '';
        tofill = tofill - 1;
        
    }

    if (tofill-1 === 13) {
        boxc4.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 14) {
        boxc5.innerText = '';
        tofill = tofill - 1;
        
    }
    if (tofill-1 === 15) {
        boxd1.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 == 16) {
        boxd2.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 17) {
        boxd3.innerText = '';
        tofill = tofill - 1;
        
    }

    if (tofill-1 === 18) {
        boxd4.innerText = '';
        tofill = tofill - 1;
        
    }
    if (tofill-1 === 19) {
        boxd5.innerText = '';
       tofill = tofill - 1;
        
    }if (tofill-1 === 20) {
        boxe1.innerText = '';
      tofill = tofill - 1;
    }

    if (tofill-1 === 21) {
        boxe2.innerText = '';
       tofill = tofill - 1;
        
    }
    if (tofill-1 === 22) {
        boxe3.innerText = '';
     tofill = tofill - 1;
        
    }
    if (tofill-1 === 23) {
        boxe4.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 24) {
        boxe5.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 25) {
        boxf1.innerText = '';
        tofill = tofill - 1;
    }
    if (tofill-1 === 26) {
        boxf2.innerText = '';
     tofill = tofill - 1;
        
    }
    if (tofill-1 === 27) {
        boxf3.innerText = '';
       tofill = tofill - 1;
    }
    if (tofill-1 === 28) {
        boxf4.innerText = '';
        tofill = tofill - 1;
        
    }
    if (tofill-1 === 29) {
        boxf5.innerText = '';
      tofill = tofill - 1;
        
    }
})


















function checkcomplete() {
    if (tofill === 4) {
       
        var word1 = boxa1.innerText + boxa2.innerText + boxa3.innerText + boxa4.innerText + boxa5.innerText;
         if (wordinstr === word1) {
            window.alert("You won");
        }
        for (let index = 0; index < word1.length; index++) {
            var element = word1[index];
            if (element === word[index]) {
                if (index === 0) {
                    boxa1.style.background = '#6AAB65'
                }
                if (index === 1) {
                     boxa2.style.background = '#6AAB65'
                }
                if (index === 2) {
                     boxa3.style.background = '#6AAB65'
                }
                if (index === 3) {
                     boxa4.style.background = '#6AAB65'
                }
                if (index === 4) {
                     boxa5.style.background = '#6AAB65'
                }
            }
            for (let i = 0; i< word.length; i++) {
                if (element === word[i] && index !== i) {
                    if (index === 0) {
                        boxa1.style.background = '#F1D77B'
                    }
                    if (index === 1) {
                        boxa2.style.background = '#F1D77B'
                    }
                    if (index === 2) {
                        boxa3.style.background = '#F1D77B'
                    }
                    if (index === 3) {
                        boxa4.style.background = '#F1D77B'
                    }
                    if (index === 4) {
                        boxa5.style.background = '#F1D77B'
                    }


                }
                
            }
                
                    
                
        
            
        }
        
    }
    if (tofill === 9) {
        var word1 = boxb1.innerText + boxb2.innerText + boxb3.innerText + boxb4.innerText + boxb5.innerText;
          if (wordinstr === word1) {
            window.alert("You won");
        }
        for (let index = 0; index < word1.length; index++) {
            var element = word1[index];
            if (element === word[index]) {
                if (index === 0) {
                    boxb1.style.background = '#6AAB65'
                }
                if (index === 1) {
                     boxb2.style.background = '#6AAB65'
                }
                if (index === 2) {
                     boxb3.style.background = '#6AAB65'
                }
                if (index === 3) {
                     boxb4.style.background = '#6AAB65'
                }
                if (index === 4) {
                     boxb5.style.background = '#6AAB65'
                }
            }
            for (let i = 0; i< word.length; i++) {
                if (element === word[i] && index !== i) {
                    if (index === 0) {
                        boxb1.style.background = '#F1D77B'
                    }
                    if (index === 1) {
                        boxb2.style.background = '#F1D77B'
                    }
                    if (index === 2) {
                        boxb3.style.background = '#F1D77B'
                    }
                    if (index === 3) {
                        boxb4.style.background = '#F1D77B'
                    }
                    if (index === 4) {
                        boxb5.style.background = '#F1D77B'
                    }


                }
                
            }
                
                    
                
        
            
        }
       
    }
    if (tofill === 14) {
        var word1 = boxc1.innerText + boxc2.innerText + boxc3.innerText + boxc4.innerText + boxc5.innerText;
          if (wordinstr === word1) {
            window.alert("You won");
        }
        for (let index = 0; index < word1.length; index++) {
            var element = word1[index];
            if (element === word[index]) {
                if (index === 0) {
                    boxc1.style.background = '#6AAB65'
                }
                if (index === 1) {
                     boxc2.style.background = '#6AAB65'
                }
                if (index === 2) {
                     boxc3.style.background = '#6AAB65'
                }
                if (index === 3) {
                     boxc4.style.background = '#6AAB65'
                }
                if (index === 4) {
                     boxc5.style.background = '#6AAB65'
                }
            }
            for (let i = 0; i< word.length; i++) {
                if (element === word[i] && index !== i) {
                    if (index === 0) {
                        boxc1.style.background = '#F1D77B'
                    }
                    if (index === 1) {
                        boxc2.style.background = '#F1D77B'
                    }
                    if (index === 2) {
                        boxc3.style.background = '#F1D77B'
                    }
                    if (index === 3) {
                        boxc4.style.background = '#F1D77B'
                    }
                    if (index === 4) {
                        boxc5.style.background = '#F1D77B'
                    }


                }
                
            }
                
                    
                
        
            
        }
    }
    if (tofill === 19) {
        
      var word1 = boxd1.innerText + boxd2.innerText + boxd3.innerText + boxd4.innerText + boxd5.innerText;
         if (wordinstr === word1) {
            window.alert("You won");
        }
        for (let index = 0; index < word1.length; index++) {
            var element = word1[index];
            if (element === word[index]) {
                if (index === 0) {
                    boxd1.style.background = '#6AAB65'
                }
                if (index === 1) {
                     boxd2.style.background = '#6AAB65'
                }
                if (index === 2) {
                     boxd3.style.background = '#6AAB65'
                }
                if (index === 3) {
                     boxd4.style.background = '#6AAB65'
                }
                if (index === 4) {
                     boxd5.style.background = '#6AAB65'
                }
            }
            for (let i = 0; i< word.length; i++) {
                if (element === word[i] && index !== i) {
                    if (index === 0) {
                        boxd1.style.background = '#F1D77B'
                    }
                    if (index === 1) {
                        boxd2.style.background = '#F1D77B'
                    }
                    if (index === 2) {
                        boxd3.style.background = '#F1D77B'
                    }
                    if (index === 3) {
                        boxd4.style.background = '#F1D77B'
                    }
                    if (index === 4) {
                        boxd5.style.background = '#F1D77B'
                    }


                }
                
                
            }
                
                    
                
        
            
        }
    }
    if (tofill === 24) {
    var word1 = boxe1.innerText + boxe2.innerText + boxe3.innerText + boxe4.innerText + boxe5.innerText;
          if (wordinstr === word1) {
            window.alert("You won");
        }
        for (let index = 0; index < word1.length; index++) {
            var element = word1[index];
            if (element === word[index]) {
                if (index === 0) {
                    boxe1.style.background = '#6AAB65'
                }
                if (index === 1) {
                     boxe2.style.background = '#6AAB65'
                }
                if (index === 2) {
                     boxe3.style.background = '#6AAB65'
                }
                if (index === 3) {
                     boxe4.style.background = '#6AAB65'
                }
                if (index === 4) {
                     boxe5.style.background = '#6AAB65'
                }
            }
            for (let i = 0; i< word.length; i++) {
                if (element === word[i] && index !== i) {
                    if (index === 0) {
                        boxe1.style.background = '#F1D77B'
                    }
                    if (index === 1) {
                        boxe2.style.background = '#F1D77B'
                    }
                    if (index === 2) {
                        boxe3.style.background = '#F1D77B'
                    }
                    if (index === 3) {
                        boxe4.style.background = '#F1D77B'
                    }
                    if (index === 4) {
                        boxe5.style.background = '#F1D77B'
                    }


                }
                
            }
                
                    
                
        
            
        }
    }
    if (tofill === 29) {
var word1 = boxf1.innerText + boxf2.innerText + boxf3.innerText + boxf4.innerText + boxf5.innerText;
          if (wordinstr === word1) {
            window.alert("You won");
        }
        for (let index = 0; index < word1.length; index++) {
            var element = word1[index];
            if (element === word[index]) {
                if (index === 0) {
                    boxf1.style.background = '#6AAB65'
                }
                if (index === 1) {
                     boxf2.style.background = '#6AAB65'
                }
                if (index === 2) {
                     boxf3.style.background = '#6AAB65'
                }
                if (index === 3) {
                     boxf4.style.background = '#6AAB65'
                }
                if (index === 4) {
                     boxf5.style.background = '#6AAB65'
                }
            }
            for (let i = 0; i< word.length; i++) {
                if (element === word[i] && index !== i) {
                    if (index === 0) {
                        boxf1.style.background = '#F1D77B'
                    }
                    if (index === 1) {
                        boxf2.style.background = '#F1D77B'
                    }
                    if (index === 2) {
                        boxf3.style.background = '#F1D77B'
                    }
                    if (index === 3) {
                        boxf4.style.background = '#F1D77B'
                    }
                    if (index === 4) {
                        boxf5.style.background = '#F1D77B'
                    }


                }
                
            }
                
                    
                
        
            
        }
    }
}






