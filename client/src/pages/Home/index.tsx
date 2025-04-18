import { Grid, GridItem, Image, Box, Text, Heading } from '@chakra-ui/react';

import Timeline from '../../components/Timeline';

export default function Home() {
    return (
        <Grid
            templateColumns="repeat(3, 1fr)"
            gap={6}
            margin={"40px 40px 40px 40px"}
            padding={"10px 10px 10px 10px"}
        >
            <GridItem colSpan={3} rowSpan={1}>
                <Heading lang='vi'>Bùi Phương Nam</Heading>
            </GridItem>
            <GridItem colSpan={1} rowSpan={2}>
                <Box
                display={"flex"}
                justifyContent={"center"}
                placeItems="center">
                <Image
                    src="/Nam-Bui.png"
                    id='profile'
                    borderRadius="10px"
                    maxHeight="700px">
                </Image>
                </Box>
            </GridItem>
            <GridItem colSpan={2} rowSpan={2}>
                <Timeline />
            </GridItem>
            <GridItem colSpan={3} rowSpan={1}>
                <Text textAlign={"left"} fontSize={"20px"}>
                    Hi my name is Nam and I am an R&D Software Automation Engineer
                    currently working at STERIS. I am experienced in test automation
                    frameworks, web development, and continuous integration. As a former
                    Chemist in R&D I also have extensive knowledge and experience in analaytical
                    chemistry and chemical formulation and I have submitted several patents for
                    my chemical formulations in sterilant/disinfectants and buffer systems for
                    the sterilant/disinfectant.
                </Text>
            </GridItem>
        </Grid>
    )
}
