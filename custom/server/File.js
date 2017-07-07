let path = require("path");
let fs = require("fs");
class File {
    function getShapeList() {
        let shapes = [];
        const shapepath = path.join(__dirname, 'static/shapes');
        let shapeFolders = _getChildFolderList(shapepath);
        shapeFolders.forEach( 
            (folder, i) => {
                let shape = {};
                let folderpath = path.join(srcpath, folder);
                let colorpath = path.join(folderpath, "colors");
                shape.index = i;
                shape.name = folder;
                shape.thumnails = _getThumnails(folderpath);
                shape.colors = _getFileByLine(colorpath);
                shapes.push(shape);
            }
        );
        return shapes;
    }
    
    function _getChildFolderList(folderpath) {
      return fs.readdirSync(folderpath).filter(
        file => fs.lstatSync(path.join(folderpath, file)).isDirectory()
      );
    }
    
    function _getThumnails(folderpath) {
      return fs.readdirSync(folderpath).filter(
        file => file.includes(".svg")
      );
    };

    function _getFileByLIne(filepath) {
        return fs.readFileSync(filepath).toString().split("\n");
    };
}
exports File = new File();
