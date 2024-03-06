import { useLocation } from 'react-router-dom';
import data from '../data.json';

const Info = () => {
    let { state } = useLocation();

    console.log(state);
    
    return (
        <>
            {data.map(el => (
                <div>
                    <img src={el.images.hero.large} alt={el.name} />
                    <h1 >{el.name}</h1>
                </div>
            ))}
        </>
    );
}

export default Info;
