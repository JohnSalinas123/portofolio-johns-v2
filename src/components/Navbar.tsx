import { Container, HStack, Icon, Text } from "@chakra-ui/react";

import classes from "./Navbar.module.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router";

export function Navbar() {
	const lastScrollY = useRef(0);
	const ticking = useRef(false);

	// let location = useLocation();

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

	const handleDynamicLinkClick = (pathname: string) => {
		const element = document.getElementById(pathname);
		element?.scrollIntoView(true);
		element?.scrollIntoView({ behavior: "smooth" });
	};

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
						<NavLink className={classes.nav} to="/">
							About me
						</NavLink>
						<a
							onClick={() => handleDynamicLinkClick("experience")}
							className={classes.nav}
						>
							Experience
						</a>
						<NavLink className={classes.nav} to="/projects">
							Projects
						</NavLink>
						<NavLink className={classes.nav} to="/art">
							Art
						</NavLink>
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
