import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import asset4 from "@/assets/asset 4.webp";
import octa8 from "@/assets/8octa/8octa-main.webp";
import imusicmain from "@/assets/imusic/imusic-main.webp";
import technis2 from "@/assets/technis/technis-main.webp";
import marit from "@/assets/merit-global/merit-global-main.webp";
import reyden from "@/assets/reyden/reyden-main.webp";
import crowd from "@/assets/crowdmouth/crowdmouth-main.webp";
import stuff from "@/assets/stuffosome/stuffosome-main.webp";
import shore from "@/assets/shore/shore-main.webp";
import keypro from "@/assets/shore/shore-main.webp";
import essence from "@/assets/essence-realty/essence-realty-main.webp";
import metagram from "@/assets/metagram/metagram-main.webp";
import better from "@/assets/better-penny/better-penny-main.webp";
import forever from "@/assets/forever-dolls/forever-dolls-main.webp";
import aeomax from "@/assets/aeomax/aeomax-main.webp";
import fastresum from "@/assets/fast-resume/fast-resume-main.webp";
import financer from "@/assets/financr/financr-main.webp";
import monotex from "@/assets/monotex/monotex-main.webp";
import homebid from "@/assets/homebid/homebid-main.webp";
import ogre from "@/assets/ogre/ogre-main.webp";
import flowrow from "@/assets/flow-row/flow-row-main.webp";

const WorkSection = () => {
  // Updated workItems with tags as arrays
  const workItems = [
    {
      title: 'loftloom',
      tags: ['UI Design', 'UX', 'Wireframe'],
      image: asset4,
      link: '/work/loftloom'
    },
    {
      title: '8octa',
      tags: ['Research', 'Branding'],
      image: octa8,
      link: '/work/8octa'
    },
    {
      title: 'imusic',
      tags: ['Research', 'UX', 'UI Design'],
      image: imusicmain,
      link: '/work/imusic'
    },
    {
      title: 'technis',
      tags: ['UX', 'UI Design', 'Development'],
      image: technis2,
      link: '/work/technis'
    },
    {
      title: 'merit global',
      tags: ['UX', 'UI Design', 'Development'],
      image: marit,
      link: '/work/merit-global'
    },
    {
      title: 'reyden',
      tags: ['UX', 'UI Design', 'Development'],
      image: reyden,
      link: '/work/reyden'
    },
    {
      title: 'crowdmouth',
      tags: ['UI Design', 'UX', 'Wireframe'],
      image: crowd,
      link: '/work/crowdmouth'
    },
    {
      title: 'stuffosome',
      tags: ['Research', 'Branding'],
      image: stuff,
      link: '/work/stuffosome'
    },
    {
      title: 'shore',
      tags: ['UI Design', 'UX', 'Wireframe'],
      image: shore,
      link: '/work/shore'
    },
    {
      title: 'keypro',
      tags: ['UI Design', 'UX', 'Wireframe'],
      image: keypro,
      link: '/work/keypro'
    },
    {
      title: 'essence realty',
      tags: ['Research', 'UX', 'UI Design'],
      image: essence,
      link: '/work/essence-realty'
    },
    {
      title: 'metagram',
      tags: ['UI Design', 'UX', 'Wireframe'],
      image: metagram,
      link: '/work/metagram'
    },
    {
      title: 'better penny',
      tags: ['UX', 'UI Design', 'Wireframe'],
      image: better,
      link: '/work/better-penny'
    },
    {
      title: 'forever dolls',
      tags: ['UX Research', 'UI Design'],
      image: forever,
      link: '/work/forever-dolls'
    },
    {
      title: 'aeomax',
      tags: ['UX', 'UI Design', 'Wireframe'],
      image: aeomax,
      link: '/work/aeomax'
    },
    {
      title: 'fast resume',
      tags: ['UX', 'UI Design', 'Wireframe'],
      image: fastresum,
      link: '/work/fast-resume'
    },
    {
      title: 'financr',
      tags: ['UX', 'UI Design', 'Wireframe'],
      image: financer,
      link: '/work/financr'
    },
    {
      title: 'monotex',
      tags: ['UX', 'UI Design', 'Wireframe'],
      image: monotex,
      link: '/work/monotex'
    },
    {
      title: 'homebid',
      tags: ['UI Design', 'UX', 'Wireframe'],
      image: homebid,
      link: '/work/homebid'
    },
    {
      title: 'ogre',
      tags: ['UX', 'UI Design', 'Wireframe'],
      image: ogre,
      link: '/work/ogre'
    },
    {
      title: 'flow row',
      tags: ['UX', 'UI Design', 'Wireframe'],
      image: flowrow,
      link: '/work/flow-row'
    },
  ];

  return (
    <section className="tr__section pb-4 overflow-hidden tr__work__boxes px-4 lg:px-16">
      <motion.div 
        className="flex flex-col gap-8 max-w-[1920px] mx-auto"
        initial="hidden"
        animate="show"
      >
        {workItems.map((item, index) => (
          <WorkItem 
            key={index}
            item={item}
            index={index}
            layoutType={index % 3 === 0 ? 'full' : 'half'}
          />
        ))}
      </motion.div>
    </section>
  );
};

const WorkItem = ({ item, index, layoutType }) => {
  // Proper ref definition
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.33, 1, 0.68, 1]
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      rotate: index % 2 === 0 ? -1 : 1,
      transition: { duration: 0.4 }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { delay: 0.2 + index * 0.05 } 
    }
  };

  // Ensure tags is always an array
  const tagsArray = Array.isArray(item.tags) ? item.tags : [item.tags];

  return (
    <motion.div
      ref={ref} // Proper ref usage
      className={`relative group ${layoutType === 'full' ? 'w-full' : 'w-full md:w-[calc(50%-16px)]'}`}
      variants={cardVariants}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
    >
      <a href={item.link} className="block h-full space-y-4">
        <motion.div 
          className="relative overflow-hidden rounded-3xl shadow-2xl"
          whileHover="hover"
          style={{
            aspectRatio: layoutType === 'full' ? '16/7' : '16/9'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
          
          <motion.img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover rounded-3xl"
            variants={imageVariants}
            loading="lazy"
          />
        </motion.div>

        <motion.div 
          className="px-4 space-y-2"
          variants={textVariants}
        >
          <h3 className="text-2xl font-bold text-white tracking-tight">
            {item.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {tagsArray.map((tag, i) => (
              <span 
                key={i}
                className="px-3 py-1 text-sm bg-white/10 backdrop-blur-sm rounded-full text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </a>
    </motion.div>
  );
};

export default WorkSection;