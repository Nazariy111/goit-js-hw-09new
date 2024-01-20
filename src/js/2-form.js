const storageKey = "feedback-form-state";

const form = document.querySelector('.feedback-form');


form.addEventListener('input', (e) => {
    const userEmail = e.currentTarget.elements.email.value;
    const userMessage = e.currentTarget.elements.message.value;
    
    const userInfo = {
        email: userEmail,
        message: userMessage,
    };

    putToStorage(storageKey, userInfo);
});


form.addEventListener('submit', (e) => { 
    e.preventDefault();
    const info = getFromStorage(storageKey) || {};
    console.log(info);
    
    localStorage.removeItem(storageKey);
    form.reset();
});



function getFromStorage(key = 'empty') {
    const data = localStorage.getItem(key);

    try {
        const result = JSON.parse(data);
        return result;
    }
    catch {
        return data;
    };
};


function putToStorage(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);
};


function restoreInfo() { 
    const info = getFromStorage(storageKey) || {};

    form.elements.email.value = info.email || '';
    form.elements.message.value = info.message || '';
};

restoreInfo();