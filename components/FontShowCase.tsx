import {
    Bebas_Neue,
    Bangers,
    Permanent_Marker,
    Rubik_Glitch,
    Creepster,
    Abril_Fatface,
    Pacifico,
    Righteous,
    Josefin_Sans,
    Zilla_Slab_Highlight,
    Cinzel,
    Satisfy,
    Oswald,
    Montserrat,
    Roboto_Condensed,
    Anton,
    Russo_One,
    Orbitron,
    Exo_2,
    Black_Ops_One,
  } from "next/font/google";
  
  const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"] });
  const bangers = Bangers({ weight: "400", subsets: ["latin"] });
  const permanentMarker = Permanent_Marker({ weight: "400", subsets: ["latin"] });
  const rubikGlitch = Rubik_Glitch({ weight: "400", subsets: ["latin"] });
  const creepster = Creepster({ weight: "400", subsets: ["latin"] });
  const abrilFatface = Abril_Fatface({ weight: "400", subsets: ["latin"] });
  const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });
  const righteous = Righteous({ weight: "400", subsets: ["latin"] });
  const josefinSans = Josefin_Sans({ weight: "400", subsets: ["latin"] });
  const cinzel = Cinzel({ weight: "400", subsets: ["latin"] });
  const satisfy = Satisfy({ weight: "400", subsets: ["latin"] });
  const oswald = Oswald({ weight: "400", subsets: ["latin"] });
  const montserrat = Montserrat({ weight: "400", subsets: ["latin"] });
  const robotoCondensed = Roboto_Condensed({ weight: "400", subsets: ["latin"] });
  const anton = Anton({ weight: "400", subsets: ["latin"] });
  const russoOne = Russo_One({ weight: "400", subsets: ["latin"] });
  const orbitron = Orbitron({ weight: "400", subsets: ["latin"] });
  const exo2 = Exo_2({ weight: "400", subsets: ["latin"] });
  const blackOpsOne = Black_Ops_One({ weight: "400", subsets: ["latin"] });
  const zillaSlabHighlight = Zilla_Slab_Highlight({
    weight: "400",
    subsets: ["latin"],
  });
  
  const fonts = [
    {
      name: "Bebas Neue",
      font: bebasNeue,
      sample: "POWER LIFT",
      description: "Bold and modern, perfect for headers or key call-to-actions.",
    },
    {
      name: "Bangers",
      font: bangers,
      sample: "MUSCLE UP!",
      description: "Playful and energetic, great for promotional banners or slogans.",
    },
    {
      name: "Permanent Marker",
      font: permanentMarker,
      sample: "Sweat & Gain",
      description: "Handwritten, casual, ideal for motivational quotes.",
    },
    {
      name: "Rubik Glitch",
      font: rubikGlitch,
      sample: "GLITCH MODE",
      description:
        "Futuristic and experimental, excellent for edgy branding or digital themes.",
    },
    {
      name: "Creepster",
      font: creepster,
      sample: "FEARLESS FIT",
      description:
        "Spooky and bold, great for Halloween-themed or dramatic campaigns.",
    },
    {
      name: "Abril Fatface",
      font: abrilFatface,
      sample: "CLASSIC POWER",
      description: "Elegant and bold, ideal for a timeless, classy feel.",
    },
    {
      name: "Pacifico",
      font: pacifico,
      sample: "RELAX & MOVE",
      description: "Casual and inviting, perfect for lifestyle or relaxing content.",
    },
    {
      name: "Righteous",
      font: righteous,
      sample: "ENERGY BLAST",
      description: "Dynamic and sleek, great for modern branding.",
    },
    {
      name: "Josefin Sans",
      font: josefinSans,
      sample: "STYLE FIT",
      description:
        "Minimal and airy, excellent for clean and professional interfaces.",
    },
    {
      name: "Zilla Slab Highlight",
      font: zillaSlabHighlight,
      sample: "BOLD MOVES",
      description: "Striking and unique, perfect for artistic and creative designs.",
    },
    {
      name: "Cinzel",
      font: cinzel,
      sample: "STRENGTH & HONOR",
      description: "Classic and serif, ideal for high-end or ceremonial content.",
    },
    {
      name: "Satisfy",
      font: satisfy,
      sample: "FLOW MOTION",
      description: "Elegant and flowing, great for yoga or calming themes.",
    },
    {
      name: "Oswald",
      font: oswald,
      sample: "POWER SURGE",
      description: "Bold and narrow, excellent for headlines and strong statements.",
    },
    {
      name: "Montserrat",
      font: montserrat,
      sample: "ELITE FITNESS",
      description: "Modern and geometric, perfect for a clean, professional look.",
    },
    {
      name: "Roboto Condensed",
      font: robotoCondensed,
      sample: "LEAN MACHINE",
      description: "Versatile and readable, great for body text and UI elements.",
    },
    {
      name: "Anton",
      font: anton,
      sample: "BEAST MODE",
      description: "Ultra-bold and impactful, ideal for powerful headlines.",
    },
    {
      name: "Russo One",
      font: russoOne,
      sample: "IRON WILL",
      description: "Strong and industrial, perfect for a tough, gritty aesthetic.",
    },
    {
      name: "Orbitron",
      font: orbitron,
      sample: "FUTURE FIT",
      description: "Futuristic and techy, great for high-tech fitness concepts.",
    },
    {
      name: "Exo 2",
      font: exo2,
      sample: "FLEX ZONE",
      description: "Modern and sporty, excellent for dynamic, active themes.",
    },
    {
      name: "Black Ops One",
      font: blackOpsOne,
      sample: "EXTREME TRAINING",
      description: "Bold and military-inspired, perfect for intense workout themes.",
    },
  ];
  
  export default function FontShowcase() {
    return (
      <div className="p-6 space-y-12 bg-gray-50">
        <header className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Extended Font Showcase for Fitness App
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Explore an expanded variety of fonts that can enhance your fitness
            application's branding, headers, and motivational content. From bold and
            energetic to sleek and professional, find the perfect typography for your
            app's unique style.
          </p>
        </header>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {fonts.map((font, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <h2 className="text-lg font-semibold mb-2">{font.name}</h2>
              <p
                className={`${font.font.className} text-5xl font-bold mb-4 text-gray-800`}
              >
                {font.sample}
              </p>
              <p className="text-sm text-gray-500">{font.description}</p>
              <p className={`${font.font.className} mt-4 text-lg text-gray-700`}>
                The quick brown fox jumps over the lazy dog.
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  