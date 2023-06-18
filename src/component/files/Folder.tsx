import { useEffect } from "react";
import { FcFolder, FcOpenedFolder } from "react-icons/fc";
import { FileComponentType } from "../../@types/FileTreeTypes";
import { IoIosArrowForward } from "react-icons/io";

const Folder = ({ file, onclick, openState }: FileComponentType) => {
	const handleRotateArrow = (id: string) => {
		const foundItem = openState?.find(item => item.id === file.id)
		if (foundItem) {
			return foundItem.isOpen
		}
		return false
	}

	return <section className="file-tree__folder prevent-select" style={{ paddingLeft: file.level * 8 }} onClick={onclick}>
		<div>
			<IoIosArrowForward className={`arrow-icon ${handleRotateArrow(file.id) ? "rotate" : ""}`} />
			<FcFolder />
		</div>
		<span className="file-tree__file-name">{file.fileName}</span>
	</section>;
};

export default Folder;