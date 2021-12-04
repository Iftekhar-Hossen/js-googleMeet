let meetingCodeFocus = document.querySelector(".meetingCodeFocus")
let getMeetingCode = document.querySelector(".getMeetingCode")
let joinMeeting = document.querySelector(".joinMeeting")
let meetingCode = document.querySelector(".meetingCode")


meetingCodeFocus.addEventListener("click", function () {
    if (meetingCode.innerHTML == "") {
        meetingCode.focus()
    }
})


getMeetingCode.addEventListener("click", function () {
    let generatedMeetingCode = ""
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (i = 0; i < 20; i++) {
        generatedMeetingCode += characters.charAt(Math.floor(Math.random() * characters.length))
    }

    meetingCode.innerHTML = generatedMeetingCode

})
joinMeeting.addEventListener("click", function(){
    window.location.replace(window.location.origin + `?meetingId=${meetingCode.innerHTML}`)
})
