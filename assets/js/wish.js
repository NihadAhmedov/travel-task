const wish = document.getElementById('wish')


function getWishProduct(){
    wish.innerHTML = ''
    let heart = JSON.parse(localStorage.getItem('heart'))
    console.log(heart);
    console.log(heart);
    heart.map((item, index) => {
        const myDiv = document.createElement('div')
        myDiv.className = 'box col-xl-3 col-md-6 col-12'
        myDiv.innerHTML = `
            
                    <img src="${item.image}" alt="">
                    <p>${item.title}</p>
                    <h6>${item.name}</h6>
                    <p>${item.price}</p>
                    <button id="add" onclick="removeWish(${index})">Remove wishlist</button>
                    
            `
        wish.appendChild(myDiv)
    })
}

function removeWish(index){
    let heart = JSON.parse(localStorage.getItem('heart'))
    heart.splice(index, 1)
    localStorage.setItem('heart', JSON.stringify(heart))
    getWishProduct()
}

getWishProduct()