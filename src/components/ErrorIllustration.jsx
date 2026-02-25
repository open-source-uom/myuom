import { Box, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);
const MotionPath = motion.path;
const MotionCircle = motion.circle;

const ErrorIllustration = () => {
    const primaryColor = useColorModeValue("#0050e0", "#3182ce"); // Brand Blue
    const secondaryColor = useColorModeValue("#F4B042", "#F4B042"); // Brand Orange
    const grayColor = useColorModeValue("#CBD5E0", "#4A5568");

    return (
        <MotionBox
            w={{ base: "250px", md: "350px", lg: "450px" }}
            h={{ base: "200px", md: "280px", lg: "350px" }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <svg
                viewBox="0 0 400 300"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ width: "100%", height: "100%" }}
            >
                {/* Abstract Background Shapes */}
                <MotionCircle
                    cx="200"
                    cy="150"
                    r="120"
                    fill={useColorModeValue("#EBF8FF", "#2D3748")}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                />

                {/* The '4' - Left */}
                <MotionPath
                    d="M80 200V120L40 180H90"
                    stroke={primaryColor}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                />
                <MotionPath
                    d="M80 120V220"
                    stroke={primaryColor}
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                />

                {/* The '0' - Middle (Broken/Disconnected) */}
                <MotionCircle
                    cx="200"
                    cy="170"
                    r="45"
                    stroke={secondaryColor}
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, rotate: -90 }}
                    animate={{ pathLength: 0.75, rotate: 0 }} // Intentionally broken circle
                    transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
                />
                {/* Floating element of the 0 */}
                <MotionCircle
                    cx="235"
                    cy="145"
                    r="6"
                    fill={secondaryColor}
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />

                {/* The '4' - Right */}
                <MotionPath
                    d="M320 200V120L280 180H330"
                    stroke={primaryColor}
                    strokeWidth="12"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.7 }}
                />
                <MotionPath
                    d="M320 120V220"
                    stroke={primaryColor}
                    strokeWidth="12"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.8, delay: 1 }}
                />

                {/* Magnifying Glass (Searching) */}
                <MotionPath
                    d="M230 190L260 220"
                    stroke={grayColor}
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                />
                <MotionCircle
                    cx="215"
                    cy="175"
                    r="20"
                    stroke={grayColor}
                    strokeWidth="4"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.4, delay: 1.1 }}
                />

                {/* Floating Particles */}
                <MotionCircle cx="100" cy="80" r="4" fill={primaryColor} animate={{ y: [0, -15, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 3 }} />
                <MotionCircle cx="300" cy="250" r="6" fill={secondaryColor} animate={{ y: [0, 15, 0], opacity: [0.5, 1, 0.5] }} transition={{ repeat: Infinity, duration: 4, delay: 1 }} />
            </svg>
        </MotionBox>
    );
};

export default ErrorIllustration;
