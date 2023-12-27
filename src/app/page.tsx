import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-center p-24 gap-5'>
            <h1>This is Home page</h1>
            <Link className='hover:underline text-blue-400 ' href='/nested'>
                Nested page
            </Link>
        </main>
    );
}
