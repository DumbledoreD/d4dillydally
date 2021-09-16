#!/bin/bash
set -e
IFS='|'

REACTCONFIG="{\
\"SourceDir\":\".\",\
\"DistributionDir\":\".next\",\
\"BuildCommand\":\"yarn build\",\
\"StartCommand\":\"yarn start\"\
}"

AWSCLOUDFORMATIONCONFIG="{\
\"configLevel\":\"project\",\
\"useProfile\":false,\
\"profileName\":\"default\",\
\"accessKeyId\":\"$AWS_ACCESS_KEY_ID\",\
\"secretAccessKey\":\"$AWS_SECRET_ACCESS_KEY\",\
\"region\":\"$AWS_REGION\"\
}"

AMPLIFY="{\
\"projectName\":\"$AMPLIFY_APP_NAME\",\
\"appId\":\"$AMPLIFY_APP_ID\",\
\"envName\":\"dev\",\
\"defaultEditor\":\"code\"\
}"

FRONTEND="{\
\"frontend\":\"typescript\",\
\"framework\":\"react\",\
\"config\":$REACTCONFIG\
}"

PROVIDERS="{\
\"awscloudformation\":$AWSCLOUDFORMATIONCONFIG\
}"

amplify pull \
--amplify $AMPLIFY \
--frontend $FRONTEND \
--providers $PROVIDERS \
--yes
