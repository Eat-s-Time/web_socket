import http from 'http'
import { Server } from 'socket.io'

let interval: number = 3000

const socket = (server: http.Server) => {
  const io = new Server(server, {
    cors: {
      origin: '*',
    },
  })

  io.on('connection', (socket) => { //클라이언트와 연결됐을 시, 
    console.log('New client connected', socket.id)

    socket.on('postwaitingdata', (data: any) => { // 클라이언트에서 보낸 웨이팅 정보 출력
      console.log(data);

      const timer = setInterval(() => {
        socket.emit('getSever', "하린이"); //서버에서 보내기
        console.log("하린이")
      },  interval)

      socket.on('disconnect', () => {
        console.log('user disconnect', socket.id); //연결 끊겼을 때
        clearInterval(timer)
      })
    })
  })
}

export default socket
