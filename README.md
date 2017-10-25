
# start script

```
npm start
```

then open [http://localhost:8080](http://localhost:8080)

# How to reproduce this problem

In the Test component, If I export it with :

```
export default Test;
```
It works fine

But if  I export it with :

```
export default WrappedTest;
```

It will throw an error like:

```
React Hot Loader: this component is not accepted by Hot Loader. \n' + 'Please check is it extracted as a top level class, a function or a variable. \n' + 'Click below to reveal the source location: \n', typeSignature
```

