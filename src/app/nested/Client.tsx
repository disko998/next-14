'use client';

import React, { useEffect, useState } from 'react';
import { getRandom } from '@/lib';

export default function Client({ initial }: { initial: number }) {
    const [random, setRandom] = useState(initial);

    useEffect(() => {
        const val = getRandom();
        setRandom(val);
        console.log('client:', val);
    }, []);

    return (
        <div>
            <h1>This is a test component</h1>
            {random}
        </div>
    );
}
