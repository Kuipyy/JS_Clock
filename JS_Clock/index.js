let yourname = prompt("Adınınız nedir?")
document.getElementById('myName').innerHTML = yourname
function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    m = checktime(m);
    s = checktime(s);
    let time = date.toLocaleDateString("tr-TR") + " " + h + ":" + m + ":" + s;

    console.log(time)
    document.getElementById('myClock').innerHTML = time;
    setTimeout(showTime, 1000);
}
showTime();
function checktime(i) {
    let s = i.toString();
    if (i < 10) {
        s = "0" + s
    };
    return parseInt(s);
}
