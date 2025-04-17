import { useState } from 'react';
import {
    Dialog,
    CloseButton,
    Portal,
    Button,
} from '@chakra-ui/react';


import './style.css';

export default function Contact() {
    const [open, setOpen] = useState(false)
    const openContact = () => {
        setOpen(true);
    }
    
    return (
        <Dialog.Root lazyMount size={"lg"} onOpenChange={(e) => setOpen(e.open)}>
            <Dialog.Trigger asChild>
                <p className="link" onClick={openContact}>Contact Me</p>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title>Contact Me</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <p>
                                Feel free to reach out to me!
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
