function create(htmlStr) {
    var frag = document.createDocumentFragment(),
        temp = document.createElement('div');
    temp.innerHTML = htmlStr;
    while (temp.firstChild) {
        frag.appendChild(temp.firstChild);
    }
    return frag;
}

window.onload = function () {
	
	var fragment3 = create('<img src="https://cdn.shopify.com/s/files/1/1875/6267/files/safesite_09fb14bf-436a-4daf-9ad5-14d84f863602.png?13174056267503880139" alt="Safe, secured and verified website." class="text-center center-block" style="margin:29px 0px">');
	document.getElementsByClassName('main__header')[0].appendChild(fragment3);
};
