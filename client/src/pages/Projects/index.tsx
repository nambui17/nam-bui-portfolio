import { Grid, For, GridItem } from '@chakra-ui/react';
import projects from './projects.json';
import { Project } from '@/types/index';

import ProjectCard from '@/components/ProjectCard';

import './style.css'

const resolvedProjects: Project[] = projects.map((project) => ({
    ...project,
    image: project.image ? {
        src: project.image.src.replace(/^@/, 'src'),
        alt: project.image.alt
    } : undefined
}))

export default function Projects() {
    const num_rows: string = `repeat(${Math.ceil(projects.length / 2)}, 1fr)`
    return (
        <Grid templateRows={num_rows}>
            <For each={resolvedProjects}>
                {(project, index) => (
                    <GridItem key={index} colStart={index%2 + 1} rowStart={Math.floor(index/2) + 1}>
                        <ProjectCard project={project}/>
                    </GridItem>
                )}
            </For>
        </Grid>
    )
}