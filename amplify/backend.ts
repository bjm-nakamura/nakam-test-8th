import { defineBackend } from '@aws-amplify/backend';
import { helloWorld } from './function/hello-world/resource';
import { auth } from './auth/resource';
import { data } from "./data/resource";

const backend = defineBackend({
  helloWorld,
  auth,
  data
});

backend.addOutput({
  custom: {
    helloWorldFunctionName: backend.helloWorld.resources.lambda.functionName,
  },
});