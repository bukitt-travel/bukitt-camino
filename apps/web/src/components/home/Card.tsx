import Image from 'next/image';
const Card = () => {
    return (
        <div>
            <div className="aspect-w-3 aspect-h-5">
                <Image src="/" layout="responsive" width={3} height={5} />
            </div>
        </div>
    );
};

export default Card;
