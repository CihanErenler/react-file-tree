import { FileTreeType } from "../../@types/FileTreeTypes";
import Files from "../files/Files";

type FileTreeComponentType = {
	tree: FileTreeType;
	setTree: React.Dispatch<React.SetStateAction<FileTreeType>>;
};

const data = {
	title: "Files",
	files: [
		{
			id: "1",
			fileName: "Components",
			level: 1,
			isFolder: true,
			subTree: [
				{
					id: "2",
					fileName: "File.txt",
					level: 2,
					isFolder: false,
				},
				{
					id: "3",
					fileName: "Nanay.txt",
					level: 2,
					isFolder: false,
				},
			],
		},
		{
			id: "4",
			fileName: "Tarlalar",
			level: 1,
			isFolder: true,
			subTree: [
				{
					id: "5",
					fileName: "bablar.txt",
					level: 2,
					isFolder: false,
				},
				{
					id: "6",
					fileName: "nanalar.txt",
					level: 2,
					isFolder: false,
				},
			],
		},
	],
};

const FileTree = ({ tree, setTree }: FileTreeComponentType) => {
	const { title, files } = tree;
	return (
		<section className="file-tree">
			<h3 className="file-tree__title">{title}</h3>
			<div className="file-tree__files-container">
				<Files data={data.files} />
			</div>
		</section>
	);
};

export default FileTree;
