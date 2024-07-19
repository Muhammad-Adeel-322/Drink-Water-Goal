let glass = document.querySelectorAll(".glass")
let litr = document.querySelector(".liter")
let cup = document.querySelector(".boul")
let totalLiter = 0

glass.forEach((elem, indx) => {
    elem.addEventListener("click", function () {
        console.log("click");
        if (glass[indx].classList.contains("color")) {
            glass[indx].classList.remove("color");
            update(indx-1);
        } 
        else {
            glass[indx].classList.add("color");
            update(indx);
        }
    });
})

function update(indx) {
    // console.log(indx);
    glass.forEach((ele, index) => {
        if (index <= indx) {
            glass[index].classList.add("color");
        }
        else {
            glass[index].classList.remove("color");
        }
    })

    litr.style.height = `${indx * 12.5 + 12.5}%`;

    cup.style.height = `${100 - (indx * 12.5 + 12.5)}%`;
    
    litr.innerHTML = `${indx * 12.5 + 12.5}%`;
    
    cup.innerHTML = `${2 - (indx * 0.25 + 0.25)}L`;
}

