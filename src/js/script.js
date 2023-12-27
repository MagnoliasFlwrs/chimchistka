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
const specialBurgerBtn = document.querySelector('.special-burger')
burgerBtn?.addEventListener('click' , ()=> {
    burgerBtn.classList.toggle('active');
    burgerMenu.classList.toggle('open');
    if (burgerMenu.classList.contains('open')) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'auto';
    }
})
specialBurgerBtn?.addEventListener('click' , ()=> {
    burgerMenu.classList.toggle('open');
    if (burgerMenu.classList.contains('open')) {
        document.querySelector('body').style.overflow = 'hidden';
    } else {
        document.querySelector('body').style.overflow = 'auto';
    }
})

// header-submenu

const headerDropdown = document.querySelector('.header-dropdown');
const headerSubmenu = document.querySelector('.header-submenu');

if (headerDropdown) {
    headerDropdown.addEventListener('click' , (e)=> {
        e.preventDefault();
        e.stopPropagation()
        headerDropdown.classList.toggle('active');
        headerSubmenu.classList.toggle('active')
    })
    document.addEventListener('click' , (e)=> {
        if (!e.target.classList.contains('header-submenu') && !e.target.classList.contains('header-dropdown')) {
            headerDropdown.classList.remove('active');
            headerSubmenu.classList.remove('active')
        }
    })
}

const burgerDropdown =  document.querySelector('.burger-dropdown');

