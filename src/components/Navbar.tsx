import { Container, HStack, Link, Text } from "@chakra-ui/react";

import classes from "./Navbar.module.css";

export function Navbar() {
	return (
		<Container className={classes.container}>
			<HStack justify="space-between" gap={20} className="jetbrains-mono">
				<HStack gap={8}>
					<Link variant="plain">About me</Link>
					<Link variant="plain">Experience</Link>
					<Link variant="plain">Projects</Link>
				</HStack>
				<HStack>
					<Text>John Salinas @ 2025</Text>
				</HStack>
			</HStack>
		</Container>
	);
}
