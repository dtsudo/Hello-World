import { getCurrentVersion } from "../DTLibrary/VersionInfo.js";
import { getBackground } from "./Background.js";
import { getInitialLoadingScreenFrame } from "./InitialLoadingScreenFrame.js";
import { getSaveAndLoadData } from "./SaveAndLoadData.js";
import { migrateAllDataFromOlderVersionsToV1_04IfNeeded } from "./SavedDataMigration_ToV1_04.js";
import { getStockfishWrapper } from "./StockfishWrapper.js";
let getFirstFrame = function ({ buildType, isDesktop, debugMode, browserLocalStorage, stockfishLocation }) {
    let versionInfo = getCurrentVersion();
    if (versionInfo.version === "1.04") {
        migrateAllDataFromOlderVersionsToV1_04IfNeeded({ browserLocalStorage });
    }
    else {
        throw new Error("Unrecognized version");
    }
    let globalState = {
        buildType: buildType,
        isDesktop: isDesktop,
        debugMode: debugMode,
        saveAndLoadData: getSaveAndLoadData({ browserLocalStorage: browserLocalStorage }),
        stockfishWrapper: getStockfishWrapper({ stockfishLocation: stockfishLocation }),
        background: getBackground()
    };
    return getInitialLoadingScreenFrame({ globalState: globalState });
};
export { getFirstFrame };
