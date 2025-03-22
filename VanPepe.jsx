import React from 'react';

export default function VanPepe() {
  return (
    <div className="min-h-screen bg-cover bg-center text-white p-4" style={{ backgroundImage: "url('/vanpepe-bg.png')" }}>
      <div className="backdrop-blur-sm bg-black/50 p-6 rounded-2xl max-w-3xl mx-auto mt-10">
        <h1 className="text-4xl font-bold text-center mb-4">VanPepe (JCVP)</h1>
        <p className="text-center text-xl italic mb-8">"The Muscles from Memes"</p>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Qui est VanPepe ?</h2>
          <p>
            VanPepe est la fusion légendaire entre Jean-Claude Van Damme, le roi des grands écarts, et Pepe the Frog,
            l’icône éternelle des memes. Il incarne la puissance du kick rotatif et la sagesse d’Internet. Imaginez une
            grenouille verte qui murmure des citations comme « Être soi-même, c'est ça le plus dur » en faisant le grand écart
            entre deux camions sur l’autoroute du Web3.
          </p>
          <p className="mt-2">
            Des films comme <strong>Bloodsport</strong>, <strong>Kickboxer</strong> ou <strong>Timecop</strong> vivent en lui.
            VanPepe n’a peur de rien, pas même du bear market. Il médite, il frappe, il partage la sagesse :
            <em>“Un biscuit, c’est doux. Une biscotte, c’est dur.”</em>
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Roadmap Musclée</h2>
          <ul className="list-disc list-inside">
            <li>Phase 1 : Lancement du token JCVP sur PumpPad</li>
            <li>Phase 2 : Créer le meme ultime du grand écart</li>
            <li>Phase 3 : Faire retweeter VanPepe par JCVD (mission divine)</li>
            <li>Phase 4 : Lancer un faux trailer VanPepe vs le Bear Market</li>
            <li>Phase 5 : Être adopté par un développeur digne du Kumite</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Pourquoi ce site ?</h2>
          <p>
            VanPepe est prêt à conquérir le monde des memes et de la crypto, mais il a besoin d’un sensei technique. Si tu es
            développeur, viens t’emparer du projet. Le code t’appelle. Le Web3 a besoin de son héros.
          </p>
        </section>
      </div>
    </div>
  );
}
