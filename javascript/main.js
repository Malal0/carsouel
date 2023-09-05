window.addEventListener('load', handleCarouselLogic);

function handleCarouselLogic() {
    console.log('loaded')
    const carsouelComponent = document.querySelector('#mq-carsouel-component');
    const carsouelContent = carsouelComponent.querySelector('.content');
    const carsouelSliderContainer = carsouelContent.querySelector('.slider-container');
    const carsouelSlides = carsouelSliderContainer.querySelectorAll('.slide');
    const carsouelSliderBtnsContainer = carsouelContent.querySelector('.slider-btns');
    const carsouelBtns = carsouelSliderBtnsContainer.querySelectorAll("input[name='carousel-btns']");

    const sliderObjs = Array.from(carsouelSlides).map(slide => createSlideObject(slide));

    let slidesIndex = 1;

    sliderObjs.forEach(sliderObj => {
        sliderObj.btn.addEventListener('input', handleRadioChecked);
    })

    function createSlideObject(slide) {
        const id = slide.dataset.id;
        const sliderBtn = carsouelSliderBtnsContainer.querySelector(`input[data-id='${id}']`);
        const obj = {
            slide,
            btn: sliderBtn,
            id
        };

        return obj;
    }

    function handleRadioChecked(e) {
        const sliderObj = sliderObjs.filter(obj => obj.btn === e.target)[0];
        slidesIndex = sliderObjs.indexOf(sliderObj);
        carsouelSliderContainer.scrollLeft = sliderObj.slide.offsetLeft;
    }

    function handleTimer() {
        if (carsouelBtns[slidesIndex] === undefined) {
            slidesIndex = 0;
        }

        const sliderObj = sliderObjs[slidesIndex];

        carsouelSliderContainer.scrollLeft = sliderObj.slide.offsetLeft;

        carsouelBtns[slidesIndex].checked = true;

        slidesIndex++;

        // console.log(slidesIndex);
        // console.log('function ran');
    }

    setInterval(handleTimer, 3000);
}