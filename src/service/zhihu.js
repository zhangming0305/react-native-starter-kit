export const getStartImage = () =>
    fetch('https://news-at.zhihu.com/api/4/start-image/1080*1776')
            .then(response => response.json());

export const getStartImage2 = () =>
    fetch('https://news-at.zhihu.com/api/4/start-image/1080*1776')
            .then(response => response.json());
