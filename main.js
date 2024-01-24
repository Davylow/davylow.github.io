/** Bai Tap 17/1/2024 */
// 1. Switch case
var x = 8;
    switch (x) {
        case 2: {
            document.write("Thu 2 \n")
        }break;
        case 3: {
            document.write("Thu 3 \n")
        }break;
        case 4: {
            document.write("Thu 4 \n")
        }break;
        case 5: {
            document.write("Thu \n")
        }break;
        case 6: {
            document.write("Thu 6 \n")
        }break;
        case 7: {
            document.write("Thu 7 \n")
        }break;
        case 8: {
            document.write("Chu nhat \n");
        }break;
    }

// 2. Switch case + mang
var y = ["Thu 2", "Thu 3", "Thu 4", "Thu 5", "Thu 6", "Thu 7", "Chu nhat"]

switch (x) {
    case 2: {
        document.write(y[x-2])
    }break;
    case 3: {
        document.write(y[x-2])
    }break;
    case 4: {
        document.write(y[x-2])
    }break;
    case 5: {
        document.write(y[x-2])
    }break;
    case 6: {
        document.write(y[x-2])
    }break;
    case 7: {
        document.write(y[x-2])
    }break;
    case 8: {
        document.write(y[x-2])
    }break;
}
// 3. Kiem tra so nguyen to
var t = 3;
if (t % 2 == 0 || t % t == 0){
    document.write("t la so nguyen to ")
}else {
    document.write("t ko phai la so nguyen to")
}
// 4. Hien thi ma tran 2 chieu