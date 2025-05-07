const translations = {
  en: {
    // Навігація
    home: "Home",
    about: "About Us",
    tools: "Crypto Tools",
    faq: "FAQ",
    
    // Головна сторінка
    secure: "Secure Your Data",
    title: "Advanced Data Protection",
    descr: "Explore innovative methods to safeguard sensitive information through modern cryptographic techniques",
    text: "This website demonstrates various encryption methods, allowing you to encrypt and decrypt text securely",
    learn_more: "Learn more",
    
    // About сторінка
    about_title: "About Crypto Monocle",
    about_project_title: "About Project",
    about_project_text: "Crypto Monocle is a diploma project designed to provide secure encryption and decryption of information. Our platform offers a simple and intuitive interface for working with various encryption methods, allowing users to easily protect their text files. We focus on simplicity and security, making data protection accessible to everyone.",
    about_audience_title: "Our Audience",
    about_audience_text: "Our platform is designed for various users: students studying cryptography, individuals wanting to protect their personal data, those interested in encryption methods, and users who need to securely transmit text information. Whether you're learning about encryption or need practical tools for data protection, Crypto Monocle is here to help.",
    about_security_title: "Security",
    about_security_text: "Your security is our top priority. All operations are performed locally in your browser, without any server involvement. This means your data cannot be intercepted during the encryption or decryption process. Files are processed directly on your device, ensuring maximum privacy and security of your information.",
    about_how_title: "How It Works",
    about_how_text: "Using Crypto Monocle is simple: select your preferred encryption method, upload a text file or enter text in the provided field, and the encryption will happen instantly on your device. You can then download the encrypted file and securely share it. The same process applies for decryption, making it easy to protect and access your information.",
    
    // FAQ сторінка
    faq_title: "Frequently Asked Questions",
    faq_q1: "What is Crypto Monocle?",
    faq_a1: "Crypto Monocle is a web-based platform designed for secure text encryption and decryption. It's a diploma project that offers various encryption methods to protect your sensitive information.",
    faq_q2: "Is my data safe when using Crypto Monocle?",
    faq_a2: "Yes, all encryption and decryption operations are performed locally in your browser. Your data never leaves your device, ensuring maximum privacy and security.",
    faq_q3: "What encryption methods are available?",
    faq_a3: "We offer several industry-standard encryption methods. Each method comes with detailed information about its security level and recommended use cases.",
    faq_q4: "How do I encrypt my text?",
    faq_a4: "Simply choose an encryption method, upload a text file or enter your text in the provided field, and download the encrypted result. The process is fast and happens instantly on your device.",
    faq_q5: "Can I decrypt files encrypted by others using Crypto Monocle?",
    faq_a5: "Yes, as long as you have the correct decryption key and know which encryption method was used, you can decrypt any file that was encrypted using our platform.",
    faq_q6: "Is Crypto Monocle free to use?",
    faq_a6: "Yes, Crypto Monocle is completely free to use. It's an educational project aimed at making encryption accessible to everyone.",
    
    // Tools сторінка
    tools_title: "Encryption methods we propose",
    tool_otp_name: "One Time Password",
    tool_otp_descr: "OTP is a cipher that uses a random key equal in length to the message and applies XOR for encryption.",
    tool_caesar_name: "Caesar / ROT13",
    tool_caesar_descr: "A simple substitution cipher where each letter is shifted by a fixed number of positions.",
    tool_rsa_name: "RSA",
    tool_rsa_descr: "Asymmetric cipher using public & private keys, based on prime factorization",
    tool_aes_name: "AES",
    tool_aes_descr: "A symmetric encryption standard using multiple rounds of substitution and permutation.",
    
    // OTP сторінка
    otp_title: "One-Time Pad Encryption",
    otp_input_hint: "Click the button to encrypt the entered text",
    otp_placeholder: "Type or paste your text here...",
    otp_encrypt_btn: "Encrypt Text",
    otp_download_btn: "Download txt files",
    otp_copy_text_btn: "Copy text",
    otp_copy_key_btn: "Copy the key",
    otp_or: "OR",
    otp_insert_doc: "Insert txt document with the information you want to encrypt:",
    otp_encrypt_file_btn: "Encrypt",
    otp_decryption_title: "Decryption",
    otp_decrypt_doc: "Insert txt document with the information you want to decrypt:",
    otp_key_doc: "Insert txt document with the decryption key:",
    otp_decrypt_btn: "Decrypt",
    
    // Caesar сторінка
    caesar_title: "Universal Caesar Cipher",
    caesar_input_hint: "Enter text and shift value to encrypt with Universal Caesar cipher",
    caesar_placeholder: "Type or paste your text here... (supports all languages, symbols, emojis)",
    caesar_shift_label: "Shift value:",
    caesar_shift_placeholder: "Enter shift value",
    caesar_format_info: "Works with all Unicode characters including emojis and different languages",
    caesar_encrypt_btn: "Encrypt Text",
    caesar_encrypted_title: "Encrypted Text:",
    caesar_copy_encrypted_btn: "Copy Encrypted Text",
    caesar_download_encrypted_btn: "Download Encrypted File",
    caesar_or: "OR",
    caesar_select_file: "Select a file to encrypt:",
    caesar_encrypt_file_btn: "Encrypt File",
    caesar_decryption_title: "Decryption",
    caesar_decrypt_hint: "Paste encrypted text to decrypt",
    caesar_decrypt_placeholder: "Paste encrypted text here...",
    caesar_decrypt_btn: "Decrypt Text",
    caesar_decryption_result: "Decryption Result:",
    caesar_copy_decrypted_btn: "Copy Result",
    caesar_download_decrypted_btn: "Download Result",
    caesar_select_encrypted_file: "Select encrypted file to decrypt:",
    caesar_decrypt_file_btn: "Decrypt File",
    
    // RSA сторінка
    rsa_title: "RSA Encryption",
    rsa_generate_keys: "Generate Keys",
    rsa_key_hint: "Generate a key pair to use for encryption/decryption",
    rsa_key_size: "Key Size:",
    rsa_key_info: "Larger keys are more secure but slower",
    rsa_generate_btn: "Generate Key Pair",
    rsa_public_key: "Public Key:",
    rsa_copy_public_btn: "Copy Public Key",
    rsa_download_public_btn: "Download Public Key",
    rsa_private_key: "Private Key:",
    rsa_copy_private_btn: "Copy Private Key",
    rsa_download_private_btn: "Download Private Key",
    rsa_private_warning: "Keep your private key secure! Never share it with anyone.",
    rsa_encryption: "ENCRYPTION",
    rsa_encrypt_hint: "Enter text to encrypt with public key",
    rsa_encrypt_placeholder: "Type or paste your text here...",
    rsa_public_key_label: "Public Key:",
    rsa_public_key_placeholder: "Paste recipient's public key here...",
    rsa_encrypt_btn: "Encrypt Text",
    rsa_copy_encrypted_btn: "Copy Encrypted Text",
    rsa_download_encrypted_btn: "Download Encrypted Text",
    rsa_decryption: "DECRYPTION",
    rsa_decrypt_hint: "Enter encrypted text to decrypt with private key",
    rsa_decrypt_placeholder: "Paste encrypted text here...",
    rsa_private_key_label: "Private Key:",
    rsa_private_key_placeholder: "Paste your private key here...",
    rsa_decrypt_btn: "Decrypt Text",
    rsa_decrypt_result: "Decryption Result:",
    rsa_copy_decrypted_btn: "Copy Result",
    rsa_download_decrypted_btn: "Download Result",
    
    // AES сторінка
    aes_title: "AES Encryption",
    aes_input_hint: "Enter text and password to encrypt with AES-256",
    aes_placeholder: "Type or paste your text here...",
    aes_password_label: "Password:",
    aes_password_placeholder: "Enter encryption password",
    aes_format_info: "Supports text encryption with AES-256 CBC mode",
    aes_encrypt_btn: "Encrypt Text",
    aes_encrypted_title: "Encrypted Text (Base64):",
    aes_copy_encrypted_btn: "Copy Encrypted Text",
    aes_download_encrypted_btn: "Download Encrypted File",
    aes_or: "OR",
    aes_select_file: "Select a file to encrypt:",
    aes_encrypt_file_btn: "Encrypt File",
    aes_decryption_title: "Decryption",
    aes_decrypt_hint: "Paste encrypted text to decrypt",
    aes_decrypt_placeholder: "Paste encrypted text here...",
    aes_decrypt_password_label: "Password:",
    aes_decrypt_password_placeholder: "Enter decryption password",
    aes_decrypt_btn: "Decrypt Text",
    aes_decryption_result: "Decryption Result:",
    aes_copy_decrypted_btn: "Copy Result",
    aes_download_decrypted_btn: "Download Result",
    aes_select_encrypted_file: "Select encrypted file to decrypt:",
    aes_decrypt_file_btn: "Decrypt File",

    //Інструкції
    faq_q0: 'How do I learn more about encryption methods?',
    faq_a0: 'You can download our detailed guides to learn more about the encryption methods used in Crypto Monocle. We\'ve prepared comprehensive instructions for each encryption algorithm, including their strengths, weaknesses, and best use cases.',
    download_en: 'Download English Guide',
    download_ua: 'Download Ukrainian Guide'
  },
  ua: {
    // Навігація
    home: "Головна",
    about: "Про нас",
    tools: "Криптоінструменти",
    faq: "Поширені питання",
    
    // Головна сторінка
    secure: "Захистіть свої дані",
    title: "Розширений захист даних",
    descr: "Досліджуйте інноваційні методи захисту конфіденційної інформації за допомогою сучасної криптографії",
    text: "Цей сайт демонструє різні методи шифрування, що дозволяють безпечно шифрувати та дешифрувати текст",
    learn_more: "Дізнатися більше",
    
    // About сторінка
    about_title: "Про Crypto Monocle",
    about_project_title: "Про проєкт",
    about_project_text: "Crypto Monocle — це дипломний проєкт, створений для безпечного шифрування та дешифрування інформації. Наша платформа пропонує простий та інтуїтивно зрозумілий інтерфейс для роботи з різними методами шифрування, що дозволяє користувачам легко захищати свої текстові файли. Ми зосереджуємось на простоті та безпеці, роблячи захист даних доступним для кожного.",
    about_audience_title: "Наша аудиторія",
    about_audience_text: "Наша платформа розроблена для різних користувачів: студентів, які вивчають криптографію, осіб, які бажають захистити свої особисті дані, тих, хто цікавиться методами шифрування, та користувачів, яким потрібно безпечно передавати текстову інформацію. Незалежно від того, чи ви вивчаєте шифрування, чи потребуєте практичних інструментів для захисту даних, Crypto Monocle готовий допомогти.",
    about_security_title: "Безпека",
    about_security_text: "Ваша безпека — наш головний пріоритет. Усі операції виконуються локально у вашому браузері без залучення сервера. Це означає, що ваші дані не можуть бути перехоплені під час процесу шифрування чи дешифрування. Файли обробляються безпосередньо на вашому пристрої, забезпечуючи максимальну конфіденційність та безпеку вашої інформації.",
    about_how_title: "Як це працює",
    about_how_text: "Використання Crypto Monocle просте: оберіть бажаний метод шифрування, завантажте текстовий файл або введіть текст у відповідне поле, і шифрування відбудеться миттєво на вашому пристрої. Потім ви можете завантажити зашифрований файл та безпечно поділитися ним. Такий же процес застосовується для дешифрування, що полегшує захист та доступ до вашої інформації.",
    
    // FAQ сторінка
    faq_title: "Поширені запитання",
    faq_q1: "Що таке Crypto Monocle?",
    faq_a1: "Crypto Monocle — це веб-платформа для безпечного шифрування та дешифрування тексту. Це дипломний проєкт, який пропонує різні методи шифрування для захисту вашої конфіденційної інформації.",
    faq_q2: "Чи безпечні мої дані при використанні Crypto Monocle?",
    faq_a2: "Так, усі операції шифрування та дешифрування виконуються локально у вашому браузері. Ваші дані ніколи не покидають ваш пристрій, що забезпечує максимальну конфіденційність та безпеку.",
    faq_q3: "Які методи шифрування доступні?",
    faq_a3: "Ми пропонуємо кілька методів шифрування промислового стандарту. Кожен метод супроводжується детальною інформацією про рівень безпеки та рекомендовані випадки використання.",
    faq_q4: "Як зашифрувати текст?",
    faq_a4: "Просто оберіть метод шифрування, завантажте текстовий файл або введіть текст у відповідне поле та завантажте зашифрований результат. Процес швидкий і відбувається миттєво на вашому пристрої.",
    faq_q5: "Чи можу я дешифрувати файли, зашифровані іншими за допомогою Crypto Monocle?",
    faq_a5: "Так, якщо у вас є правильний ключ дешифрування і ви знаєте, який метод шифрування було використано, ви можете дешифрувати будь-який файл, зашифрований за допомогою нашої платформи.",
    faq_q6: "Чи Crypto Monocle безкоштовний для використання?",
    faq_a6: "Так, Crypto Monocle повністю безкоштовний для використання. Це освітній проєкт, спрямований на забезпечення доступності шифрування для всіх.",
    
    // Tools сторінка
    tools_title: "Методи шифрування, які ми пропонуємо",
    tool_otp_name: "Одноразовий пароль",
    tool_otp_descr: "OTP — це шифр, який використовує випадковий ключ, рівний за довжиною повідомленню, та застосовує XOR для шифрування.",
    tool_caesar_name: "Шифр Цезаря / ROT13",
    tool_caesar_descr: "Простий шифр заміни, де кожна літера зміщується на фіксовану кількість позицій.",
    tool_rsa_name: "RSA",
    tool_rsa_descr: "Асиметричний шифр, що використовує публічний і приватний ключі, заснований на факторизації простих чисел",
    tool_aes_name: "AES",
    tool_aes_descr: "Стандарт симетричного шифрування, що використовує кілька раундів заміни та перестановки.",
    
    // OTP сторінка
    otp_title: "Шифрування одноразовим паролем",
    otp_input_hint: "Натисніть кнопку, щоб зашифрувати введений текст",
    otp_placeholder: "Введіть або вставте ваш текст тут...",
    otp_encrypt_btn: "Зашифрувати текст",
    otp_download_btn: "Завантажити txt файли",
    otp_copy_text_btn: "Копіювати текст",
    otp_copy_key_btn: "Копіювати ключ",
    otp_or: "АБО",
    otp_insert_doc: "Вставте txt документ з інформацією, яку ви хочете зашифрувати:",
    otp_encrypt_file_btn: "Зашифрувати",
    otp_decryption_title: "Дешифрування",
    otp_decrypt_doc: "Вставте txt документ з інформацією, яку ви хочете дешифрувати:",
    otp_key_doc: "Вставте txt документ з ключем дешифрування:",
    otp_decrypt_btn: "Дешифрувати",
    
    // Caesar сторінка
    caesar_title: "Універсальний шифр Цезаря",
    caesar_input_hint: "Введіть текст та значення зсуву для шифрування універсальним шифром Цезаря",
    caesar_placeholder: "Введіть або вставте текст тут... (підтримуються всі мови, символи, емодзі)",
    caesar_shift_label: "Значення зсуву:",
    caesar_shift_placeholder: "Введіть значення зсуву",
    caesar_format_info: "Працює з усіма символами Unicode, включаючи емодзі та різні мови",
    caesar_encrypt_btn: "Зашифрувати текст",
    caesar_encrypted_title: "Зашифрований текст:",
    caesar_copy_encrypted_btn: "Копіювати зашифрований текст",
    caesar_download_encrypted_btn: "Завантажити зашифрований файл",
    caesar_or: "АБО",
    caesar_select_file: "Виберіть файл для шифрування:",
    caesar_encrypt_file_btn: "Зашифрувати файл",
    caesar_decryption_title: "Дешифрування",
    caesar_decrypt_hint: "Вставте зашифрований текст для дешифрування",
    caesar_decrypt_placeholder: "Вставте зашифрований текст тут...",
    caesar_decrypt_btn: "Дешифрувати текст",
    caesar_decryption_result: "Результат дешифрування:",
    caesar_copy_decrypted_btn: "Копіювати результат",
    caesar_download_decrypted_btn: "Завантажити результат",
    caesar_select_encrypted_file: "Виберіть зашифрований файл для дешифрування:",
    caesar_decrypt_file_btn: "Дешифрувати файл",
    
    // RSA сторінка
    rsa_title: "Шифрування RSA",
    rsa_generate_keys: "Згенерувати ключі",
    rsa_key_hint: "Згенеруйте пару ключів для використання при шифруванні/дешифруванні",
    rsa_key_size: "Розмір ключа:",
    rsa_key_info: "Більші ключі безпечніші, але повільніші",
    rsa_generate_btn: "Згенерувати пару ключів",
    rsa_public_key: "Публічний ключ:",
    rsa_copy_public_btn: "Копіювати публічний ключ",
    rsa_download_public_btn: "Завантажити публічний ключ",
    rsa_private_key: "Приватний ключ:",
    rsa_copy_private_btn: "Копіювати приватний ключ",
    rsa_download_private_btn: "Завантажити приватний ключ",
    rsa_private_warning: "Тримайте ваш приватний ключ в безпеці! Ніколи не діліться ним ні з ким.",
    rsa_encryption: "ШИФРУВАННЯ",
    rsa_encrypt_hint: "Введіть текст для шифрування публічним ключем",
    rsa_encrypt_placeholder: "Введіть або вставте ваш текст тут...",
    rsa_public_key_label: "Публічний ключ:",
    rsa_public_key_placeholder: "Вставте публічний ключ отримувача тут...",
    rsa_encrypt_btn: "Зашифрувати текст",
    rsa_copy_encrypted_btn: "Копіювати зашифрований текст",
    rsa_download_encrypted_btn: "Завантажити зашифрований текст",
    rsa_decryption: "ДЕШИФРУВАННЯ",
    rsa_decrypt_hint: "Введіть зашифрований текст для дешифрування приватним ключем",
    rsa_decrypt_placeholder: "Вставте зашифрований текст тут...",
    rsa_private_key_label: "Приватний ключ:",
    rsa_private_key_placeholder: "Вставте ваш приватний ключ тут...",
    rsa_decrypt_btn: "Дешифрувати текст",
    rsa_decrypt_result: "Результат дешифрування:",
    rsa_copy_decrypted_btn: "Копіювати результат",
    rsa_download_decrypted_btn: "Завантажити результат",
    
    // AES сторінка
    aes_title: "Шифрування AES",
    aes_input_hint: "Введіть текст і пароль для шифрування з AES-256",
    aes_placeholder: "Введіть або вставте ваш текст тут...",
    aes_password_label: "Пароль:",
    aes_password_placeholder: "Введіть пароль шифрування",
    aes_format_info: "Підтримує шифрування тексту за допомогою AES-256 в режимі CBC",
    aes_encrypt_btn: "Зашифрувати текст",
    aes_encrypted_title: "Зашифрований текст (Base64):",
    aes_copy_encrypted_btn: "Копіювати зашифрований текст",
    aes_download_encrypted_btn: "Завантажити зашифрований файл",
    aes_or: "АБО",
    aes_select_file: "Виберіть файл для шифрування:",
    aes_encrypt_file_btn: "Зашифрувати файл",
    aes_decryption_title: "Дешифрування",
    aes_decrypt_hint: "Вставте зашифрований текст для дешифрування",
    aes_decrypt_placeholder: "Вставте зашифрований текст тут...",
    aes_decrypt_password_label: "Пароль:",
    aes_decrypt_password_placeholder: "Введіть пароль дешифрування",
    aes_decrypt_btn: "Дешифрувати текст",
    aes_decryption_result: "Результат дешифрування:",
    aes_copy_decrypted_btn: "Копіювати результат",
    aes_download_decrypted_btn: "Завантажити результат",
    aes_select_encrypted_file: "Виберіть зашифрований файл для дешифрування:",
    aes_decrypt_file_btn: "Дешифрувати файл",

    //Інструкції
    faq_q0: 'Як дізнатися більше про методи шифрування?',
    faq_a0: 'Ви можете завантажити наші детальні посібники, щоб дізнатися більше про методи шифрування, які використовуються в Crypto Monocle. Ми підготували вичерпні інструкції для кожного алгоритму шифрування, включаючи їх переваги, недоліки та найкращі випадки використання.',
    download_en: 'Завантажити англійську інструкцію',
    download_ua: 'Завантажити українську інструкцію'
  }
};

