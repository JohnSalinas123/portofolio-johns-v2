import { Container, HStack, Icon, Link, Text } from "@chakra-ui/react";

import classes from "./Navbar.module.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useEffect, useRef, useState } from "react";

export function Navbar() {
	const lastScrollY = useRef(0);
	const ticking = useRef(false);

	const [hidden, setHidden] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const currentScrollY = window.scrollY;

			if (!ticking.current) {
				window.requestAnimationFrame(() => {
					// console.log(currentScrollY, lastScrollY);
					setScrolled(currentScrollY > 110);

					// hide on scroll down
					if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
						setHidden(true);
					} else {
						setHidden(false);
					}

					lastScrollY.current = currentScrollY;
					ticking.current = false;
				});

				ticking.current = true;
			}
		};

		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div
			className={[
				classes["outer-container"],
				hidden && classes.hidden,
				scrolled && classes.scrolled,
			]
				.filter(Boolean)
				.join(" ")}
		>
			<Container className={classes["inner-container"]}>
				<HStack justify="space-between" gap={20} className="jetbrains-mono">
					<HStack gap={16}>
						<Link variant="plain">About me</Link>
						<Link variant="plain">Experience</Link>
						<Link variant="plain">Projects</Link>
					</HStack>
					<HStack>
						<Text>John Salinas @ 2025</Text>
						<Text>|</Text>
						<Icon className={classes.icon}>
							<FaLinkedin />
						</Icon>
						<Text>|</Text>
						<Icon className={classes.icon}>
							<IoIosMail />
						</Icon>
						<Text>|</Text>
						<Icon className={classes.icon}>
							<FaGithub />
						</Icon>
					</HStack>
				</HStack>
			</Container>
		</div>
	);
}
