// После загрузки страницы вывести в консоль информацию о всех
// ссылках, якорях, изображениях на странице.

// И изображения, и ссылки
let allLinks = Array.from(document.getElementsByTagName("a"));

let allImages = Array.from(document.getElementsByTagName("img"));

console.log('All links and anchors:')
allLinks.forEach((item, index) => {
	console.log(`${index}: <a href=${item.href} target=${item.target}></a>`);
})

console.log('All images:')
allImages.forEach((item, index) => {
	console.log(`${index}: <img src=${item.src} alt=${item.alt}>`);
})

// Обработчики как свойства
document.links.history.ondblclick = function() {
	console.log('Была два раза нажата кнопка перехода на историю электромобилей.');
}

function tesla() {
	console.log('Была наведена мышка на кнопку для перехода на сайт теслы.')
} 
document.links.tesla.onmouseover = tesla;

// Регистрация обработчиков
let outLink = document.getElementById("out_link");
outLink.addEventListener("mousedown", function(e) {console.log(e);}, false)

let outImg = document.getElementById("out_img");
outImg.addEventListener("mouseout", function(e) {console.log(e);}, false)

// Перелистывание картинки по нажатию
let index = 0;
let imgs = Array("img/nissan_leaf.jpg", "img/nissan_leaf_another.jpg", "img/nissan_leaf_snow.jpg");
let nissanLeafImg = document.images["leaf"];

function swapImages() {
	if (index + 1 != imgs.length) {
		index++;
		nissanLeafImg.src=imgs[index];
	}
	else {
		index = 0;
		nissanLeafImg.src=imgs[index];
	}
}

nissanLeafImg.addEventListener("click", swapImages, false)