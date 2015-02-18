ace.define("ace/theme/bcw",["require","exports","module","ace/lib/dom"], function(require, exports, module) {

exports.isDark = true;
exports.cssClass = "ace-bcw";
exports.cssText = ".ace-bcw .ace_gutter {\
background: #2F3129;\
color: #8F908A\
}\
.ace-bcw .ace_print-margin {\
width: 1px;\
background: #555651\
}\
.ace-bcw {\
background-color: #272822;\
color: #F8F8F2\
}\
.ace-bcw .ace_cursor {\
color: #E9E915\
}\
.ace-bcw .ace_marker-layer .ace_selection {\
background: #49483E\
}\
.ace-bcw.ace_multiselect .ace_selection.ace_start {\
box-shadow: 0 0 3px 0px #272822;\
border-radius: 2px\
}\
.ace-bcw .ace_marker-layer .ace_step {\
background: rgb(102, 82, 0)\
}\
.ace-bcw .ace_marker-layer .ace_bracket {\
margin: -1px 0 0 -1px;\
border: 1px solid #49483E\
}\
.ace-bcw .ace_marker-layer .ace_active-line {\
background: #202020\
}\
.ace-bcw .ace_gutter-active-line {\
background-color: #272727\
}\
.ace-bcw .ace_marker-layer .ace_selected-word {\
border: 1px solid #49483E\
}\
.ace-bcw .ace_invisible {\
color: #52524d\
}\
.ace-bcw .ace_entity.ace_name.ace_tag,\
.ace-bcw .ace_keyword,\
.ace-bcw .ace_meta.ace_tag,\
.ace-bcw .ace_storage {\
color: #40F5E7\
}\
.ace-bcw .ace_punctuation,\
.ace-bcw .ace_punctuation.ace_tag {\
color: #fff\
}\
.ace-bcw .ace_constant.ace_character,\
.ace-bcw .ace_constant.ace_language,\
.ace-bcw .ace_constant.ace_numeric,\
.ace-bcw .ace_constant.ace_other {\
color: #AE81FF\
}\
.ace-bcw .ace_invalid {\
color: #F8F8F0;\
background-color: #F92672\
}\
.ace-bcw .ace_invalid.ace_deprecated {\
color: #F8F8F0;\
background-color: #AE81FF\
}\
.ace-bcw .ace_support.ace_constant,\
.ace-bcw .ace_support.ace_function {\
color: #8dc63f\
}\
.ace-bcw .ace_fold {\
background-color: #A6E22E;\
border-color: #F8F8F2\
}\
.ace-bcw .ace_storage.ace_type,\
.ace-bcw .ace_support.ace_class,\
.ace-bcw .ace_support.ace_type {\
font-style: italic;\
color: #46B6FF\
}\
.ace-bcw .ace_entity.ace_name.ace_function,\
.ace-bcw .ace_entity.ace_other,\
.ace-bcw .ace_entity.ace_other.ace_attribute-name,\
.ace-bcw .ace_variable {\
color: #8dc63f\
}\
.ace-bcw .ace_variable.ace_parameter {\
font-style: italic;\
color: #FD971F\
}\
.ace-bcw .ace_string {\
color: #DFA8A8\
}\
.ace-bcw .ace_comment {\
color: #C59C40\
}\
.ace-bcw .ace_indent-guide {\
background: #110D0E right repeat-y\
}";

var dom = require("../lib/dom");
dom.importCssString(exports.cssText, exports.cssClass);
});
