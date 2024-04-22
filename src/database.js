export const database = {
    createChat(senderName, receiverName) {
        localStorage.setItem("chat", JSON.stringify({
            sender: {
                name: senderName,
                messages: []
            },
            receiver: {
                name: receiverName,
                messages: [],
                predefinedMessages: []
            }
        }));
    },
    getChat() {
        return JSON.parse(localStorage.getItem("chat"));
    },

    addPredefinedMessage(content, repliedMessage) {
        const chat = this.getChat();
        chat.receiver.predefinedMessages.push({
            content,
            repliedMessage
        });
       localStorage.setItem("chat", JSON.stringify());
 
    },
    createSenderMessage(content) {},
    
    createReceiverMessage(content) {}
};