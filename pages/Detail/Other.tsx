import style from './Other.module.css'
import Image from 'next/image'

export default function Detail() {
    return (
        <div className="container">
            <div className="element">
                <div className={style.fonts}>
                    <Image src="/smile.jpg" width={300} height={200} />
                    <p className="fade-in">People outside busy with theirself, but you should busy with try something amazing</p>
                </div>
            </div>
        </div>
    )
}
