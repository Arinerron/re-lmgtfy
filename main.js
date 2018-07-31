function copyit() {
    try {
        var successful = document.execCommand('copy');
        var msg = successful ? 'لینک کپی شد.' :
            'JavaScript copy not supported -- Please use Ctrl-C to copy the text.';
        document.getElementById('copymsg').innerHTML = msg;
    } catch (err) {
        console.log('unable to copy using document.execCommand(copy)');
    }
}