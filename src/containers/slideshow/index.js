// import assets from "../../assets";
// import React, {useEffect, useState} from "react";
//
// const img = [
//     <img key={img1} src={assets.img1} alt={'fdvf'}/>,
//     <img key={img2} src={assets.img2} />,
//     <img key={img3} src={assets.img3} />,
//     <img key={img4} src={assets.img4} />,
// ]
//
// const [activeIndex, setActiveIndex] = useState(0);
//
// // Хук Effect
// useEffect(() => {
//     // Запускаем интервал
//     const interval = setInterval(() => {
//         // Меняем состояние
//         setActiveIndex((current) => {
//             // Вычисляем индекс следующего слайда, который должен вывестись
//             let res = current === img.length - 1 ? 0 : current + 1
//             // Возвращаем индекс
//             return res
//         })
//     }, 3000)
//     // Выключаем интервал
//     return () => clearInterval()
// }, [])
//
// // Вычисляем индекс предыдущего слайда
// const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
// // Вычисляем индекс следующего слайда
// const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1
//
// // var slideIndex = 1;
// // showSlides(slideIndex);
// //
// // function plusSlides(n) {
// //     showSlides(slideIndex += n);
// // }
// //
// // function currentSlide(n) {
// //     showSlides(slideIndex = n);
// // }
// //
// // function showSlides(n) {
// //     var i;
// //     var slides = document.getElementsByClassName('slides');
// //
// //     if(n > slides.length) {
// //         slideIndex = 1;
// //     }
// //     if(n<1) {
// //         slideIndex = slides.length;
// //     }
// //     for(i=0;i<slides.length;i++) {
// //         slides[i].style.display='none'
// //     }
// //
// //     slides[slideIndex-1].style.display='block'
// // }
