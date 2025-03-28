// import type { RenderFunctionInput } from 'astro-opengraph-images';
// import React from 'react';
// const { twj } = await import('tw-to-css');
// import astroConfig from '../astro.config.mjs';

// export const customOGrenderer = ({ document }: RenderFunctionInput): Promise<React.ReactNode> => {
//     const image = document.querySelector('img')?.src
    
//     return Promise.resolve(
//         <div style={twj('h-full w-full flex bg-gray-500 p-4')}>
//             <div style={twj('h-full w-full flex border-2 border-white')}>
//                 <img style={{ ...twj("absolute inset-0 w-full h-full"), ...{ objectFit: "cover" } }} width="500" height="500" src={`${astroConfig.site}${image}`} />
//             </div>
//         </div>
//     )
// }