import { Grid, For } from '@chakra-ui/react';
import projects from './projects.json';

import ProjectCard from '../../components/ProjectCard';

import './style.css'

export default function Projects() {
    return (
        <Grid>
            <For each={projects}>
                {(project) => (
                    <ProjectCard project={project} />
                )}
            </For>
        </Grid>
    )
}