import style from './Other.module.css'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

export default function Other() {
    const router = useRouter()
    const {id} = router.query
    return (
        <div className="container">
            <div className="element">
                <div className={style.fonts}>
                    <Image src="/smile.jpg" width={300} height={200} />
                    <p className="fade-in">People outside busy with theirself, but you should busy with try something amazing</p>
                    <p className="fade-in">you are {id}</p>
                    {/* ga pake you are juga gapapaa */}
                </div>
            </div>
        </div>
    )
}
