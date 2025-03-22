
import React from 'react';

export default function VanPepe() {
  return (
    <div className="min-h-screen bg-cover bg-center text-white p-4" style={{ backgroundImage: "url('/vanpepe-bg.jpg')" }}>
      <div className="backdrop-blur-sm bg-black/50 p-6 rounded-2xl max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-4">VanPepe (JCVP)</h1>
        <p className="text-center text-xl italic mb-8">"The Muscles from Memes"</p>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Who is VanPepe?</h2>
          <p>
            VanPepe is the legendary fusion between Jean-Claude Van Damme, the king of splits, and Pepe the Frog,
            the eternal meme icon. He embodies the power of spinning kicks and the wisdom of the internet.
          </p>
          <p className="mt-2">
            Movies like <strong>Bloodsport</strong>, <strong>Kickboxer</strong>, and <strong>Timecop</strong> live within him.
            VanPepe fears nothing, not even the bear market.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Roadmap of Muscle</h2>
          <ul className="list-disc list-inside">
            <li>Phase 1: Launch the JCVP token on PumpPad</li>
            <li>Phase 2: Create the ultimate split meme</li>
            <li>Phase 3: Get a retweet from JCVD (divine mission)</li>
            <li>Phase 4: Release a fake trailer: VanPepe vs The Bear Market</li>
            <li>Phase 5: Be adopted by a dev worthy of the Kumite</li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Why this site?</h2>
          <p>
            VanPepe is ready to conquer the world of memes and crypto, but he needs a technical sensei.
            If you're a developer, come claim this project. The code calls you. Web3 needs its hero.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">For Sale</h2>
          <p>
            This project is for sale. The buyer will receive full ownership of the site, the token concept, the codebase,
            and all rights to the VanPepe identity. For inquiries, contact: <strong>lebigtom@gmail.com</strong>
          </p>
        </section>
      </div>
    </div>
  );
}
