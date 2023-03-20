//FIXED NAVBAR SCROLLER

const nav = document.querySelector(`#nav`)

const onScroll = (event) => {
    const scrollPosition =
        event.target.scrollingElement.scrollTop;
    if (scrollPosition > 20) {  
        if (
            !nav.classList.contains(`scrolled-down`)
        ) {
            nav.classList.add(`scrolled-down`)
        }
    } else {
        if (
            nav.classList.contains(`scrolled-down`)
        ) {
            nav.classList.remove(`scrolled-down`)
        }
    }
}

document.addEventListener(`scroll`, onScroll)


// ///на клик по кнопке apply now покрасить её в зеленый

// // const button = document.querySelector('button');

// // button.addEventListener('click', (event) => {
// //     const { target } = event;
// //     const buttonClicked = target;
// //     if (buttonClicked) {
// //         if (button.classList.contains("btn-apply")) {
// //             button.className = "btn-apply_active"
// //         } else if (button.classList.contains("btn-apply_active")) {
// //             button.className = ("btn-apply")
// //         }
// //     }
// // })

// ///на клик по ссылке в навигации переместить подчеркивание

// // const allNavButtons = document.querySelectorAll(`.link`)

// // allNavButtons.forEach((button) => {
// //     button.addEventListener(`click`, (event) => {
// //         event.preventDefault();
// //         allNavButtons.forEach((button) => {
// //             button.classList.remove(`link_active`);
// //         })
// //         const { target } = event;
// //         target.classList.add(`link_active`);
// //     })
// // })



// /////////////выезжающие дивы


// // const headTitle = gsap.utils.toArray(`.title-text`);
// const headGif = gsap.utils.toArray('.title-gif1');
// const productsTitle = gsap.utils.toArray('.products-title');
// const productsSubTitle = gsap.utils.toArray('.products-subtitle');
// const cards = gsap.utils.toArray(`.card`);
// const aboutText = gsap.utils.toArray(`.about-text`);
// const aboutLogo = gsap.utils.toArray(`.myface1`);
// // const stepsBox = gsap.utils.toArray(`.steps-box`);
// // const stepsItems = gsap.utils.toArray(`.step`);
// // const stepsButton = gsap.utils.toArray(`.step-button`);
// const featuresTitle = gsap.utils.toArray(`.features-title`)
// const featuresContent = gsap.utils.toArray(`.feature-container`);
// const applySection = gsap.utils.toArray(`.process-blank`)
// const applySectionSteps = gsap.utils.toArray(`.process-steps-wrapper`)
// const subscribeTitle = gsap.utils.toArray(`.subscribe h2`)
// const subscribeParagraph = gsap.utils.toArray(`.subscribe p`)
// const subscribeForm = gsap.utils.toArray(`.sub-form`)
// const map = gsap.utils.toArray(`.map`)

// // headTitle.forEach(title => {
// //     const anim = gsap.fromTo(
// //         title, {
// //             autoAlpha: 0,
// //             y: -800,
// //             x: 0,
// //             rotate: 0
// //         }, {
// //             duration: 1.5,
// //             autoAlpha: 1,
// //             y: 0,
// //             x: 0,
// //             rotate: 0
// //         }
// //     );
// //     ScrollTrigger.create({
// //         trigger: title,
// //         animation: anim,
// //     });
// // });

// headGif.forEach(gif => {
//     const anim = gsap.fromTo(
//         gif, {
//             autoAlpha: 0,
//             y: 0,
//             x: 900,
//             rotate: 0
//         }, {
//             duration: 1,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: gif,
//         animation: anim,
//     });
// });

// aboutLogo.forEach(logo => {
//     const anim = gsap.fromTo(
//         logo, {
//             autoAlpha: 0,
//             y: 300,
//             x: 0,
//             rotate: 0
//         }, {
//             duration: 1,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: logo,
//         animation: anim,
//     });
// });


// aboutText.forEach(text => {
//     const anim = gsap.fromTo(
//         text, {
//             autoAlpha: 0,
//             y: 0,
//             x: -500,
//             rotate: 0
//         }, {
//             duration: 1.5,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: text,
//         animation: anim,
//     });
// });


// productsTitle.forEach(title => {
//     const anim = gsap.fromTo(
//         title, {
//             autoAlpha: 0,
//             y: 200,
//             x: 0,
//             rotate: 0
//         }, {
//             duration: 1.5,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: title,
//         animation: anim,
//     });
// });

// productsSubTitle.forEach(title => {
//     const anim = gsap.fromTo(
//         title, {
//             autoAlpha: 0,
//             y: 200,
//             x: 0,
//             rotate: 0
//         }, {
//             duration: 1.5,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: title,
//         animation: anim,
//     });
// });



