let myVideo = (
    function(){
        function init(userId, meetingId){
            userConnectionFromClient()
        }
        let socket = null
        function userConnectionFromClient(){
            socket = io.connect()
            socket.on("connect", ()=>{
                alert("Socket.io from Client Side")
            })
        }
        return {
            init: function(userId, meetingId){
                init(userId, meetingId)
            }
        }
    }
)()