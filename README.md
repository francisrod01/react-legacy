# React Legacy #

Replacing Legacy Projects using ReactJS

- Course on [LinkedIn][1] by [Emmanuel Henri][2]

### Screenshot:

![](./screenshot.png)


### Adding Development Environment Variables In .env

To define permanent environment variables, create a file called .env in the root of your project:


This works.

```
REACT_APP_SECRET=mySecret
```

and this doesn't

```
SECRET=anotherSecret
```

More details about it in the [React oficial docs][3]


  [1]: https://www.linkedin.com/learning/react-replacing-legacy-projects
  [2]: https://www.linkedin.com/learning/instructors/emmanuel-henri
  [3]: https://github.com/facebook/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-development-environment-variables-in-env


### License

MIT
