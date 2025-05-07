class CaesarCipher {
    constructor() {
        // Properties to store encryption/decryption results
        this.encryptedTextResult = null;
        this.decryptedTextResult = null;
        
        // Define a large character set that includes most Unicode characters
        // We'll work with a very large range to include emojis, symbols from different languages, etc.
        this.minCharCode = 0;         // Start of Unicode range
        this.maxCharCode = 65535;     // End of common Unicode range
        this.totalChars = this.maxCharCode - this.minCharCode + 1;
        
        // Додаємо нові повідомлення для підтримки перекладу
        this.messages = {
            en: {
                enterText: "Please enter text to encrypt!",
                enterValidShift: "Please enter a valid positive shift value!",
                encryptedCopied: "Encrypted text copied to clipboard!",
                decryptedCopied: "Decrypted text copied to clipboard!",
                selectFile: "Please select a file to encrypt!",
                selectEncryptedFile: "Please select a file to decrypt!",
                copyFailed: "Failed to copy text: "
            },
            ua: {
                enterText: "Будь ласка, введіть текст для шифрування!",
                enterValidShift: "Будь ласка, введіть дійсне позитивне значення зсуву!",
                encryptedCopied: "Зашифрований текст скопійовано до буфера обміну!",
                decryptedCopied: "Дешифрований текст скопійовано до буфера обміну!",
                selectFile: "Будь ласка, виберіть файл для шифрування!",
                selectEncryptedFile: "Будь ласка, виберіть файл для дешифрування!",
                copyFailed: "Не вдалося скопіювати текст: "
            }
        };
    }
    
    // Метод для отримання поточної мови з локального сховища
    getCurrentLanguage() {
        return localStorage.getItem('lang') || 'en';
    }
    
    // Метод для отримання повідомлення відповідною мовою
    getMessage(key) {
        const lang = this.getCurrentLanguage();
        return this.messages[lang][key] || this.messages['en'][key]; // Якщо переклад відсутній, повертаємо англійський
    }
    
    // Method to encrypt text using modified Caesar cipher for all Unicode characters
    encryptCaesar(text, shift) {
        // Make sure shift is positive and wrapped correctly
        shift = ((shift % this.totalChars) + this.totalChars) % this.totalChars;
        
        let result = '';
        
        // Process each character in the text
        for (let i = 0; i < text.length; i++) {
            let charCode = text.charCodeAt(i);
            
            // Check if character is within our range
            if (charCode >= this.minCharCode && charCode <= this.maxCharCode) {
                // Apply the shift within our range
                let shiftedCode = ((charCode - this.minCharCode + shift) % this.totalChars) + this.minCharCode;
                result += String.fromCharCode(shiftedCode);
            } else {
                // Keep characters outside our range unchanged (very rare high Unicode codepoints)
                result += text[i];
            }
        }
        
        return result;
    }
    
    // Method to decrypt text using modified Caesar cipher
    decryptCaesar(text, shift) {
        // Normalize shift value within our range
        shift = ((shift % this.totalChars) + this.totalChars) % this.totalChars;
        
        // For decryption, we go backward (total - shift)
        return this.encryptCaesar(text, this.totalChars - shift);
    }
    
    // Method to encrypt input text
    encryptText() {
        const textInput = document.getElementById('inputText').value;
        if (!textInput) {
            return alert(this.getMessage('enterText'));
        }
        
        const shift = parseInt(document.getElementById('shiftInput').value);
        if (isNaN(shift) || shift < 1) {
            return alert(this.getMessage('enterValidShift'));
        }
        
        // Encrypt the text
        this.encryptedTextResult = this.encryptCaesar(textInput, shift);
        
        // Display the encrypted text
        document.getElementById('encryptedTextArea').value = this.encryptedTextResult;
        document.getElementById('encryptionResults').style.display = 'block';
    }
    
    // Method to decrypt input text
    decryptText() {
        const encryptedInput = document.getElementById('encryptedInput').value;
        if (!encryptedInput) {
            return alert(this.getMessage('enterText'));
        }
        
        const shift = parseInt(document.getElementById('decryptShiftInput').value);
        if (isNaN(shift) || shift < 1) {
            return alert(this.getMessage('enterValidShift'));
        }
        
        // Decrypt the text
        this.decryptedTextResult = this.decryptCaesar(encryptedInput, shift);
        
        // Display the decrypted result
        this.showDecryptedResult(this.decryptedTextResult);
    }
    
    // Method to encrypt a file
    encryptFile() {
        let fileInput = document.getElementById('inputFile').files[0];
        if (!fileInput) {
            return alert(this.getMessage('selectFile'));
        }
        
        const shift = parseInt(document.getElementById('fileShiftInput').value);
        if (isNaN(shift) || shift < 1) {
            return alert(this.getMessage('enterValidShift'));
        }
        
        let reader = new FileReader();
        reader.onload = (event) => {
            let text = event.target.result;
            let encryptedText = this.encryptCaesar(text, shift);
            this.downloadFile(encryptedText, 'encrypted_' + fileInput.name);
        };
        reader.readAsText(fileInput);
    }
    
    // Method to decrypt a file
    decryptFile() {
        let encryptedFile = document.getElementById('encryptedFile').files[0];
        if (!encryptedFile) {
            return alert(this.getMessage('selectEncryptedFile'));
        }
        
        const shift = parseInt(document.getElementById('fileDecryptShiftInput').value);
        if (isNaN(shift) || shift < 1) {
            return alert(this.getMessage('enterValidShift'));
        }
        
        let reader = new FileReader();
        reader.onload = (event) => {
            let text = event.target.result;
            let decryptedText = this.decryptCaesar(text, shift);
            
            // Display the decrypted result
            this.showDecryptedResult(decryptedText);
            
            // Also offer to download the file
            this.decryptedTextResult = decryptedText;
        };
        reader.readAsText(encryptedFile);
    }
    
    // Method to show decrypted result
    showDecryptedResult(text) {
        document.getElementById('decryptedTextArea').value = text;
        document.getElementById('decryptionResult').style.display = 'block';
    }
    
    // Method to copy encrypted text to clipboard
    copyEncryptedText() {
        const textArea = document.getElementById('encryptedTextArea');
        if (textArea && textArea.value) {
            this.copyToClipboard(textArea.value);
            alert(this.getMessage('encryptedCopied'));
        }
    }
    
    // Method to copy decrypted text to clipboard
    copyDecryptedText() {
        const textArea = document.getElementById('decryptedTextArea');
        if (textArea && textArea.value) {
            this.copyToClipboard(textArea.value);
            alert(this.getMessage('decryptedCopied'));
        }
    }
    
    // Method to download encrypted text as a file
    downloadEncryptedText() {
        const textArea = document.getElementById('encryptedTextArea');
        if (textArea && textArea.value) {
            this.downloadFile(textArea.value, 'encrypted_text.txt');
        }
    }
    
    // Method to download decrypted text as a file
    downloadDecryptedText() {
        const textArea = document.getElementById('decryptedTextArea');
        if (textArea && textArea.value) {
            this.downloadFile(textArea.value, 'decrypted_text.txt');
        }
    }
    
    // Helper method to copy text to clipboard
    copyToClipboard(text) {
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error(this.getMessage('copyFailed'), err);
        }
        
        document.body.removeChild(textArea);
    }
    
    // Helper method to download file
    downloadFile(text, filename) {
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
}

// Create an instance of the CaesarCipher class
const caesarCipher = new CaesarCipher();