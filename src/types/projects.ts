export interface Project {
	imageKey: string;
	title: string;
	description: string;
	skills: { name: string }[];
	links: {
		enabled: boolean;
		name: string;
		icon: string;
		url: string;
	}[];
	border: boolean;
}

export type ProjectsData<K extends string = string> = {
	all: K[];
	web: K[];
	mobile: K[];
	projects: Record<K, Project>;
};
