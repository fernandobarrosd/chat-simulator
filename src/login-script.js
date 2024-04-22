import { database } from "./database";
import { redirect } from "./utils";

const $loginForm = document.querySelector("#login-form");

function isName(inputValue) {
    const isNameRegex = /[A-Z][a-z]+(\s[A-Za-z][a-z]+){0,}/;

    return isNameRegex.test(inputValue);
}

$loginForm?.addEventListener("submit", e => {
    e.preventDefault();
    const formData = new FormData($loginForm);
    const senderName = formData.get("sender-name");
    const receiverName = formData.get("receiver-name");

    if (isName(senderName) && isName(receiverName)) {
        database.createChat(senderName, receiverName);
        redirect("/");
    }
});