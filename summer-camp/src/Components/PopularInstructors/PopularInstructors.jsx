// /* eslint-disable no-unused-vars */
// import React, { useEffect, useState } from "react";
// import {
//   EffectCoverflow,
//   Pagination,
//   Autoplay,
//   Navigation,
// } from "swiper/modules";

// import "./style.css";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/effect-coverflow";
// import "swiper/css/pagination";

// const PopularInstructors = () => {
//   const [instructors, setInstructors] = useState([]);
//   useEffect(() => {
//     fetch("Instructors.json")
//       .then((res) => res.json())
//       .then((data) => setInstructors(data));
//   }, []);
//   return (
//     <div>
//       <h2 className="text-2xl text-center font-bold">Popular Instructors</h2>
//       <Swiper
//         effect={"coverflow"}
//         grabCursor={true}
//         centeredSlides={true}
//         slidesPerView={"auto"}
//         loop={true}
//         autoplay={true}
//         coverflowEffect={{
//           rotate: 50,
//           stretch: 0,
//           depth: 100,
//           modifier: 2.5,
//           slideShadows: true,
//         }}
//         pagination={true}
//         modules={[EffectCoverflow, Pagination]}
//         className="mySwiper"
//       >
//         <div className="grid md:grid-cols-2 w-[800px] mx-auto">
//           {instructors &&
//             instructors.map((item) => {
//               return (
//                 <SwiperSlide key={item.field}>
//                   <div className="card w-96 bg-base-300 shadow-xl">
//                     <figure>
//                       <img src={item.image} alt="Shoes" />
//                     </figure>
//                     <div className="card-body">
//                       <h2 className="card-title">
//                         {item.name}
//                         <div className="badge badge-secondary">NEW</div>
//                       </h2>
//                       <p>{item.field}</p>
//                     </div>
//                   </div>
//                   <div className="slider-controler">
//                     <div className="swiper-button-prev slider-arrow">
//                       <ion-icon name="arrow-back-outline"></ion-icon>
//                     </div>
//                     <div className="swiper-button-next slider-arrow">
//                       <ion-icon name="arrow-forward-outline"></ion-icon>
//                     </div>
//                     <div className="swiper-pagination"></div>
//                   </div>
//                 </SwiperSlide>
//               );
//             })}
//         </div>
//       </Swiper>
//     </div>
//   );
// };

// export default PopularInstructors;
