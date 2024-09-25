function saveProduct(product, storageType){
    let product = JSON.parse(loclaStorage.getItem(storageType)) || [];
    products.push(product);
    localStorage.setItem(storageType, JSON.stringify(products));
}

document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();
});

document.getElementById('productForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const productName = document.getElementById('productName').value;
    const productPrice = document.getElementById('productPrice').value;
    const productDescription = document.getElementById('productDescription').value;
    const productDate = document.getElementById('productDate').value;
    const storageType = document.getElementById('storageType').value;

    const product = {
        name: productName,
        price: productPrice,
        description: productDescription,
        date: productDate
    };

    saveProduct(product, storageType);
    alert(`Produto ${productName} adicionado em ${storageType}.`);

    document.getElementById('productForm').requestFullscreen();
});

function fetchAnimals(){
    return new Promise((resolve, reject) => {fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            if(!response.ok) {
                throw new Error('Erro ao buscar os dados');
            }
            return responde.json();
        })
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
}

document.getElementById('fetchAnimals').addEventListener('click', () => {
    fetchAnimals().then(animals =>{
        const animalList = document.getElementById('animalList');
        animalList.innerHTML = '';

        animals.forEach(animal => {
            const li = document.createElement('li');
            li.textContent = `${animal.name} - ${animal.email}`;
            animalList.appendChild(li);
        });
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});