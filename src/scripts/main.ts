import defaultImport, {defaultImport2, namedImport} from "./modules/defaultImport";
import * as hoge from "./modules/namedImport";
import './modules/import';
import './modules/first';

defaultImport();
namedImport();
hoge.namedImport();
hoge.namedImport();
defaultImport2();
namedImport();