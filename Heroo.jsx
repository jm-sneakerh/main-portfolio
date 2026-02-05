import { useEffect, useState } from "react";

const roles = ["Frontend Developer", "React Specialist", "UI Engineer"];

const Heroo = () => {
  // Media queries
  

  // Typing effect
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    let timeout;

    if (charIndex < roles[roleIndex].length) {
      timeout = setTimeout(() => {
        setText((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 1500);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, roleIndex]);

  return (
    <section className="min-h-screen w-full flex flex-col relative overflow-hidden" id="home">

      {/* Text */}
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3 z-10 relative">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am James <span className="waving-hand">👋</span>
        </p>

        {/* Typing role */}
        <p className="text-center text-lg sm:text-xl text-gray-300 h-7">
          {text}
          <span className="animate-pulse">|</span>
        </p>

        <p className="hero_tag text-gray_gradient text-center">
          Building Products & Brands
        </p>
      </div>

      {/* Profile Image (centered & responsive) */}
      <div className="relative z-10 flex justify-center mt-10">
        <img
          src="/public/assets/grid1.png"
          alt="James Maundu"
        />
      </div>

      {/* 3D Canvas */}
      

      {/* CTA */}
     
    </section>
  );
};

export default Heroo;
