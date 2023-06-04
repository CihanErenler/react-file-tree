import { FilesComponentType, FileType } from "../../@types/FileTreeTypes";
import Folder from "./Folder";

const Files = ({ data }: FilesComponentType) => {
	return (
		<div>
			{data.map((file) => {
				return (
					<section className="file-tree__row-container">
						{file.isFolder ? (
							<div className="file-tree__folder">
								<span>+</span>
								<span>{file.fileName}</span>
								<Files data={file.subTree!} />
							</div>
						) : (
							<div className="file-tree__file">
								<span>-</span>
								<span>{file.fileName}</span>
							</div>
						)}
					</section>
				);
			})}
		</div>
	);
};

export default Files;
