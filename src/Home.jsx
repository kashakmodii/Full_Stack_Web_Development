import './Hello.css';
import wp from './ganesha.jpg';

function Home() {
    var a = 10;
    var b = 20;
    var mycolor = { color: 'white', backgroundColor: 'green' }; // ✅ fixed here

    return (
        <>
            <h1>Home</h1>
            A Value is {a} <br />
            B value is {b}
            <p style={{ color: 'red', backgroundColor: 'black' }}>Hello</p>
            <p style={mycolor}>I am internal</p>
            <img src={wp} />
        </>
    );
}

export default Home;
