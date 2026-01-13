import { Container, HStack, Icon, Link, Text } from "@chakra-ui/react";

import classes from "./Navbar.module.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";

export function Navbar() {
	const lastScrollY = useRef(0);
	const ticking = useRef(false);

	const navigate = useNavigate();

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

	const handleNavClick = (anchor: string) => {
		navigate("/");

		setTimeout(() => {
			const id = `${anchor}-section`;
			const element = document.getElementById(id);
			if (element) {
				element.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}
		}, 300);
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
							onClick={() => handleNavClick("experience")}
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
						<Text className={classes["text-ignore"]}>|</Text>
						<Link
							className={classes.media}
							href="https://www.linkedin.com/in/johnsalinas123/"
							target="_blank"
							rel="noreferrer"
						>
							<Icon className={classes.icon}>
								<FaLinkedin />
							</Icon>
						</Link>

						<Text className={classes["text-ignore"]}>|</Text>
						<Link
							className={classes.media}
							href="mailto: salinasjohn257@gmail.com"
							target="_blank"
							rel="noreferrer"
						>
							<Icon className={classes.icon}>
								<IoIosMail />
							</Icon>
						</Link>

						<Text className={classes["text-ignore"]}>|</Text>
						<Link
							className={classes.media}
							href="https://github.com/JohnSalinas123"
							target="_blank"
							rel="noreferrer"
						>
							<Icon className={classes.icon}>
								<FaGithub />
							</Icon>
						</Link>
					</HStack>
				</HStack>
			</Container>
		</div>
	);
}
