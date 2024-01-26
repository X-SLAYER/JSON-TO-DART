import {
  BooleanOption,
  StringOption,
} from "quicktype-core/dist/RendererOptions";
import { CustomDartOption } from ".";

export const generateDartOptions = (options: CustomDartOption) => {
  return {
    nullSafety: new BooleanOption(
      "null-safety",
      "Null Safety",
      options.useNullSafety
    ),
    justTypes: new BooleanOption(
      "just-types",
      "Types only",
      options.useJustTypes
    ),
    useEquatable: new BooleanOption(
      "just-types",
      "Types only",
      options.useEquatable
    ),
    codersInClass: new BooleanOption(
      "coders-in-class",
      "Put encoder & decoder in Class",
      false
    ),
    methodNamesWithMap: new BooleanOption(
      "from-map",
      "Use method names fromMap() & toMap()",
      false,
      "secondary"
    ),
    requiredProperties: new BooleanOption(
      "required-props",
      "Make all properties required",
      options.requiredProperties
    ),
    finalProperties: new BooleanOption(
      "final-props",
      "Make all properties final",
      options.finalProperties
    ),
    generateCopyWith: new BooleanOption(
      "copy-with",
      "Generate CopyWith method",
      options.generateCopyWith
    ),
    useFreezed: new BooleanOption(
      "use-freezed",
      "Generate class definitions with @freezed compatibility",
      options.useFreezed,
      "secondary"
    ),
    useHive: new BooleanOption(
      "use-hive",
      "Generate annotations for Hive type adapters",
      options.useHive,
      "secondary"
    ),
    useJsonAnnotation: new BooleanOption(
      "use-json-annotation",
      "Generate annotations for json_serializable",
      options.useSerializable,
      "secondary"
    ),
    generateToJson: new BooleanOption(
      "to-json",
      "Generate toJson() method",
      options.generateToJson,
      "secondary"
    ),
    partName: new StringOption(
      "part-name",
      "Use this name in `part` directive",
      "NAME",
      "",
      "secondary"
    ),
    useNum: new BooleanOption(
      "use-num",
      "Use num instead of int/double",
      options.useNum,
      "secondary"
    ),
    generateKey: new BooleanOption(
      "generate-key",
      "Generate key for Hive type adapters",
      options.generateKey,
      "secondary"
    ),
    generateToString: new BooleanOption(
      "to-string",
      "Generate toString() method",
      options.generateToString
    ),
    useDefaultValue: new BooleanOption(
      "use-default-value",
      "Use default value for properties",
      options.useDefaultValue
    ),
  };
};
