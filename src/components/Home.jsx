import React from 'react'
import Typography from './ui/custom/Typography'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Button } from './ui/button'
const Home = () => {


    return (
        <div className='min-h-auto bg-background'>
            <section id='hero' className='flex flex-col items-center justify-center bg-background' style={{ height: 'calc(100vh - 5.5rem)' }}>
                <motion.div
                    style={{ cursor: 'grab' }}
                    drag="x"
                    dragConstraints={{ right: 100, left: -100 }}
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: 'easeInOut' }}
                    className="text-center"
                    whileTap={{ cursor: "grabbing" }}>
                    <Typography variant='h1'>13/10/2024:</Typography>
                    <Typography variant='h2'>Erika ha RIFIUTATO coccoline 😡</Typography>
                </motion.div>
            </section>

        </div>

    )
}

export default Home