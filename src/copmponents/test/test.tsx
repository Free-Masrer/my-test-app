import { Button, Card, Flex, Grid, Heading, TextArea, Text, Theme } from "@radix-ui/themes"


export const MyApp = () => {
    return (
        <Card size="2">
            <Flex gap="6">
                <Flex direction="column" gap="3">
                    <Heading as="h5" size="2">
                        Global
                    </Heading>
                    <Grid gap="1">
                        <Text as="div" weight="bold" size="2" mb="1">
                            Feedback
                        </Text>
                        <TextArea placeholder="Write your feedback…" />
                    </Grid>
                    <Button>Send</Button>
                </Flex>

                <Theme accentColor="cyan" radius="full">
                    <Card size="2">
                        <Flex gap="6">
                            <Flex direction="column" gap="3">
                                <Heading as="h5" size="2">
                                    Child
                                </Heading>
                                <Grid gap="1">
                                    <Text as="div" weight="bold" size="2" mb="1">
                                        Feedback
                                    </Text>
                                    <TextArea placeholder="Write your feedback…" />
                                </Grid>
                                <Button>Send</Button>
                            </Flex>

                            <Theme accentColor="orange">
                                <Card size="2">
                                    <Flex direction="column" gap="3">
                                        <Heading as="h5" size="2">
                                            Grandchild
                                        </Heading>
                                        <Grid gap="1">
                                            <Text as="div" weight="bold" size="2" mb="1">
                                                Feedback
                                            </Text>
                                            <TextArea placeholder="Write your feedback…" />
                                        </Grid>
                                        <Button>Send</Button>
                                    </Flex>
                                </Card>
                            </Theme>
                        </Flex>
                    </Card>
                </Theme>
            </Flex>
        </Card>
    )
}