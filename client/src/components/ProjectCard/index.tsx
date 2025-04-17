import {
    For,
    Tag,
    Card,
    Image
} from '@chakra-ui/react';

import ExtDescDialog from '../ExtDescDialog';
import { Project } from '@/types/index';
import './style.css';

type Props = {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const { title, description, technologies } = project;
    return (
        <Card.Root padding={4} margin={4}>
            {
                project.image ?
                <Image
                    src={project.image.src}
                    alt={project.image.alt}
                    maxHeight={200}
                /> :
                null
            }
            <Card.Title>
                {title}
            </Card.Title>
            <Card.Body>
                {description}
            </Card.Body>
            <Card.Footer>
                <For each={technologies}>
                    {(technology) => (
                        <Tag.Root key={technology}>
                            <Tag.Label>{technology}</Tag.Label>
                        </Tag.Root>
                    )}
                </For>
            </Card.Footer>
            <Card.Footer>
                <ExtDescDialog
                    key={project.title}
                    description={project.extendedDescription}
                />
            </Card.Footer>
        </Card.Root>
    )
}