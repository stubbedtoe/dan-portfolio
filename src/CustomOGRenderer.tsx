import type { RenderFunctionInput } from 'astro-opengraph-images';
import React from 'react';
const { twj } = await import('tw-to-css');

export const customOGrenderer = ({ }: RenderFunctionInput): Promise<React.ReactNode> => {
    return Promise.resolve(
        <div style={twj('h-full w-full flex bg-gray-500 p-4')}>
            <div style={twj('h-full w-full border-2 border-white')}></div>
        </div>
    )
}