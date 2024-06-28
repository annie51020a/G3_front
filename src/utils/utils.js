// src/utils/utils.js
export function getImageUrl(file) {
    return new URL(`../assets/pic/product/${file}`, import.meta.url).href;
}