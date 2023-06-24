import { useEffect, useState } from "react"
import { TreeContentType, OpenStateType, FileType } from "../@types/FileTreeTypes";
import Files from "./files/Files";
import "./FileTree.css"

const TreeContent = ({ files, setFiles, width }: TreeContentType) => {
	const [openState, setOpenState] = useState<[] | OpenStateType[]>([])

	// Create open state of tree component
	const initiateOpenState = (files: FileType[], state: any[], parent: OpenStateType | null = null) => {
		files.forEach(item => {
			if (item.isFolder) {
				const openState: OpenStateType = {
					id: item.id, name: item.fileName, isOpen: false, parent
				}
				state.push(openState)
				initiateOpenState(item.subTree!, state, openState)
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
		initiateOpenState(files, state)
		setOpenState(state)
	}, [])

	return (
		<section className="file-tree" style={{ width: width ? width : 250 }}>
			<div className="file-tree__files-container">
				<Files data={files} openState={openState} toggleOpenState={toggleOpenState} />
			</div>
		</section>
	);
};

export default TreeContent;
