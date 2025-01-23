# environmental

```sh
yarn install
cd apps/cool-app
npx expo run:ios # just to verify the app builds and runs
```

## EAS .env chicken and egg

If you run `eas init` from `apps/cool-app/` you will get an error that a branch key is missing. Something like:

> Failed to read the app config from the project using "npx expo config" command: npx expo config --json exited with non-zero code: 1.<br />
> Falling back to the version of "@expo/config" shipped with the EAS CLI.<br />
> Branch API key is required: expo.android.config.branch.apiKey<br />

You might expect that adding a `.env` file that defines a valid, and arguably "private", but very likely environment-dependent, value for `BRANCH_KEY` would solve the issue. In fact, if you do this and run `npx expo config --json` it does succeed and even includes the `.env` `BRANCH_KEY` value in the json output, however, `eas init` still fails with the same error message.

Note: that `.env` files are `.gitignore`'d.
Note: for the purposes of this issue, you don't need a valid branch key, just a non-empty string.

## What I would expect

For eas commands where these values don't matter—where a `--environment` is not specified or required—I would expect it to use `.env` and to run successfully. For cases where an environment is specified, I would expect it to use `.env.<environment>`, `.env.local`, or `.env` in that order. Even better, if I'm logged into `eas` and and the project has defined the env variables, it might be nice if it pulled _those_ values and used them ephemerally.
