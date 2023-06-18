import { FileComponentType } from "../../@types/FileTreeTypes"
import { FcFile } from "react-icons/fc";

const File = ({ file }: FileComponentType) => {
  return (
    <div className="file-tree__file prevent-select" style={{ paddingLeft: file.level * 16 }}>
      <FcFile />
      <span className="file-tree__file-name">{file.fileName}</span>
    </div>
  )
}

export default File