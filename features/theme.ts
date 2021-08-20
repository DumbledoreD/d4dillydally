import createCache, { EmotionCache } from "@emotion/cache";
import { createTheme } from "@material-ui/core/styles";

const theme = createTheme();

const createEmotionCache = (): EmotionCache => createCache({ key: "css" });

export { createEmotionCache, theme };
