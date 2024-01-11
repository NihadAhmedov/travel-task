const list = document.getElementById('list')


function getProducts() {
    list.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem('cart'))
    console.log(cart);
    cart.map((item, index) => {
        const myDiv = document.createElement('div')
        myDiv.className = 'box col-xl-3 col-md-6 col-12'
        myDiv.innerHTML = `
            
                    <img src="${item.image}" alt="">
                    <p>${item.title}</p>
                    <h6>${item.name}</h6>
                    <p>${item.price}</p>
                    <button id="add" onclick="removeBasket(${index})">Remove basket</button>
                    
            `
        list.appendChild(myDiv)
    })
}

function removeBasket(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getProducts()
}

getProducts()