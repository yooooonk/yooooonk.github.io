const msg = document.querySelector('.speech-bubble')
var clipboard = new ClipboardJS('.copy-btn');
    clipboard.on('success', function(e) {
        msg.style.display = 'block'
        setTimeout(()=>{
            msg.style.display = 'none'
        },1000)
    });
    clipboard.on('error', function(e) {
        console.log(e);
    });