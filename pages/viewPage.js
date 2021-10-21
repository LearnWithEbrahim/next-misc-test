// import Image from 'next/image';
import img from '../public/a.jpg'
const viewPage = () => {
    return (
        <div>
            {/* <Image src={img} placeholder="blur" alt="pet" width="280" height="420" />
            {
                ['a', 'b', 'c', 'd'].map((path) => {
                    return (
                        <div key={path}>
                            <Image src={`/${path}.jpg`} alt="scinario" width="280" height="420" />
                        </div>
                    )
                })
            } */}
            Pets
        </div>
    );
};

export default viewPage;