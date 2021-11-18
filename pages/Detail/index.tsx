// interface DataProps{
//     data: [{name: '', email: ''}];
// }

export default function Detail({ data = [{name: '', email: ''}] }) {
    console.log(data)
    return (
        <div className="container">
            <div className="element fade-in">
                <b>Coding is never be easy, but enjoy it because you'll ends happy</b>
                <br /><br />
                Jsonplaceholder trials be like this :
                {
                    data.map(x => {
                        return(
                            <p>{x.name} - {x.email}</p>            
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