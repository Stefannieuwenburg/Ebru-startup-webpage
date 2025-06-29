import image1 from "../assets/image/arenameeting.jpg";
import image2 from "../assets/image/arenastanding.jpg";
import image3 from "../assets/image/flowertop.jpg";

const cards = [
    {
        imageUrl: image1,
        title: "Inspirerende Titel",
        description: "Dit is een inspirerende beschrijving van de kaart.",
        cardbutton: "Coaching",
    },
    {
        imageUrl: image2,
        title: "Hoe we open-source projecten ontwerpen en coderen?",
        description: "Tania Andrew",
        cardbutton: "Trainings",
    },
    {
        imageUrl: image3,
        title: "Tania Andrew",
        description: "Dit is een beschrijving van de kaart.",
        cardbutton: "Workshops",
    },
];

const FeaturesPage = () => {
    return (
        <section className="min-h-screen container bg-[#ffffff] mx-auto px-8 py-8 lg:py-40">
            <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold  text-blue-gray-900 !leading-snug lg:!text-4xl">
                Over breathandbodymovement 
            </h2>
            <p className="block antialiased font-sans text-xl  leading-relaxed mt-2 w-full font-normal !text-gray-500 lg:w-5/12">
                this is a description
            </p>
            <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-3">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="flex-col bg-clip-border bg-transparent text-gray-700 shadow-md relative grid min-h-[30rem] items-end overflow-hidden rounded-xl"
                    >
                        <img
                            src={card.imageUrl}
                            alt="bg"
                            className="absolute inset-0 h-full w-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-black/70"></div>
                        <div className="p-6 relative flex flex-col justify-end">
                            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">
                                {card.title}
                            </h4>
                            <p className="block antialiased font-sans text-base leading-relaxed text-white my-2 font-normal">
                                {card.description}
                            </p>
                            <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-2 border border-gray-400 rounded-3xl">
                                {card.cardbutton}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesPage;
