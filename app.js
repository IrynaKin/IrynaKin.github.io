
let productsCountEl = document.getElementById("products-count");
console.log(productsCountEl);

let addToCart = document.querySelectorAll(".add");
console.log(addToCart);

for(let i =0; i<addToCart.length; i++){
    addToCart[i].addEventListener("click", function(){
        let prevProdCount = +productsCountEl.textContent;
        productsCountEl.textContent = prevProdCount + 1;
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



// change product quantity

let decrementBtns = document.querySelectorAll(".decrement-btn")[0]
let incrementBtns = document.querySelectorAll(".increment-btn")[0]
let productsQuantity = document.querySelectorAll(".product-quantity input")[0]

let currentCount = +productsQuantity.value;

function toggleButtonState(count){
    decrementBtns.disabled = count <=1;
    incrementBtns.disabled = count >=10;

}
toggleButtonState(currentCount)

incrementBtns.addEventListener("click", function() {
    let currentCount = +productsQuantity.value;
    let nextCount = currentCount + 1;
    productsQuantity.value = nextCount;
    toggleButtonState(nextCount)
})

decrementBtns.addEventListener("click", function() {
    let currentCount = +productsQuantity.value;
    let nextCount = currentCount - 1;
    productsQuantity.value = nextCount;
    toggleButtonState(nextCount);
})
