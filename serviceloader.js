if (navigator.serviceWorker) {
    navigator.serviceWorker.register('/discord/sw.js', { scope: '/discord/' })
}