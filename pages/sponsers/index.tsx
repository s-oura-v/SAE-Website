// 'use client'
// import React, {useState} from 'react'
// import Head from 'next/head';
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// // import style from "@/styles/Home.module.css";
// import styles from "@/styles/sponsor.module.css";
// import Image from "next/image";
// import Link from "next/link";
// // import BlogContainer from "@/components/BlogContainer";
// // import DirectionCards from "@/components/DirectionCards/DirectionCards";
// import { color, motion } from 'framer-motion';
// // import Image from 'next/image';



// function index() {
//   const [isMouseOver1,setMouseOver1]=useState(true);
//   // const [isMouseOver2,setMouseOver2]=useState(true); 
//   // const [isMouseOver3,setMouseOver3]=useState(true);
//   // const [isMouseOver1,setMouseOver]=useState(true);
//   // const [isMouseOver1,setMouseOver]=useState(true);
//   // const [isMouseOver1,setMouseOver]=useState(true); 
//   function handleMouseOver1()
//   {
//     setMouseOver1(false);
//   }
//   function handleMouseOut1()
//   {
//     setMouseOver1(true);
//   }

//   // function handleMouseOver2()
//   // {
//   //   setMouseOver2(false);
//   // }
//   // function handleMouseOut2()
//   // {
//   //   setMouseOver2(true);
//   // }

//   // function handleMouseOver3()
//   // {
//   //   setMouseOver3(false);
//   // }
//   // function handleMouseOut3()
//   // {
//   //   setMouseOver3(true);
//   // }

//   // function handleMouseOver4()
//   // {
//   //   setMouseOver4(false);
//   // }
//   // function handleMouseOut4()
//   // {
//   //   setMouseOver4(true);
//   // }

//   // function handleMouseOver5()
//   // {
//   //   setMouseOver5(false);
//   // }
//   // function handleMouseOut5()
//   // {
//   //   setMouseOver5(true);
//   // }

//   // function handleMouseOver6()
//   // {
//   //   setMouseOver6(false);
//   // }
//   // function handleMouseOut6()
//   // {
//   //   setMouseOver6(true);
//   // }

//   // function handleMouseOver7()
//   // {
//   //   setMouseOver7(false);
//   // }
//   // function handleMouseOut7()
//   // {
//   //   setMouseOver7(true);
//   // }

//   // function handleMouseOver8()
//   // {
//   //   setMouseOver8(false);
//   // }
//   // function handleMouseOut8()
//   // {
//   //   setMouseOver8(true);
//   // }

//   // function handleMouseOver9()
//   // {
//   //   setMouseOver9(false);
//   // }
//   // function handleMouseOut9()
//   // {
//   //   setMouseOver9(true);
//   // }




//   return (
//     <div>
//       <Navbar BgColor="black"/>
//       <div
//       className={styles.father}>


//       <div className={styles.sponsorContainer}>
//       {/* <div className={styles.firstLine}>SPECIAL THANKS TO </div> */}
//       <div className={styles.secondLine}>OUR <span className={styles.highlight}>SPONSORS</span></div>
//       </div>

//       <div className="sponsor-page bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//             <div className={styles.hello}>
//               <div className={styles.row}>
//             <div
//             style={{backgroundColor: isMouseOver1 ?" rgb(252, 255, 255) ":" #848482"}}
//             onMouseOver={handleMouseOver1}
//             onMouseOut={handleMouseOut1}
//             className={styles.card}>
//               <Image
//               className={styles.img}
//                 src="/sponsor-images/jaguar.png"
//                 alt="Jaguar Image"
//                 width={290}
//                 height={117.15}
//               />
//             </div>
//             <div className={styles.card}
//             style={{backgroundColor: isMouseOver1 ?" rgb(252, 255, 255) ":"#b3bcb3"}}
//             onMouseOver={handleMouseOver1}
//             onMouseOut={handleMouseOut1}>
//               <Image
//               className={styles.img}
//                 src="/sponsor-images/bmw.png"
//                 alt="Land Rover Image"
//                 width={290}
//                 height={117.15}
//               />
//             </div>
//             <div className={styles.card}
//             style={{backgroundColor: isMouseOver1 ?" rgb(252, 255, 255) ":"#848482"}}
//             onMouseOver={handleMouseOver1}
//             onMouseOut={handleMouseOut1}>
//               <Image
//               className={styles.img}
//                 src="/sponsor-images/mercedes1.png"
//                 alt="Mercedes Image"
//                 width={290}
//                 height={117.15}
//               />
//             </div>
//             </div>



