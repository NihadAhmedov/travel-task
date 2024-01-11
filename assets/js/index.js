const products = document.getElementById('products')
const btn = document.getElementById('btn')


let page = 1
let limit = 4
let pro = []


async function myFunc() {
    try {

        const response = await axios.get(`https://655c84d425b76d9884fd7251.mockapi.io/product?page=${page}&limit=${limit}`)
        const data = await response.data
        pro = data
        // console.log(pro);
        pro.map(item => {
            const myDiv = document.createElement('div')
            myDiv.className = 'box col-xl-3 col-md-6 col-12'
            myDiv.innerHTML = `
            
                    <img src="${item.image}" alt="">
                    <p>${item.title}</p>
                    <h6>${item.name}</h6>
                    <p>${item.price}</p>
                    <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                    <button id="wish" onclick="removeWish(${item.id})">Add wishlist</button>
              `
            products.appendChild(myDiv)
        })
        page++
    }
    catch (error) {
        console.log(error);
    }
}

btn.addEventListener('click', myFunc)

function addToBasket(id) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    let product=pro.find(item => item.id == id); 
    cart.push(product)
    localStorage.setItem('cart', JSON.stringify(cart))
}

function removeWish(id) {
    let heart = JSON.parse(localStorage.getItem('heart'))  || []
    heart.push(pro.find(item => item.id == id))
    localStorage.setItem('heart', JSON.stringify(heart))
}

myFunc()


/// search

const inp = document.getElementById('inp')
const srchBtn = document.getElementById('srchBtn')

function findByName() {
    products.innerHTML = ''
    axios.get('https://655c84d425b76d9884fd7251.mockapi.io/product')
        .then(res => {
            pro = res.data
            let filterData = pro.filter(item => item.title.toLowerCase().startsWith(inp.value.toLowerCase()))
            console.log(filterData);
            filterData.map((item) => {
                const myDiv = document.createElement('div')
                myDiv.className = 'box col-xl-3 col-md-6 col-12'
                myDiv.innerHTML = `
                
                        <img src="${item.image}" alt="">
                        <p>${item.title}</p>
                        <h6>${item.name}</h6>
                        <p>${item.price}</p>
                        <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                        <button id="wish" onclick="">Add wishlist</button>
                `
                products.appendChild(myDiv)
            })
        })
}

srchBtn.addEventListener('click', findByName)


/// sort

function sortDefault() {
    products.innerHTML = ''
    let sortList = selectValue.value

    if (sortList === "1") {
        let page = 1
        let limit = 4
        axios.get(`https://655c84d425b76d9884fd7251.mockapi.io/product?page=${page}&limit=${limit}`)
            .then(res => {
                pro = res.data
                pro.map(item => {
                    const myDiv = document.createElement('div')
                    myDiv.className = 'box col-xl-3 col-md-6 col-12'
                    myDiv.innerHTML = `
                
                        <img src="${item.image}" alt="">
                        <p>${item.title}</p>
                        <h6>${item.name}</h6>
                        <p>${item.price}</p>
                        <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                        <button id="wish" onclick="">Add wishlist</button>
                `
                    products.appendChild(myDiv)
                })
            })
    }
}

selectValue.addEventListener('change', sortDefault)



function sortDivOne() {
    products.innerHTML = ''
    let sortList = selectValue.value

    if (sortList === "2") {
        axios.get(`https://655c84d425b76d9884fd7251.mockapi.io/product`)
            .then(res => {
                pro = res.data
                let sortCerge = pro.sort((a, b) => (a.title.localeCompare(b.title)))
                sortCerge.map(item => {
                    const myDiv = document.createElement('div')
                    myDiv.className = 'box col-xl-3 col-md-6 col-12'
                    myDiv.innerHTML = `
                
                        <img src="${item.image}" alt="">
                        <p>${item.title}</p>
                        <h6>${item.name}</h6>
                        <p>${item.price}</p>
                        <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                        <button id="wish" onclick="">Add wishlist</button>
                `
                    products.appendChild(myDiv)
                })
            })
    }
}

selectValue.addEventListener('change', sortDivOne)




function sortDivTwo() {
    products.innerHTML = ''
    let sortList = selectValue.value

    if (sortList === "3") {
        axios.get(`https://655c84d425b76d9884fd7251.mockapi.io/product`)
            .then(res => {
                pro = res.data
                let sortCerge = pro.sort((a, b) => (b.title.localeCompare(a.title)))
                sortCerge.map(item => {
                    const myDiv = document.createElement('div')
                    myDiv.className = 'box col-xl-3 col-md-6 col-12'
                    myDiv.innerHTML = `
                
                        <img src="${item.image}" alt="">
                        <p>${item.title}</p>
                        <h6>${item.name}</h6>
                        <p>${item.price}</p>
                        <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                        <button id="wish" onclick="">Add wishlist</button>
                `
                    products.appendChild(myDiv)
                })
            })
    }
}

selectValue.addEventListener('change', sortDivTwo)




function sortDivThree() {
    products.innerHTML = ''
    let sortList = selectValue.value

    if (sortList === "4") {
        axios.get(`https://655c84d425b76d9884fd7251.mockapi.io/product`)
            .then(res => {
                pro = res.data
                let sortCerge = pro.sort((a, b) => (b.price - a.price))
                sortCerge.map(item => {
                    const myDiv = document.createElement('div')
                    myDiv.className = 'box col-xl-3 col-md-6 col-12'
                    myDiv.innerHTML = `
                
                        <img src="${item.image}" alt="">
                        <p>${item.title}</p>
                        <h6>${item.name}</h6>
                        <p>${item.price}</p>
                        <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                        <button id="wish" onclick="">Add wishlist</button>
                `
                    products.appendChild(myDiv)
                })
            })
    }
}

selectValue.addEventListener('change', sortDivThree)







function sortDivFive() {
    products.innerHTML = ''
    let sortList = selectValue.value

    if (sortList === "5") {
        axios.get(`https://655c84d425b76d9884fd7251.mockapi.io/product`)
            .then(res => {
                pro = res.data
                let sortCerge = pro.sort((a, b) => (a.price - b.price))
                sortCerge.map(item => {
                    const myDiv = document.createElement('div')
                    myDiv.className = 'box col-xl-3 col-md-6 col-12'
                    myDiv.innerHTML = `
                
                        <img src="${item.image}" alt="">
                        <p>${item.title}</p>
                        <h6>${item.name}</h6>
                        <p>${item.price}</p>
                        <button id="add" onclick="addToBasket(${item.id})">Add basket</button>
                        <button id="wish" onclick="">Add wishlist</button>
                `
                    products.appendChild(myDiv)
                })
            })
    }
}

selectValue.addEventListener('change', sortDivFive)


// form

const nameInp = document.getElementById('inpName')
const surnameInp = document.getElementById('inpSurname')
const emailInp = document.getElementById('inpEmail')
const passInp = document.getElementById('inpPass')
const ageInp = document.getElementById('inpAge')
const form = document.getElementById('form')

function myForm(e) {
    e.preventDefault()

    axios.post('https://655c84d425b76d9884fd7251.mockapi.io/form', {
        name: nameInp.value,
        surname: surnameInp.value,
        email: emailInp.value,
        password: passInp.value,
        age: ageInp.value
    })
        .then(res => {
            console.log(res.data);
            form.reset();
        })
}

form.addEventListener('submit', myForm)