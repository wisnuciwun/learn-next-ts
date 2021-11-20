// interface DataProps{
//     data: [{name: '', email: ''}];
// }

import { useRouter } from "next/dist/client/router"

export default function Detail({ data = [{id: '', name: '', email: ''}] }) {
    const router = useRouter()
    console.log(data)
    return (
        <div className="container">
            <div className="element fade-in">
                <b>Coding is never be easy, but enjoy it because you'll ends happy</b>
                <br /><br />
                List who dedicated to coding in their lifes :
                {
                    data.map((x,y) => {
                        return(
                            <p style={{backgroundColor: 'turquoise', cursor: 'pointer'}} key={y} onClick={() => router.push(`/Detail/${x.id}`)}>{x.name} - {x.email}</p>            
                        )
                    })
                }
            </div>
        </div>
    )
}

export async function getStaticProps() {
    //untuk data yg statis
    const result = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await result.json()
    return {
        props: {
            data
        }
    }
}