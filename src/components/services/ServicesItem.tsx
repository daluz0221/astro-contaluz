

import { useState } from 'react'
import { MiniCard } from './MiniCard';
import { Briefcase, Calculator, FileText } from "lucide-react";
import { AnimatePresence, motion } from 'framer-motion';

const icons = {
    briefcase: Briefcase,
    filetext: FileText,
    calculator: Calculator,
}

type IconName = keyof typeof icons;

interface Props {
  bg?: string;
  title: string;
  text: string;
  image?: string;
  reverse?: boolean;
  details: {
    description: string;
    cards: {icon: IconName; title: string; text: string}[]
  }
}




export const ServicesItemReact = ({ bg, title, text, image, reverse, details }:Props) => {

  const [open, setOpen] = useState(false)

  return (
    <section className={`${ bg ? bg : 'bg-white' } flex flex-col min-h-[75vh] md:min-h-[60vh]`}>
      <div className={`container mx-auto flex flex-1 flex-col md:flex-row lg:justify-between lg:px-20 gap-8 items-center text-center  ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}>
          {/* image */}
          <div className='relative w-full max-w-sm mt-8 md:mt-0'>
            <img 
              width={500}
              height={350}
              src={`${ image ? image : "https://static.vecteezy.com/system/resources/previews/004/141/669/non_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg" }`}
              alt="title"
              className="rounded-2xl shadow-md object-cover"
            />
          </div>

          {/* Texto */}
          <div className="space-y-4">
            <h2 className='text-2xl font-bold'>{ title }</h2>
            <p className='text-gray-600'>{ text }</p>
            <button
              onClick={() => setOpen(!open)}
              className='cursor-pointer bg-[#2ecc71] text-white py-3 px-7 rounded-4xl transition-all hover:bg-[#27ae60] mb-5 md:mb-0'
            >
              {
                open
                ? "Ver menos"
                : "Ver más"
              }
              
            </button>
          </div>

      </div>
    <AnimatePresence>        
      {
        open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`mt-8 p-6 ${ bg ? bg : 'bg-white' }  flex-1`}
          >
            <p className="mb-6 text-gray-700 text-center">{details.description}</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {details.cards.map((card, idx) => {
                const Icon = icons[card.icon]

                return (
                    <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                >
                  <MiniCard key={idx} icon={<Icon size={28}/>} title={card.title} text={card.text}  />
                </motion.div>
                )
              })}
              </div>
            </motion.div>
        )
      }
    </AnimatePresence>
    </section>

  )
}