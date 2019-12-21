---
title: OpenCV Introduction
---
## With C++
When compiling `cpp` files with `OpenCV`, it looks for `opencv4.pc` to locate the installed libraries. We can use this file with `pkg-config` to get a list of `cflags` and `libs` to be specified while compiling the program.

So, we can build it using following command:
```bash
opencv_lib=`pkg-config --cflags --libs /usr/local/Cellar/opencv/4.1.0_1/lib/pkgconfig/opencv4.pc`
g++ $opencv_lib -std=c++11 file.cpp -o file.o
```

### OpenCV-4.1.0 Library location
pkg-config --cflags --libs /usr/local/Cellar/opencv/4.1.0_1/lib/pkgconfig/opencv4.pc

### Important locations
- `/usr/local/lib/pkgconfig/opencv4.pc`
- `/usr/local/Cellar/opencv/4.0.0/lib/pkgconfig/opencv4.pc`
- `/usr/local/Cellar/opencv/4.1.0_1/lib/pkgconfig/opencv4.pc`
- `/anaconda3/pkgs/libopencv-3.4.1-h0f2e407_1/lib/pkgconfig/opencv.pc`
- `/anaconda3/pkgs/libopencv-3.4.2-h7c891bd_1/lib/pkgconfig/opencv.pc`
- `/anaconda3/lib/pkgconfig/opencv.pc`