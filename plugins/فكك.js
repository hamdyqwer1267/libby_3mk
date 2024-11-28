let handler = async (m, { conn, usedPrefix, command, text }) => {
    // التأكد من وجود نص في المرسل
    if (!text) return conn.reply(m.chat, `*مـن فضلك اكتب كلمة لتفكيكها!*`, m);

    // تفكيك الكلمة
    let brokenWord = breakWord(text); // دالة التفكيك
    m.reply(`*الكلمة المفكوكة:* ${brokenWord}`);
}

// دالة لتفكيك الكلمة
function breakWord(word) {
    let letters = word.split('');
    let brokenWord = '';

    // عرض الحروف بشكل مفكك
    for (let i = 0; i < letters.length; i++) {
        brokenWord += letters[i] + ' ';  // إضافة فراغ بين كل حرف
    }

    return brokenWord.trim(); // إرجاع الكلمة المفكوكة
}

handler.help = ['تفكيك']
handler.tags = ['fun']
handler.command = ['فكك', 'break']
handler.fail = null

export default handler;
