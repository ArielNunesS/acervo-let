import { useState } from "react";

export default function BookCard({ title, price, description, images }) {
    const [ index, setIndex ] = useState(0);

    const next = () => setIndex((index + 1) % images.length)

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative">
                <img
                src={images[index]}
                alt={title}
                className="w-48 h-72 object-cover rounded-md border border-border"
                />

                <button
                    onClick={next}
                    className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-secondary"
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

        <div className="flex flex-col items-center gap-2 text-center w-full max-w-xs">
            <h2 className="border border-border px-3 py-1 rounded-md w-full">{title}</h2>
            <p className="border border-border px-3 py-1 rounded-md w-full">{price}</p>
            <p className="border border-border px-3 py-2 rounded-md w-full">{description}</p>
        </div>
    </div>
    )
}