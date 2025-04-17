type ImageInfo = {
    src: string | undefined;
    alt: string | undefined;
}

type Project = {
    title: string;
    description: string;
    extendedDescription: string;
    technologies?: string[];
    image?: ImageInfo | undefined;
}

export type { ImageInfo, Project };