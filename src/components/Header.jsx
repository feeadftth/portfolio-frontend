import React from 'react'
import Typography from './ui/custom/Typography'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import UKFlag from './ui/custom/UKFlag'
import ITFlag from './ui/custom/ITFlag'
import { useLanguage } from '@/LanguageContext'
import { useTranslation } from '@/hooks/useTranslations'

// *imports redacted for brevity*
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
            <motion.ul
                className='border-b border-gray-800 w-100 h-10 flex px-6 gap-x-4 justify-center lg:justify-end lg:gap-x-10 lg:px-12'
                initial='hidden'
                animate='visible'
                variants={head}
            >
                <motion.li variants={navItem}>
                    <Button variant='outlined' size='icon' onClick={toggleLanguage} className='h-full'>
                        <AnimatePresence mode="wait" initial={false}>
                            {language === 'en' ? (
                                <motion.div
                                    key="en"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } }}
                                    exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
                                >
                                    <UKFlag width={20} height={15} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="it"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0, transition: { duration: 0.3, delay: 0.5 } }}
                                    exit={{ opacity: 0, y: 10, transition: { duration: 0.3 } }}
                                >
                                    <ITFlag isBW='true' width={20} height={15} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </Button>
                </motion.li>

                {/* Updated individual list items to animate only the text */}
                <motion.li variants={navItem}>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={`navHome-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography variant='p' color='text-slate-100' className='font-medium'>
                                <Link to='/home'>{t.header.navHome}</Link>
                            </Typography>
                        </motion.div>
                    </AnimatePresence>
                </motion.li>

                <motion.li variants={navItem}>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={`navSkills-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography variant='p' color='text-gray-500' className='font-medium hover:underline hover:underline-offset-8 hover:decoration-gray-500' style={{ cursor: 'pointer' }}>
                                <Link to='/skills'>{t.header.navSkills}</Link>
                            </Typography>
                        </motion.div>
                    </AnimatePresence>
                </motion.li>

                <motion.li variants={navItem}>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={`navProjects-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography variant='p' color='text-gray-500' className='font-medium hover:underline hover:underline-offset-8 hover:decoration-gray-500' style={{ cursor: 'pointer' }}>
                                <Link to='/projects'>{t.header.navProjects}</Link>
                            </Typography>
                        </motion.div>
                    </AnimatePresence>
                </motion.li>

                <motion.li variants={navItem}>
                    <AnimatePresence mode="wait" initial={false}>
                        <motion.div
                            key={`navContacts-${language}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Typography variant='p' color='text-gray-500' className='font-medium hover:underline hover:underline-offset-8 hover:decoration-gray-500' style={{ cursor: 'pointer' }}>
                                <Link to='/contacts'>{t.header.navContact}</Link>
                            </Typography>
                        </motion.div>
                    </AnimatePresence>
                </motion.li>
            </motion.ul>
        </>
    )
}

export default Header