//             <div className={styles.row}>
//             <div className={styles.card}
//             style={{backgroundColor: isMouseOver1 ?" rgb(252, 255, 255) ":"#b3bcb3"}}
//             onMouseOver={handleMouseOver1}
//             onMouseOut={handleMouseOut1}>
//               <Image
//               className={styles.img}
//                 src="/sponsor-images/unilever1.png"
//                 alt="Jaguar Image"
//                 width={290}
//                 height={117.15}
//               />
//             </div>
//             <div className={styles.card}
//             style={{backgroundColor: isMouseOver1 ?" rgb(252, 255, 255) ":"#848482"}}
//             onMouseOver={handleMouseOver1}
//             onMouseOut={handleMouseOut1}>
//               <Image
//               className={styles.img}
//                 src="/sponsor-images/itc2.png"
//                 alt="Land Rover Image"
//                 width={290}
//                 height={117.15}
//               />
//             </div>
//             <div className={styles.card}
//             style={{backgroundColor: isMouseOver1 ?" rgb(252, 255, 255) ":"#b3bcb3"}}
//             onMouseOver={handleMouseOver1}
//             onMouseOut={handleMouseOut1}>
//               <Image
//               className={styles.img}
//                 src="/sponsor-images/bhel.webp"
//                 alt="Mercedes Image"
//                 width={290}
//                 height={117.15}
//               />
//             </div>
//             </div>



//             <div className={styles.row}>
//             <div className={styles.card}
//             style={{backgroundColor: isMouseOver1 ?" rgb(252, 255, 255) ":"#848482"}}
//             onMouseOver={handleMouseOver1}
//             onMouseOut={handleMouseOut1}>
//               <Image
//               className={styles.img}
//                 src="/sponsor-images/lg3.png"
//                 alt="Jaguar Image"
//                 width={290}
//                 height={117.15}
//               />
//             </div>
//             <div className={styles.card}
//             style={{backgroundColor: isMouseOver1 ?" rgb(252, 255, 255) ":"#b3bcb3"}}
//             onMouseOver={handleMouseOver1}
//             onMouseOut={handleMouseOut1}>
//               <Image
//               className={styles.img}
//                 src="/sponsor-images/Land-Rover.png"
//                 alt="Land Rover Image"
//                 width={290}
//                 height={117.15}
//               />
//             </div>
//             <div className={styles.card}
//             style={{backgroundColor: isMouseOver1 ?" rgb(252, 255, 255) ":"#848482"}}
//             onMouseOver={handleMouseOver1}
//             onMouseOut={handleMouseOut1}>
//               <Image
//               className={styles.img}
//                 src="/sponsor-images/hy.png"
//                 alt="Mercedes Image"
//                 width={290}
//                 height={117.15}
//               />
//             </div>
//             </div>
//             </div>
//         </div>




//         <div className={styles.container}>
//         <div className={styles.headline}>Welcome to the official sponsors page.</div>
//         <div className={styles.subtext}>Explore the unmatched synergy between iconic automotive brands.</div>
//         </div>



//     </div>
//       <Footer/>
//     </div>
//   )
// }

// export default index















// import React, { useState } from 'react';
// import Head from 'next/head';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import styles from '@/styles/sponsor.module.css';
// import Image from 'next/image';
// import Link from 'next/link';

// function Index() {
//   const [isMouseOver, setMouseOver] = useState(true);

//   const handleMouseOver = () => {
//     setMouseOver(false);
//   };

//   const handleMouseOut = () => {
//     setMouseOver(true);
//   };

//   const renderSponsorCard = (src, backgroundColor) => (
//     <div
//       className={`${styles.card}`}
//       style={{ backgroundColor: isMouseOver ? 'rgb(252, 255, 255)' : backgroundColor }}
//       onMouseOver={handleMouseOver}
//       onMouseOut={handleMouseOut}
//     >
//       <Image className={styles.img} src={src} alt="Sponsor Image" width={290} height={117.15} />
//     </div>
//   );

//   return (
//     <div>
//       <Navbar BgColor="black" />
//       <div className={styles.father}>
//         <div className={styles.sponsorContainer}>
//           <div className={styles.secondLine}>
//             OUR <span className={styles.highlight}>SPONSORS</span>
//           </div>
//         </div>

//         <div className="sponsor-page bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//           <div className={styles.hello}>
//             <div className={styles.row}>
//               {renderSponsorCard('/sponsor-images/jaguar.png', '#848482')}
//               {renderSponsorCard('/sponsor-images/bmw.png', '#b3bcb3')}
//               {renderSponsorCard('/sponsor-images/mercedes1.png', '#848482')}
//             </div>

//             <div className={styles.row}>
//               {renderSponsorCard('/sponsor-images/unilever1.png', '#b3bcb3')}
//               {renderSponsorCard('/sponsor-images/itc2.png', '#848482')}
//               {renderSponsorCard('/sponsor-images/bhel.webp', '#b3bcb3')}
//             </div>

//             <div className={styles.row}>
//               {renderSponsorCard('/sponsor-images/lg3.png', '#848482')}
//               {renderSponsorCard('/sponsor-images/Land-Rover.png', '#b3bcb3')}
//               {renderSponsorCard('/sponsor-images/hy.png', '#848482')}
//             </div>
//           </div>
//         </div>