burgerDropdown?.addEventListener('click' , ()=> {
    burgerDropdown.classList.toggle('active')
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



// special-panel

const specialPanel = document.querySelector('.special-panel');
const showSpecialPanelBtns = document.querySelectorAll('.to-special-panel');
const bodyHtml =  document.querySelector('body');
const settingsBtn = document.querySelector('.settings-item');
const settingsPanel = document.querySelector('.settings-panel');
const closeSettingsBtn = document.querySelectorAll('.settings-panel .close-settings-btn');
const fontChangeItems = document.querySelectorAll('.fonts-select span');
const siteColors = document.querySelectorAll('.site-color span');
const colorSchemes = document.querySelectorAll('.colors-sheme .color-scheme input');
const spacingItems = document.querySelectorAll('.spacing-panel span');
const fontFamilyItems =  document.querySelectorAll('.font-panel span');
const versionBtn = document.querySelector('.version')



if (specialPanel) {
    showSpecialPanelBtns.forEach(el => {
        el.addEventListener('click' , ()=> {
            specialPanel.classList.add('active');
            setStandartSpecial();
        })
    })

    function setStandartSpecial() {
        bodyHtml.classList.add('standart-special');
        bodyHtml.querySelectorAll('*').forEach(el=> {
            el.style.color = '#000';
            let fontSize = window.getComputedStyle(el).fontSize;
            el.dataset.fontsize = fontSize;
        })
        bodyHtml.querySelectorAll('img')?.forEach(el=> {
            el.style.filter = 'grayscale(100%)';
        })
        bodyHtml.style.background = "#fff" ;

    }
    function closeSpecial() {
        versionBtn.addEventListener('click' , ()=> {
            specialPanel.classList.remove('active');
            bodyHtml.classList.remove('standart-special');
            bodyHtml.querySelectorAll('*').forEach(el=> {
                el.style = ''
            })
            bodyHtml.style.background = '#fff';
            if (bodyHtml.classList.contains('special-white')) {
                bodyHtml.classList.remove('special-white')
            }
            if (bodyHtml.classList.contains('special-blue')) {
                bodyHtml.classList.remove('special-blue')
            }
            if (bodyHtml.classList.contains('special-beuge')) {
                bodyHtml.classList.remove('special-beuge')
            }
        })
    }
    closeSpecial()

    function setFontSize(koefficient , el) {
        let newFontSize = el.dataset.fontsize.replace('px' , '') * koefficient;
        el.style.fontSize = `${newFontSize}px` ;
    }
    function clearFontChangeItemsActivity() {
        fontChangeItems?.forEach(el => {
            if (el.classList.contains('active')) {
                el.classList.remove('active')
            }
        })
    }
    function changeFontSize() {

        fontChangeItems?.forEach(el => {
            el.addEventListener('click' , ()=> {
                clearFontChangeItemsActivity();
                el.classList.add('active');
                let koefficient = el.dataset.font;
                bodyHtml.querySelectorAll('*').forEach(el=> {
                    setFontSize(koefficient , el)
                })
            })
        })
    }
    changeFontSize();
    function clearSiteColorsActivity() {
        siteColors?.forEach(el => {
            if (el.classList.contains('active')) {
                el.classList.remove('active')
            }
        })
    }
    function changeSiteColor() {

        siteColors?.forEach(el=> {
            el.addEventListener('click' , ()=> {
                clearSiteColorsActivity();
                el.classList.add('active');
                console.log(el.dataset);
                if (el.dataset.sitecolor == 1) {
                    bodyHtml.style.background = "#fff" ;
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.color = '#000';
                    })
                    if (bodyHtml.classList.contains('special-white')) {
                        bodyHtml.classList.remove('special-white')
                    }
                    if (bodyHtml.classList.contains('special-blue')) {
                        bodyHtml.classList.remove('special-blue')
                    }
                    if (bodyHtml.classList.contains('special-beuge')) {
                        bodyHtml.classList.remove('special-beuge')
                    }
                }
                if (el.dataset.sitecolor == 2) {
                    bodyHtml.style.background = "#000" ;
                    bodyHtml.classList.add('special-white')
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.color = '#fff';
                    })
                    if (bodyHtml.classList.contains('special-blue')) {
                        bodyHtml.classList.remove('special-blue')
                    }
                    if (bodyHtml.classList.contains('special-beuge')) {
                        bodyHtml.classList.remove('special-beuge')
                    }
                }
                if (el.dataset.sitecolor == 3) {
                    bodyHtml.style.background = "#c8e5ff" ;
                    bodyHtml.classList.add('special-blue')
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.color = '#195183';
                    })
                    if (bodyHtml.classList.contains('special-white')) {
                        bodyHtml.classList.remove('special-white')
                    }
                    if (bodyHtml.classList.contains('special-beuge')) {
                        bodyHtml.classList.remove('special-beuge')
                    }
                }
                if (el.dataset.sitecolor == 4) {
                    bodyHtml.style.background = "#FFF5E6" ;
                    bodyHtml.classList.add('special-beuge')
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.color = '#301601';
                    })
                    if (bodyHtml.classList.contains('special-white')) {
                        bodyHtml.classList.remove('special-white')
                    }
                    if (bodyHtml.classList.contains('special-blue')) {
                        bodyHtml.classList.remove('special-blue')
                    }
                }
            })
        })
        colorSchemes?.forEach(el=> {
            el.addEventListener('change' , ()=> {
                if (el.dataset.sitecolor == 1) {
                    bodyHtml.style.background = "#fff" ;
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.color = '#000';
                    })
                    if (bodyHtml.classList.contains('special-white')) {
                        bodyHtml.classList.remove('special-white')
                    }
                    if (bodyHtml.classList.contains('special-blue')) {
                        bodyHtml.classList.remove('special-blue')
                    }
                    if (bodyHtml.classList.contains('special-beuge')) {
                        bodyHtml.classList.remove('special-beuge')
                    }
                }
                if (el.dataset.sitecolor == 2) {
                    bodyHtml.style.background = "#000" ;
                    bodyHtml.classList.add('special-white')
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.color = '#fff';
                    })
                    if (bodyHtml.classList.contains('special-blue')) {
                        bodyHtml.classList.remove('special-blue')
                    }
                    if (bodyHtml.classList.contains('special-beuge')) {
                        bodyHtml.classList.remove('special-beuge')
                    }
                }
                if (el.dataset.sitecolor == 3) {
                    bodyHtml.style.background = "#c8e5ff" ;
                    bodyHtml.classList.add('special-blue')
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.color = '#195183';
                    })
                    if (bodyHtml.classList.contains('special-white')) {
                        bodyHtml.classList.remove('special-white')
                    }
                    if (bodyHtml.classList.contains('special-beuge')) {
                        bodyHtml.classList.remove('special-beuge')
                    }
                }
                if (el.dataset.sitecolor == 4) {
                    bodyHtml.style.background = "#FFF5E6" ;
                    bodyHtml.classList.add('special-beuge')
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.color = '#301601';
                    })
                    if (bodyHtml.classList.contains('special-white')) {
                        bodyHtml.classList.remove('special-white')
                    }
                    if (bodyHtml.classList.contains('special-blue')) {
                        bodyHtml.classList.remove('special-blue')
                    }
                }
            })
        })
    }
    changeSiteColor();

    function activateSettingsPanel() {
        settingsBtn.addEventListener('click' , ()=> {
            settingsPanel.classList.add('active');
        })
    }
    activateSettingsPanel();
    function closeSettingsPanel() {
        closeSettingsBtn?.forEach(el=> {
            el.addEventListener('click' , ()=> {
                settingsPanel.classList.remove('active');
            })
        })
    }
    closeSettingsPanel();
    function resetSpacingItemsActivity() {
        spacingItems?.forEach(el=> {
            if(el.classList.contains('active')) {
                el.classList.remove('active')
            }
        })
    }
    function changeLetterSpacing() {

        spacingItems?.forEach(el=> {
            el.addEventListener('click' , ()=> {
                resetSpacingItemsActivity() ;
                el.classList.add('active');
                if (el.dataset.spacing == 1) {
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.letterSpacing = 'normal';
                    })
                }
                if (el.dataset.spacing == 2) {
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.letterSpacing = '0.9px';
                    })
                }
                if (el.dataset.spacing == 3) {
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.letterSpacing = '2.7px';
                    })
                }
            })
        })
    }
    changeLetterSpacing();
    function resetFontFamilyItemsActivity() {
        fontFamilyItems?.forEach(el=> {
            if(el.classList.contains('active')) {
                el.classList.remove('active')
            }
        })
    }
    function changeFontFamily() {
        fontFamilyItems?.forEach(el=> {
            el.addEventListener('click' , ()=> {
                resetFontFamilyItemsActivity();
                if (el.dataset.family == 1) {
                    el.classList.add('active') ;
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.fontFamily = 'Open Sans'
                    })
                }
                if (el.dataset.family == 2) {
                    el.classList.add('active') ;
                    bodyHtml.querySelectorAll('*').forEach(el=> {
                        el.style.fontFamily = 'Georgia'
                    })
                }
            })
        })
    }
    changeFontFamily();
    function resetSettings() {
        bodyHtml.style.background = "#fff" ;
        bodyHtml.querySelectorAll('*').forEach(el=> {
            el.style.letterSpacing = 'normal';
            el.style.fontFamily = 'Open Sans';
            el.style.color = '#000';
            setFontSize(1.1 , el)
        })
        if (bodyHtml.classList.contains('special-white')) {
            bodyHtml.classList.remove('special-white')
        }
        if (bodyHtml.classList.contains('special-blue')) {
            bodyHtml.classList.remove('special-blue')
        }
        if (bodyHtml.classList.contains('special-beuge')) {
            bodyHtml.classList.remove('special-beuge')
        }
        clearFontChangeItemsActivity();
        clearSiteColorsActivity();
        resetSpacingItemsActivity();
        resetFontFamilyItemsActivity();
        document.querySelector('.fonts-select .font-min').classList.add('active');
        document.querySelector('.site-color .color-black').classList.add('active');
        document.querySelector('.font-panel .font1').classList.add('active');
        document.querySelector('.spacing-panel .standart-spacing').classList.add('active');
        document.querySelector('.colors-sheme .black-on-white input').checked = 'true'

    }
    const resetSettingsBtn = document.querySelector('.reset-settings');
    resetSettingsBtn?.addEventListener('click' , ()=> {
        resetSettings();
    })
}

