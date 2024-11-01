import React from 'react'
import Typography from './ui/custom/Typography'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { useTranslation } from '@/hooks/useTranslations'

const Home = () => {

    const t = useTranslation()


    return (
        <div className='min-h-auto bg-background'>
            <section id='hero' className='flex flex-col items-center justify-center bg-background' style={{ height: 'calc(100vh - 5.5rem)' }}>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="text-center">
                    <Typography variant='h2'>{t.hero.title}</Typography>
                </motion.div>
            </section>

        </div>

    )
}

export default Home