 import {
  InputData,
  jsonInputForTargetLanguage,
  quicktype,
} from "quicktype-core";
import { CustomDartTargetLanguage } from "./CustomDartRender";

 

export type CustomDartOption = {
  generateToString: boolean;
  generateCopyWith: boolean;
  generateToJson: boolean;
  useDefaultValue: boolean;
  useSerializable: boolean;
  useEquatable: boolean;
  useNum: boolean;
  generateKey: boolean;
  generateJsonComment: boolean;
  requiredProperties: boolean;
  useNullSafety: boolean;
  useJustTypes: boolean;
  finalProperties: boolean;
  generateFromJson: boolean;
  useFreezed: boolean;
  useHive: boolean;
};

export async function runQuickType(
  className: string,
  jsonString: string,
  dartOptions: CustomDartOption
): Promise<string> {
  const jsonInput = jsonInputForTargetLanguage("dart");
  await jsonInput.addSource({
    name: className,
    samples: [jsonString],
  });

  const inputData = new InputData();
  inputData.addInput(jsonInput);

  const dartLang = new CustomDartTargetLanguage(dartOptions);
  const { lines: result } = await quicktype({
    lang: dartLang,
    inputData,
    allPropertiesOptional: true,
    combineClasses: true,
    inferEnums: false,
  });
  let data = result.join("\n");

  var find = ", '";
  var regex = new RegExp(find, "g");
  data = data.replace(regex, "'");

  return data;
}
