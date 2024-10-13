import React from 'react'
import Typography from './ui/custom/Typography'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
const Home = () => {

    const navigate = useNavigate()

    const handleContinue = () => {
        navigate('/home')
    }

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
                    <Typography variant='h1'>Hello!</Typography>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    drag="y"
                    transition={{ duration: 0.7, delay: 0.6, ease: 'easeInOut' }}
                    className='text-left'>
                    <Typography variant='h2' className='pb-6'>This is my portfolio.</Typography>
                </motion.div>


                <Button className="bg-primary" onClick={handleContinue}>Continue</Button>
            </section>

        </div>

    )
}

export default Home