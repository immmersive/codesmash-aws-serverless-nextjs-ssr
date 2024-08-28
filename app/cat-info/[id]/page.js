import cats from '../../cat-list.js'
import Image from 'next/image'

export default function Page({ params }) {
  const { id } = params;
  const cat = cats.find((cat) => cat.id === id);
  const info = [
    `${cat.name} is a friendly cat with a smooth demeanor that exudes charm and grace. He combines his sophisticated aura with a playful and affectionate nature.`,
    "This mellow fellow loves lounging in sunny spots, getting gentle pets, and curling up for cozy naps.",
    `This gentle kitty is known for his inquisitive nature-he's always exploring and observing his surroundings with great interest. ${cat.name} enjoys finding cozy nooks to curl up in and watching the world go by from his favorite perch.`,
    "This gentle little soul has a knack for making everyone around him smile with his playful antics.",
    `${cat.name} is a relaxed and happy guy. His favourite things include bird watching from windows, napping in sunbeams, and dinner time.`,
    `Meet Miss ${cat.name}, a nurturing and gentle soul. She has a sweet disposition.`,
    `${cat.name} is full of spunk and playfulness. He is very affectionate and loves the company of people, always ready to show you his best qualities!`,
    `${cat.name} is a happy and energetic guy!`,
    `${cat.name} is a mature kitty with a heart full of love to give. He's got the sweetest personality and a calm demeanor.`,
    "This friendly girl is full of charm and always seems pleasantly surprised to see you, making every day feel like a special occasion."
  ];

  if (!cat) {
    return <div>Cat not found</div>;
  }
  return (
    <>
      <div className="p-8 flex flex-col justify-center items-center">
        <h2 className="mb-3 text-2xl font-semibold">Cat Info: {cat.name}</h2>
        <Image
          src={`https://cataas.com/cat/${cat.name.toLowerCase()}`}
          alt="cat"
          width={300}
          height={300}
        />
        <p className="py-5">{info[cat.id - 1]}</p>
      </div>
    </>
  )
}
