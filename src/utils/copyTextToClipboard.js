async function copyClipboard(text) {
  if ("clipboard" in navigator) {
    return await navigator.clipboard.writeText(text);
  } else {
    return document.execCommand("copy", true, text);
  }
}

export const copyTextToClipboard = (string, copied, setIsCopied) => {
  copyClipboard(string)
    .then(() => {
      setIsCopied("true");
      setTimeout(() => {
        setIsCopied("false");
      }, 1500);
    })
    .catch((err) => {
      console.log(err);
    });
};