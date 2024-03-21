# Second Assigment

* Fixed type error in `about.html` line 233 extra < character

## Optimizations

* Added bundler
* Added bundle analyse
* Added Lighthouse to build step
* Addd Lazy loading to images
* Compressed video with command 

```shell
ffmpeg -i production_ID_3769033.mp4 -vcodec libx264 -crf 25 production_ID_3769033_tmp.mp4
```

**Before Bundler**

![Before Bundler](im2.png)

**After Bundler and Lazy loading**

![After Bundler and Lazy loading](im1.png)

### Build and serve

to build
```shell
npm run build
```

to run the builded server
```shell
npm serve dist
```