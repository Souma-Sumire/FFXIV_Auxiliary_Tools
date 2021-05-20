addOverlayListener('LogLine', (e) => casting(e));
startOverlayEvents();

function casting(e)
{
    //document.getElementById("log").innerText = e.line;
    console.log(e);
}