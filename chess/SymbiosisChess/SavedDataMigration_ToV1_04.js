import { fetchData, persistData } from "../DTLibrary/FileIO.js";
import { getVersionHistory } from "../DTLibrary/VersionInfo.js";
import { FILE_ID_FOR_SOUND_AND_MUSIC_VOLUME } from "./GlobalConstants.js";
import { migrateSoundAndMusicVolumeDataFromOlderVersionsToV1_03IfNeeded } from "./SavedDataMigration_ToV1_03.js";
let migrateSessionStateDataFromOlderVersionsToV1_04IfNeeded = function ({ browserLocalStorage }) {
    // TODO
};
let migrateSoundAndMusicVolumeDataFromOlderVersionsToV1_04IfNeeded = function ({ browserLocalStorage }) {
    let versionInfo = getVersionHistory();
    let version1_03 = versionInfo.find(x => x.version === "1.03");
    let version1_04 = versionInfo.find(x => x.version === "1.04");
    let fileId = FILE_ID_FOR_SOUND_AND_MUSIC_VOLUME;
    let v1_04Data = fetchData({ fileId, version: version1_04, browserLocalStorage });
    if (v1_04Data !== null)
        return;
    migrateSoundAndMusicVolumeDataFromOlderVersionsToV1_03IfNeeded({ browserLocalStorage });
    let v1_03Data = fetchData({ fileId, version: version1_03, browserLocalStorage });
    if (v1_03Data === null)
        return;
    persistData({ fileId, version: version1_04, byteList: v1_03Data, browserLocalStorage });
};
let migrateAllDataFromOlderVersionsToV1_04IfNeeded = function ({ browserLocalStorage }) {
    migrateSessionStateDataFromOlderVersionsToV1_04IfNeeded({ browserLocalStorage });
    migrateSoundAndMusicVolumeDataFromOlderVersionsToV1_04IfNeeded({ browserLocalStorage });
};
export { migrateAllDataFromOlderVersionsToV1_04IfNeeded };
