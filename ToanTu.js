let inputWidth = prompt("Nhập chiều rộng HCN");
    if (inputWidth<0){
        alert("Nhập sai, chiều rộng là 1 số dương");
    }
let inputHeight = prompt("Nhập chiều cao HCN");
    if (inputHeight<0){
        alert("Nhập sai, chiều cao là 1 số dương")
    }
let witdh = parseInt(inputWidth);
let height = parseInt(inputHeight);
let dt = witdh*height;
document.write("S hinh chu nhat = " +dt+" m2");