// cards.forEach(card => {
//     const anim = gsap.fromTo(
//         card, {
//             autoAlpha: 0,
//             y: 200,
//             x: 0,
//             rotate: 0
//         }, {
//             duration: 1,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: card,
//         animation: anim,
//     });
// });

// // stepsBox.forEach(step => {
// //     const anim = gsap.fromTo(
// //         step, {
// //             autoAlpha: 0,
// //             y: 0,
// //             x: -600,
// //             rotate: 0
// //         }, {
// //             duration: 1,
// //             autoAlpha: 1,
// //             y: 0,
// //             x: 0,
// //             rotate: 0
// //         }
// //     );
// //     ScrollTrigger.create({
// //         trigger: step,
// //         animation: anim,
// //     });
// // });

// // stepsItems.forEach(item => {
// //     const anim = gsap.fromTo(
// //         item, {
// //             autoAlpha: 0,
// //             y: 0,
// //             x: -50,
// //             rotate: 0
// //         }, {
// //             duration: 2,
// //             autoAlpha: 1,
// //             y: 0,
// //             x: 0,
// //             rotate: 0
// //         }
// //     );
// //     ScrollTrigger.create({
// //         trigger: item,
// //         animation: anim,
// //     });
// // });



// // stepsButton.forEach(button => {
// //     const anim = gsap.fromTo(
// //         button, {
// //             autoAlpha: 0,
// //             y: 100,
// //             x: 0,
// //             rotate: 0
// //         }, {
// //             duration: 0.2,
// //             autoAlpha: 1,
// //             y: 0,
// //             x: 0,
// //             rotate: 0
// //         }
// //     );
// //     ScrollTrigger.create({
// //         trigger: button,
// //         animation: anim,
// //     });
// // });


// applySection.forEach(section => {
//     const anim = gsap.fromTo(
//         section, {
//             autoAlpha: 0,
//             y: 0,
//             x: -700,
//             rotate: 0
//         }, {
//             duration: 1.5,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: section,
//         animation: anim,
//     });
// });


// applySectionSteps.forEach(step => {
//     const anim = gsap.fromTo(
//         step, {
//             autoAlpha: 0,
//             y: 0,
//             x: 700,
//             rotate: 0
//         }, {
//             duration: 1.5,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: step,
//         animation: anim,
//     });
// });

// subscribeTitle.forEach(title => {
//     const anim = gsap.fromTo(
//         title, {
//             autoAlpha: 0,
//             y:100,
//             x: 0,
//             rotate: 0
//         }, {
//             duration: 1,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: title,
//         animation: anim,
//     });
// });


// subscribeParagraph.forEach(title => {
//     const anim = gsap.fromTo(
//         title, {
//             autoAlpha: 0,
//             y: 200,
//             x: 0,
//             rotate: 0
//         }, {
//             duration: 1,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: title,
//         animation: anim,
//     });
// });

// subscribeForm.forEach(title => {
//     const anim = gsap.fromTo(
//         title, {
//             autoAlpha: 0,
//             y: 300,
//             x: 0,
//             rotate: 0
//         }, {
//             duration: 1.5,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: title,
//         animation: anim,
//     });
// });

// map.forEach(title => {
//     const anim = gsap.fromTo(
//         title, {
//             autoAlpha: 0,
//             y: 0,
//             x: 1000,
//             rotate: 0
//         }, {
//             duration: 1.5,
//             autoAlpha: 1,
//             y: 0,
//             x: 0,
//             rotate: 0
//         }
//     );
//     ScrollTrigger.create({
//         trigger: title,
//         animation: anim,
//     });
// });

/////FORM CHECKER

//NAME
let form = document.querySelector(`.process-form`)
let formName = document.querySelector(`input[name=Name]`);
let formPhone = document.querySelector(`input[name=Phone]`);
let formEmail = document.querySelector(`input[name=Email]`);

//CHECKBOX CHECKER
let checkbox = form.querySelector("input[name=checkbox]");
let applyButton = form.querySelector(`input[name=submit]`)

checkbox.addEventListener('change', function () {
    if (this.checked) {
        console.log("Checkbox is checked..");
        applyButton.className = `btn-apply-start`;
    } else {
        applyButton.className = `btn-apply-start_uncolored`;
    }
});

AOS.init();


const navbarLinks = document.querySelectorAll('.header-nav .link');

// add a scroll event listener to the window
window.addEventListener('scroll', () => {
  // determine the current scroll position
  const scrollPosition = window.pageYOffset;

  // loop through all the navbar links
  navbarLinks.forEach((link, index) => {
    const section = document.querySelector(link.hash);

    // if the section is in view, add the active class to the corresponding link
    if (
      section.offsetTop - 100 <= scrollPosition &&
      section.offsetTop - 100 + section.offsetHeight > scrollPosition
    ) {
      link.classList.add('active');
    } else {
      // otherwise, remove the active class from the link
      link.classList.remove('active');
    }
  });
});