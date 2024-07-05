/**
 * This module was automatically generated by `ts-interface-builder`
 */
import * as t from "ts-interface-checker";
// tslint:disable:object-literal-key-quotes

export const ChartCardExternalConfig = t.iface([], {
  "type": t.lit('custom:apexcharts-card'),
  "config_templates": t.opt(t.union(t.array("string"), "string")),
  "color_list": t.opt(t.array("string")),
  "locale": t.opt("string"),
  "experimental": t.opt(t.iface([], {
    "color_threshold": t.opt("boolean"),
    "disable_config_validation": t.opt("boolean"),
    "hidden_by_default": t.opt("boolean"),
    "brush": t.opt("boolean"),
  })),
  "hours_12": t.opt("boolean"),
  "chart_type": t.opt("ChartCardChartType"),
  "update_interval": t.opt("string"),
  "update_delay": t.opt("string"),
  "all_series_config": t.opt("ChartCardAllSeriesExternalConfig"),
  "series": t.array("ChartCardSeriesExternalConfig"),
  "graph_span": t.opt("string"),
  "span": t.opt("ChartCardSpanExtConfig"),
  "now": t.opt(t.iface([], {
    "show": t.opt("boolean"),
    "color": t.opt("string"),
    "label": t.opt("string"),
  })),
  "show": t.opt(t.iface([], {
    "loading": t.opt("boolean"),
    "last_updated": t.opt("boolean"),
  })),
  "cache": t.opt("boolean"),
  "stacked": t.opt("boolean"),
  "layout": t.opt("string"),
  "apex_config": t.opt("any"),
  "header": t.opt("ChartCardHeaderExternalConfig"),
  "style": t.opt("any"),
  "card_mod": t.opt("any"),
  "view_layout": t.opt("any"),
  "index": t.opt("number"),
  "view_index": t.opt("number"),
  "brush": t.opt("ChartCardBrushExtConfig"),
  "yaxis": t.opt(t.array("ChartCardYAxisExternal")),
});

export const ChartCardChartType = t.union(t.lit('line'), t.lit('scatter'), t.lit('pie'), t.lit('donut'), t.lit('radialBar'));

export const ChartCardBrushExtConfig = t.iface([], {
  "selection_span": t.opt("string"),
  "apex_config": t.opt("any"),
});

export const ChartCardSpanExtConfig = t.iface([], {
  "start": t.opt("ChartCardStartEnd"),
  "end": t.opt("ChartCardStartEnd"),
  "offset": t.opt("string"),
});

export const ChartCardStartEnd = t.union(t.lit('minute'), t.lit('hour'), t.lit('day'), t.lit('week'), t.lit('month'), t.lit('year'), t.lit('isoWeek'));

export const StatisticsPeriod = t.union(t.lit('5minute'), t.lit('hour'), t.lit('day'), t.lit('week'), t.lit('month'));

export const ChartCardAllSeriesExternalConfig = t.iface([], {
  "entity": t.opt("string"),
  "attribute": t.opt("string"),
  "name": t.opt("string"),
  "type": t.opt(t.union(t.lit('line'), t.lit('column'), t.lit('area'))),
  "color": t.opt("string"),
  "opacity": t.opt("number"),
  "curve": t.opt(t.union(t.lit('smooth'), t.lit('straight'), t.lit('stepline'), t.lit('monotoneCubic'))),
  "stroke_width": t.opt("number"),
  "stroke_dash": t.opt("number"),
  "extend_to": t.opt(t.union(t.lit(false), t.lit('end'), t.lit('now'))),
  "unit": t.opt("string"),
  "invert": t.opt("boolean"),
  "data_generator": t.opt("string"),
  "statistics": t.opt(t.iface([], {
    "type": t.opt(t.union(t.lit('mean'), t.lit('max'), t.lit('min'), t.lit('sum'), t.lit('state'), t.lit('change'))),
    "period": t.opt("StatisticsPeriod"),
    "align": t.opt(t.union(t.lit('start'), t.lit('end'), t.lit('middle'))),
  })),
  "float_precision": t.opt("number"),
  "min": t.opt("number"),
  "max": t.opt("number"),
  "offset": t.opt("string"),
  "time_delta": t.opt("string"),
  "fill_raw": t.opt("GroupByFill"),
  "show": t.opt("ChartCardSeriesShowConfigExt"),
  "group_by": t.opt(t.iface([], {
    "duration": t.opt("string"),
    "func": t.opt("GroupByFunc"),
    "fill": t.opt("GroupByFill"),
    "start_with_last": t.opt("boolean"),
  })),
  "transform": t.opt("string"),
  "color_threshold": t.opt(t.array("ChartCardColorThreshold")),
  "yaxis_id": t.opt("string"),
  "header_actions": t.opt("ActionsConfig"),
});

export const ActionsConfig = t.iface([], {
  "tap_action": t.opt("ActionConfig"),
  "hold_action": t.opt("ActionConfig"),
  "double_tap_action": t.opt("ActionConfig"),
  "entity": t.opt("string"),
});

export const ChartCardSeriesShowConfigExt = t.iface([], {
  "as_duration": t.opt("ChartCardPrettyTime"),
  "legend_value": t.opt("boolean"),
  "in_header": t.opt(t.union("boolean", t.lit('raw'), t.lit('before_now'), t.lit('after_now'))),
  "name_in_header": t.opt("boolean"),
  "header_color_threshold": t.opt("boolean"),
  "in_chart": t.opt("boolean"),
  "datalabels": t.opt(t.union("boolean", t.lit('total'), t.lit('percent'))),
  "hidden_by_default": t.opt("boolean"),
  "extremas": t.opt(t.union("boolean", t.lit('time'), t.lit('min'), t.lit('max'), t.lit('min+time'), t.lit('max+time'))),
  "in_brush": t.opt("boolean"),
  "offset_in_name": t.opt("boolean"),
});

