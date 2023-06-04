import { useState } from "react";
import FileTree from "./component/fileTree/FileTree";
import { FileTreeType } from "./@types/FileTreeTypes";

function App() {
	const [tree, setTree] = useState<FileTreeType>({
		title: "Files",
		files: [],
	});

	return (
		<section>
			<FileTree tree={tree} setTree={setTree} />
		</section>
	);
}

export default App;
