import React from 'react'
import Typography from './ui/custom/Typography'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { easeInOut, motion } from 'framer-motion'
const Home = () => {
    return (
        <div className='min-h-screen bg-background'>
            <section id='hero' className='flex flex-col items-center justify-center h-screen bg-background'>
                <motion.div
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="text-center">
                    <Typography variant='h1'>Hello!</Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.6, ease: 'easeInOut' }}
                    className='text-left'>
                    <Typography variant='h2'>This is my portfolio.</Typography>
                </motion.div>
            </section>

        </div>

    )
}

export default Home