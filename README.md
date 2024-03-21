# Second Assigment

* Fixed type error in `about.html` line 233 extra < character

## Optimizations

* Added bundler
* Add bundle analyse
* Add Lighthouse to build step

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