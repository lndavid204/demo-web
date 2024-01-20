const btn = document.querySelectorAll("fa-cart-shopping")
btn.forEach(function(button, index){
    button.addEventListener("click", function(event){{
        var btnitem = event.target
        var container = btnitem.parentElement
        var containerImg = container.querySelector("img").src
        var containerName = container.querySelector("name").innerText
        var containerPrice = container.querySelector("Price")
        addcart(containerImg,containerName,containerPrice)
    }})
})
function addcart(containerImg,containerName,containerPrice){
    var addtr = document.createElement("tr")
    var trcontent = containerPrice
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    cartTable.append(addtr)
}
/*........cart..........*/
const cartbtn = document.querySelector(".fa-xmark")
const cartshow = document.querySelector(".fa-cart-plus")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right ="0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right ="-100%"
})