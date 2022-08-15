import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='container'>
            <h1 className="centered">Two examples available</h1>
            <br />
            <Link to='simple' className='link'>Simple</Link>
            <Link to='hooked' className='link'>Using hooks</Link>
        </div>
    );
}
export default Home;
