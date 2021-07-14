function dohvatiSlike()
{
    return document.getElementsByClassName("my");
}

function promjeniLink(imageNumber)
{
    return "Assets/slider-image-"+imageNumber+".jpg";
}

function prebaciSliku(){
    let images = dohvatiSlike();
    imageNumber = 9;
    for (let index = 8; index >= 0; index--) {
        let link = promjeniLink(imageNumber-1);
        imageNumber--;
        if(index == 0)
        {
            imageNumber = 9;
            link = promjeniLink(imageNumber);
        }
        images[index].src = link;
        //console.log(images);
    }
}