export const ChartCardSeriesExternalConfig = t.iface(["ChartCardAllSeriesExternalConfig"], {
  "entity": "string",
});

export const ChartCardPrettyTime = t.union(t.lit('millisecond'), t.lit('second'), t.lit('minute'), t.lit('hour'), t.lit('day'), t.lit('week'), t.lit('month'), t.lit('year'));

export const GroupByFill = t.union(t.lit('null'), t.lit('last'), t.lit('zero'));

export const GroupByFunc = t.union(t.lit('raw'), t.lit('avg'), t.lit('min'), t.lit('max'), t.lit('last'), t.lit('first'), t.lit('sum'), t.lit('median'), t.lit('delta'), t.lit('diff'));

export const ChartCardHeaderExternalConfig = t.iface([], {
  "show": t.opt("boolean"),
  "floating": t.opt("boolean"),
  "title": t.opt("string"),
  "show_states": t.opt("boolean"),
  "colorize_states": t.opt("boolean"),
  "standard_format": t.opt("boolean"),
  "disable_actions": t.opt("boolean"),
  "title_actions": t.opt("ActionsConfig"),
});

export const ChartCardColorThreshold = t.iface([], {
  "value": "number",
  "color": t.opt("string"),
  "opacity": t.opt("number"),
});

export const ChartCardYAxisExternal = t.iface([], {
  "id": t.opt("string"),
  "show": t.opt("boolean"),
  "opposite": t.opt("boolean"),
  "min": t.opt(t.union(t.lit('auto'), "number", "string")),
  "max": t.opt(t.union(t.lit('auto'), "number", "string")),
  "align_to": t.opt("number"),
  "decimals": t.opt("number"),
  "apex_config": t.opt("any"),
});

export const ToggleMenuActionConfig = t.iface(["BaseActionConfig"], {
  "action": t.lit('toggle-menu'),
  "haptic": t.opt("HapticType"),
});

export const ToggleActionConfig = t.iface(["BaseActionConfig"], {
  "action": t.lit('toggle'),
  "haptic": t.opt("HapticType"),
});

export const CallServiceActionConfig = t.iface(["BaseActionConfig"], {
  "action": t.lit('call-service'),
  "service": "string",
  "service_data": t.opt("any"),
  "haptic": t.opt("HapticType"),
});

export const NavigateActionConfig = t.iface(["BaseActionConfig"], {
  "action": t.lit('navigate'),
  "navigation_path": "string",
  "haptic": t.opt("HapticType"),
});

export const UrlActionConfig = t.iface(["BaseActionConfig"], {
  "action": t.lit('url'),
  "url_path": "string",
  "haptic": t.opt("HapticType"),
});

export const MoreInfoActionConfig = t.iface(["BaseActionConfig"], {
  "action": t.lit('more-info'),
  "entity": t.opt("string"),
  "haptic": t.opt("HapticType"),
});

export const NoActionConfig = t.iface(["BaseActionConfig"], {
  "action": t.lit('none'),
  "haptic": t.opt("HapticType"),
});

export const CustomActionConfig = t.iface(["BaseActionConfig"], {
  "action": t.lit('fire-dom-event'),
  "haptic": t.opt("HapticType"),
  "browser_mod": t.opt("any"),
});

export const BaseActionConfig = t.iface([], {
  "confirmation": t.opt("ConfirmationRestrictionConfig"),
});

export const ConfirmationRestrictionConfig = t.iface([], {
  "text": t.opt("string"),
  "exemptions": t.opt(t.array("RestrictionConfig")),
});

export const RestrictionConfig = t.iface([], {
  "user": "string",
});

export const HapticType = t.union(t.lit('success'), t.lit('warning'), t.lit('failure'), t.lit('light'), t.lit('medium'), t.lit('heavy'), t.lit('selection'));

export const ActionConfig = t.union("ToggleActionConfig", "CallServiceActionConfig", "NavigateActionConfig", "UrlActionConfig", "MoreInfoActionConfig", "NoActionConfig", "CustomActionConfig", "ToggleMenuActionConfig");

const exportedTypeSuite: t.ITypeSuite = {
  ChartCardExternalConfig,
  ChartCardChartType,
  ChartCardBrushExtConfig,
  ChartCardSpanExtConfig,
  ChartCardStartEnd,
  StatisticsPeriod,
  ChartCardAllSeriesExternalConfig,
  ActionsConfig,
  ChartCardSeriesShowConfigExt,
  ChartCardSeriesExternalConfig,
  ChartCardPrettyTime,
  GroupByFill,
  GroupByFunc,
  ChartCardHeaderExternalConfig,
  ChartCardColorThreshold,
  ChartCardYAxisExternal,
  ToggleMenuActionConfig,
  ToggleActionConfig,
  CallServiceActionConfig,
  NavigateActionConfig,
  UrlActionConfig,
  MoreInfoActionConfig,
  NoActionConfig,
  CustomActionConfig,
  BaseActionConfig,
  ConfirmationRestrictionConfig,
  RestrictionConfig,
  HapticType,
  ActionConfig,
};
export default exportedTypeSuite;
