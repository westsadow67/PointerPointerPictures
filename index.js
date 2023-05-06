console.log("Hello World");
var newImage;

for (var i = 0; i < 2000; i++)
{
    newImage = "https://pointerpointer.com/images/" + i + ".jpg"
    document.getElementById("image" + i).src = newImage;
}