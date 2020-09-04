let supportLocalNotification = true,
    serviceWorker = '',
    permission = 'default'

if (!('serviceWorker' in navigator) || !('PushManager' in window)) {
    supportLocalNotification = false
}

function registerServiceWorker() {
    return navigator.serviceWorker
        .register(`${process.env.PUBLIC_URL}/notification-sw.js`)
        .then((registeration) => {
            console.log('Service Worker successfully register!')
            return registeration
        })
        .catch((error) => {
            console.warn('Unable to register service worker.', error)
        })
}

function getUserPermission() {
    return new Promise((resolve, reject) => {
        const permissionResult = Notification.requestPermission((result) => {
            resolve(result)
        })

        if (permissionResult) {
            permissionResult.then(resolve, reject)
        }
    }).then(async (permissionResult) => {
        if (permissionResult !== 'granted') {
            throw new Error('Permission denied.')
        }
        return 'granted'
    })
}

async function main() {
    serviceWorker = await registerServiceWorker()
}

main()

export function supportsNotification() {
    return supportLocalNotification
}

export async function requestPermission() {
    permission = await getUserPermission()
    return permission
}

export function getPermission() {
    return permission
}

export function sendNotification({ title = 'Timet', body }) {
    const opts = { body, requireInteraction: true, sound: false }
    serviceWorker.showNotification(title, opts)
}
