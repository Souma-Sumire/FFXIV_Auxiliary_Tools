addOverlayListener('LogLine', (e) => Tick(e));
startOverlayEvents();

function Tick(e)
{
    console.log(e);
}

window.onload = function()
{
    var bar = document.getElementById("bar");
    var barWidth = 0;
    var loopTimer;
    var loopEachMs = 20;
    var loopCycleMs = 3000;

    //循环
    function loop()
    {
        //window.getComputedStyle(bar).width
        bar.style.width = barWidth + "%";
        barWidth = (barWidth + 1 / (loopCycleMs / loopEachMs) * 100) % 100;
    }

    //开始
    document.getElementById("start").onclick = function()
    {
        clearInterval(loopTimer);
        barWidth = 0;
        loopTimer = setInterval(loop, loopEachMs);
    }

    //终止
    document.getElementById("stop").onclick = function()
    {
        clearInterval(loopTimer);
        barWidth = 0;
        bar.style.width = 0;
    }

}