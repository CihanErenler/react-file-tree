import { useEffect, useState } from "react"
import { FileTreeType, OpenStateType, FileType } from "../../@types/FileTreeTypes";
import Files from "../files/Files";
import "./FileTree.css"

type FileTreeComponentType = {
	tree: FileTreeType;
	setTree: React.Dispatch<React.SetStateAction<FileTreeType>>;
	width?: number | string
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

const FileTree = ({ tree, setTree, width }: FileTreeComponentType) => {
	const [openState, setOpenState] = useState<[] | OpenStateType[]>([])

	// Create open state of tree component
	const initiateOpenState = (data: FileType[], state: any[]) => {
		data.forEach(item => {
			if (item.isFolder) {
				const openState: OpenStateType = { id: item.id, name: item.fileName, isOpen: false }
				state.push(openState)
				initiateOpenState(item.subTree!, state)
			}
		})
	}

	const toggleOpenState = (id: string) => {
		const tempState: OpenStateType[] = [...openState]
		const index = tempState.findIndex(item => item.id === id)
		tempState[index].isOpen = !tempState[index].isOpen
		setOpenState(tempState)
	}

	useEffect(() => {
		const state: any[] = []
		initiateOpenState(data.files, state)
		setOpenState(state)
	}, [])

	const { title, files } = tree;
	return (
		<section className="file-tree" style={{ width: width ? width : 250 }}>
			<h3 className="file-tree__title">{title}</h3>
			<div className="file-tree__files-container">
				<Files data={data.files} openState={openState} toggleOpenState={toggleOpenState} />
			</div>
		</section>
	);
};

export default FileTree;
