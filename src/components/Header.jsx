import React from 'react'
import Typography from './ui/custom/Typography'
import { motion } from 'framer-motion'

const head = {
    hidden: {
        x: '-100vw',
    },
    visible: {
        x: 0,
        transition: { when: 'beforeChildren', staggerChildren: 0.3, duration: 1.5, ease: 'easeInOut' }
    }
}

const navItem = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: { duration: 0.5 }
    }
}

const Header = () => {


    return (
        <>
            <motion.ul className='border-b border-gray-800 w-100 h-10 flex px-6 gap-x-4 justify-center lg:justify-end lg:gap-x-10 lg:px-12'
                initial='hidden'
                animate='visible'
                variants={head}>
                <motion.li
                    variants={navItem}
                >
                    <Typography variant='p' color='text-slate-100' className='font-medium'>Home</Typography>
                </motion.li>
                <motion.li
                    variants={navItem}
                >
                    <Typography variant='p' color='text-gray-500' className='font-medium hover:underline hover:underline-offset-8 hover:decoration-gray-500'>Skills</Typography>
                </motion.li>
                <motion.li
                    variants={navItem}
                >
                    <Typography variant='p' color='text-gray-500' className='font-medium hover:underline hover:underline-offset-8 hover:decoration-gray-500'>Projects</Typography>
                </motion.li>
                <motion.li
                    variants={navItem}
                >
                    <Typography variant='p' color='text-gray-500' className='font-medium hover:underline hover:underline-offset-8 hover:decoration-gray-500'>Contatti</Typography>
                </motion.li>
            </motion.ul></>
    )
}

export default Header