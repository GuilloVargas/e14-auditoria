const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("e14Desktop", {
  selectOutputFolder: () => ipcRenderer.invoke("desktop:select-output-folder"),
  openPath: (path) => ipcRenderer.invoke("desktop:open-path", path),

  showItemInFolder: (path) =>
    ipcRenderer.invoke("desktop:show-item-in-folder", path),
});
