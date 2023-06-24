import { useEffect, useState, useRef } from "react"
import { FilesComponentType, FileType, OpenStateType } from "../../@types/FileTreeTypes";
import Folder from "./Folder";
import File from "./File";

type FilesContainerType = {
	openState: OpenStateType[]
	file: FileType
	toggleOpenState: (id: string) => void
}

const FilesContainer = ({ openState, file, toggleOpenState }: FilesContainerType) => {
	const [isOpen, setIsOpen] = useState(false)
	const filesContainer = useRef<null | HTMLSelectElement>(null)
	const div = useRef<null | HTMLDivElement>(null)

	useEffect(() => {
		const foundItem = openState.find(item => item.id === file.id)
		if (div.current && filesContainer.current) {
			if (foundItem?.isOpen) {
				if (!isOpen) {
					const height = div.current.getBoundingClientRect().height
					if (foundItem.parent) {
						const parent: HTMLElement | null = document.getElementById(foundItem.parent.name)
						if (parent) {
							const parentHeight = parent.getBoundingClientRect().height + height
							parent.style.height = parentHeight + "px"
						}
					}
					filesContainer.current.style.height = height + "px"
					setIsOpen(true)
				}
			} else {
				filesContainer.current.style.height = "0px"
				setIsOpen(false)
			}
		}
	}, [openState])

	return <section id={file.fileName} ref={filesContainer} className={`file-tree__folder-container`}>
		<div ref={div}>
			<Files data={file.subTree!} openState={openState} toggleOpenState={toggleOpenState} />
		</div>
	</section>
}

const Files = ({ data, openState, toggleOpenState }: FilesComponentType) => {
	return (
		<>
			{openState && data.map((file) => {
				return (
					<section key={file.id}>
						{file.isFolder ? (
							<>
								<section className="file-tree__row-container" >
									<Folder file={file} onclick={() => toggleOpenState(file.id)} openState={openState} />
								</section>
								< FilesContainer openState={openState} file={file} toggleOpenState={toggleOpenState} />
							</>
						) : (
							<section className="file-tree__row-container">
								<File file={file} />
							</section>
						)}
					</section>
				);
			})}
		</>
	);
};

export default Files;
