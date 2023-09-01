window.addEventListener('load', handleCarouselLogic);

function handleCarouselLogic(){
    const carsouelComponent = document.querySelector('#mq-carsouel-component');
    const carsouelContent = carsouelComponent.querySelector('.content');
    const carsouelSliderContainer= carsouelContent.querySelector('.slider-container');
    const carsouelSlides = carsouelSliderContainer.querySelectorAll('.slide');
    const carsouelSliderBtnsContainer= carsouelContent.querySelector('.slider-btns');
    const carsouelBtns = carsouelSliderBtnsContainer.querySelectorAll("input[name='carousel-btns']");

    const sliderObjs = Array.from(carsouelSlides).map(slide => createSlideObject(slide));

    let slidesIndex = 0;

    for (var i = 0; i < carsouelBtns.length; i++) {
        if (carsouelBtns[i].checked) {
            console.log("Selected option: " + carsouelBtns[i].value);
            break;
        }
    }

    sliderObjs.forEach(sliderObj => {
        console.log(sliderObj);

        sliderObj.btn.addEventListener('input', handleRadioChecked);
    })

    function createSlideObject(slide){
        const id = slide.dataset.id;
        const sliderBtn = carsouelSliderBtnsContainer.querySelector(`input[data-id='${id}']`);
        const obj = {
            slide,
            btn: sliderBtn,
            id
        };

        return obj;
    }

    function handleRadioChecked(e){
        // console.log(e.target);
        // console.log(e.target.dataset.id);
        const sliderObj = sliderObjs.filter(obj => obj.btn === e.target)[0];
        console.log(sliderObj.slide.offsetLeft);
        console.log(carsouelSliderContainer.scrollLeft);

        carsouelSliderContainer.scrollLeft = sliderObj.slide.offsetLeft;

        //get slider container

        //get sliderObj slide scroll location

        //make slider container scroll to specific slide scroll location
    }

}