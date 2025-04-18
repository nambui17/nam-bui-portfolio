import {
    Dialog,
    CloseButton,
    Portal,
    Button,
} from '@chakra-ui/react';

import './style.css';

type Props = {
    title: string;
    extDesc: string;
}

export default function ExtDescDialog({ title, extDesc }: Props) {
    return (
        <Dialog.Root size={"lg"}>
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
                            <Dialog.Title className="extDiagHeader">{title}</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body className={"extDesc"}>
                            {extDesc}
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