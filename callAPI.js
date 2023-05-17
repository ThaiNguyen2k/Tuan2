// API https://fakestoreapi.com/products 



async function getAll() {
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json());
}

async function fetchData() {
  const products = await getAll();
  console.log(products);

  const productsDiv = document.getElementById("products");
  for (let item of products) {
    productsDiv.innerHTML += `
            <div class="im">
            <p>${item.id}</p>
            <img class="img" src="${item.image}"/>
            <div class="tab">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <p>${item.price}</p>
            <p>${item.category}</p>
            </div>
            </div>
            `;
  }
}
fetchData()

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
fetch(`https://fakestoreapi.com/products/${id}`)
              .then(res => res.json())
    .then(json => console.log(json))
  function goToDetail(id) {
    window.location.assign(`details.html ? id = ${id}`);
  }
