console.log('hello world');




let fileHandle;

const textarea = document.querySelector("#textarea");
const image = document.querySelector("#image");
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
    [fileHandle] = await window.showOpenFilePicker(pickerOpts);

    let fileData = await fileHandle.getFile();
    let text = await fileData.text();
    image.src = fileData.name;
    
    // textarea.innerHTML = text;
    console.log(fileData);
}

async function save() {
    let stream = await fileHandle.createWritable();
    await stream.write(textarea.innerText);
    await stream.close();
}


async function saveAs() {
    fileHandle = await window.showSaveFilePicker();
    save();
}
