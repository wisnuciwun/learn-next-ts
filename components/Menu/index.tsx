import Link from 'next/link';

export default function Menu() {
    return (
        <div style={{ backgroundColor: 'tomato', color: 'white', padding: '10px', fontWeight: 'bold'}}>
            <Link href="/Welcome">Welcome</Link>&nbsp;&nbsp;
            <Link href="/Detail/Other">Other</Link>&nbsp;&nbsp;
            <Link href="/Detail">Detail</Link>
        </div>
    )
}
