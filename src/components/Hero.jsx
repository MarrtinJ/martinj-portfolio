import { motion } from "framer-motion";

import { styles } from "../styles";
import { headshot, linkedin, resume_icon, github } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-logo-green' />
          <div className='w-1 sm:h-80 h-40 bg-gradient-to-b from-logo-green' />
        </div>

        <div>
          <img loading="lazy" src={headshot} alt={headshot} className='hidden md:block rounded-full p-5 max-w-[400px] h-auto shadow-lg' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-logo-green'>Martin</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A recent graduate looking for work in <br className='sm:block hidden' />
            software development and artificial intelligence
          </p>
          <div className="flex flex-row py-5 gap-5">
            <a
              href="https://www.linkedin.com/in/mjiang05/"
              target="_blank">
              <img
                src={linkedin}
                alt="linkedin" />
            </a>
            <a
              href="https://github.com/MarrtinJ"
              target="_blank"
              className="max-w-[75px]"
              >
              <img
                src={github}
                alt="github" />
            </a>
            <a
              href="https://drive.google.com/file/d/1HSc2bCdXRktSBhPk291gMiRjxhytTium/view?usp=sharing"
              target="_blank">
              <img
                src={resume_icon}
                alt="resume" />
            </a>

          </div>
        </div>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;