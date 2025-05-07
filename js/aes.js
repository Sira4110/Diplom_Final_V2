class AESEncryptor {
    constructor() {
        // Додаємо повідомлення для підтримки перекладу
        this.messages = {
            en: {
                enterTextPassword: "Please enter both text and password",
                enterEncryptedPassword: "Please enter both encrypted text and password",
                selectFilePassword: "Please select a file and enter a password",
                selectEncryptedFilePassword: "Please select an encrypted file and enter a password",
                decryptionFailed: "Decryption failed. Check the password and encrypted data.",
                fileDecryptionFailed: "Decryption failed. Check the password and file.",
                encryptedCopied: "Encrypted text copied to clipboard!",
                decryptedCopied: "Decrypted text copied to clipboard!"
            },
            ua: {
                enterTextPassword: "Будь ласка, введіть текст та пароль",
                enterEncryptedPassword: "Будь ласка, введіть зашифрований текст та пароль",
                selectFilePassword: "Будь ласка, виберіть файл та введіть пароль",
                selectEncryptedFilePassword: "Будь ласка, виберіть зашифрований файл та введіть пароль",
                decryptionFailed: "Дешифрування не вдалося. Перевірте пароль та зашифровані дані.",
                fileDecryptionFailed: "Дешифрування не вдалося. Перевірте пароль та файл.",
                encryptedCopied: "Зашифрований текст скопійовано до буфера обміну!",
                decryptedCopied: "Дешифрований текст скопійовано до буфера обміну!"
            }
        };
    }

    // Метод для отримання поточної мови (аналогічно до caesar.js)
    getCurrentLanguage() {
        return localStorage.getItem('lang') || 'en';
    }

    // Метод для отримання повідомлення відповідною мовою
    getMessage(key) {
        const lang = this.getCurrentLanguage();
        return this.messages[lang][key] || this.messages['en'][key];
    }

    async encryptText() {
        const text = document.getElementById('inputText').value;
        const password = document.getElementById('passwordInput').value;

        if (!text || !password) {
            alert(this.getMessage('enterTextPassword'));
            return;
        }

        const encrypted = await this.encryptWithPassword(text, password);
        document.getElementById('encryptedTextArea').value = encrypted;
        document.getElementById('encryptionResults').style.display = 'block';
    }

    async decryptText() {
        const encryptedBase64 = document.getElementById('encryptedInput').value;
        const password = document.getElementById('decryptPasswordInput').value;

        if (!encryptedBase64 || !password) {
            alert(this.getMessage('enterEncryptedPassword'));
            return;
        }

        try {
            const decrypted = await this.decryptWithPassword(encryptedBase64, password);
            document.getElementById('decryptedTextArea').value = decrypted;
            document.getElementById('decryptionResult').style.display = 'block';
        } catch (error) {
            alert(this.getMessage('decryptionFailed'));
        }
    }

    async encryptFile() {
        const fileInput = document.getElementById('inputFile');
        const password = document.getElementById('filePasswordInput').value;
    
        if (!fileInput.files.length || !password) {
            alert(this.getMessage('selectFilePassword'));
            return;
        }
    
        const file = fileInput.files[0];
        const arrayBuffer = await file.arrayBuffer();
        const text = new TextDecoder().decode(arrayBuffer);
        const encrypted = await this.encryptWithPassword(text, password);
    
        const blob = new Blob([encrypted], { type: 'text/plain' });
        this.downloadBlob(blob, 'encrypted_' + file.name); // Використовуємо оригінальну назву файлу
    }
    
    async decryptFile() {
        const fileInput = document.getElementById('encryptedFile');
        const password = document.getElementById('fileDecryptPasswordInput').value;
    
        if (!fileInput.files.length || !password) {
            alert(this.getMessage('selectEncryptedFilePassword'));
            return;
        }
    
        const file = fileInput.files[0];
        const arrayBuffer = await file.arrayBuffer();
        const encryptedBase64 = new TextDecoder().decode(arrayBuffer);
    
        try {
            const decrypted = await this.decryptWithPassword(encryptedBase64, password);
            const blob = new Blob([decrypted], { type: 'text/plain' });
            this.downloadBlob(blob, 'decrypted_' + file.name); // Використовуємо оригінальну назву файлу
        } catch (error) {
            alert(this.getMessage('fileDecryptionFailed'));
        }
    }

    // Інші методи залишаються незмінними, але використовують this.getMessage()
    async encryptWithPassword(plaintext, password) {
        const iv = crypto.getRandomValues(new Uint8Array(16));
        const key = await this.getKeyFromPassword(password, iv);
        const encoded = new TextEncoder().encode(plaintext);
        const encrypted = await crypto.subtle.encrypt(
            { name: "AES-CBC", iv },
            key,
            encoded
        );
        const combined = new Uint8Array([...iv, ...new Uint8Array(encrypted)]);
        return btoa(String.fromCharCode(...combined));
    }

    async decryptWithPassword(base64Encrypted, password) {
        const data = Uint8Array.from(atob(base64Encrypted), c => c.charCodeAt(0));
        const iv = data.slice(0, 16);
        const encrypted = data.slice(16);
        const key = await this.getKeyFromPassword(password, iv);
        const decrypted = await crypto.subtle.decrypt(
            { name: "AES-CBC", iv },
            key,
            encrypted
        );
        return new TextDecoder().decode(decrypted);
    }

    async getKeyFromPassword(password, salt) {
        const enc = new TextEncoder();
        const keyMaterial = await crypto.subtle.importKey(
            'raw',
            enc.encode(password),
            { name: 'PBKDF2' },
            false,
            ['deriveKey']
        );

        return crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt,
                iterations: 100000,
                hash: 'SHA-256'
            },
            keyMaterial,
            { name: 'AES-CBC', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
    }

    copyEncryptedText() {
        const encrypted = document.getElementById('encryptedTextArea').value;
        navigator.clipboard.writeText(encrypted).then(() => {
            alert(this.getMessage('encryptedCopied'));
        }).catch(err => {
            console.error('Copy failed:', err);
        });
    }

    downloadEncryptedText() {
        const encrypted = document.getElementById('encryptedTextArea').value;
        const blob = new Blob([encrypted], { type: 'text/plain' });
        this.downloadBlob(blob, 'encrypted_text.txt');
    }

    copyDecryptedText() {
        const decrypted = document.getElementById('decryptedTextArea').value;
        navigator.clipboard.writeText(decrypted).then(() => {
            alert(this.getMessage('decryptedCopied'));
        }).catch(err => {
            console.error('Copy failed:', err);
        });
    }

    downloadDecryptedText() {
        const decrypted = document.getElementById('decryptedTextArea').value;
        const blob = new Blob([decrypted], { type: 'text/plain' });
        this.downloadBlob(blob, 'decrypted_text.txt');
    }

    downloadBlob(blob, filename) {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
    }
}

// Створюємо екземпляр класу
const aesEncryptor = new AESEncryptor();