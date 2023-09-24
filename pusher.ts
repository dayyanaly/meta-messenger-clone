import Pusher from "pusher"
import ClientPusher from "pusher-js"

export const serverPusher = new Pusher({
    appId: "1675456",
    key: "84bfdd94d2ab83858e64",
    secret: "530d2724c125934a13f6",
    cluster: "ap2",
    useTLS: true
})

export const clientPusher = new ClientPusher("84bfdd94d2ab83858e64", {
    cluster: "ap2"
})