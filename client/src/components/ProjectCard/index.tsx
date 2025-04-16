import { For, Tag, Card } from '@chakra-ui/react';

import './style.css';

type Project = {
    title: string;
    description: string;
    technologies?: string[];
}

type Props = {
    project: Project;
}

export default function ProjectCard({ project }: Props) {
    const { title, description, technologies } = project;
    return (
        <Card.Root padding={4} margin={4}>
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
        </Card.Root>
    )
}