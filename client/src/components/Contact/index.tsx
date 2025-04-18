import { useState } from 'react';
import {
    Dialog,
    CloseButton,
    Portal,
    Button,
    For,
    HStack,
    VStack,
    Image
} from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import './style.css';

const contacts = [
    {
        "href": "https://www.linkedin.com/in/nam-bui-8887b8131",
        "name": "LinkedIn",
        "icon": faLinkedin
    },
    {
        "href": "https://github.com/nambui17",
        "name": "GitHub",
        "icon": faGithub
    },
    {
        "href": "mailto:nam.bui17@icloud.com",
        "name": "Email",
        "icon": faEnvelope
    }

]

export default function Contact() {
    const [, setOpen] = useState(false)
    const openContact = () => {
        setOpen(true);
    }

    return (
        <Dialog.Root size={"cover"} onOpenChange={(e) => setOpen(e.open)}>
            <Dialog.Trigger>
                <p className="link" onClick={openContact}>Contact Me</p>
            </Dialog.Trigger>
            <Portal>
                <Dialog.Backdrop />
                <Dialog.Positioner>
                    <Dialog.Content>
                        <Dialog.Header>
                            <Dialog.Title className={"diaHeader"}>Contact Me</Dialog.Title>
                        </Dialog.Header>
                        <Dialog.Body>
                            <VStack color={"black"} gap={20}>
                                <HStack gap={40} justifyContent={"center"} alignItems={"center"}>
                                    <For each={contacts}>
                                        {(contact, index) => (
                                            <a href={contact.href} target="_blank" key={index}>
                                                <FontAwesomeIcon icon={contact.icon} className="contact-icon" size="lg" />
                                            </a>
                                        )}
                                    </For>
                                </HStack>
                                <p id={"snippet"}>Feel free to reach out to me!</p>
                                <Image src={"Milo.png"} maxHeight={"200px"} borderRadius={"5px"}/>
                                <HStack justifyContent={"center"} alignItems={"center"} gap={40}>
                                    <VStack>
                                        <h1>Phone:</h1>
                                        <p>{"+1(612)860-5784"}</p>
                                    </VStack>
                                    <VStack>
                                        <h1>Email:</h1>
                                        <p>{"nam.bui17@icloud.com"}</p>
                                    </VStack>
                                </HStack>
                            </VStack>
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
