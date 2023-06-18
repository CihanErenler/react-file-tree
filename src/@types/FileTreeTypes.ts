export type FileType = {
	id: string;
	fileName: string;
	level: number;
	isFolder: boolean;
	subTree?: FileType[];
};

export type FileTreeType = {
	title: string;
	files: FileType[];
};

export type FilesComponentType = {
	data: FileType[];
	openState?: OpenStateType[] | null
	toggleOpenState: (id: string) => void
};


export type FileComponentType = {
	file: FileType,
	onclick?: () => void
	openState?: OpenStateType[] | null
}

export type OpenStateType = {
	id: string
	name: string
	isOpen: boolean
}