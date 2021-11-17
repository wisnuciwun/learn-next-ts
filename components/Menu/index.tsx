import Link from 'next/link';

export default function Menu() {
    return (
        <div>
            <ul>
                <li className="trapezoid-left"><Link href="/Welcome">Welcome</Link></li>
                <li className="trapezoid-left"><Link href="/Detail/Other">Other</Link></li>
                <li className="trapezoid-left"><Link href="/Detail">Detail</Link></li>
            </ul>
        </div>
    )
}
