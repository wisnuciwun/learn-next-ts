import style from './Other.module.css'
import Image from 'next/image'
import { useRouter } from 'next/dist/client/router'

interface DataProps {
    dataDetail: DataDetailProps;
}

interface DataDetailProps {
    id: Number;
    username: String;
    names: String;
    email: String;
    phone: String;
    website: String;
}
// name getStaticProps and getStaticPaths is a must
export default function Other(props: DataProps) {
    const router = useRouter()
    const { userid } = router.query
    const { dataDetail } = props

    if (dataDetail != undefined) {
        return (
            <div className="container">
                <div className="element">
                    <div className={style.fonts}>
                        <Image src="/smile.jpg" width={300} height={200} />
                        <p className="fade-in">People outside busy with theirself, but you should busy with try something amazing</p>
                        <p className="fade-in">Hello, i am {dataDetail.names}
                        </p>
                        <div className="fade-in">
                            {dataDetail.username}<br />
                            {dataDetail.phone}<br />
                            {dataDetail.website}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

export async function getStaticPaths() {
    const result = await fetch(`https://jsonplaceholder.typicode.com/users`)
    const data = await result.json()

    const paths = data.map((x: DataDetailProps) => ({
        params: {
            id: `${x.id}`
        }
    }))
    return {
        paths,
        fallback: true
    }
}

interface getStaticPropsContext {
    params: { id: String }
}

// export async function getStaticProps(context: {params: {id: String}}) {
export async function getStaticProps(context: getStaticPropsContext) {
    const { id } = context.params
    const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const dataDetail = await result.json()

    return {
        props: {
            dataDetail
        }
    }
}