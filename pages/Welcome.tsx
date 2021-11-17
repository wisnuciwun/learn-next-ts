import Layout from "../components/Layout";

export default function Welcome() {
    return (
        <Layout>
            <div>
                <span style={{display: 'flex'}}><h1 style={{color: 'tomato'}}>Hello e</h1><h1 style={{color: 'white'}}>veryone !</h1></span>
                <span style={{display: 'flex'}}><p style={{color: 'tomato'}}>This is my first</p>&nbsp;<p style={{color: 'white'}}>Next JS project. Learn basic to be fantastic</p></span>
            </div>
        </Layout>
    )
}
