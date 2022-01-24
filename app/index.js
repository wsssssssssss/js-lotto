console.log('hello world');


let fileHandle;

const textarea = document.querySelector("#textarea");
const image = document.querySelector("#image");
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const arr = [
    ['0', '0', '0']
    ['0', '0', '0']
];


// var fReader = new FileReader();
// fReader.readAsDataURL(this.files[0]);
// fReader.onloadend = function(event){
//     img.src = event.target.result;
//     console.log(event.target.result);
// }


const img = document.querySelector('.testImg');

const render = function() {
    canvas.width = img.width;
    canvas.height = img.height;
    
    ctx.drawImage(img, 0, 0);
}

const highRect = function (x, y) {

}

render();


canvas.addEventListener('mousemove', function({ offsetX, offsetY }) {
    if(offsetX >= 300 && offsetX <= 900 && offsetY >= 149 && offsetY <= 450){
        canvas.style.cursor = "pointer";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        render();
        for(let x=0; x<3; x++){
            for(let y=0; y<2; y++){
                if(offsetX >= 300+x*200 && offsetX <= 300+(x+1)*200 && offsetY >= 149+y*150.5 && offsetY <= 149+(y+1)*150.5){
                    ctx.fillStyle = '#000000';
                    ctx.rect(300+x*200, 149+y*150.5, 200, 150.5);
                    ctx.fill();
                }
            }
        }
    } else {
        canvas.style.cursor = "";
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        render();
    }
})

canvas.addEventListener('mouseleave', render);


canvas.addEventListener('click', function({ offsetX, offsetY }) {
    const num = Math.ceil(Math.random()*100);
    if(num >= 1 && num <= 5) {
        console.log('1억');
    } else if(num >= 6 && num <= 15){
        console.log('천만원');
    } else if(num >= 16 && num <= 25){
        console.log('백만원');
    } else if(num >= 26 && num <= 50){
        console.log('백원');
    } else {
        console.log('꽝');
    }
    
    if(offsetX >= 300 && offsetX <= 900 && offsetY >= 149 && offsetY <= 450){
        console.log(offsetX - 300, offsetY - 149);
    }
    
})


document.querySelector('.testImg').remove();


const pickerOpts = {
    types: [
        {
            description: 'Images',
            accept: {
                'image/*': ['.png', '.gif', '.jpeg', '.jpg']
            }
        },
    ],
    excludeAcceptAllOption: true,
    multiple: false
};

async function button() {
    [fileHandle] = await window.window.showOpenFilePicker(pickerOpts);

    if(!fileHandle) {
        return;
    }

    // let dirHandle = await window.showDirectoryPicker();
    // console.log(dirHandle.getFileHandle());

    let fileData = await fileHandle.getFile();
    // let text = await fileData.text();
    image.src = fileData.name;
    // textarea.innerHTML = text;

    // console.log(fileHandle.getFile());
}

async function returnPathDirectories(directoryHandle) {

    // 파일 선택기를 표시하여 파일 핸들을 가져옵니다.
    const handle = await self.showOpenFilePicker();
    if (!handle) {
      // 사용자가 취소했거나 파일을 열지 못했습니다.
      return;
    }
  
    // 디렉토리 핸들 안에 핸들이 있는지 확인
    const relativePaths = await directoryHandle.resolve(handle);
  
    if (relativePath === null) {
      // 디렉토리 핸들 내부에 없음
    } else {
      // relativePath는 상대 경로를 제공하는 이름 배열입니다.
  
      for (const name of relativePaths) {
        // 각 항목 기록
        console.log(name);
      }
    }
  }


// async function save() {
//     let stream = await fileHandle.createWritable();
//     await stream.write(textarea.innerText);
//     await stream.close();
// }


// async function saveAs() {
//     fileHandle = await window.showSaveFilePicker();
//     save();
// }




const imgDownLoad = async function() {
    const imgTag = document.createElement('img');
    imgTag.src = './paper.png';
    imgTag.classList.add('testImg');
    document.body.appendChild(imgTag);

    

    const img = document.querySelector(".testImg");

    img.addEventListener('load', function() {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext('2d');
    
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    
        const base64 = canvas.toDataURL('image/png');
        // strImage = base64.replace(/^data:image\/[a-z]+;base64,/, "");
    
        const aTag = document.createElement('a');
        aTag.download = "복권";
        aTag.href = base64;
        console.log(aTag);
        // aTag.click();
    
        document.querySelector('.testImg').remove();

    })
};





