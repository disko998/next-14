import { getRandom } from '@/lib';
import Link from 'next/link';
import React, { cache } from 'react';
import Client from './Client';

export default function page() {
    const random = cache(getRandom)();
    console.log('**************');
    console.log('server:', random);
    return (
        <div className='flex min-h-screen flex-col items-center justify-center p-24 gap-5'>
            <h1>This is nested page</h1>
            <p>Random number is: {random}</p>
            <Link className='hover:underline text-blue-400' href={'/'}>
                Go back home
            </Link>
            <Client initial={random} />
        </div>
    );
}
