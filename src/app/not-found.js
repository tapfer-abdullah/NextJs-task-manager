import Link from 'next/link';


const notFound = () => {
    return (
        <div className='text-center'>
            <p className='text-red-600 text-lg font-bold'>Page is not found!</p>
            <br />
            <Link href="/" className='border bg-green-500 p-2 rounded-lg hover:bg-green-400'>Back to home</Link>
        </div>
    );
};

export default notFound;