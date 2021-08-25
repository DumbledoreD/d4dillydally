import type { EmotionCache } from "@emotion/cache";
import createCache from "@emotion/cache";
import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

const theme = responsiveFontSizes(createTheme());

const createEmotionCache = (): EmotionCache => createCache({ key: "css" });

export { createEmotionCache, theme };
