import {
	HStack,
	VStack,
	Icon,
	Link,
	Collapsible,
	useDisclosure,
} from "@chakra-ui/react";

import classes from "./Navbar.module.css";

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

import { IoIosMail } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router";

export function Navbar() {
	const lastScrollY = useRef(0);
	const ticking = useRef(false);

	const navigate = useNavigate();

	const { open, onClose, onToggle } = useDisclosure();
	const [hidden, setHidden] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => {
			const currentScrollY = window.scrollY;

			if (!ticking.current) {
				window.requestAnimationFrame(() => {
					// console.log(currentScrollY, lastScrollY);
					setScrolled(currentScrollY > 80);

					// hide on scroll down
					if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
						setHidden(true);
						onClose();
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
			<Collapsible.Root
				className={classes["burger-nav"]}
				display={{ base: "flex", md: "none" }}
				w={{ base: "100%", md: 0 }}
				_open={{
					animation: "fade-in 300ms ease-out",
				}}
				open={open}
				onOpenChange={() => {
					console.log("changed state");
				}}
			>
				<Collapsible.Trigger onClick={onToggle}>
					<RxHamburgerMenu className={classes["burger-toggle"]} />
				</Collapsible.Trigger>
				<Collapsible.Content className={classes["burger-menu"]}>
					<VStack gap={8}>
						<NavLink className={classes.nav} to="/" onClick={onClose}>
							About me
						</NavLink>
						<a
							onClick={() => {
								onClose();
								handleNavClick("experience");
							}}
							className={classes.nav}
						>
							Experience
						</a>
						<NavLink className={classes.nav} to="/projects" onClick={onClose}>
							Projects
						</NavLink>
						<HStack gap={5}>
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

							{/* <Text className={classes["text-ignore"]}>|</Text> */}
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

							{/* <Text className={classes["text-ignore"]}>|</Text> */}
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
					</VStack>
				</Collapsible.Content>
			</Collapsible.Root>

			<HStack
				justify="space-between"
				gap={20}
				className={classes["inner-container"]}
				display={{ base: "none", md: "flex" }}
			>
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
				</HStack>
				<HStack gap={5}>
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

					{/* <Text className={classes["text-ignore"]}>|</Text> */}
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

					{/* <Text className={classes["text-ignore"]}>|</Text> */}
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
		</div>
	);
}
