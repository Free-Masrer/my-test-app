import { Box, TabNav } from "@radix-ui/themes"


export const Header = () => {
    return (
        <Box
            style={{ backgroundColor: 'var(--gray-a2)', borderRadius: 'var(--radius-3)' }}
        >
            <Box asChild>
                <TabNav.Root>
                    <TabNav.Link href="#" active>
                        Account
                    </TabNav.Link>
                    <TabNav.Link href="#">Documents</TabNav.Link>
                    <TabNav.Link href="#">Settings</TabNav.Link>
                </TabNav.Root>
            </Box>
        </Box>
    )
}