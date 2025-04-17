import {
    Dialog,
    CloseButton,
    Portal,
    Button,
} from '@chakra-ui/react';

import './style.css';

type Props = {
    key: string;
    description: string;
}

export default function ExtDescDialog({ key, description }: Props) {
    return (
        <Dialog.Root key={key} size={"lg"}>
            <Dialog.Trigger asChild>
                <Button variant="outline" size={"md"}>
                    Read More
                </Button>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Dialog Title</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <p>
                                {description}
                            </p>
                        </Dialog.Body>
                        <Dialog.Footer>
                            <Dialog.ActionTrigger asChild>
                                <Button variant="outline">Close</Button>
                            </Dialog.ActionTrigger>
                        </Dialog.Footer>
                        <Dialog.CloseTrigger asChild>
                            <CloseButton size="sm" />
                        </Dialog.CloseTrigger>
                    </Dialog.Content>
                </Dialog.Positioner>
            </Portal>
        </Dialog.Root>
    )
}