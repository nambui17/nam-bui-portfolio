import { Timeline, Text } from "@chakra-ui/react";

import "./style.css";

export default function TimelineComponent() {
    return (
        <Timeline.Root className="timeline" padding={"20px 20px 20px 20px"}>
            <Timeline.Item>
                <Timeline.Content className={"timeline-time"}>
                    <Timeline.Title whiteSpace="nowrap">2023-Present</Timeline.Title>
                </Timeline.Content>
                <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                </Timeline.Connector>
                <Timeline.Content textAlign={"left"}>
                    <Timeline.Title className={"company"}>STERIS</Timeline.Title>
                    <Timeline.Description className={"position"}>R&D Software Automation Engineer</Timeline.Description>
                    <Text className={"description"}>
                        Developed and implemented automated testing framework in an Agile development environment.
                        Worked on CI/CD pipelines in Azure DevOps to increase productivity and reliability in testing and
                        created emulators for automated testing of HMI/CCB.
                    </Text>
                </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
                <Timeline.Content className={"timeline-time"}>
                    <Timeline.Title whiteSpace="nowrap">2019-2023</Timeline.Title>
                </Timeline.Content>
                <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                </Timeline.Connector>
                <Timeline.Content textAlign={"left"}>
                    <Timeline.Title className={"company"}>STERIS</Timeline.Title>
                    <Timeline.Description className={"position"}>R&D Chemist I</Timeline.Description>
                    <Text className={"description"}>
                        Developed chemical formulations, wrote and validated test methods/SOP's,
                        and performed raw material analysis. Developed an automated chemical formulation
                        test tool for Peracetic acid that led to multiple patent applications for new formulations
                        and reduced uncertainty in building batches.
                    </Text>
                </Timeline.Content>
            </Timeline.Item>

            <Timeline.Item>
                <Timeline.Content className={"timeline-time"}>
                    <Timeline.Title>2019</Timeline.Title>
                </Timeline.Content>
                <Timeline.Connector>
                    <Timeline.Separator />
                    <Timeline.Indicator />
                </Timeline.Connector>
                <Timeline.Content textAlign={"left"}>
                    <Timeline.Title className={"company"}>University of Minnesota: Twin cities</Timeline.Title>
                    <Timeline.Description className={"position"}>BS Chemical Engineering</Timeline.Description>
                    <Text className={"description"}>
                        Graduated from the University of Minnesota: Twin Cities
                        with a Bachelors of Science in Chemical Engineering.
                    </Text>
                </Timeline.Content>
            </Timeline.Item>
        </Timeline.Root>
    )
}