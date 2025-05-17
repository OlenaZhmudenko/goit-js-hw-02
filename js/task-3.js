function checkForSpam(message) {
    const LowerCaseMessage = message.toLowerCase();
    return LowerCaseMessage.includes("spam") || LowerCaseMessage.includes("sale");
}
console.log(checkForSpam("Latest technology news"));
console.log(checkForSpam("Get best sale offers now!"));