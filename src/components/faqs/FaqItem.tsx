import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

interface Props {
    question: string;
    answer: string;
}

export const FaqItem = ({ question, answer }:Props) => {

    const [open, setOpen] = useState(false)

    return (
    <div className='border-b border-[#27ae60]'>
        <button 
            onClick={() => setOpen(!open)}
            className='w-full flex justify-between items-center py-4 text-left'
        >
            <span className='font-medium text-lg '>{ question }</span>
            {
                open 
                ? <ChevronUp size={20} className='text-[#2ecc71]' />
                : <ChevronDown size={20} className='text-[#2ecc71]' />
            }
        </button>

        <AnimatePresence>
            {
                open && (
                    <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                    >
                        <p className='py-2 text-gray-600'>
                            { answer }
                        </p>
                    </motion.div>
                )
            }
        </AnimatePresence>

    </div>
  )
}
