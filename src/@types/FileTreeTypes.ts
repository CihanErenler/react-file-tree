export type FileType = {
	id: string;
	fileName: string;
	level: number;
	isFolder: boolean;
	subTree?: FileType[];
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
	isOpen: boolean,
	parent: OpenStateType | null
}

export type TreeContentType = {
	files: FileType[];
	setFiles: React.Dispatch<React.SetStateAction<FileType[] | []>>;
	width?: number | string
};