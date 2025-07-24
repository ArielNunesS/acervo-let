import { useState } from "react";

export default function BookCard({ title, price, author, description, images }) {
    const [ index, setIndex ] = useState(0);

    const next = () => setIndex((index + 1) % images.length)
    const previous = () => {
        if(index === 0) {
        setIndex(images.length - 1)
        } else {
            setIndex(index - 1)
        }
    }

    return (
        <div className="flex flex-col items-center gap-4">
            <div className="relative text-center">
            <h2 className="font-bold text-3xl text-[#64B5F6] py-0 mt-10 rounded-md w-full">{title}</h2>
            <p className="px-3 mb-2 text-sm rounded-md w-full">- {author}</p>

                <img
                src={images[index]}
                alt={title}
                className="w-70 h-100 object-cover rounded-md"
                />

                <button
                    onClick={next}
                    className="absolute mt-2 right-27 text-xs text-secondary active:opacity-60"
                    >
                    
                    <img src="https://img.icons8.com/?size=20&id=79025&format=png&color=ffffff" />

                </button>

                <button
                    onClick={previous}
                    className="absolute mt-2 left-27 text-xs text-secondary active:opacity-60"
                    >
                    
                    <img src="https://img.icons8.com/?size=20&id=79026&format=png&color=ffffff" />

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
            <p name="price" className="border-2 border-[#3498db] px-5 py-2 font-medium text-lg rounded-md w-50">{price}</p>
            <label htmlFor="description" className="font-bold text-lg mt-1">Descrição:</label>
            <p name="description" className="border-2 border-[#3498db] text-[13px] font-light px-3 py-5 h-fit rounded-md w-fit max-w-3/4">{description}</p>
        </div>
    </div>
    )
}