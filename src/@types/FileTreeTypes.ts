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
};

export type FolderType = {
	name: string;
};
