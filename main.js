const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const isMac = process.platform === 'darwin'
const isDevelopment = process.env.NODE_ENV !== 'production'
const port = 3123

const {express_app} = require('./api.js')

// Create local server to listen to request from main server
express_app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
    })

    // Open devtools 
    if (isDevelopment) {
        win.webContents.openDevTools()
    }

    win.loadFile(path.join(__dirname, './renderer/index.html'))
}

app.whenReady().then(() => {
    createWindow()

    // For macos
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })

    // Do not show default menu in window and linux
    Menu.setApplicationMenu(null)
})

// For window and linux
app.on('window-all-closed', () => {
    if (!isMac) {
        app.quit();
    }
});