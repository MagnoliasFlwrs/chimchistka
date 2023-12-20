// custom select

const customSelects =  document.querySelectorAll('.select');

if (customSelects) {
    customSelects.forEach(el => {
        el.addEventListener('click' , (e)=> {
            let currentSelectWrap = e.target.closest('.select-wrap');
            let currentSelectBody = currentSelectWrap.querySelector('.select-list');
            let currentSelectOptions = currentSelectBody.querySelectorAll('li');
            let currentSelectTitle = el.querySelector('p');
            let currentImage = el.querySelector('img')
            currentSelectBody.classList.add('active');
            currentSelectOptions.forEach(option => {
                option.addEventListener('click' , ()=> {
                    if (currentSelectTitle) {
                        currentSelectTitle.innerHTML = option.textContent;
                        currentSelectTitle.dataset.current = option.dataset.value;
                        currentSelectBody.classList.remove('active');
                    }
                    if (currentImage) {
                        currentImage.src = option.querySelector('img').src;
                        currentImage.dataset.current = option.dataset.value;
                        currentSelectBody.classList.remove('active');
                    }

                })
            })
        })
    })
    document.addEventListener('click', (e)=> {
        let lists = document.querySelectorAll('.select-list.active')
        if (!e.target.closest('.select-wrap') && lists){
            lists.forEach(el=> {
                el.classList.remove('active');
            })

        }
    })

}

// burger

const burgerBtn = document.querySelector('.burger-btn');
const burgerMenu = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click' , ()=> {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('open');
    if (burgerMenu.classList.contains('open')) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'auto';
    }
})


let resSwiper = document.querySelector('.res-swiper');

if (resSwiper) {
    const swiper = new Swiper(resSwiper, {
        slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    speed: 5000,
    freeMode: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1.5,
            spaceBetween: 30
        },
        768: {
            slidesPerView: 2.5,
            spaceBetween: 30
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 30
        },
        1300: {
            slidesPerView: 4.5,
            spaceBetween: 30
          }
      }
      });
}


// const boxes = document.querySelectorAll(".box");

// boxes.forEach((box) => {
//   box.addEventListener("click", boxHandler);
// });

// function boxHandler(e) {
//   e.preventDefault();
//   let currentBox = e.target.closest(".box");
//   let currentContent = e.target.nextElementSibling;
//   currentBox.classList.toggle("active");
//   if (currentBox.classList.contains("active")) {
//     currentContent.style.maxHeight = currentContent.scrollHeight + "px";
//   } else {
//     currentContent.style.maxHeight = 0;
//   }
// }

document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const accordionContent = button.nextElementSibling;

        button.classList.toggle('active');

        if (button.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }

        // Close other open accordion items
        document.querySelectorAll('.accordion-header').forEach(otherButton => {
            if (otherButton !== button) {
                otherButton.classList.remove('active');
                otherButton.nextElementSibling.style.maxHeight = 0;
            }
        });
    });
});

