import { Flex, Text } from "@chakra-ui/react";

import classes from "./Footer.module.css";

export function Footer() {
	return (
		<>
			<Flex
				direction="row"
				justify="center"
				align="center"
				className={classes.container}
			>
				<Text>John Salinas @ 2025 | v2 | Based in LA</Text>
			</Flex>
		</>
	);
}
