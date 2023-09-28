window.addEventListener('load', handleCarouselLogic);

function handleCarouselLogic() {
    console.log('loaded')
    const carsouelComponent = document.querySelector('#mq-carsouel-component');
    const carsouelContent = carsouelComponent.querySelector('.content');
    const carsouelSliderContainer = carsouelContent.querySelector('.slider-container');
    const carsouelSlides = carsouelSliderContainer.querySelectorAll('.slide');
    const carsouelSliderBtnsContainer = carsouelContent.querySelector('.slider-btns');
    const carsouelBtns = carsouelSliderBtnsContainer.querySelectorAll(".carousel-btn");

    const sliderObjs = Array.from(carsouelSlides).map(slide => createSlideObject(slide));

    let slidesIndex = 1;

    // Declare variables
    let intervalId;
    let isIntervalRunning = false;

    // Function to start the interval
    function startInterval() {
        if (!isIntervalRunning) {
            isIntervalRunning = true;
            intervalId = setInterval(handleTimer, 5000); // Interval in milliseconds (e.g., 1000ms = 1 second)
            console.log("Interval has begun.");
        }
    }

    // Function to stop the interval
    function stopInterval() {
        if (isIntervalRunning) {
            clearInterval(intervalId);
            isIntervalRunning = false;
            console.log("Interval is stopped.");
        }
    }

    sliderObjs.forEach(sliderObj => {
        sliderObj.btn.addEventListener('click', handleRadioChecked);
    })

    function createSlideObject(slide) {
        const id = slide.dataset.id;
        // const sliderBtn = carsouelSliderBtnsContainer.querySelector(`input[data-id='${id}']`);
        const sliderBtn = carsouelSliderBtnsContainer.querySelector(`.carousel-btn[data-id='${id}']`);
        const obj = {
            slide,
            btn: sliderBtn,
            id
        };

        return obj;
    }

    function handleRadioChecked(e) {
        stopInterval();
        const sliderObj = sliderObjs.filter(obj => obj.btn === e.target)[0];
        slidesIndex = sliderObjs.indexOf(sliderObj);
        carsouelSliderContainer.scrollLeft = sliderObj.slide.offsetLeft;
        handleBtnLogic();
        startInterval();
    }

    function handleTimer() {
        if (carsouelBtns[slidesIndex] === undefined) {
            slidesIndex = 0;
        }
        const sliderObj = sliderObjs[slidesIndex];
        carsouelSliderContainer.scrollLeft = sliderObj.slide.offsetLeft;
        handleBtnLogic();
        slidesIndex++;
    }

    function handleBtnLogic(){
        if(!carsouelBtns[slidesIndex].classList.contains('current')){
            carsouelBtns[slidesIndex].classList.add('current');
        }

        carsouelBtns.forEach(btn => {
            if(btn != carsouelBtns[slidesIndex] && btn.classList.contains('current')){
                btn.classList.remove('current');
            }
        });
    }

    carsouelSliderContainer.addEventListener('scroll', ()=>{
        // if(){

        // }
        // console.log('index:', slidesIndex);
        // handleBtnLogic();
    })

    startInterval();
}