// Мовні назви та прапори
const languageInfo = {
  en: {
    name: "English",
    flag: "image/photo/en.png"
  },
  ua: {
    name: "Українська",
    flag: "image/photo/ua.png"
  }
};

function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Оновлюємо поточний прапор і назву мови
  document.getElementById('current-flag').src = languageInfo[lang].flag;
  document.getElementById('current-language').textContent = languageInfo[lang].name;
}

function initLanguageSwitcher() {
  const dropdown = document.getElementById('language-dropdown');
  if (!dropdown) return;
  
  const options = document.querySelectorAll('.lang-option');
  const savedLang = localStorage.getItem('lang') || 'en';
  
  // Встановлюємо початкову мову
  updateLanguage(savedLang);
  
  // Відкриття/закриття випадаючого меню
  dropdown.querySelector('.lang-current').addEventListener('click', function(e) {
    e.stopPropagation(); // Запобігаємо поширенню події
    dropdown.classList.toggle('active');
  });
  
  // Закриття меню при кліку поза ним
  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target)) {
      dropdown.classList.remove('active');
    }
  });
  
  // Обробка кліків по опціях мови
  options.forEach(option => {
    option.addEventListener('click', function(e) {
      e.stopPropagation(); // Запобігаємо поширенню події
      const newLang = option.getAttribute('data-lang');
      localStorage.setItem('lang', newLang);
      updateLanguage(newLang);
      dropdown.classList.remove('active');
    });
  });
  
  // Перевірка чи на мобільному пристрої
  function checkMobile() {
    if (window.innerWidth <= 867.98) {
      dropdown.style.zIndex = "1051"; // Встановлюємо високий z-index
    } else {
      dropdown.style.zIndex = "1000";
    }
  }
  
  // Викликаємо при ініціалізації і при зміні розмірів вікна
  checkMobile();
  window.addEventListener('resize', checkMobile);
}

// Автоматично викликаємо функцію після завантаження DOM
document.addEventListener('DOMContentLoaded', initLanguageSwitcher);

function updateLanguage(lang) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Додати обробку плейсхолдерів
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
  
  // Оновлюємо поточний прапор і назву мови
  document.getElementById('current-flag').src = languageInfo[lang].flag;
  document.getElementById('current-language').textContent = languageInfo[lang].name;
}