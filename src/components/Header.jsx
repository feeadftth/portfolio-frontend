import React from 'react'
import Typography from './ui/custom/Typography'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import UKFlag from './ui/custom/UKFlag'
import ItalianFlag from './ui/custom/ITFlag'
import ITFlag from './ui/custom/ITFlag'
import { useLanguage } from '@/LanguageContext'
import { useTranslation } from '@/hooks/useTranslations'

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

    const t = useTranslation()
    const { language, toggleLanguage } = useLanguage()


    return (
        <>
            <motion.ul className='border-b border-gray-800 w-100 h-10 flex px-6 gap-x-4 justify-center lg:justify-end lg:gap-x-10 lg:px-12'
                initial='hidden'
                animate='visible'
                variants={head}>
                <motion.li
                    variants={navItem}
                >
                    <Button variant='outlined' size='icon' onClick={toggleLanguage} className='h-full'>
                        {language === 'it' ?
                            <ITFlag width={20} height={15} />
                            :
                            <UKFlag width={20} height={15} />}

                    </Button>
                </motion.li>
                <motion.li
                    variants={navItem}
                >
                    <Typography variant='p' color='text-slate-100' className='font-medium'><Link to='/home'>{t.header.navHome}</Link></Typography>
                </motion.li>
                <motion.li
                    variants={navItem}
                >
                    <Typography variant='p' color='text-gray-500' className='font-medium hover:underline hover:underline-offset-8 hover:decoration-gray-500' style={{ cursor: 'pointer' }}><Link to='/skills'>{t.header.navSkills}</Link></Typography>
                </motion.li>
                <motion.li
                    variants={navItem}
                >
                    <Typography variant='p' color='text-gray-500' className='font-medium hover:underline hover:underline-offset-8 hover:decoration-gray-500' style={{ cursor: 'pointer' }}><Link to='/projects'>{t.header.navProjects}</Link></Typography>
                </motion.li>
                <motion.li
                    variants={navItem}
                >
                    <Typography variant='p' color='text-gray-500' className='font-medium hover:underline hover:underline-offset-8 hover:decoration-gray-500' style={{ cursor: 'pointer' }}><Link to='/contacts'>{t.header.navContact}</Link></Typography>
                </motion.li>
            </motion.ul></>
    )
}

export default Header