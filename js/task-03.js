const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const adLi = document.querySelector('.gallery');

/*adLi.insertAdjacentHTML('afterbegin','\
<li class =""> <img src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"\
windth = "200" heigth = "200" alt = "White and Black Long Fur Cat"/></li>\
<li class =""> <img src = "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"\
windth = "200" heigth = "200" alt = "Orange and White Koi Fish Near Yellow Koi Fish"/></li>\
<li class =""> <img src = "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"\
windth = "200" heigth = "200" alt = "Group of Horses Running"/></li>');*/

const markup = images.map((image) => `<li class=""><img class = "task3-image_item" src = ${image.url} alt = ${image.alt}/></li>`)
.join("");

adLi.insertAdjacentHTML("beforeend", markup);
//list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");