const openFileButton = document.querySelector('#openFile');
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

const imgDraw = (url, x, y, width, height) => {
    const urlCreator = window.URL || window.webkitURL;
    const mediaUrl = urlCreator.createObjectURL(url);
    const image = new Image();
    image.src = mediaUrl;
    image.onload = e => ctx.drawImage(image,x, y, width, height);
};

const randomNumbers = () => {
    let random = parseInt(Math.random() * 19);
    let result = 0;
    if(random >= 10 ){
        return  result = "꽝";
    }
    if(random >= 5){
        return result = "백원"
    }
    if(random >= 3){
        return result ='백만원';
    }
    if(random >= 1){
        return result ='천만원';
    }
    else{
        return result ='1억';
    }
   
};

const imgClear = () =>{
    ctx.beginPath();
    ctx.fillStyle  = "#94a3ae";
    ctx.fillRect(300, 150, 600, 300);
};

const imgHover = (ex, ey) => {
    ex = ex * 200;
    ey = ey * 150;
    imgClear();
    ctx.beginPath();
    ctx.fillStyle  = '#7d8e9d';
    ctx.fillRect(ex + 100, ey, 200, 150);
};

const imgClick = (ex, ey) => {
    ctx.fillText('Hello world',ex + 100, ey, );
}

const listener = (e, evt ) => {
    const setX = e.offsetX;
    const setY = e.offsetY;
    let xNum = 0;
    let yNum = 0;
    if (setX < 900) xNum = 3;
    if (setX < 700) xNum = 2;
    if (setX < 500) xNum = 1;
    if (setY < 300) yNum = 1;
    else            yNum = 2;
    switch (evt) {
        case 'move':
            imgHover(xNum, yNum);    
            break;
        case 'click':
            imgClick(xNum, yNum);
            break;
    };
};
canvas.addEventListener('mousemove', (e) => listener(e, 'move'));
canvas.addEventListener('click', (e) => listener(e, 'click'));
canvas.addEventListener('mouseleave', imgClear);

openFileButton.addEventListener("click", async e => {
    const [fileHandle] = await showOpenFilePicker();   
    const file = await fileHandle.getFile();
    canvas.width = 900;
    canvas.height = 450;
    imgDraw(file, 0,0, 900, 450);

    
});
