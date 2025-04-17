import { Link } from "react-router-dom";
import { HStack } from "@chakra-ui/react";

import Contact from '@/components/Contact';

import pdf from '../../assets/Resume-2025.pdf'
import './style.css'

export default function Navbar() {
    return (
        <HStack 
            display={"flex"}
            justifyContent={"end"}
            id="navbar">
            <Link to="/" className="link">Home</Link>
            <a className="link" target="_blank" href={pdf}>CV</a>
            <Link to="/projects" className="link">Projects</Link>
            <Contact />
        </HStack>
    )
}