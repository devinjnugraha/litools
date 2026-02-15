import AES from 'crypto-js/aes';
import Utf8 from 'crypto-js/enc-utf8';

const SECRET_KEY = process.env.NEXT_PUBLIC_SECRET_KEY || 'LITOOLS_DEFAULT_SECRET_KEY_v1';

export function encryptMessage(text: string, key?: string): string {
    if (!text) return '';
    try {
        const secret = key || SECRET_KEY;
        const ciphertext = AES.encrypt(text, secret).toString();
        return ciphertext;
    } catch (error) {
        console.error('Encryption error:', error);
        return '';
    }
}

export function decryptMessage(ciphertext: string, key?: string): string {
    if (!ciphertext) return '';
    try {
        const secret = key || SECRET_KEY;
        const bytes = AES.decrypt(ciphertext, secret);
        const originalText = bytes.toString(Utf8);
        return originalText;
    } catch (error) {
        console.error('Decryption error:', error);
        return '';
    }
}
