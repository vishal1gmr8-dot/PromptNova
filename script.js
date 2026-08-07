function copyPrompt(id) {
    const text = document.getElementById(id).innerText;
    navigator.clipboard.writeText(text);
    alert("✅ Prompt Copied!");
}
