let path = require("path");
let fs = require("fs");
let Store = require("./Store");

function storeShapeList() {
    let shapes = [];
    const shapepath = path.join(__dirname, '../static/shapes');
    let shapeFolders = _getChildFolderList(shapepath);
    shapeFolders.forEach( 
        (folder, i) => {
            let shape = {};
            let folderpath = path.join(shapepath, folder);
            let colorpath = path.join(folderpath, "colors");
            shape.index = i;
            shape.name = folder;
            shape.thumnails = _getThumnails(folderpath);
            shape.colors = _getFileByLine(colorpath);
            shapes.push(shape);
        }
    );
    Store.setShapeList(shapes);
}
function _getChildFolderList(folderpath) {
  return fs.readdirSync(folderpath).filter(
    file => fs.lstatSync(path.join(folderpath, file)).isDirectory()
  );
}
function _getThumnails(folderpath) {
    return fs.readdirSync(folderpath).filter(
        file => file.includes(".svg")
    ).map(
        file => path.join(folderpath.split("custom")[1], file)
    )
};
function _getFileByLine(filepath) {
    return fs.readFileSync(filepath).toString().split("\n");
};
exports.storeShapeList = storeShapeList;