//         <div className={styles.container}>
//           <div className={styles.headline}>Welcome to the official sponsors page.</div>
//           <div className={styles.subtext}>Explore the unmatched synergy between iconic automotive brands.</div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Index;







// Final Sponsor Page

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import styles from '@/styles/sponsor.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Index() {
  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);
  const [typedText, setTypedText] = useState('');


  const handleCardMouseOver = (index) => {
    setHoveredCardIndex(index);
  };

  const handleCardMouseOut = () => {
    setHoveredCardIndex(null);
  };

  const renderSponsorCard = (src, backgroundColor, index) => (
    <div
      className={`${styles.card}`}
      style={{ backgroundColor: hoveredCardIndex === index ? 'white' : backgroundColor }}
      onMouseOver={() => handleCardMouseOver(index)}
      onMouseOut={handleCardMouseOut}
    >
      <Image className={styles.img} src={src} alt="Sponsor Image" width={290} height={117.15} />
    </div>
  );

  return (
    <div>
      <Navbar BgColor="black" />
      <div className={styles.father}>
        <div className={styles.sponsorContainer}>
          <div className={styles.secondLine}>
            OUR <span className={styles.highlight}>SPONSORS</span>
          </div>
        </div>

        <div className="sponsor-page bg-gray-100 min-h-screen flex flex-col items-center justify-center">
          <div className={styles.hello}>
            <div className={styles.row}>
              {renderSponsorCard('/sponsor-images/jaguar.png', '#deeae2', 0)}
              {renderSponsorCard('/sponsor-images/bmw.png', '#deeae2', 1)}
              {renderSponsorCard('/sponsor-images/mercedes1.png', '#deeae2', 2)}
            </div>

            <div className={styles.row}>
              {renderSponsorCard('/sponsor-images/unilever1.png', '#deeae2', 3)}
              {renderSponsorCard('/sponsor-images/itc2.png', '#deeae2', 4)}
              {renderSponsorCard('/sponsor-images/bhel.webp', '#deeae2', 5)}
            </div>

            <div className={styles.row}>
              {renderSponsorCard('/sponsor-images/lg3.png', '#deeae2', 6)}
              {renderSponsorCard('/sponsor-images/Land-Rover.png', '#deeae2', 7)}
              {renderSponsorCard('/sponsor-images/hy.png', '#deeae2', 8)}
            </div>
          </div>
        </div>

        <div className={styles.container}>
          
          <div className={styles.headline}>Welcome to the official sponsors page.</div>
          <div className={styles.subtext}>Explore the unmatched synergy between iconic automotive brands.</div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Index;


// import React, { useState } from 'react';
// import Head from 'next/head';
// import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
// import styles from '@/styles/sponsor.module.css';
// import Image from 'next/image';
// import Link from 'next/link';

// function Index() {
//   const [isMouseOver, setMouseOver] = useState(true);

//   const handleMouseOver = () => {
//     setMouseOver(false);
//   };

//   const handleMouseOut = () => {
//     setMouseOver(true);
//   };

//   const renderSponsorCard = (src, backgroundColor) => (
//     <div
//       className={`${styles.card}`}
//       style={{ backgroundColor: isMouseOver ? 'rgb(252, 255, 255)' : backgroundColor }}
//       onMouseOver={handleMouseOver}
//       onMouseOut={handleMouseOut}
//     >
//       <Image className={styles.img} src={src} alt="Sponsor Image" width={290} height={117.15} />
//     </div>
//   );

//   return (
//     <div>
//       <Navbar BgColor="black" />
//       <div className={styles.father}>
//         <div className={styles.sponsorContainer}>
//           <div className={styles.secondLine}>
//             OUR <span className={styles.highlight}>SPONSORS</span>
//           </div>
//         </div>

//         <div className="sponsor-page bg-gray-100 min-h-screen flex flex-col items-center justify-center">
//           <div className={styles.hello}>
//             <div className={styles.row}>
//               {renderSponsorCard('/sponsor-images/jaguar.png', '#848482')}
//               {renderSponsorCard('/sponsor-images/bmw.png', '#b3bcb3')}
//               {renderSponsorCard('/sponsor-images/mercedes1.png', '#848482')}
//             </div>

//             <div className={styles.row}>
//               {renderSponsorCard('/sponsor-images/unilever1.png', '#b3bcb3')}
//               {renderSponsorCard('/sponsor-images/itc2.png', '#848482')}
//               {renderSponsorCard('/sponsor-images/bhel.webp', '#b3bcb3')}
//             </div>

//             <div className={styles.row}>
//               {renderSponsorCard('/sponsor-images/lg3.png', '#848482')}
//               {renderSponsorCard('/sponsor-images/Land-Rover.png', '#b3bcb3')}
//               {renderSponsorCard('/sponsor-images/hy.png', '#848482')}
//             </div>
//           </div>
//         </div>

//         <div className={styles.container}>
//           <div className={styles.headline}>Welcome to the official sponsors page.</div>
//           <div className={styles.subtext}>Explore the unmatched synergy between iconic automotive brands.</div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Index;
