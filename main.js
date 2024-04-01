const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu  = document.querySelector('.mobile-menu');  

const menuCarIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-card-detail');

const productDetail  = document.querySelector('.product-detail-info');
const closePrdDetail = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container');

let elementClassName = ['.desktop-menu', '.mobile-menu', '.product-card-detail', '.product-detail-info'];

menuEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu (){
    inactiveComponents('.desktop-menu');
};

menuHamIcon.addEventListener('click', toggleMobileMenu);
function toggleMobileMenu () {
    inactiveComponents('.mobile-menu');
};

menuCarIcon.addEventListener('click', todgleCarAside);
function todgleCarAside () {
    inactiveComponents('.product-card-detail');
};

function openProductDetail(){
    openComponent(productDetail);
}

closePrdDetail.addEventListener('click', closeProductDetail);
function closeProductDetail(){
    inactiveComponents();
}

function closeComponent(element){
    element.classList.add('inactive');   
}

function openComponent(element){
    element.classList.remove('inactive');
}

function inactiveComponents(className){  
    for (let i = 0; i < elementClassName.length; i++ ){           
        const element = document.querySelector(elementClassName[i]);
        if (elementClassName[i] != className) {
            if (!element.classList.contains('inactive')) {
                closeComponent(element);   
            }            
        } else{
            element.classList.toggle('inactive');
        }
    }    
};

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Monitor',
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'TV',
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Bike',
    price: 120,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'Monitor',
    price: 150,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});
productList.push({
    name: 'TV',
    price: 100,
    image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
});

function rederProducts(arr){
    for (product of arr) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src', product.image);

        productImg.addEventListener('click', openProductDetail);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        const productFigure = document.createElement('figure');
        const figureImg = document.createElement('img');
        figureImg.setAttribute('src', './icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(figureImg);
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }   

}

rederProducts(productList);

