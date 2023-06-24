import { useState } from "react";
import { FileTree, TreeContent, TreeTitle } from "./component";
import { FileType } from "./@types/FileTreeTypes";

const tempFiles: FileType[] = [
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
				id: "7",
				fileName: "lalalala",
				level: 2,
				isFolder: true,
				subTree: [
					{
						id: "8",
						fileName: "nanalar.txt",
						level: 3,
						isFolder: false,
					},
					{
						id: "9",
						fileName: "teyzeler.txt",
						level: 3,
						isFolder: false,
					}
				]
			},
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
]

function App() {
	const [files, setFiles] = useState<FileType[] | []>(tempFiles);

	return (
		<FileTree>
			<TreeTitle>Files</TreeTitle>
			<TreeContent files={files} setFiles={setFiles} />
		</FileTree>
	);
}

export default App;
