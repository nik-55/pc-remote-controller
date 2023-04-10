const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

const isMac = process.platform === 'darwin'
const isDevelopment = process.env.NODE_ENV !== 'production'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 600,
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