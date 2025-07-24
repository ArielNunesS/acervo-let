import { useState } from "react";

export default function BookCard({ title, price, author, description, images }) {
    const [ index, setIndex ] = useState(0);

    const next = () => setIndex((index + 1) % images.length)

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative text-center">
            <h2 className="font-bold text-xl  px-3 py-2 rounded-md w-full">{title}</h2>
            <p className="px-3 mb-3 text-sm rounded-md w-full">- {author}</p>

                <img
                src={images[index]}
                alt={title}
                className="w-70 h-100 object-cover rounded-md"
                />

                <button
                    onClick={next}
                    className="absolute mt-2 left-1/2 -translate-x-1/2 text-xs text-secondary"
                    >
                        Próxima Imagem
                </button>

            <div className="flex justify-center mt-2 gap-1">
                {images.map((_, i) => (
                    <span
                    key={i}
                    className={`w-2 h-2 rounded-full ${i === index ? "bg-primary" : "bg-border"}`}
                    />  
                ))}
            </div>
        </div>

        <div className="flex flex-col mt-5 items-center gap-2 text-center w-full max-w-sm">
            <label htmlFor="price" className="font-bold text-lg">Valor:</label>
            <p name="price" className="border border-[#3498db] px-5 py-2 font-medium rounded-md w-50">{price}</p>
            <label htmlFor="description" className="font-bold text-lg mt-5">Descrição:</label>
            <p name="description" className="border border-[#3498db] text-sm font-light px-3 py-5 h-fit rounded-md w-fit">{description}</p>
        </div>
    </div>
    )
}