
let url2 = 'https://dog.ceo/api/breeds/image/random';

const img = document.getElementById('img');
const picture = document.getElementById('picture');

picture.addEventListener('click',getImg);

function getImg () {
  let response = fetch(url2);

  response.then((respons) => {
   let llink = respons.json();
   llink.then((res) => {
    console.log(res.message);
    img.src = res.message;
   })
  })
}
 


