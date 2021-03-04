
let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCart = document.querySelectorAll(".add");
console.log(addToCart);

for(let i =0; i<addToCart.length; i++){
    addToCart[i].addEventListener("click", function(){
        let prevProdCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProdCount + +productsQuantity[i].value;
        productsQuantity[i].value = 1;
    })
}
//like
let likeBtn = document.querySelectorAll(".like");
console.log(likeBtn);

for(let i = 0; i < likeBtn.length; i++){
    likeBtn[i].addEventListener("click", function(){
        this.classList.toggle("liked")
    })
}

//modal

let moreDetailsBtn = document.querySelectorAll(".more");
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
console.log(moreDetailsBtn);

moreDetailsBtn.forEach(btn => ( 
    btn.addEventListener("click", openModal)
    //  function(){
    //     // modal.classList.add("show");
    //     // modal.classList.remove("hide");
    // })
))

closeBtn.addEventListener("click", closeModal)
// function(){
//     // modal.classList.add("hide")
//     // modal.classList.remove("show")
// })
function openModal(){
    modal.classList.add("show");
    modal.classList.remove("hide");
}
function closeModal(){
    modal.classList.add("hide")
    modal.classList.remove("show")
}
modal.addEventListener("click", function(e){
    if(e.target=== modal){
        closeModal();
    }
})

//add slider slick

$(".slider-block").slick({
    dots: true,
});

// change product quantity

// let decrementBtns = document.querySelectorAll(".decrement-btn")
// let incrementBtns = document.querySelectorAll(".increment-btn")
// let productsQuantity = document.querySelectorAll(".product-quantity input")

// for(i = 0; i<productsQuantity.length; i++){
//     let currentCount = +productsQuantity[i].value;
//     toggleButtonState(currentCount,decrementBtns[i], incrementBtns[i]);
// }

// function toggleButtonState(count, decrementBtn, incrementBtn){
//     decrementBtn.disabled = count <=1;
//     incrementBtn.disabled = count >=10;

// }

// for(let i=0; i<incrementBtns.length; i++){
//     incrementBtns[i].addEventListener("click", function() {
//         let currentCount = +productsQuantity[i].value;
//         let nextCount = currentCount + 1;
//         productsQuantity[i].value = nextCount;
//         toggleButtonState(nextCount,decrementBtns[i], incrementBtns[i]);
// })
// }
// for(let i = 0; i < decrementBtns.length; i++){

// decrementBtns[i].addEventListener("click", function() {
//     let currentCount = +productsQuantity[i].value;
//     let nextCount = currentCount - 1;
//     productsQuantity[i].value = nextCount;
//     toggleButtonState(nextCount,decrementBtns[i], incrementBtns[i]);
// })
// }


let decrementBtns = document.querySelectorAll(".decrement-btn")
let incrementBtns = document.querySelectorAll(".increment-btn")
let productsQuantity = document.querySelectorAll(".product-quantity input")

function Counter(incrementBtn, decrementBtn, inputField){
    
    
    this.domRefs = {
        incrementBtn,
        decrementBtn,
        inputField
    }

    this.toggleButtonState= function(){
        const count = this.domRefs.inputField.value;
     
        this.domRefs.decrementBtn.disabled = count <=1;
        this.domRefs.incrementBtn.disabled = count >=10;
    }

    
    this.increment = function(){
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount + 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState()
    }


    this.decrement = function(){
        let currentCount = +this.domRefs.inputField.value;
        let nextCount = currentCount - 1;
        this.domRefs.inputField.value = nextCount;
        this.toggleButtonState()
    }
    this.domRefs.incrementBtn.addEventListener("click", this.increment.bind(this));
    this.domRefs.decrementBtn.addEventListener("click", this.decrement.bind(this));
}

const counters = []
productsQuantity.forEach((item,i)=>
counters[i] = new Counter(incrementBtns[i],decrementBtns[i],item))





