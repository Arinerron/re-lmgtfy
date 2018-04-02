function myFunction() {
    var copyText = document.getElementById("myInput");
    copyText.select();
    document.execCommand("Copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = ":کپی شد " + copyText.value;
}

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "ذخیره در کلیپبورد";
}