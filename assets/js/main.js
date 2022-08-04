const slider = () => {
    var sliderImgs = document.getElementsByClassName("sliderImage");
    let Images = 0;
    let NumberImages = sliderImgs.length;

    function RemoveActiveToImages() {
        for (let i = 0; i < NumberImages; i++) {
            sliderImgs[i].classList.remove("active");
        }
    }
    RemoveActiveToImages();


    var suivant = document.querySelector(".suivant");
    var precendt = document.querySelector(".precendent");

    suivant.addEventListener("click", () => {
        Images++;
        if (Images >= NumberImages) {
            Images = 0
        }
        RemoveActiveToImages();
        sliderImgs[Images].classList.add("active");
    })

    precendt.addEventListener("click", () => {
        Images--;
        if (Images < 0) {
            Images = NumberImages - 1
        }
        RemoveActiveToImages();
        sliderImgs[Images].classList.add("active");
    })
    setInterval(function () {
        Images++;
        if (Images >= NumberImages) {
            Images = 0
        }
        RemoveActiveToImages();
        sliderImgs[Images].classList.add("active");

    }, 18000);

}
slider();

