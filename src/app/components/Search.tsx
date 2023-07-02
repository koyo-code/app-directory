// import { useState, useEffect } from 'react';
// import { Card, CardProps } from '@/component/Card';
// import ProImage from '~/img/profile.png';
// const data: CardProps[] = [
//   {
//     image: {
//       src: ProImage,
//       width: 300,
//       height: 210,
//       alt: 'profile',
//     },
//     title: 'JavaScript',
//     text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
//     button: {
//       text: 'Read More',
//       url: 'https://google.com',
//     },
//   },
//   {
//     image: {
//       src: ProImage,
//       width: 300,
//       height: 210,
//       alt: 'profile',
//     },
//     title: 'React',
//     text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
//     button: {
//       text: 'Read More',
//       url: 'https://google.com',
//     },
//   },
//   {
//     image: {
//       src: ProImage,
//       width: 300,
//       height: 210,
//       alt: 'profile',
//     },
//     title: 'TypeScript',
//     text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
//     button: {
//       text: 'Read More',
//       url: 'https://google.com',
//     },
//   },
//   {
//     image: {
//       src: ProImage,
//       width: 300,
//       height: 210,
//       alt: 'profile',
//     },
//     title: 'Next.js',
//     text: 'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト',
//     button: {
//       text: 'Read More',
//       url: 'https://google.com',
//     },
//   },
// ];
// export const Search: React.FC = () => {
//   const [showItems, setShowItems] = useState<CardProps[]>([]);

//   useEffect(() => {
//     setShowItems(data);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const result = data.filter((item) => {
//       return item.title.toLowerCase().match(e.target.value.toLowerCase());
//     });
//     console.log(result);
//     setShowItems(result);
//   };

//   return (
//     <div>
//       <form action='' className='flex justify-center'>
//         <input
//           type='text'
//           className='my-8  rounded border border-black'
//           placeholder='search'
//           onChange={(e) => handleChange(e)}
//         />
//       </form>
//       <div className='flex justify-between'>
//         {showItems.map((item, i) => {
//           return (
//             <>
//               <Card image={item.image} title={item.title} text={item.text} button={item.button} />
//             </>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
