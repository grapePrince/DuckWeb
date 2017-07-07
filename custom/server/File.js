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
                shape.index = i;
                shape.name = folder;
                shape.thumnails = _getThumnails(folderpath);
                shape.colors = _getColors(folderpath);
                shapes.push(shape);
            }
        );
        return shapes;
    }
    
    function _getChildFolderList(srcpath) {
      return fs.readdirSync(srcpath).filter(
        file => fs.lstatSync(path.join(srcpath, file)).isDirectory()
      );
    }
    
    function _getThumnails(folderpath) {
      return fs.readdirSync(folderpath).filter(
        file => {
        console.log(file);
      })
    };
}
exports File = new File();
