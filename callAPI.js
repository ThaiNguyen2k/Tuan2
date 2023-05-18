// API https://fakestoreapi.com/products 

window.onload= function(){
  fetchData()
}

async function getAll() {
  return fetch('https://fakestoreapi.com/products')
    .then(res => res.json());
}

async function fetchData() {
  const products = await getAll();

  const productsDiv = document.getElementById("products");
  for (let item of products) {
    productsDiv.innerHTML += `
            <div class="im" onclick="goToDetail(${item.id})">
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

  function goToDetail(id) {
    window.location.assign(`details.html?id=${id}`);
  }
