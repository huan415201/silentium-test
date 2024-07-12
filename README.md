Firstly, I don't have a MacBook so I can only develop this app on Android.

Secondly, I couldn't add testing for this project due to errors while integrating Jest. (branch: origin/testing/jest)

Lastly, StoryListScreen doesn't include pagination, because I couldn't find any information about pagination in the documentation. (https://github.com/HackerNews/API#new-top-and-best-stories)

To run the app:

- yarn android

If it failed, try this way instead:

- yarn start
- After Metro is successfully up, press "a"

If both fail, try opening Android emulator first and attempting them again.

If non of these methods work, use the APK from this link:
https://drive.google.com/file/d/1Mdv-B9b-ICFvQx-ukameyppiEiE2qO7q/view?usp=sharing
