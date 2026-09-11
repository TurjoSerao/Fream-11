import Hero from '../assets/bg-shadow.png'
import HeroImg from '../assets/banner-main.png'

const Banner = () => {
    return (
        <div
            className="
                container
                mx-auto
                w-full
                h-137.5
                rounded-2xl
                bg-black
                bg-cover
                bg-center
                flex
                justify-center
                items-center
            "
            style={{ backgroundImage: `url(${Hero})` }}
        >
            <div className="flex flex-col items-center text-center">

               
                <img
                    className="w-62.5 h-50 object-contain"
                    src={HeroImg}
                    alt="Dream 11 Cricket Team"
                />

                
                <h2 className="text-[40px] text-white font-bold mt-5">
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h2>

              
                <p className="text-2xl text-white mt-5">
                    Beyond Boundaries Beyond Limits
                </p>
                <button className="bg-[#E7FE29] py-3 px-5 text-xl font-bold rounded-xl mt-5">
                    Claim Free Credit
                </button>

            </div>
        </div>
    )
}

export default Banner